import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tamagotchi } from './js/tamagotchi';



$(document).ready(function () {
    $("#userForm").submit(function(event) {
        event.preventDefault();
        $("#intro").hide();
        $("#userForm").hide();
        $("#tamagotchiImg").attr('src', "https://vignette.wikia.nocookie.net/tamagotchi/images/d/d3/Mametchi_blue.PNG/revision/latest?cb=20111002004702");
        tamagotchi.setName($("#userInput").val());
        tamagotchi.decreaseValues(name);

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

        $("#harvestWeight").submit(function(event) {
            event.preventDefault();
            if(tamagotchi.weight >= 10) {
                let temp = Math.round(tamagotchi.weight * .25);
                tamagotchi.weight -= temp;
                tamagotchi.gem += temp;
                $("#gems").text(`Gems: ${tamagotchi.gem}`);
                $("#weight").text(`Weight: ${tamagotchi.weight.toFixed(2)} kg`);
            }
        });
    });

    
});