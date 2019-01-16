import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dog } from './js/dog';




$(document).ready(function () {
    $("#userForm").submit(function(event) {
        event.preventDefault();
       let dogPic = new Dog();
       let promise = dogPic.getRandomDogPic();

       promise.then(function(response) {
           let body = JSON.parse(response);
           let img = new Image();
           img.src = body.message;
           document.getElementById("dogImgOutput").src = img.src;
       })
    });
});