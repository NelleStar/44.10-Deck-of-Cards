import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Deck = () => {
  const [deckId, setDeckId] = useState("");
  const [remaining, setRemaining] = useState(0);
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadDeck() {
      try {
        const res = await axios.get(
          "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        );
        setDeckId(res.data.deck_id);
        setRemaining(res.data.remaining);
      } catch (err) {
        console.error("Error loading new deck", err);
      }
    }
    loadDeck();
  }, []);

  const drawCard = async () => {
    if (remaining === 0) {
      alert("Error: no cards remaining!");
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      );
    //   const drawnCard = res.data.cards[0];
      setCard(res.data.cards[0]);
      setRemaining(res.data.remaining);
    } catch (err) {
      console.error("Error drawing a card", err);
    } finally {
      setIsLoading(false);
    }
  };

  const shuffleDeck = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`
      );
      setRemaining(res.data.remaining);
      setCard(null);
    } catch (err) {
      console.error("Error shuffling deck", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="deck">
      <div className="controls">
        <button onClick={drawCard} disabled={isLoading}>
          Draw next card!
        </button>
        <button onClick={shuffleDeck} disabled={isLoading}>
          New deck
        </button>
      </div>
      <p>Remaining cards: {remaining}</p>
      <Card card={card} />
    </div>
  );
};

export default Deck;
