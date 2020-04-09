const async = require("async");
const request = require("request");

let page = 1;
let last_page = 20;
let json;

async.whilst(function () {
    // condition here
  return page <= last_page
},
function (next) {
  request(`https://jsonplaceholder.typicode.com/users?${page}&per_page=20`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    json = JSON.parse(body);
        console.log(json.data);      
        console.log(page);
    }
    page++;
    next();
  });
},
function (err) {
  // All things are done!
});