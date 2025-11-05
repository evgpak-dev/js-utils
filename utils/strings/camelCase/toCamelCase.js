function toCamelCase(str) {
  if (typeof str !== 'string') {
    return '';
  }

  let result = str.replace(/[-_\s]+(.)?/g, (_, char) => {
    return char ? char.toUpperCase() : '';
  });

  result = result.replace(/^(.)/, (_, char) => {
    return char.toLowerCase();
  });

  return result;
}

export { toCamelCase };