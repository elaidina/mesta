document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: "Peru"
    },
    {
      name: '1',
      img: 'Lima'
    },
    {
      name: '2',
      img: "Pobřeží slonoviny"
    },
    {
      name: '2',
      img: 'Yamoussoukro'
    },
    {
      name: '3',
      img: 'Polsko'
    },
    {
      name: '3',
      img: 'Varšava'
    },
    {
      name: '4',
      img: "Portugalsko"
    },
    {
      name: '4',
      img: 'Lisabon'
    },
    {
      name: '5',
      img: 'Rakousko'
    },
    {
      name: '5',
      img: 'Vídeň'
    },
    {
      name: '6',
      img: "Konžská republika"
    },
    {
      name: '6',
      img: 'Brazzaville'
    },
    {
      name: '7',
      img: 'Rovníková Guinea'
    },
    {
      name: '7',
      img: 'Malabo'
    },
    {
      name: '8',
      img: 'Rumunsko'
    },
    {
      name: '8',
      img: 'Bukurešť'
    },
    {
      name: '9',
      img: 'Rusko'
    },
    {
      name: '9',
      img: 'Moskva'
    },
    {
      name: '10',
      img: 'Rwanda'
    },
    {
      name: '10',
      img: 'Kigali'
    },
    {
      name: '11',
      img: 'Řecko'
    },
    {
      name: '11',
      img: 'Atény'
    },
    {
      name: '12',
      img: 'Salvador'
    },
    {
      name: '12',
      img: "San Salvador"
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 12 completed!</h2><a href='https://elaidina.github.io/mesta/level13.html'> Continue to Level 13</a>";


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
