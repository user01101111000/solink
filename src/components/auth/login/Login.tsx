import ILogin from "../../../interfaces/components/ILogin";
import { pageVariantsZoom } from "../../../utils/motion_variables";
import AuthBox from "../AuthBox";
import { motion } from "framer-motion";

const Login = (props: ILogin) => {
  return (
    <motion.article
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsZoom}
      transition={{ duration: 1, type: "spring" }}
      className="login"
    >
      <AuthBox
        label="Login"
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

export default Login;
