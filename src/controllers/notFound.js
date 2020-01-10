export default function notFound() {
  return {
    headers: {
      "Content-Type": "applicatiotn/json"
    },
    body: { error: "Not Found" },
    statusCode: 404
  };
}
