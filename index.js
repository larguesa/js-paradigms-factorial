//Procedural programming example
document.getElementById('proc-btn').onclick = function handler() {
  const value = document.getElementById('input-n').value;
  let n = parseInt(value);
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i;
  }
  document.getElementById('proc-f-result').textContent = res;
};

//Functional programming example
document.getElementById('func-btn').onclick = function handler() {
  const value = document.getElementById('input-n').value;
  let n = parseInt(value);
  const res = getFunctionalFactorial(n);
  document.getElementById('func-f-result').textContent = res;
};
function getFunctionalFactorial(n) {
  if (n == 1) return 1;
  else return n * getFunctionalFactorial(n - 1);
}
