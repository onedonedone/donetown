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
