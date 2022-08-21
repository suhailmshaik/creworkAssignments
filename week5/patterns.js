// pattern 1

// expected output:

// *
// **
// ***
// ****
// *****
// ******

// ----------------------------------------------

let ans = "";
let n = 6;

for (i = 0; i < n; i++) {
  ans += "*";
  console.log(ans);
}

// ----------------------------------------------

// pattern 2

// expected output:

// ****
// ****
// ****
// ****

// ----------------------------------------------

let sol = "";
let num = 4;

for (i = 0; i < num; i++) {
  for (j = 0; j < num; j++) {
    sol += "*";
  }
  sol += "\n";
}

console.log(sol);
