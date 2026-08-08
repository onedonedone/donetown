<sub>**English** · [简体中文](README.md)</sub>

# Visual Design of the Icon

The lettering in the icon is derived from the $`\TeX`$ mathematical expression $`\mathrm{d}t`$, whose two letters are the initials of the two parts of the project name, donetown. The glyphs are rendered by MathJax 4.1.3 using the New Computer Modern font.

The icon appears at different sizes in different parts of a webpage, such as in a browser tab or the navigation bar. Glyphs at different sizes require different designs, a well-established principle in typography. Smaller glyphs often need proportionally thicker strokes, meaning a greater ratio of stroke width to glyph box dimensions, to achieve a visual appearance similar to that of larger glyphs[^1].

This note documents in detail the modifications made to adapt the icon to different sizes.

In the vector graphics files, the two-dimensional coordinate system used to draw the image is a $`1500 \times 1500`$ square. Regardless of whether the final image is scaled or stretched, or at what size it is displayed, all coordinates and lengths referenced in the design are defined within this coordinate system.

## Morphological Dilation and Spacing Adjustments

Given a region $`D`$ in the plane and a positive real number $`r`$, the **morphological dilation** of $`D`$ by radius $`r`$ is the new region defined as follows:

```math
D^{(r)} = \{ \, \boldsymbol{p} : \exists \, \boldsymbol{q} \in D, \, \lVert \boldsymbol{p} - \boldsymbol{q} \rVert \leqslant r \, \}.
```

Intuitively, this process can be understood as rolling a circle of radius $`r`$ along the boundary of $`D`$. The union of all areas swept out by the circle and the original region $`D`$ is the dilated region.

Morphological dilation increases the area of the glyph strokes while reducing the surrounding negative space, which in turn narrows the gap between adjacent glyphs. To preserve visual legibility, smaller icons require proportionally wider spacing between glyphs. The additional spacing applied to smaller glyphs is denoted by $`\Delta{t}`$.

The dilation radius $`r`$ and additional spacing $`\Delta{t}`$ are set as follows:

- The full-size image `dt-full.svg` uses $`r = 25`$ and $`\Delta{t} = 10`$, with `dt.svg` as its symbolic link.
- The navigation-bar icon `dt-24px.svg` uses $`r = 35`$ and $`\Delta{t} = 35`$, and is rasterized as `dt.png`.
- The browser-tab icon `dt-16px.svg` uses $`r = 45`$ and $`\Delta{t} = 75`$, and is rasterized as `dt.ico`.

## Convex Hull and Optical Center

The mathematical expression $`\mathrm{d}t`$ rendered by MathJax is placed in a $`917 \times 705`$ glyph box. Aligning the center of this box with the center of the $`1500 \times 1500`$ canvas is the simplest and most direct way to center the glyphs. However, the center of the glyph box does not always coincide with the optical center perceived by the human eye.

To obtain a center that more closely matches visual perception, the icon uses the area centroid of the glyphs' **convex hull** as its optical center. The convex hull is the smallest convex polygon containing all points on the glyph outlines. Its area centroid is the center of mass obtained by treating the convex hull as a planar region of uniform density. Compared with the center of the rectangular glyph box, the area centroid of the convex hull reduces the influence of narrow, elongated structures and better reflects the actual distribution of the glyph strokes.

To calculate the centroid, points are first sampled along the outline paths of both glyphs. The convex hull is then computed using Andrew's monotone chain algorithm, followed by the area centroid using the polygon centroid formula. In each icon file, the glyphs are positioned on the $`1500 \times 1500`$ canvas so that the area centroid of their convex hull is centered.

The resulting area centroids for the glyphs at different sizes are as follows:

- The area centroid of the full-size image `dt-full.svg` is $`(484.8, \, -313.6)`$.
- The area centroid of the navigation-bar icon `dt-24px.svg` is $`(497.1, \, -313.9)`$.
- The area centroid of the browser-tab icon `dt-16px.svg` is $`(516.9, \, -314.5)`$.

## Reference Color and Icon Background Color

The icon uses the CSS color `royalblue` as its reference color. In the OKLCH color space, this color has a hue of $`266.4^\circ`$ and a chroma of $`0.188`$.

The icon's own background color must remain sufficiently distinguishable against both the light-theme and dark-theme backgrounds. The design objective is therefore to find a color that has equal contrast against the dark-theme background `#1b1b1f` and the light-theme background `#ffffff`.

According to the _Web Content Accessibility Guidelines_[^2], the luminance $`l`$ of a color is first calculated as a weighted sum of its linear color values:

```math
l = 0.2126 \cdot r^* + 0.7152 \cdot g^* + 0.0722 \cdot b^*.
```

Here, the linear color value for each channel is calculated from its normalized value $`v`$ using the following transfer function:

```math
v^* = \left\{
    \begin{aligned}
        & \dfrac{v}{12.92} \,, & v \leqslant 0.04045 \,, \\
        & \left( \dfrac{v + 0.055}{1.055} \right)^{2.4}, & v > 0.04045 \,,
    \end{aligned}
\right. \qquad v \in \left\{ \dfrac{r}{255}, \dfrac{g}{255}, \dfrac{b}{255} \right\}.
```

For two colors with luminances $`l_1`$ and $`l_2`$, their contrast ratio is

```math
\mathrm{Contrast}(l_1, l_2) = \dfrac{\max(l_1, l_2) + 0.05}{\min(l_1, l_2) + 0.05} \, .
```

Let the target luminance be $`l_*`$. The light background `#ffffff` has a luminance of $`1`$, while the dark background `#1b1b1f` has a luminance of $`0.0112`$. Setting the contrast ratios between the target color and the two backgrounds equal gives

```math
\dfrac{1 + 0.05}{l_* + 0.05} = \dfrac{l_* + 0.05}{0.0112 + 0.05} \,,
```

which yields $`l_* = 0.203`$. At this luminance, the color has a contrast ratio of approximately $`4.14:1`$ against both the light and dark backgrounds.

In the OKLCH color space, the chroma and hue of the reference color are held constant, and a binary search is used to find the lightness that produces a luminance equal to $`l_*`$. This gives the icon background color `#4b75ee`. Because of quantization error, the actual contrast ratio of this color is $`4.135:1`$ against the light background `#ffffff` and $`4.152:1`$ against the dark background `#1b1b1f`.

Both the fill and stroke colors of the glyphs are pure white, `#ffffff`.

[^1]: Knuth, D. E. (1984). _The TeXbook_. Addison-Wesley.

[^2]: World Wide Web Consortium. (2024, December 12). _Web Content Accessibility Guidelines (WCAG) 2.2_. https://www.w3.org/TR/2024/REC-WCAG22-20241212/
