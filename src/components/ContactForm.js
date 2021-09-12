import useForm from "../hooks/useForm";
import { useInView } from "react-intersection-observer";
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
      {resStatus === 200 && <SuccessMessage />}
      {resStatus !== 200 && "" && <FailMessage />}
    </div>
  );
}

export default ContactForm;
