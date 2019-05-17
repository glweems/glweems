const axios = require(`axios`)
axios({
  method: `post`,
  url: `https://glweems-backend.herokuapp.com/api/subscribe`,
  data: { email: `shit@shit.com` },
  config: { headers: { 'Content-Type': `application/json;charset=UTF-8` } },
})
  .then(function(response) {
    // handle success
    console.log(response)
  })
  .catch(function(response) {
    // handle error
    console.log(response)
  })

// fetch(`https://glweems-backend.herokuapp.com/api/subscribers`, {
//   method: `GET`,
//   headers: {},
// })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.log(err)
//   })
