/**
 * Converts a relative file path into a full, absolute URL
 *
 * @param {string} filepath - The relative path to the asset.
 * @returns {string} The full, absolute URL to the asset.
 */

function getImageUrl(filepath) {
  return new URL(filepath, import.meta.url).href;
}
