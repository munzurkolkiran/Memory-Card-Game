const section = document.querySelector('section');
// const playerLivesCount = document.querySelector('span');
// const playerLives = 6;

// playerLivesCount.innerText = playerLives;

const correct = document.querySelector('#correct');
const wrong = document.querySelector('#wrong');


let correctCount = 0;
let wrongCount = 0;
// generate the data


const getData = () => [
    { imgSrc: './images/ceylan.png', name: 'ceylan' },
    { imgSrc: './images/download.jpg', name: 'fare' },
    { imgSrc: './images/keklik.jpg', name: 'dagkecisi' },
    { imgSrc: './images/aslan.jpg', name: 'aslan' },
    { imgSrc: './images/balik.jpg', name: 'balik' },
    { imgSrc: './images/kartal.jpg', name: 'kartal' },
    { imgSrc: './images/papagan.jpg', name: 'papagan' },
    { imgSrc: './images/yilan.jpg', name: 'yilan' },
    { imgSrc: './images/ceylan.png', name: 'ceylan' },
    { imgSrc: './images/download.jpg', name: 'fare' },
    { imgSrc: './images/keklik.jpg', name: 'dagkecisi' },
    { imgSrc: './images/aslan.jpg', name: 'aslan' },
    { imgSrc: './images/balik.jpg', name: 'balik' },
    { imgSrc: './images/kartal.jpg', name: 'kartal' },
    { imgSrc: './images/papagan.jpg', name: 'papagan' },
    { imgSrc: './images/yilan.jpg', name: 'yilan' }
];
//shuffle
const shuffle = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//create element 
const cardGenerator = () => {
        const cardData = shuffle();
        cardData.forEach(item => {
            const card = document.createElement('div');
            const face = document.createElement('img');
            const back = document.createElement('div');
            card.classList.add('card');
            face.classList.add('face');
            back.classList.add('back');

            face.src = item.imgSrc;
            card.name = item.name;

            section.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);

            card.addEventListener('click', (e) => {
                card.classList.add('toggleCard')
                checkCards(e);
            });
        });
    }
    //check cards
const checkCards = (e) => {

    const clickedCard = e.target;
    console.log(clickedCard)
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');

    if (flippedCards.length === 2) {

        if (flippedCards[0].name === flippedCards[1].name) {
            console.log('match')
            flippedCards.forEach((cards) => {
                cards.classList.remove('flipped')
                cards.style.pointerEvents = 'none';
            })
            correctCount++;
            console.log(correctCount)
            correct.innerHTML = correctCount;

        } else {
            console.log('wrong')

            flippedCards.forEach((cards) => {
                cards.classList.remove('flipped');
                setTimeout(() => {
                    cards.classList.remove('toggleCard');
                }, 1000);
            });
            wrongCount++;
            wrong.innerText = wrongCount;
            console.log(wrongCount)
        }
    }

}
cardGenerator()