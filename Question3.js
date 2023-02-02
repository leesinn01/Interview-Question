function sum(a, b) {
  let x = 0;
  for (let i = a; i <= b; i++) {
    x += i;
  }
  return x;
}

function calc(a, b, c) {
  let res = sum(a, b);
  if (c) {
    res *= 2;
  }
  return res;
}
