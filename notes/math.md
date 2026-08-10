# Math Examples

## Bubble Sort

$$
\begin{align*}
    & \rule{250px}{1px}
    \\[-0.25em]
    & \textbf{Bubble Sort Algorithm}
    \\[-0.75em]
    & \rule{250px}{1px}
    \\[-0.25em]
    & \mathbf{Input} \ a_1, a_2, \cdots, a_n
    \\
    & \mathbf{for} \ i \coloneqq 1 \textrm{ to } n - 1
    \\
    & \qquad \mathbf{for} \ j \coloneqq 1 \textrm{ to } n - i
    \\
    & \qquad\qquad \mathbf{if} \ a_j > a_{j+1} \textrm{ then}
    \\
    & \qquad\qquad\qquad \textrm{swap } a_j \textrm{ and } a_{j+1}
    \\
    & \qquad\qquad \mathbf{end\ if}
    \\
    & \qquad \mathbf{end\ for}
    \\
    & \mathbf{end\ for}
    \\[-0.75em]
    & \rule{250px}{1px}
\end{align*}
$$

## Heap Sort

$$
\begin{align*}
    & \rule{250px}{1px}
    \\[-0.25em]
    & \textbf{Heap Sort Algorithm}
    \\[-0.75em]
    & \rule{250px}{1px}
    \\[-0.25em]
    & \mathbf{Input} \ a_1, a_2, \cdots, a_n
    \\
    & \mathbf{for} \ i \coloneqq \lfloor n / 2 \rfloor \textrm{ down to } 1
    \\
    & \qquad \mathrm{Sift}(i, n)
    \\
    & \mathbf{end\ for}
    \\
    & \mathbf{for} \ m \coloneqq n \textrm{ down to } 2
    \\
    & \qquad \textrm{swap } a_1 \textrm{ and } a_m
    \\
    & \qquad \mathrm{Sift}(1, m - 1)
    \\
    & \mathbf{end\ for}
    \\
    &
    \\
    & \mathbf{function} \ \mathrm{Sift}(i, m)
    \\
    & \qquad \mathbf{while} \ 2i \leqslant m
    \\
    & \qquad\qquad c \coloneqq 2i
    \\
    & \qquad\qquad \mathbf{if} \ c < m \textrm{ and } a_{c+1} > a_c \textrm{ then}
    \\
    & \qquad\qquad\qquad c \coloneqq c + 1
    \\
    & \qquad\qquad \mathbf{end\ if}
    \\
    & \qquad\qquad \mathbf{if} \ a_i \geqslant a_c \textrm{ then}
    \\
    & \qquad\qquad\qquad \mathbf{return}
    \\
    & \qquad\qquad \mathbf{end\ if}
    \\
    & \qquad\qquad \textrm{swap } a_i \textrm{ and } a_c
    \\
    & \qquad\qquad i \coloneqq c
    \\
    & \qquad \mathbf{end\ while}
    \\
    & \mathbf{end\ function}
    \\[-0.75em]
    & \rule{250px}{1px}
\end{align*}
$$

## Merge Sort

$$
\begin{align*}
    & \rule{250px}{1px}
    \\[-0.25em]
    & \textbf{Merge Sort Algorithm}
    \\[-0.75em]
    & \rule{250px}{1px}
    \\[-0.25em]
    & \mathbf{Input} \ a_1, a_2, \cdots, a_n
    \\
    & \mathrm{MergeSort}(1, n)
    \\
    &
    \\
    & \mathbf{function} \ \mathrm{MergeSort}(l, r)
    \\
    & \qquad \mathbf{if} \ l < r \textrm{ then}
    \\
    & \qquad\qquad m \coloneqq \lfloor (l + r) / 2 \rfloor
    \\
    & \qquad\qquad \mathrm{MergeSort}(l, m)
    \\
    & \qquad\qquad \mathrm{MergeSort}(m + 1, r)
    \\
    & \qquad\qquad \mathrm{Merge}(l, m, r)
    \\
    & \qquad \mathbf{end\ if}
    \\
    & \mathbf{end\ function}
    \\
    &
    \\
    & \mathbf{function} \ \mathrm{Merge}(l, m, r)
    \\
    & \qquad b \coloneqq \varnothing, \ i \coloneqq l, \ j \coloneqq m + 1
    \\
    & \qquad \mathbf{while} \ i \leqslant m \textrm{ and } j \leqslant r
    \\
    & \qquad\qquad \mathbf{if} \ a_i \leqslant a_j \textrm{ then}
    \\
    & \qquad\qquad\qquad \textrm{append } a_i \textrm{ to } b, \ i \coloneqq i + 1
    \\
    & \qquad\qquad \mathbf{else}
    \\
    & \qquad\qquad\qquad \textrm{append } a_j \textrm{ to } b, \ j \coloneqq j + 1
    \\
    & \qquad\qquad \mathbf{end\ if}
    \\
    & \qquad \mathbf{end\ while}
    \\
    & \qquad \textrm{append } a_i, \cdots, a_m \textrm{ and then } a_j, \cdots, a_r \textrm{ to } b
    \\
    & \qquad a_l, \cdots, a_r \coloneqq b_1, \cdots, b_{r-l+1}
    \\
    & \mathbf{end\ function}
    \\[-0.75em]
    & \rule{250px}{1px}
\end{align*}
$$

## Quick Sort

$$
\begin{align*}
    & \rule{250px}{1px}
    \\[-0.25em]
    & \textbf{Quick Sort Algorithm}
    \\[-0.75em]
    & \rule{250px}{1px}
    \\[-0.25em]
    & \mathbf{Input} \ a_1, a_2, \cdots, a_n
    \\
    & \mathrm{QuickSort}(1, n)
    \\
    &
    \\
    & \mathbf{function} \ \mathrm{QuickSort}(l, r)
    \\
    & \qquad \mathbf{if} \ l < r \textrm{ then}
    \\
    & \qquad\qquad p \coloneqq \mathrm{Partition}(l, r)
    \\
    & \qquad\qquad \mathrm{QuickSort}(l, p - 1)
    \\
    & \qquad\qquad \mathrm{QuickSort}(p + 1, r)
    \\
    & \qquad \mathbf{end\ if}
    \\
    & \mathbf{end\ function}
    \\
    &
    \\
    & \mathbf{function} \ \mathrm{Partition}(l, r)
    \\
    & \qquad x \coloneqq a_r, \ i \coloneqq l
    \\
    & \qquad \mathbf{for} \ j \coloneqq l \textrm{ to } r - 1
    \\
    & \qquad\qquad \mathbf{if} \ a_j < x \textrm{ then}
    \\
    & \qquad\qquad\qquad \textrm{swap } a_i \textrm{ and } a_j, \ i \coloneqq i + 1
    \\
    & \qquad\qquad \mathbf{end\ if}
    \\
    & \qquad \mathbf{end\ for}
    \\
    & \qquad \textrm{swap } a_i \textrm{ and } a_r
    \\
    & \qquad \mathbf{return} \ i
    \\
    & \mathbf{end\ function}
    \\[-0.75em]
    & \rule{250px}{1px}
\end{align*}
$$

## Selection Sort

$$
\begin{align*}
    & \rule{250px}{1px}
    \\[-0.25em]
    & \textbf{Selection Sort Algorithm}
    \\[-0.75em]
    & \rule{250px}{1px}
    \\[-0.25em]
    & \mathbf{Input} \ a_1, a_2, \cdots, a_n
    \\
    & \mathbf{for} \ i \coloneqq 1 \textrm{ to } n - 1
    \\
    & \qquad k \coloneqq i
    \\
    & \qquad \mathbf{for} \ j \coloneqq i + 1 \textrm{ to } n
    \\
    & \qquad\qquad \mathbf{if} \ a_j < a_k \textrm{ then}
    \\
    & \qquad\qquad\qquad k \coloneqq j
    \\
    & \qquad\qquad \mathbf{end\ if}
    \\
    & \qquad \mathbf{end\ for}
    \\
    & \qquad \textrm{swap } a_i \textrm{ and } a_k
    \\
    & \mathbf{end\ for}
    \\[-0.75em]
    & \rule{250px}{1px}
\end{align*}
$$

## Shell Sort

$$
\begin{align*}
    & \rule{250px}{1px}
    \\[-0.25em]
    & \textbf{Shell Sort Algorithm}
    \\[-0.75em]
    & \rule{250px}{1px}
    \\[-0.25em]
    & \mathbf{Input} \ a_1, a_2, \cdots, a_n
    \\
    & h \coloneqq \lfloor n / 2 \rfloor
    \\
    & \mathbf{while} \ h \geqslant 1
    \\
    & \qquad \mathbf{for} \ i \coloneqq h + 1 \textrm{ to } n
    \\
    & \qquad\qquad x \coloneqq a_i, \ j \coloneqq i
    \\
    & \qquad\qquad \mathbf{while} \ j > h \textrm{ and } a_{j-h} > x
    \\
    & \qquad\qquad\qquad a_j \coloneqq a_{j-h}, \ j \coloneqq j - h
    \\
    & \qquad\qquad \mathbf{end\ while}
    \\
    & \qquad\qquad a_j \coloneqq x
    \\
    & \qquad \mathbf{end\ for}
    \\
    & \qquad h \coloneqq \lfloor h / 2 \rfloor
    \\
    & \mathbf{end\ while}
    \\[-0.75em]
    & \rule{250px}{1px}
\end{align*}
$$
