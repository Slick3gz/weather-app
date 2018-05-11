// import my api key
const myKey = require('./api-key');

const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

const encodedAddress = encodeURIComponent(argv.address);

const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json'

request({
    url: `${ROOT_URL}?address=${encodedAddress}&key=${myKey.APIKEY}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

});