import {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MealsList from '../components/MealsList/MealsList';
// import {FavouriteContext} from '../store/context/favourites-context';
import {MEALS} from '../data/dummy-data';
import {useSelector} from 'react-redux';

function FavouriteScreen() {
  // const favouriteMealsCtx = useContext(FavouriteContext);
  favouriteMealIds = useSelector(state => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter(meal =>
    favouriteMealIds.includes(meal.id),
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favourite Meals Yet.</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavouriteScreen;
