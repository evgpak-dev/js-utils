function slugify(str) {
  if (!str) {
    return '';
  }

  let slug = str.toLowerCase().trim();

  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

  return slug.replace(/[\s-]+/g, '-');
}

export { slugify }