import useAuthLogin from "../../../hooks/api/useAuthLogin";
import ILogin from "../../../interfaces/components/ILogin";
import { ILoginValues } from "../../../interfaces/services/auth/login";
import { pageVariantsZoom } from "../../../utils/framer_motion/motion_variables";
import AuthBox from "../AuthBox";
import { motion } from "framer-motion";

const Login = (props: ILogin) => {
  const { mutateAsync: login } = useAuthLogin();

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
        fn={async (values: ILoginValues) => {
          await login(values);
        }}
        setShowRegister={props.setShowRegister}
        isRegister={false}
      />
    </motion.article>
  );
};

export default Login;
