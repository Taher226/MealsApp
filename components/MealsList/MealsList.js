import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';

function MealsList({items}) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.Container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        // renderItem={({item, index}) => {
        //   return <Text>{`${index + 1} - ${item.title}`}</Text>;
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
  },
});
export default MealsList;
