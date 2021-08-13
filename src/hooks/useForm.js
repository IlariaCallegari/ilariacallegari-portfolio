import { useState } from "react";

function useForm(options) {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (key, sanitizeFn) => (e) => {
    //curried function
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({ ...data, [key]: value });
  };

  const handleSubmit = async (e) => {
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

    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setData({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
}

export default useForm;
