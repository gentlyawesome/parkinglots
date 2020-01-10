import makePostParkinglot from "./post-parkinglot";
import makeFakeParkinglot from "./../../__test__/fixtures/parkinglot";

describe("post parkinglot controller", () => {
  it("successfully save parkinglot", async () => {
    const postParkinglot = makePostParkinglot({ addParkinglot: c => c });
    const parkinglot = makeFakeParkinglot();
    const request = {
      headers: {
        "Content-type": "application/json",
        Referer: parkinglot.source.referer,
        "User-Agent": parkinglot.source.browser
      },
      body: parkinglot,
      ip: parkinglot.source.browser
    };
    const expected = {
      headers: {
        "Content-Type": "application/json",
        "Last-Modified": new Date(request.body.modifiedOn).toUTCString()
      },
      statusCode: 201,
      body: { posted: request.body }
    };
    const actual = await postParkinglot(request);
    expect(actual).toEqual(expected);
  });
});
