import { useState } from "react";
// import useFetch from "./useFetch";

function useForm(options) {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});
  const [resStatus, setResStatus] = useState("");

  const handleChange = (key) => (e) => {
    //curried function
    const value = e.target.value;
    setData({ ...data, [key]: value });
  };

  const fetchRoute = async (data) =>
    await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    }).then(async (res) => {
      setData(options?.initialValues);
      return await setResStatus(res.status);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];

        //PATTERN
        const pattern = validation?.pattern;
        if (pattern?.value && RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        //COSTUM
        const custom = validation?.custom;
        if (custom?.isEmailValid && !custom.isEmailValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }

        if (!valid) {
          setErrors(newErrors);
          return;
        }
      }
      setErrors({});
    }
    fetchRoute(data);
  };

  return {
    data,
    setData,
    resStatus,
    handleChange,
    handleSubmit,
    errors,
  };
}

export default useForm;
