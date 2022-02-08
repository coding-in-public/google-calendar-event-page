import fetch from 'node-fetch';

const { CAL_API, CAL_ID } = process.env;

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET',
}

exports.handler = async function (event, context) {
  try {
    if (event.httpMethod === 'GET'){
      return fetch(`https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events&key=${CAL_API}`)
      .then((response) => response.json())
      .then((data) => ({
        statusCode: 200,
        body: JSON.stringify(data)
      }))
    }
    return {
      statusCode: 401
    }
  } catch (e){
    console.log(e);
    return {
      statusCode: 500,
      body: e.toString()
    }
  }
}