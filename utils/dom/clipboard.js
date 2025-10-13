function highlight(el) {
  const selection = window.getSelection();
  const range = document.createRange();

  range.selectNodeContents(el);

  selection.removeAllRanges();
  selection.addRange(range);

  return selection;
}

function copyToClipboard(selectedText) {
  return navigator.clipboard.writeText(selectedText);
}

function selectAndCopy(el) {
  const selection = highlight(el);

  return copyToClipboard(selection);
}

export { highlight, copyToClipboard, selectAndCopy }