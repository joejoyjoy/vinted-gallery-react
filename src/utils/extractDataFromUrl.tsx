export const extractDataFromUrl = (url: string): string => {
  const regex = /\/photo\/([^\/]+)\//;
  const match = url.match(regex);

  if (match && match[1]) {
    const lastDashIndex = match[1].lastIndexOf("-");
    const decoded = decodeURIComponent(match[1]).replace(/-/g, " ");

    if (lastDashIndex !== -1) {
      const withoutId = decoded.substring(0, lastDashIndex).trim();
      return withoutId;
    } else {
      return decoded.trim();
    }
  }

  return "";
};
