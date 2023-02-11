function showRandom(n) {
  let x = "";
  for (let i = 0; i < n; i++) {
    x = Math.floor(Math.random() * n);
    console.log(x);
    console.log("alex");
  }
}
showRandom(5);
