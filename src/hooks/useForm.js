import { useState } from "react";
import emailjs from "emailjs-com";
require("dotenv").config();

function useForm(options) {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});
  const [resStatus, setResStatus] = useState(null);

  const handleChange = (key) => (e) => {
    //curried function
    const value = e.target.value;
    setData({ ...data, [key]: value });
  };

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
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (res) => {
          setData(options?.initialValues);
          setResStatus(res.status);
        },
        (err) => {
          console.log(err.text);
        }
      );
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
