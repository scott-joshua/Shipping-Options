'use strict';

const AWS = require("aws-sdk");
AWS.config.update({region: "us-west-2"});
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback) {
    docClient.get({
        TableName: 'ShippingOptions',
        Key: {CountryCode: event.CountryCode}
    },  function(err, data) {
        if(!data.Item){
            console.log("No Shipping data found for" + event.CountryCode);
        }
        callback(err, data.Item);

    });
};






