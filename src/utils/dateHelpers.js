export const getDate = (cardDate) => {
  const newDate = new Date(cardDate).toLocaleString();
  return newDate;
} 