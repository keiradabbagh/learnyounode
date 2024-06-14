const args = process.argv.slice(2);
let sum = 0;
args.forEach((arg) => {
  const num = parseFloat(arg);
  if (!isNaN(num)) {
    sum += num;
  }
});
console.log(sum);
