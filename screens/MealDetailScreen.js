import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// import {useContext, useLayoutEffect} from 'react';
import {useLayoutEffect} from 'react';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/mealDetails';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import {useDispatch, useSelector} from 'react-redux';
import {addFavourite, removeFavourite} from '../store/redux/favourites';
// import {FavouriteContext} from '../store/context/favourites-context';

function MealDetailScreen({route, navigation}) {
  // const favMealCtx = useContext(FavouriteContext);
  const favMealIds = useSelector(state => state.favouriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFav = favMealIds.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFav) {
      // favMealCtx.removeFavourite(mealId);
      dispatch(removeFavourite({id: mealId}));
    } else {
      // favMealCtx.addFavourite(mealId);
      dispatch(addFavourite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            title={mealIsFav ? 'remove from favourite' : 'add to favourite'}
            color="#352c2c"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8,
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
export default MealDetailScreen;
