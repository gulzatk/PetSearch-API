//import $ from 'jquery';

export class Dog {
    getRandomDogPic() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = "https://dog.ceo/api/breeds/image/random";
            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }

    getRandomBreedPic(breed) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://dog.ceo/api/breed/${breed}/images/random`;
            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }

    getBreedList() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = "https://dog.ceo/api/breeds/list/all";
            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
}
