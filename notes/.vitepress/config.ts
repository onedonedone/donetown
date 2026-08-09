import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";

const base = process.env.GITHUB_ACTIONS ? "/donetown/" : "/";

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
    base,
    description: "notebook scaffold.",
    head: [["link", { href: `${base}icon/dt.ico`, rel: "icon" }]],
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
