export const limitTextCharacterUtil = (text) => {
  if (text.length > 60) {
    return text.slice(0, 60) + "...";
  }
};