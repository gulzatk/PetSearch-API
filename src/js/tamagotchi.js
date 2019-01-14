import $ from 'jquery';

export let tamagotchi = {
    foodValue: 100,
    foodLimit: 1,
    happyLimit: 1,
    healthValue: 100,
    happyValue: 100,
    exhaustionValue: 0,
    count: 0,
    gem: 0,
    age: 0,
    weight: 1.0,

    decreaseValues: function() {
        const decreaseInterval = setInterval(() => {
            const elemOne = document.getElementById("foodBar");
            const elemTwo = document.getElementById("happyBar");
            const elemFour = document.getElementById("exhaustionBar");
            const elemImg = document.getElementById("tamagotchiImg");
            this.count++;
            if (this.foodValue > 0) {
                this.foodValue -= this.foodLimit;
            }
            if (this.happyValue > 0) {
                this.happyValue -= this.happyLimit;
            }
            if (this.exhaustionValue > 0) {
                this.exhaustionValue -= 5;
            }
            if (this.count === 5) {
                this.count = 0;
                this.gem++;
                $("#gems").text(`Gems: ${this.gem}`);
            }
            this.age ++;
            this.weight -=0.01;
            $("#age").text(`Age: ${this.age}`);
            $("#weight").text(`Weight: ${this.weight.toFixed(2)} kg`);
            elemOne.style.width = this.foodValue + '%'; 
            elemTwo.style.width = this.happyValue + '%'; 
            elemFour.style.width = this.exhaustionValue + '%'; 
            elemImg.style.width = this.weight+'%';
            elemImg.style.height = this.weight+'%';
            console.log("Food Value: " + this.foodValue);
            console.log("Happy Value: " + this.happyValue);
            console.log("Gems: " + this.gem);
            if (this.foodValue <= 0 || this.happyValue <= 0) {
                const elemThree = document.getElementById("healthBar");
                this.healthValue--
                elemThree.style.width = this.healthValue + '%';
                if (this.healthValue < 0) {
                    clearInterval(decreaseInterval);
                    return "Your tamagotchi died.";
                }
            }
        }, 500);
    },

    feed: function(amount) {
        if ((this.foodValue <= 95) && (this.exhaustionValue <100)) {
            this.weight ++;
            this.foodValue += amount;
            this.exhaustionValue += 20;
            $("#weight").text(`Weight: ${this.weight.toFixed(2)} kg`);
            const elemOne = document.getElementById("foodBar");
            const elemFour = document.getElementById("exhaustionBar");
            elemOne.style.width = this.foodValue + '%'; 
            elemFour.style.width = this.exhaustionValue + '%';
            console.log("New Food Value: " + this.foodValue);
            return `Food level goes up ${amount}!`;
        }
    },

    happy: function(amount) {
        if ((this.happyValue <=95) && (this.exhaustionValue <100)) {
            this.happyValue += amount;
            this.exhaustionValue += 20;
            const elemTwo = document.getElementById("happyBar");
            const elemFour = document.getElementById("exhaustionBar");
            elemFour.style.width = this.exhaustionValue + '%';
            elemTwo.style.width = this.happyValue + '%'; 
            return `Food level goes up ${amount}!`;
    
        }
    },

    increaseFoodLimit: function(amount) {
        this.foodLimit *= amount;
        console.log("New Food Value: " + this.foodLimit);
        return `Food Limit goes down to ${this.foodLimit}!`;
        
    },
    increaseHappinessLimit: function(amount) {
        this.happyLimit *= amount;
        console.log("New Happy Value: " + this.happyLimit);
        return `Happy Limit goes down to ${this.happyLimit}!`;
        
    },


}