import { Variants } from "framer-motion";

const pageVariantsXM100: Variants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 },
};

const pageVariantsXP100: Variants = {
  initial: { opacity: 0, x: 100 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, x: -100 },
};

const pageVariantsOP: Variants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageVariantsZoom: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.9 },
};

export {
  pageVariantsXM100,
  pageVariantsXP100,
  pageVariantsOP,
  pageVariantsZoom,
};
