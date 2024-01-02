import styles from "./SurvayForm.module.css";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
const SurvayForm = () => {
  return (
    <section className={styles.main__container}>
      <FormInput></FormInput>
      <Button
        link={"/"}
        label={"go back"}
        style={{
          fontSize: "1.1rem",
          padding: "0.5rem 2rem",
          position: "fixed",
          top: "4%",
          left: "min(6% , 50px)",
        }}
      ></Button>
    </section>
  );
};

export default SurvayForm;
