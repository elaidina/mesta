document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Spojené arabské emiráty'
    },
    {
      name: '1',
      img: 'Abú Zabí'
    },
    {
      name: '2',
      img: 'Spojené království (Velká Británie)'
    },
    {
      name: '2',
      img: 'Londýn'
    },
    {
      name: '3',
      img: 'Spojené státy americké'
    },
    {
      name: '3',
      img: 'Washington, D.C.'
    },
    {
      name: '4',
      img: 'Srbsko'
    },
    {
      name: '4',
      img: 'Bělehrad'
    },
    {
      name: '5',
      img: 'Středoafrická republika'
    },
    {
      name: '5',
      img: 'Bangui'
    },
    {
      name: '6',
      img: 'Sudán'
    },
    {
      name: '6',
      img: 'Chartúm'
    },
    {
      name: '7',
      img: 'Surinam'
    },
    {
      name: '7',
      img: 'Paramaribo'
    },
    {
      name: '8',
      img: 'Svatá Lucie'
    },
    {
      name: '8',
      img: 'Castries'
    },
    {
      name: '9',
      img: ' Svatý Kryštof a Nevis'
    },
    {
      name: '9',
      img: 'Basseterre'
    },
    {
      name: '10',
      img: ' Svatý Tomáš a Princův ostrov'
    },
    {
      name: '10',
      img: 'São Tomé'
    },
    {
      name: '11',
      img: ' Svatý Vincenc a Grenadiny'
    },
    {
      name: '11',
      img: 'Kingstown'
    },
    {
      name: '12',
      img: 'Svazijsko'
    },
    {
      name: '12',
      img: 'Mbabane'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 14 completed!</h2><a href='https://elaidina.github.io/mesta/level15.html'> Continue to Level 15</a>";


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
