const p = async (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n);
    }, n);
  });
};

(async () => {
  let a1 = await p(1000);
  console.log(a1);
  let a2 = await p(2000);
  console.log(a2);
  let a3 = await p(3000);
  console.log(a3);
})();
