import type { Theme } from "vitepress";

import DefaultTheme from "vitepress/theme-without-fonts";

import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/jetbrains-mono/wght-italic.css";
import "@fontsource-variable/noto-sans-sc";

import "./styles/brand/brand.css";
import "./styles/fonts/fonts.css";
import "./styles/palette/palette.css";

const theme: Theme = { extends: DefaultTheme };

export default theme;
