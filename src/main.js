import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tamagotchi } from './js/tamagotchi';



$(document).ready(function () {
    tamagotchi.decreaseValues();
    $("#feedForm").submit(function(event) {
        event.preventDefault();
        tamagotchi.feed(5);
    });
    $("#happyForm").submit(function(event) {
        event.preventDefault();
        tamagotchi.happy(5);
    });
    $("#feedPill").submit(function(event) {
        event.preventDefault();
        if(tamagotchi.gem >= 5) {
            tamagotchi.increaseFoodLimit(.9);
            tamagotchi.gem -= 5;
            $("#gems").text(`Gems: ${tamagotchi.gem}`);
        }
    });
    $("#giveGameboy").submit(function(event) {
        event.preventDefault();
        if(tamagotchi.gem >= 10) {
            tamagotchi.increaseHappinessLimit(.9);
            tamagotchi.gem -= 10;
            $("#gems").text(`Gems: ${tamagotchi.gem}`);
        }
    });
    
});