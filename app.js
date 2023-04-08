document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray =  [
    {
      name: '1',
      img: 'Afghánistán'
    },
    {
      name: '1',
      img: "Kábul"
    },
    {
      name: '2',
      img: 'Albánie'
    },
    {
      name: '2',
      img: "Tirana"
    },
    {
      name: '3',
      img: 'Alžírsko'
    },
    {
      name: '3',
      img: "Alžír"
    },
    {
      name: '4',
      img: 'What´s this?'
    },
    {
      name: '4',
      img: "Čo je toto?"
    },
    {
      name: '5',
      img: 'Where are you?'
    },
    {
      name: '5',
      img: "Kde si?"
    },
    {
      name: '6',
      img: 'I am at home.'
    },
    {
      name: '6',
      img: "Som doma."
    },
    {
      name: '7',
      img: 'Where are you going?'
    },
    {
      name: '7',
      img: "Kam ideš?"
    },
    {
      name: '8',
      img: 'I am so excited!'
    },
    {
      name: '8',
      img: "Som tak nadšená!"
    },
    {
      name: '9',
      img: 'How old are you?'
    },
    {
      name: '9',
      img: "Koľko máš rokov?"
    },
    {
      name: '10',
      img: "Mám 7 rokov"
    },
    {
      name: '10',
      img: 'I am 7 years old.'
    },
    {
      name: '11',
      img: 'Do you have a sister or brother?'
    },
    {
      name: '11',
      img: "Máš sestru alebo brata?"
    },
    {
      name: '12',
      img: 'How is the weather today?'
    },
    {
      name: '12',
      img: "Aké je dnes počasie?"
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 1 completed!</h2><a href="https://elaidina.github.io/js/level2.html"> Continue to Level 2</a>'


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
