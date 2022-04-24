import fetch from "node-fetch";

const API_KEY = process.env.REACT_APP_API_KEY;

exports.handler = async (event, context) => {
  const params = JSON.parse(event.body);
  const { text } = params;
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=0&appid=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 422,
      body: err.stack,
    };
  }
};
