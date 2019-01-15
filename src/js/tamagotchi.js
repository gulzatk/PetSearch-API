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
    strength: 0,
    isBaby: true,
    isChild: false,
    isTeen: false,
    isAdult: false,
    isGeezer: false,
    canLevelUp: false,
    hasWon25kg: false,
    name: 'blank',

    decreaseValues: function() {
        $("#lifeStage").text(`${this.name} is a baby!`);
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
                this.exhaustionValue -= 10;
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
            if (this.age === 50 || this.age === 200 || this.age === 300 || this.age === 700) {
                this.canLevelUp = true;
            }

            if (this.age <= 200 && this.age >= 50 && this.isBaby === true && this.canLevelUp === true) {
                this.foodLimit += .45;
                this.happyLimit += .45;
                this.isBaby = false;
                this.isChild = true;
                this.canLevelUp = false;
                $("#lifeStage").text("Life Stage: Child");
                $("#textLog").prepend(`${this.name} has become a child! \n`);

            }
            else if (this.age <= 300 && this.age >= 201 && this.isChild === true && this.canLevelUp === true) {
                this.foodLimit += .75;
                this.happyLimit += .75;
                this.isChild = false;
                this.isTeen = true;
                this.canLevelUp = false;
                $("#lifeStage").text("Life Stage: Teenager");
                $("#textLog").prepend(`${this.name} has become a teenager! \n`);

            }
            else if (this.age <= 700 && this.age >= 301 && this.isTeen === true && this.canLevelUp === true) {
                this.foodLimit += 1;
                this.happyLimit += 1;
                this.isTeen = false;
                this.isAdult = true;
                this.canLevelUp = false;
                $("#lifeStage").text("Life Stage: Adult");
                $("#textLog").prepend(`${this.name} has become an adult! \n`);

            }
            else if (this.age >= 701 && this.isAdult === true && this.canLevelUp === true) {
                this.foodLimit += 5.0;
                this.happyLimit += 5.0;
                this.isAdult = false;
                this.isGeezer = true;
                this.canLevelUp = false;
                $("#lifeStage").text("Life Stage: Geezer");
                $("#textLog").prepend(`${this.name} has become a geezer! \n`);
            }
        }, 100);
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
            $("#textLog").prepend(`${this.name} has been fed! Food +${amount} \n`);
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
            $("#textLog").prepend(`You played with ${this.name}! Happiness +${amount}\n`);
    
        }
    },

    increaseFoodLimit: function(amount) {
        this.foodLimit *= amount;
        $("#textLog").prepend(`${this.name} ate the pill and isn't as hungry! \n`);
        return `Food Limit goes down to ${this.foodLimit}!`;
        
    },
    increaseHappinessLimit: function(amount) {
        this.happyLimit *= amount;
        $("#textLog").prepend(`${this.name} likes the Gameboy and will be happier! \n`);
        return `Happy Limit goes down to ${this.happyLimit}!`;
        
    },

    setName: function(inputName) {
        this.name = inputName;
    },

    wrestleTwentyFive: function() {
        if (this.hasWon25kg === false) {
            const nameArray = ["Jimmy", "DogMeat", "Harold", "Cindy"];
            let enemyPower = this.calculateWrestlePower(400, 25);
            let userPower = Math.floor(this.calculateWrestlePower(this.age, this.weight));
            const nameArrayMax = nameArray.length;
            const nameIndex = this.getRandomInt(nameArrayMax);
            const opponentName = nameArray[nameIndex];
            alert(`${this.name} - Wrestling Endurance: ${userPower} - Strength: ${this.strength} \n  VS  \n ${opponentName} - Wrestling Endurance: ${enemyPower} - Strength: ${nameIndex}`);

            while (enemyPower > 0 && userPower > 0) {
                const moveArray = [function(name, damage) {return `${name} growls the opponent for ${damage}. \n`}, function(name, damage) {return `${name} slaps the opponent for ${damage} damage! \n`}, function(name, damage) {return  `${name} ravages the opponent with its teeth for ${damage} damage! \n`}, function(name, damage) {return  `${name} tackles the opponent for ${damage} damage! \n`}, function(name, damage) {return  `${name} karate chops the opponent for ${damage} damage! \n`}, function(name, damage) {return  `${name} body slams the opponent for ${damage} damage! \n`}];
                const moveArrayMax = moveArray.length;
                let name = this.name;
                let index = this.getRandomInt(moveArrayMax);
                let attackValue = 1 + (index * this.strength);
                let currentMove = moveArray[index](name, attackValue);
                $("#textLog").prepend(currentMove);
                enemyPower -= index;
                name = opponentName;
                index = this.getRandomInt(moveArrayMax);
                attackValue = 1 + (index * nameIndex);
                currentMove = moveArray[index](name, attackValue);
                $("#textLog").prepend(currentMove);
                userPower -= index;
            }

            if (userPower > 0) {
                $("#textLog").prepend(`${this.name} has won with ${userPower} health remaining! You won 30 gems, max food and happiness! \n`);
                this.gem += 30;
                this.happyValue = 100;
                this.foodValue = 100;
                this.hasWon25kg = true;
                $("#trophyOneDiv").html('<img id="trophyOne" src="http://pixelartmaker.com/art/22b22848ea88550.png">');
            }
            else {
                $("#textLog").prepend(`${this.name} has lost! Enemy had ${enemyPower} health remaining. Try again with more weight and age! \n`);
            }
        } 
        else {
            $("#textLog").prepend(`${this.name} has already won the 25kg cup! \n`);
        }

    },

    calculateWrestlePower: function(age, weight)  {
        var power = (age / 10) + (weight * 2);
        return power;
    },

    getRandomInt: function(max) {
        return Math.floor(Math.random() * max);
    }
}