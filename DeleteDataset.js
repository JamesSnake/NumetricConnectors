/*
'use strict';
const rp = require('request-promise');
const options = {
     method: 'POST',
     uri: 'https://api-qa.numetric.com/v2/dataset/delete',
     headers: {
         Authorization: 'rJuUQBduBXsQGUN9AWmeUgC1SmYBKWISj8FTVrNzjZM%3D'
     },
     body: { datasetId: "374bdb59-c2ce-49c6-b181-bfd8f6a36c8c" },
     json: true,
};
rp(options).then(response =>{
     console.log(response);
});
*/

'use strict';
const rp = require('request-promise');
const options = {
     method: 'DELETE',
     uri: 'https://api-qa.numetric.com/v2/dataset/76f0b4b8-d33e-470a-891b-6691ae3f3e75',
     headers: {
         Authorization: 'rJuUQBduBXsQGUN9AWmeUgC1SmYBKWISj8FTVrNzjZM%3D'
     },
     json: true,
};
rp(options).then(response =>{
     console.log(response);
});