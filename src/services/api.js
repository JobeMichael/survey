export const api = async url => {
  const response = await fetch(url);
  return await response.json();
};

export const post = async (url, payload) => {
  const response = await fetch(url, {
    method: "post",
    body: payload
  });
  return await response.json();
};
