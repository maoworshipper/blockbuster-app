export const orderArray = (array: any[]) => {
    return array.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  };