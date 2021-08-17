import { useInView } from "react-intersection-observer";
import useForm from "../hooks/useForm";
import useStyles from "../styles/contactForm-style";
import Form from "./Form";
import SuccessMessage from "./SuccessMessage";
import FailMessage from "./FailMessage";

function ContactForm() {
  const [ref, inView] = useInView();
  const { contactFormCtn } = useStyles(inView);
  const { resStatus } = useForm();
  return (
    <div className={contactFormCtn} ref={ref}>
      {resStatus === "" && <Form />}
      {resStatus === "success" && <SuccessMessage />}
      {resStatus === "fail" && <FailMessage />}
    </div>
  );
}

export default ContactForm;
