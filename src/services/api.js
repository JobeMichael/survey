export const getData = async url => {
  const response = await fetch(url);
  return await response.json();
};

export const postData = async (url, payload) => {
  const response = await fetch(url, {
    method: "post",
    body: payload
  });
  return await response.json();
};
