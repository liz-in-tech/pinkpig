import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/pinkpig/",
  head: [
    ['link', {rel: 'icon', herf: '/blogger.png'}]
  ],
  title: "Liz",
  description: "Follow your heart",
  theme,
});
