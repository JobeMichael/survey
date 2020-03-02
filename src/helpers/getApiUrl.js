const apiBaseUrl =
  "https://private-anon-1dec9b2a8b-surveysmock.apiary-mock.com/api/surveys";

export const getApiUrl = (type, option = {}) => {
  switch (type) {
    case "surveys":
      return `${apiBaseUrl}`;
    case "detail":
      return `${apiBaseUrl}/${option.id}`;
    case "submit":
      return `${apiBaseUrl}/${option.id}/completions`;
    default:
      return "";
  }
};
