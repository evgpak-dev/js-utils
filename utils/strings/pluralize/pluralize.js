function pluralize(count, rules) {
  const result = new Intl.PluralRules('ru-RU').select(count);

  switch (result) {
    case 'one':
      return `${count} ${rules[0]}`;
    case 'few':
      return `${count} ${rules[1]}`;
    default:
      return `${count} ${rules[2]}`;
  }
}

export { pluralize }