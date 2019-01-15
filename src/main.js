import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tamagotchi } from './js/tamagotchi';



$(document).ready(function () {
    $("#userForm").submit(function(event) {
        event.preventDefault();
        tamagotchi.setName($("#userInput").val());
        const birthday = new Date();
        $("#textLog").prepend(`${tamagotchi.name} has been born at ${birthday.getMonth() + 1}/${birthday.getDay()}/${birthday.getFullYear()}! \n`);
        alert(`Keep the Values of Food and Happiness above zero by clicking Feed me! and Play.
        Exhaustion automatically decreases over time.
        Take a pill - 5 gem cost - Decreases the rate at which Food Decreases
        Give Gameboy - 10 gem cost - Decreases the rate at which Happiness Decreases
        Harvest Gems - Useable above 10kg - Gives a 1:1 ratio of weight to gems, 25% of weight at a time.`);
        $("#intro").hide();
        $("#userForm").hide();
        $("#tamagotchiImg").attr('src', "https://vignette.wikia.nocookie.net/tamagotchi/images/d/d3/Mametchi_blue.PNG/revision/latest?cb=20111002004702");
        
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

        $("#healButton").submit(function(event) {
            event.preventDefault();
            if(tamagotchi.healthValue <= 75 && tamagotchi.gem >=15) {
                tamagotchi.healthValue += 25;
                tamagotchi.gem -= 15;
                $("#gems").text(`Gems: ${tamagotchi.gem}`);
                $("#textLog").prepend(`${this.name} has been healed by 25 hp! \n`);
                const elemThree = document.getElementById("healthBar");
                elemThree.style.width = this.healthValue + '%';    
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

        $("#25kg").submit(function(event) {
            event.preventDefault();
            if(tamagotchi.weight < 25) {
                $("#textLog").prepend(`${tamagotchi.name} is too small to fight! \n`);
            }
            else {
                tamagotchi.wrestleTwentyFive();
            }

        });

        $("#50kg").submit(function(event) {
            event.preventDefault();
            if(tamagotchi.weight < 50) {
                $("#textLog").prepend(`${tamagotchi.name} is too small to fight! \n`);
            }
            else {
                tamagotchi.wrestleFifty();
            }

        });

        $("#100kg").submit(function(event) {
            event.preventDefault();
            if(tamagotchi.weight < 100) {
                $("#textLog").prepend(`${tamagotchi.name} is too small to fight! \n`);
            }
            else {
                tamagotchi.wrestleOneHundred();
            }

        })

        $("#strengthButton").submit(function(event) {
            event.preventDefault();
            if (tamagotchi.gem >= 10) {
                tamagotchi.gem -= 10;
                tamagotchi.strength += 1;
                $("#gems").text(`Gems: ${tamagotchi.gem}`);
                $("#strength").text(`Strength: ${tamagotchi.strength}`);
                $("#textLog").prepend(`${tamagotchi.name} gains 1 Strength! \n`);
            }
        })
    });

    
});