export default (userAnswer, rightValue) => {
  let processedAnswer = +userAnswer || userAnswer;
  if (userAnswer === '0') {
    processedAnswer = 0;
  }
  return processedAnswer === rightValue;
};
