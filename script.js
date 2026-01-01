const characters = [
    { text: "Shrek", img: "images/shrek.jpg" },
    { text: "Donkey", img: "images/donkey.jpg" },
    { text: "Fiona", img: "images/fiona.jpg" },
    { text: "Puss in Boots", img: "images/puss.jpg" },
    { text: "Lord Farquaad", img: "images/farquaad.jpg" },
    { text: "Harry Potter", img: "images/harry.jpg" },
    { text: "Hermione", img: "images/hermione.jpg" },
    { text: "Ron Weasley", img: "images/ron.jpg" },
    { text: "Voldemort", img: "images/voldemort.jpg" },
    { text: "Dumbledore", img: "images/dumbledore.jpg" },
    { text: "Draco Malfoy", img: "images/draco.jpg" },
    { text: "Hagrid", img: "images/hagrid.jpg" },
    { text: "Gingy (Cookie)", img: "images/gingy.jpg" }
];

const hobbies = [
    { text: "Playing an instrument", img: "images/instrument.jpg" },
    { text: "Ballet Dancing", img: "images/ballet.jpg" },
    { text: "Cooking", img: "images/cooking.jpg" },
    { text: "Maths", img: "images/maths.jpg" },
    { text: "TikTok Influencer", img: "images/tiktok.jpg" },
    { text: "Gardening", img: "images/garden.jpg" },
    { text: "Skateboarding", img: "images/skate.jpg" },
    { text: "Yoga", img: "images/yoga.jpg" },
    { text: "Rap Battles", img: "images/rap.jpg" },
    { text: "Astronomy", img: "images/astronomy.jpg" },
    { text: "Videogames", img: "images/games.jpg" },
    { text: "Learning languages", img: "images/languages.jpg" },
    { text: "Singing", img: "images/singing.jpg" }
];

function spinDice() {
    const charEl = document.getElementById('char-result');
    const hobbyEl = document.getElementById('hobby-result');

    const charImg = document.getElementById('char-img');
    const hobbyImg = document.getElementById('hobby-img');

    const btn = document.getElementById('spin-btn');
    const charCard = document.getElementById('char-card');
    const hobbyCard = document.getElementById('hobby-card');

    btn.disabled = true;
    btn.innerText = "Rolling...";

    charCard.classList.remove('highlight');
    hobbyCard.classList.remove('highlight');

    charImg.src = "images/dice.png";
    hobbyImg.src = "images/dice.png";

    let counter = 0;
    const maxSpins = 20;

    const interval = setInterval(() => {

        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];

        charEl.innerText = randomChar.text;
        charImg.src = randomChar.img;

        hobbyEl.innerText = randomHobby.text;
        hobbyImg.src = randomHobby.img;

        counter++;


        if (counter >= maxSpins) {
            clearInterval(interval);

            const finalChar = characters[Math.floor(Math.random() * characters.length)];
            const finalHobby = hobbies[Math.floor(Math.random() * hobbies.length)];

            charEl.innerText = finalChar.text;
            hobbyEl.innerText = finalHobby.text;

            updateImage(charImg, finalChar.img);
            updateImage(hobbyImg, finalHobby.img);

            btn.disabled = false;
            btn.innerText = "Roll Again";
            charCard.classList.add('highlight');
            hobbyCard.classList.add('highlight');
        }
    }, 80);
}

function updateImage(imgElement, newSrc) {
    imgElement.src = newSrc;
    imgElement.onerror = function () {
        this.src = 'images/dice.png';
    };
}
