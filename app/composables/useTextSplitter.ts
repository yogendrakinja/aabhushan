export const useTextSplitter = () => {
  const splitWords = (sentence: string) => {
    if (!sentence) return [];
    // Splits by whitespace and removes empty strings
    return sentence.trim().split(/\s+/);
  };

  return {
    splitWords
  };
};