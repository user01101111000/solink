import NormalButton from "../../components/ui/Button/NormalButton";
import { motion } from "framer-motion";
import { pageVariantsZoom } from "../../utils/framer_motion/motion_variables";
import { useNavigate } from "react-router-dom";

const MainContainer = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsZoom}
      transition={{ duration: 1, type: "spring" }}
      className="main"
    >
      <h1>It is now easy to reach you.</h1>
      <p>
        If you want direct access from the environment you are in, this can be
        social media or other platforms. Now there is an easy way to do this.
        Bring these paths together with <span>Solink</span>, of course a nice
        interface is a must.
      </p>

      <NormalButton
        label="Get started"
        fn={() => {
          navigate("/auth");
        }}
      />
    </motion.section>
  );
};

export default MainContainer;
