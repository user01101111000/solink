import useAuthRegister from "../../../hooks/api/useAuthRegister";
import IRegister from "../../../interfaces/components/IRegister";
import { IRegisterValues } from "../../../interfaces/services/auth/register";
import { pageVariantsZoom } from "../../../utils/framer_motion/motion_variables";
import AuthBox from "../AuthBox";
import { motion } from "framer-motion";

const Register = (props: IRegister) => {
  const { mutateAsync: register } = useAuthRegister();

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
        fn={async (values: IRegisterValues) => {
          await register(values);
        }}
        setShowRegister={props.setShowRegister}
      />
    </motion.article>
  );
};

export default Register;
