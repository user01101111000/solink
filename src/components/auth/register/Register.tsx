import IRegister from "../../../interfaces/components/IRegister";
import { pageVariantsZoom } from "../../../utils/motion_variables";
import AuthBox from "../AuthBox";
import { motion } from "framer-motion";

const Register = (props: IRegister) => {
  return (
    <motion.article
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsZoom}
      transition={{ duration: 1, type: "spring" }}
      className="register"
    >
      <AuthBox
        label="Register"
        fn={async (values) => {
          setTimeout(() => {
            console.log(values);
          }, 2000);
        }}
        setShowRegister={props.setShowRegister}
      />
    </motion.article>
  );
};

export default Register;
