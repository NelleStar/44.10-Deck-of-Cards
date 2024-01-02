App.js file 
    *Basic react.js app.js file - importing my deck component in 
    *main function app returning 1 div with one instance of Deck
    *export the app

Card.js file
    * Card component being passed a card prop
    * if no card passed return null
    * returns a single div that has an img tag (the src is the card image and the alt used the card value and suit) and a p tag to state the name of the card
    * export the Card

Deck.js file
    *importing useState, useEffect, axios, and Card component
    *Deck component declared and pieces of state made using useState hook
        -deckId starts as an empty string - need for url calls
        -remaining starts as 0 and will be set based on how many flips remain
        -card set to null and updates to card that is flipped
        -isLoading set to false and is called when making api calls - general practice
    *useEffect hook to load deck
        -async func called to API
        -setDeckId and setRemaining set using res data
        -call loadDeck() within useEffect but outside of itself
        -empty array so only called once
    *const drawCard - async function for button
        -if our remaining var === 0 we alert no more cards
        -if not we setIsLoading to true 
        -call the API using an await keyword and the deckId we retrieved above
        -set drawnCard to the res data.cards[0] and feed that to setCard()
        -error handling and reset isLoading back to false
    *const shuffleDeck - async function for button
        -start with setting ifLoading to true
        -make a call to API using the url and deckId
        -setRemaining to the resp data.remaining
        -setCard to null since we dont want any showing until button push
        -flip isLoading back to false
    *return a single div with className Deck
        -div inside with 2 buttons - one for drawing cards and one for a new deck
        -p to show remaining cards
        and 1 card component instance

        
    