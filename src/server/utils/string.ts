// Format function to replace placeholders with values
export const format = (message: string, ...stuffs: string[]) => {
  return message.replace(/{_s}/g, (match) => {
    // Replace the placeholder with the first available value from stuffs
    if (stuffs.length > 0) {
      const value = stuffs.shift(); // Get the first value and remove it from the array
      return value ? String(value) : match; // Replace with value or keep the placeholder if not available
    }
    return match; // Keep the placeholder if no values left
  });
};
