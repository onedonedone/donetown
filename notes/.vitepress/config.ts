import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";

const sorting = [
    {
        items: [
            { link: "/code", text: "Code" },
            { link: "/math", text: "Math" },
        ],
        text: "Sorting",
    },
];

export default defineConfig({
    description: "done wiki.",
    head: [["link", { href: "/icon/dt.ico", rel: "icon" }]],
    markdown: { config: (md) => void md.use(katex) },
    srcExclude: ["public/**"],
    themeConfig: {
        logo: "/icon/dt.png",
        notFound: {
            code: "404",
            link: "/",
            linkLabel: "Home",
            linkText: "Home",
            quote: "Living is keeping the absurd alive.",
            title: "NOTHINGNESS",
        },
        sidebar: { "/code.md": sorting, "/math.md": sorting },
        socialLinks: [{ icon: "github", link: "https://github.com/onedonedone/donetown" }],
    },
    title: "donetown",
});
