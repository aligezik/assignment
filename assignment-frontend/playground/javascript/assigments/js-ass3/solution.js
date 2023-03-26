console.log("*** WELCOME TO GUESS GAME ****")

do {
  let trial = 5
  let guess
  const randomNumber = Math.round(Math.random() * 100)

  //?  Verilen hak kadar tahmin yapmak icin
  for (i = trial; i > 0; i--) {
    guess = Number(prompt("Please enter your guess between 0 and 100:"))
    if (guess === randomNumber) {
      console.log(`Congrats, you won with ${trial - i + 1} trials.`)
      break
    } else if (guess < randomNumber) {
      console.log("INCREASE ⬆️")
    } else {
      console.log("DECREASE ⬇️")
    }
  }

  if (guess !== randomNumber) {
    console.log(`Sorry, You lost 😔😔, The secret number was :${randomNumber}`)
  }

  //? Her oyun bitiminde tekrar oynamak icin
  again = confirm("Do you want to play again:")
} while (again)
