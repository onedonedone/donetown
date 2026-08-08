import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";

export default defineConfig({
    description: "done wiki.",
    markdown: { config: (md) => void md.use(katex) },
    title: "donetown",
});
