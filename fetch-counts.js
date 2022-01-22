const fetch = require('node-fetch');

fetch('https://aws.amazon.com/api/dirs/items/search?item.directoryId=aws-products&item.locale=en_US&tags.id=!aws-products%23type%23feature&tags.id=!aws-products%23type%23variant')
    .then(res => res.json())
    .then(body => {
        console.log(body.metadata.totalHits);
    }).catch(err => console.log(err))