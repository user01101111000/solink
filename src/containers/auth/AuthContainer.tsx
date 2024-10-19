import { motion } from "framer-motion";
import { pageVariantsZoom } from "../../utils/motion_variables";
import { useState } from "react";
import Register from "../../components/auth/register/Register";
import Login from "../../components/auth/login/Login";

const AuthContainer = () => {
  const [showRegister, setShowRegister] = useState<boolean>(false);

  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsZoom}
      transition={{ duration: 1, type: "spring" }}
    >
      {showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <Login setShowRegister={setShowRegister} />
      )}
    </motion.section>
  );
};

export default AuthContainer;
