import { defineConfig } from "vitepress";

export default defineConfig({
    description: "done notebook.",
    head: [["link", { href: "/icon/dt.ico", rel: "icon" }]],
    lang: "zh-SG",
    srcExclude: ["public/**"],
    themeConfig: { logo: "/icon/dt.png" },
    title: "donetown",
});
