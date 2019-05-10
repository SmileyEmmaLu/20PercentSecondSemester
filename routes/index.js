var express = require('express');
var router = express.Router();
var path = require("path");
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mandarintutoringkds@gmail.com',
    pass: 'mandarintutoring19'
  }
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {ttl: 'Mandarin'}) });

//GET Tutoring page
router.get('/tutoring', function(req, res, next) {
  res.render('tutoring', {ttl: 'Peer Tutoring'}) });

//GET resources page
router.get('/resources', function(req, res, next) {
  res.render('resources', {ttl: 'Online Resources'})});

//GET entertainment page
router.get('/entertainment', function(req, res, next) {
  res.render('entertainment', {ttl: 'Entertainment'}) });

//POST tutoring form on tutoring page
router.post('/tutoring', function(req, res, next){

	console.log(req.body)
var mailOptions = {
  from: 'mandarintutoringkds@gmail.com', 
  to: [req.body.tutoremail,req.body.tuteeemail], // sends to both the tutor and the tutee
  subject: 'Mandarin Tutoring Time', //default subject
  //automatically generated message
  text: "Hi " + req.body.tutorname + " and " + req.body. tuteename + ", \n" + "Reminder that you have tutoring on "+ 
  req.body.tutorDate + " at " + req.body.tutorTime +".\n" +req.body.message
};

transporter.sendMail(mailOptions, function(error, info){ 
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
res.render('tutoring', {ttl: 'Peer Tutoring'}); // redirects back to the tutoring page after sending the email
	
});



module.exports = router;
