export default (content, maxLength) => {
  return maxLength < 1 ? 'The content must be longer than 1 symbol.' : (
    content.length <= maxLength ? content : content.substr(0, content.lastIndexOf(' ', maxLength)) + '...'
  );
};
