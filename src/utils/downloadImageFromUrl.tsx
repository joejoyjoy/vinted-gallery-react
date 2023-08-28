export const downloadImageFromUrl = async (
  imageUrl: string,
  imageName: string
) => {
  const imageBlob = await fetch(imageUrl)
    .then((response) => response.arrayBuffer())
    .then((buffer) => new Blob([buffer], { type: "image/jpeg" }));

  const a = document.createElement("a");
  a.href = URL.createObjectURL(imageBlob);
  a.download = imageName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
