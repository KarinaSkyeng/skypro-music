export const getUniqueValues = <T, K extends keyof T>(items: T[], field: K) => {
  const uniqueValues = new Set<string>();

  items.forEach((item) => {
    const value = item[field];
    if (Array.isArray(value)) {
      value.forEach((v) => uniqueValues.add(String(v)));
    } else {
      uniqueValues.add(String(value));
    }
  });

  return Array.from(uniqueValues);
};
