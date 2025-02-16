import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://liz-in-tech.github.io",
  favicon: "/blogger.png",
  author: {
    name: "Liz",
    url: "https://github.com/liz-in-tech",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/blogger.png",

  repo: "https://github.com/liz-in-tech",

  docsDir: "src",

  blog: {
    description: "",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/liz-in-tech",
    },
  }, 
  displayFooter: false,
  editLink: false,
  lastUpdated: false,
  contributors: false,
  navbar,
  sidebar,
  plugins: {
    blog: true,
    search: true,
    copyCode: {},
    components: {
      components: ["Badge", "VPCard", "PDF"],
    },
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      katex: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});
