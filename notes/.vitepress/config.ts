import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";

export default defineConfig({
    description: "done wiki.",
    head: [["link", { href: "/icon/dt.ico", rel: "icon" }]],
    markdown: { config: (md) => void md.use(katex) },
    srcExclude: ["public/**"],
    themeConfig: { logo: "/icon/dt.png" },
    title: "donetown",
});
