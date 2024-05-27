export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };
/*takes relative path of the images , attaches it to the website url
and returns new url*/
  