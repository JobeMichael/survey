import { api } from "./api";

describe("testing api", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls api and returns data", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

    //assert on the response
    api("https://google.com").then(res => {
      expect(res.data).toEqual("12345");
    });

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual("https://google.com");
  });
});
