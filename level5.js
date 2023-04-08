document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Grenada'
    },
    {
      name: '1',
      img: "Saint George´s"
    },
    {
      name: '2',
      img: 'Gruzie'
    },
    {
      name: '2',
      img: "Tbilisi"
    },
    {
      name: '3',
      img: 'Guatemala'
    },
    {
      name: '3',
      img: "Ciudad de Guatemala"
    },
    {
      name: '4',
      img: 'Guinea'
    },
    {
      name: '4',
      img: "Konakry"
    },
    {
      name: '5',
      img: 'Guinea-Bissau'
    },
    {
      name: '5',
      img: "Bissau"
    },
    {
      name: '6',
      img: 'Guyana'
    },
    {
      name: '6',
      img: "Georgetown"
    },
    {
      name: '7',
      img: 'Haiti'
    },
    {
      name: '7',
      img: "Port-au-Prince"
    },
    {
      name: '8',
      img: 'Honduras'
    },
    {
      name: '8',
      img: "Tegucigalpa"
    },
    {
      name: '9',
      img: 'Chile'
    },
    {
      name: '9',
      img: "Santiago de Chile"
    },
    {
      name: '10',
      img: 'Chorvatsko'
    },
    {
      name: '10',
      img: "Zahřeb"
    },
    {
      name: '11',
      img: 'Indie'
    },
    {
      name: '11',
      img: 'Nové Dillí'
    },
    {
      name: '12',
      img: 'Indonésie'
    },
    {
      name: '12',
      img: "Jakarta"
    }
  ]
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 5 completed!</h2><a href='https://elaidina.github.io/mesta/level6.html'> Continue to Level 6</a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
