const formatText = (text: string) =>
  text
    .replace(/-/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

export { formatText };
