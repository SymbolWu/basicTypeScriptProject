import App from "@/pages/App";
import Hooks from "@/pages/Hooks";
const menu: { path: string; component?: any; name: string }[] = [
  {
    path: "/",
    component: App,
    name:'Home'

  },
  {
    path: "/hooks",
    component: Hooks,
    name:'Hooks'
  },
];

export default menu;
