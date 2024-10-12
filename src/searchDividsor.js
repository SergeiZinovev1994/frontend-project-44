export default (num1, num2) => {
  const smallerNumber = num1 >= num2 ? num2 : num1;
  let dividsor = 1;
  for (let i = 2; i <= smallerNumber; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      dividsor = i;
    }
  }
  return dividsor;
};
