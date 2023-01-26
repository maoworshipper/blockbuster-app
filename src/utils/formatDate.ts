export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const realMonth = month < 10 ? `0${month}` : month;

  return `${year}-${realMonth}-${day}`;
}