export default function makePostParkinglot({ addParkinglot }) {
  return async function postParkinglot(httpRequest) {
    try {
      const { source = {}, ...parkinglotData } = httpRequest.body;

      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referer"];
      }
      const posted = await addParkinglot({
        ...parkinglotData,
        source
      });
      return {
        headers: {
          "Content-Type": "application/json",
          "Last-Modified": new Date(posted.modifiedOn).toUTCString()
        },
        statusCode: 201,
        body: { posted }
      };
    } catch (e) {
      console.log(e);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 201,
        body: {
          error: e.message
        }
      };
    }
  };
}
