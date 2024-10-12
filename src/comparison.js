export default (userAnswer, rightValue) => {
  let processedAnswer = +userAnswer || userAnswer;
  if (userAnswer === '0') {
    processedAnswer = 0;
  }
  const result = processedAnswer !== rightValue ? false : true;
  return result;
};
