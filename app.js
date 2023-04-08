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
      img: 'Andorra'
    },
    {
      name: '4',
      img: "Andorra la Vella"
    },
    {
      name: '5',
      img: 'Angola'
    },
    {
      name: '5',
      img: "Luanda"
    },
    {
      name: '6',
      img: 'Antigua a Barbuda'
    },
    {
      name: '6',
      img: "Saint John´s"
    },
    {
      name: '7',
      img: 'Argentina'
    },
    {
      name: '7',
      img: "Buenos Aires"
    },
    {
      name: '8',
      img: 'Arménie'
    },
    {
      name: '8',
      img: "Jerevan"
    },
    {
      name: '9',
      img: 'Austrálie'
    },
    {
      name: '9',
      img: "Canberra"
    },
    {
      name: '10',
      img: "Ázerbájdžán"
    },
    {
      name: '10',
      img: 'Baku'
    },
    {
      name: '11',
      img: 'Bahamy'
    },
    {
      name: '11',
      img: "Nassau"
    },
    {
      name: '12',
      img: 'Bahrajn'
    },
    {
      name: '12',
      img: "Manáma"
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 1 completed!</h2><a href="https://elaidina.github.io/mesta/level2.html"> Continue to Level 2</a>'


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
