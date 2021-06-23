import getIcon from "src/utils/icon-factory";

export default [
  { title: "Home", url: "/", icon: getIcon("home") },
  {
    title: "Favourites",
    url: "/favourites",
    icon: getIcon("filled-heart"),
  },
];
