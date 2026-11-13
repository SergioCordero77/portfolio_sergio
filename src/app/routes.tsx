import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "skills", Component: Skills },
      { path: "experience", Component: Experience },
      { path: "contact", Component: Contact },
    ],
  },
]);
