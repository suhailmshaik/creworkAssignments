let x = 0,
  y = 1,
  ans;
console.log(x);
console.log(y);
for (i = 0; i < 10; i++) {
  ans = x + y;
  console.log(ans);
  x = y;
  y = ans;
}
