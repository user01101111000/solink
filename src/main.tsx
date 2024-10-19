import "./scss/base/_reset.scss";
import "./scss/index.scss";
import { router, RouterProvider } from "./routes/routes";
import { AnimatePresence } from "framer-motion";

import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <AnimatePresence>
    <RouterProvider router={router} />
  </AnimatePresence>
);
