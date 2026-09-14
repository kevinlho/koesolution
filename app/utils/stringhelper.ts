export const truncateString = (str: string, maxLength: number): string => {
  const ending = '...'

  // Check if the string length is already within the limit
  if (str.length <= maxLength) {
    return str
  }

  // Check if maxLength is less than the ending length
  if (maxLength <= ending.length) {
    return str.slice(0, maxLength) + ending
  }

  // Truncate the string and add the ending
  return str.slice(0, maxLength - ending.length) + ending
}
