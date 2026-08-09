# Code Examples

## Bubble Sort

::: code-group

```python [Python]
def bubble_sort(array: list[int]) -> list[int]:
    a = array.copy()
    n = len(a)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
    return a
```

```ts [TypeScript]
function bubbleSort(array: number[]): number[] {
    const a = [...array];
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    return a;
}
```

:::

## Heap Sort

::: code-group

```python [Python]
def heap_sort(array: list[int]) -> list[int]:
    a = array.copy()
    n = len(a)

    def sift(i: int, m: int) -> None:
        while 2 * i + 1 < m:
            c = 2 * i + 1
            if c + 1 < m and a[c + 1] > a[c]:
                c += 1
            if a[i] >= a[c]:
                return
            a[i], a[c] = a[c], a[i]
            i = c

    for i in range(n // 2 - 1, -1, -1):
        sift(i, n)
    for m in range(n - 1, 0, -1):
        a[0], a[m] = a[m], a[0]
        sift(0, m)
    return a
```

```ts [TypeScript]
function heapSort(array: number[]): number[] {
    const a = [...array];
    const n = a.length;

    function sift(i: number, m: number): void {
        while (2 * i + 1 < m) {
            let c = 2 * i + 1;
            if (c + 1 < m && a[c + 1] > a[c]) {
                c++;
            }
            if (a[i] >= a[c]) {
                return;
            }
            [a[i], a[c]] = [a[c], a[i]];
            i = c;
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        sift(i, n);
    }
    for (let m = n - 1; m > 0; m--) {
        [a[0], a[m]] = [a[m], a[0]];
        sift(0, m);
    }
    return a;
}
```

:::

## Merge Sort

::: code-group

```python [Python]
def merge_sort(array: list[int]) -> list[int]:
    a = array.copy()

    def merge(left: int, mid: int, right: int) -> None:
        b: list[int] = []
        i, j = left, mid + 1
        while i <= mid and j <= right:
            if a[i] <= a[j]:
                b.append(a[i])
                i += 1
            else:
                b.append(a[j])
                j += 1
        b += a[i : mid + 1] + a[j : right + 1]
        a[left : right + 1] = b

    def sort(left: int, right: int) -> None:
        if left < right:
            mid = (left + right) // 2
            sort(left, mid)
            sort(mid + 1, right)
            merge(left, mid, right)

    sort(0, len(a) - 1)
    return a
```

```ts [TypeScript]
function mergeSort(array: number[]): number[] {
    const a = [...array];

    function merge(left: number, mid: number, right: number): void {
        const b: number[] = [];
        let i = left;
        let j = mid + 1;
        while (i <= mid && j <= right) {
            if (a[i] <= a[j]) {
                b.push(a[i]);
                i++;
            } else {
                b.push(a[j]);
                j++;
            }
        }
        b.push(...a.slice(i, mid + 1), ...a.slice(j, right + 1));
        a.splice(left, b.length, ...b);
    }

    function sort(left: number, right: number): void {
        if (left < right) {
            const mid = Math.floor((left + right) / 2);
            sort(left, mid);
            sort(mid + 1, right);
            merge(left, mid, right);
        }
    }

    sort(0, a.length - 1);
    return a;
}
```

:::

## Quick Sort

::: code-group

```python [Python]
def quick_sort(array: list[int]) -> list[int]:
    a = array.copy()

    def partition(left: int, right: int) -> int:
        x = a[right]
        i = left
        for j in range(left, right):
            if a[j] < x:
                a[i], a[j] = a[j], a[i]
                i += 1
        a[i], a[right] = a[right], a[i]
        return i

    def sort(left: int, right: int) -> None:
        if left < right:
            p = partition(left, right)
            sort(left, p - 1)
            sort(p + 1, right)

    sort(0, len(a) - 1)
    return a
```

```ts [TypeScript]
function quickSort(array: number[]): number[] {
    const a = [...array];

    function partition(left: number, right: number): number {
        const x = a[right];
        let i = left;
        for (let j = left; j < right; j++) {
            if (a[j] < x) {
                [a[i], a[j]] = [a[j], a[i]];
                i++;
            }
        }
        [a[i], a[right]] = [a[right], a[i]];
        return i;
    }

    function sort(left: number, right: number): void {
        if (left < right) {
            const p = partition(left, right);
            sort(left, p - 1);
            sort(p + 1, right);
        }
    }

    sort(0, a.length - 1);
    return a;
}
```

:::

## Selection Sort

::: code-group

```python [Python]
def selection_sort(array: list[int]) -> list[int]:
    a = array.copy()
    n = len(a)
    for i in range(n - 1):
        k = i
        for j in range(i + 1, n):
            if a[j] < a[k]:
                k = j
        a[i], a[k] = a[k], a[i]
    return a
```

```ts [TypeScript]
function selectionSort(array: number[]): number[] {
    const a = [...array];
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let k = i;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[k]) {
                k = j;
            }
        }
        [a[i], a[k]] = [a[k], a[i]];
    }
    return a;
}
```

:::

## Shell Sort

::: code-group

```python [Python]
def shell_sort(array: list[int]) -> list[int]:
    a = array.copy()
    n = len(a)
    h = n // 2
    while h >= 1:
        for i in range(h, n):
            x = a[i]
            j = i
            while j >= h and a[j - h] > x:
                a[j] = a[j - h]
                j -= h
            a[j] = x
        h //= 2
    return a
```

```ts [TypeScript]
function shellSort(array: number[]): number[] {
    const a = [...array];
    const n = a.length;
    let h = Math.floor(n / 2);
    while (h >= 1) {
        for (let i = h; i < n; i++) {
            const x = a[i];
            let j = i;
            while (j >= h && a[j - h] > x) {
                a[j] = a[j - h];
                j -= h;
            }
            a[j] = x;
        }
        h = Math.floor(h / 2);
    }
    return a;
}
```

:::
