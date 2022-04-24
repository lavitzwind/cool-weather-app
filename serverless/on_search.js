import fetch from "node-fetch";

const API_KEY = process.env.REACT_APP_API_KEY;

exports.handler = async (event, context) => {
  const params = JSON.parse(event.body);
  const { text, units } = params;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=${units}`;
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
