/**
 * Fetches a resource with a timeout.
 *
 * @param {string} resource The URL to fetch.
 * @param {object} options Fetch options.
 * @param {number} timeout Timeout in milliseconds.
 * @returns {Promise} A response object
 */

async function fetchWithTimeout(resource, options = {}, timeout = 5000) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal
    });

    return response;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

export { fetchWithTimeout };