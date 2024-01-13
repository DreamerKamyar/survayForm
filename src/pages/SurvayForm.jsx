import styles from "./SurvayForm.module.css";
import FormInput from "../components/FormInput";

import { formInputData } from "../constant/formInputData";
import { motion } from "framer-motion";
import slideVariants from "../constant/slideVarient";
const SurvayForm = () => {
  return (
    <motion.section
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.5,
      }}
    >
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
      <div className={styles.modal__container}></div>
    </motion.section>
  );
};

export default SurvayForm;
