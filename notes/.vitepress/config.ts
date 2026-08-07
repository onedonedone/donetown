import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";

export default defineConfig({
    description: "notebook scaffold.",
    markdown: { config: (md) => void md.use(katex) },
    title: "donetown",
});
