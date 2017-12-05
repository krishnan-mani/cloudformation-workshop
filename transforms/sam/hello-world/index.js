'use strict';

exports.handler = function(event, context, callback) {
    let name = event.name;
    console.log("Name: " + name);
    callback(null, "Hello " + name)
}