import {View, Text, StyleSheet} from 'react-native';

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subtitle: {
    color: '#cea0a0',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#cea0a0',
    borderBottomWidth: 2,
  },
});
export default Subtitle;
