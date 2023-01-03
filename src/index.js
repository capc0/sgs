const fetch = require('node-fetch');

const username = 'replace-me';
const password = 'replace-me';
const baseURI = 'replace-me';

const basicAuthValue = Buffer
    .from(`${username}:${password}`)
    .toString('base64');


fetch(`${baseURI}/ManageReport/Get?SofiaSampleNumber=06447951`, {
    headers: {
        Authorization: `Basic ${basicAuthValue}`,
    }
}).then(result => {
    console.log(result);
}).catch(err => {
    console.error(err);
});
