import useForm from "../hooks/useForm";
import useStyles from "../styles/form-style";

function Form() {
  const {
    formCtn,
    form,
    label,
    input,
    textArea,
    formBtn,
    errorStyle,
    headingCtn,
    heading,
  } = useStyles();
  const { handleSubmit, handleChange, data, errors } = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validations: {
      name: {
        pattern: {
          value: "/^[a-zA-Z]+ [a-zA-Z]+$/",
          message:
            "You are not allowed to use special characters or numbers in your name.",
        },
      },
      email: {
        custom: {
          isEmailValid: (email) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email),
          message: "You need to enter a valid email address",
        },
      },
    },
  });
  return (
    <>
      <div className={headingCtn}>
        <h3 className={heading}>Contact Me</h3>
      </div>
      <div className={formCtn}>
        <form className={form} id="contactForm" onSubmit={handleSubmit}>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input
            className={input}
            type="text"
            id="name"
            name="name"
            placeholder="Jane Austen"
            value={data.name || ""}
            onChange={handleChange("name")}
            required
          />
          {errors.name && <p className={errorStyle}>{errors.name}</p>}
          <label className={label} htmlFor="email">
            Email Address
          </label>
          <input
            className={input}
            type="text"
            id="email"
            name="email"
            placeholder="email@example.com"
            value={data.email || ""}
            onChange={handleChange("email")}
            required
          />
          {errors.email && <p className={errorStyle}>{errors.email}</p>}
          <label className={label} htmlFor="message">
            Message
          </label>
          <textarea
            className={textArea}
            rows="7"
            placeholder="How can I help you?"
            required
            onChange={handleChange("message")}
            value={data.message || ""}
          />
          <button className={formBtn} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
