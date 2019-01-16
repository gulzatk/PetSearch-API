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

    getRandomCatPic() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = "https://aws.random.cat/meow";
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

    getRandomDogGif() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=dog&rating=G`;
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

    getRandomCatGif() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=cat&rating=G`;
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
