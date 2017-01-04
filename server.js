/*
 *
 *	UIT Live Code (Node Exercise)
 *  Let's get started with developing some backend technology with Node.js!
 *	
 *	We'll get started with creating some simple routes using Express.js, and creating our
 *	first custom module. Let's get started!
 *
 *	Task List:
 *
 *	1. Add two new routes, which will go to '/about' and '/contact'
 *	2. Instead of hardcoding your response text in res.write below, instead use the
 *	   provided module in messages.js.
 *
*/

// Our dependencies (modules)
var http = require('http');
var express = require('express');
// @TODO: <Problem 2> you should add the messages module here. 
var msg = require('./messages');


// initialize the app using express
var app = express();

// this is our first app route using Express.js. This will route the the root url that
// you are serving. For example, if you are serving on http://localhost:8080, this url
// will be located at http://localhost:8080/
app.get('/', function(req, res) {

	// @TODO: <Problem 2> Update your hard coded text into the correct module object
	res.write(msg.home);	// write something to standard output	
	res.end();	// end the event
});

// @TODO: <Problem 1> you should add your new routes here. 
// @PROTIP: remember to look at the route I provided above!
app.get('/about', function(req, res) {

	// @TODO: <Problem 2> Update your hard coded text into the correct module object
	res.write(msg.about); // write something to standard output
	res.end();	// end the event
});

app.get('/contact', function(req, res) {

	// @TODO: <Problem 2> Update your hard coded text into the correct module object
	res.write(msg.contact); // write something to standard output
	res.end();	// end the event
});
