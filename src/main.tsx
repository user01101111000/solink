import "./scss/base/_reset.scss";
import "./scss/index.scss";
import { createRoot } from "react-dom/client";
import { router, RouterProvider } from "./routes/routes";
import { AnimatePresence } from "framer-motion";
import AllProviders from "./utils/providers/providers";

createRoot(document.getElementById("root")!).render(
  <AllProviders>
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  </AllProviders>
);
