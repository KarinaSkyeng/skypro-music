export const getUniqueValues = (items: any[], key: string): string[] => {
    const uniqueValues = new Set<string>();
  
    items.forEach(item => {
      if (Array.isArray(item[key])) {
        item[key].forEach(value => uniqueValues.add(value));
      } else {
        uniqueValues.add(item[key]);
      }
    });
  
    return Array.from(uniqueValues);
  };