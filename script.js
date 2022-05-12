document.addEventListener("DOMContentLoaded", () => {
  //images
  const cardArray = [
    {
      name: "chucky",
      img: "images/chucky.png",
    },
    {
      name: "chucky",
      img: "images/chucky.png",
    },
    {
      name: "freddy",
      img: "images/freddy.png",
    },
    {
      name: "freddy",
      img: "images/freddy.png",
    },
    {
      name: "genie",
      img: "images/genie.png",
    },
    {
      name: "genie",
      img: "images/genie.png",
    },
    {
      name: "homer",
      img: "images/homer.png",
    },
    {
      name: "homer",
      img: "images/homer.png",
    },
    {
      name: "jason",
      img: "images/jason.png",
    },
    {
      name: "jason",
      img: "images/jason.png",
    },
    {
      name: "mario",
      img: "images/mario.png",
    },
    {
      name: "mario",
      img: "images/mario.png",
    },
    {
      name: "popeye",
      img: "images/popeye.png",
    },
    {
      name: "popeye",
      img: "images/popeye.png",
    },
    {
      name: "thor",
      img: "images/thor.png",
    },
    {
      name: "thor",
      img: "images/thor.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/cheburashka.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches

  function checkforMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/cheburashka.png");
      cards[optionTwoId].setAttribute("src", "images/cheburashka.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/cheburashka.png");
      cards[optionTwoId].setAttribute("src", "images/cheburashka.png");
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You Won!";
    }
  }

  //flip your card

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkforMatch, 500);
    }
  }

  createBoard();
});
