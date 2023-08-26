export const extractDataFromUrl = (url: string): string => {
  const regex = /\/photo\/([^\/]+)\//;
  const match = url.match(regex);

  if (match && match[1]) {
    const decoded = decodeURIComponent(match[1]).replace(/-/g, " ");
    const withoutId = decoded.replace(/\d{8}$/, "");
    return withoutId.trim();
  }

  return "";
};
