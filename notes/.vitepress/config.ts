import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";

const sidebar = [
    {
        items: [
            { link: "/code", text: "Code" },
            { link: "/math", text: "Math" },
        ],
        text: "Showcases",
    },
];

export default defineConfig({
    description: "notebook scaffold.",
    head: [["link", { href: "/icon/dt.ico", rel: "icon" }]],
    markdown: { config: (md) => void md.use(katex) },
    srcExclude: ["public/**"],
    themeConfig: {
        logo: "/icon/dt.png",
        notFound: {
            linkLabel: "Home",
            linkText: "Home",
            quote: "Living is keeping the absurd alive.",
            title: "NOTHINGNESS",
        },
        sidebar: { "/": sidebar },
        socialLinks: [{ icon: "github", link: "https://github.com/onedonedone/donetown" }],
    },
    title: "donetown",
});
