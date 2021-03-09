const scrape = require('website-scraper');

let options = {
  urls: ['https://www.battlepets.finance/#/initial-offering'],
  directory: './phone-farm,'
};

scrape(options)
  .then(result => {
    console.log('Website succesfully downloaded');
  })
  .catch(err => {
    console.log('An error ocurred', err);
  });
