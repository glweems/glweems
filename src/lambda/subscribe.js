import axios from 'axios'

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
  console.log(`queryStringParameters`, event.queryStringParameters)
  axios
    .post(`https://api.glweems.com/v1/subscribe`, { email: `lambda@func.com` })
    .then(res =>
      res.status === 201
        ? callback(null, {
            // return null to show no errors
            statusCode: 200, // http status code
            body: JSON.stringify({
              msg: `Hello, World! ${Math.round(Math.random() * 10)}`,
            }),
          })
        : console.log(`yousuck`)
    )
}
