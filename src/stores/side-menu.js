import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "dashboard-view",
        title: "Dashboard",
      },
      {
        icon: "HomeIcon",
        pageName: "side-menu-page-2",
        title: "Page 2",
      },
    ],
  }),
});
