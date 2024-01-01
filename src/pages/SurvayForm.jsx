import styles from "./SurvayForm.module.css";
import FormInput from "../components/FormInput";
const SurvayForm = () => {
  return (
    <section className={styles.main__container}>
      <FormInput></FormInput>
    </section>
  );
};

export default SurvayForm;
