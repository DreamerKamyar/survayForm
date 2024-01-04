import styles from "./SurvayForm.module.css";
import FormInput from "../components/FormInput";
import LinkButton from "../components/LinkButton";
import { formInputData } from "../constant/formInputData";
const SurvayForm = () => {
  return (
    <section className={styles.main__container}>
      {formInputData.map((forminput) => {
        return (
          <FormInput
            key={forminput.id}
            question={forminput.qustion}
            options={forminput.opttions}
            id={forminput.id}
          ></FormInput>
        );
      })}
      <LinkButton
        link={"/"}
        label={"برگشت"}
        style={{
          fontSize: "1.1rem",
          padding: "0.5rem 2rem",
          position: "fixed",
          top: "4%",
          left: "min(6% , 50px)",
        }}
      ></LinkButton>
    </section>
  );
};

export default SurvayForm;
