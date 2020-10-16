import App from "@/pages/App";
import Hooks from "@/pages/Hooks";
import CornerLabel from "@/pages/CornerLabel";
import Markdown from "@/pages/Markdown";
import "easymde/dist/easymde.min.css";
const menu: { path: string; component?: any; name: string }[] = [
  {
    path: "/",
    component: App,
    name: "Home",
  },
  {
    path: "/hooks",
    component: Hooks,
    name: "Hooks",
  },
  {
    path: "/markdown",
    component: Markdown,
    name: "Markdown编辑器",
  },
  {
    path: "/cornerLabel",
    component: CornerLabel,
    name: "角标签",
  },
];

export default menu;
