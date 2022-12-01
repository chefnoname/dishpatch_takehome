import MealCard from '../MealCard/MealCard';
import mealImg from '../../assets/meal.png';

import { DUMMY_MEALS } from '../MealCard/meals';

import './RestaurantCard.css';
const RestaurantCard = () => {
  return (
    <div className='cardContainer'>
      <div className='description'>
        <h1>Restaurant Meal Kits</h1>
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus quasi similique eos quis pariatur, tempore vitae
          exercitationem nostrum commodi, veniam fugiat reprehenderit laborum
          maxime qui eum blanditiis facere aspernatur temporibus.
        </h4>
        <div className='mealCardContainer'>
          {[...DUMMY_MEALS, ...DUMMY_MEALS, ...DUMMY_MEALS].map((dummy, i) => (
            <div key={i}>
              <MealCard
                img={mealImg}
                serving={dummy.serving}
                mealName={dummy.dish}
                cost={dummy.price}
                chef={dummy.chef}
                dishes={dummy.dishes}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
