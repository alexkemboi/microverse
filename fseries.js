let a = 0;
let b = 1;
function fibonacci(n) {
  for (let i = 0; i < n; i++) {
    let temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}
fibonacci(10);
