export const getSuccessPercents = (
  success: number,
  mistakes: number,
): number => {
  if (mistakes === 0 && success !== 0) return 100;
  return success > 0 && mistakes > 0
    ? Math.round((success / mistakes) * 100)
    : 0;
};
