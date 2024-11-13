import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-TW",
  title: "FFOWOFF",
  description: "FFOWOFF的個人網站",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
