# Product of Array Except Self

https://neetcode.io/problems/products-of-array-discluding-self

## Problem

Given:

- Integer array `nums`

Return:

- Array `output`
- `output[i]` is the product of all `nums` except `nums[i]`

## Exploration

It can help to unravel basic cases to look for patterns:

```js
if (nums.length === 2) {
  return [nums[1], nums[0]];
}

if (nums.length === 3) {
  return [nums[1] * nums[2], nums[0] * nums[2], nums[0] * nums[1]];
}

if (nums.length === 4) {
  return [
    nums[1] * nums[2] * nums[3],
    nums[0] * nums[2] * nums[3],
    nums[0] * nums[1] * nums[3],
    nums[0] * nums[1] * nums[2],
  ];
}
```

For each `output[i]`, we have the product before `i` multiplied by the product after `i`. So, we want to find the prefix and suffix products at each position, and then multiply those.
