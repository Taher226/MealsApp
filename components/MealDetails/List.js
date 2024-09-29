import {View, Text, StyleSheet} from 'react-native';

function List({data}) {
  return data.map(dataPoint => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#cea0a0',
  },
  itemText: {
    color: '#352c2c',
    textAlign: 'center',
  },
});

export default List;
