import './MealCard.css';

const MealCard = ({ img, serving, mealName, cost, chef, dishes = 0 }) => {
  return (
    <div className='mealContainer'>
      <img src={img} alt='' />
      <div className='mealInformation'>
        <p className='servingSuggestion'>{`Serves ${serving} ${
          dishes ? `| ${dishes} Dishes` : ''
        }`}</p>
        <div className='dishName'>
          <p>{mealName}</p>
          <p>£{cost}</p>
        </div>
        <p className='chef'>by {chef}</p>
      </div>
    </div>
  );
};

export default MealCard;
