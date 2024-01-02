const Card = ({ card }) => {
  if (!card) return null;

  return (
    <div className="card">
      <img src={card.image} alt={`${card.value} of ${card.suit}`} />
      <p>{`${card.value} of ${card.suit}`}</p>
    </div>
  );
};

export default Card;
