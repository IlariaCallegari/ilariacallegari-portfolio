import { useInView } from "react-intersection-observer";
import useForm from "../hooks/useForm";
import useStyles from "../styles/contactForm-style";

function ContactForm() {
  const [ref, inView] = useInView();
  const {
    contactFormCtn,
    headingCtn,
    heading,
    formCtn,
    form,
    label,
    input,
    textArea,
    formBtn,
  } = useStyles(inView);
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
    onSubmit: () => alert("User submitted!"),
  });
  return (
    <div className={contactFormCtn} ref={ref}>
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
          {errors.name && <p>{errors.name}</p>}
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
          {errors.email && <p>{errors.email}</p>}
          <label className={label} htmlFor="message">
            Message
          </label>
          <textarea
            className={textArea}
            rows="7"
            placeholder="How can I help you?"
            required
            onChange={handleChange("message")}
          />
          <button className={formBtn} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
