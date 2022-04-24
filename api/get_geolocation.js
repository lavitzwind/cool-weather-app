import fetch from "node-fetch";

const API_KEY = process.env.REACT_APP_API_KEY;

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const params = req.body;
    const { text } = params;
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=0&appid=${API_KEY}`;
    try {
      const jsonData = await fetch(url);
      const data = await jsonData.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(422).json(err.stack);
    }
  }
};
