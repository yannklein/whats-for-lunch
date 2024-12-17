import { StyleSheet, View, Text } from 'react-native';

export default function Links() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text>Explore</Text>
      </View>
      <Text>This app includes example code to help you get started.</Text>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
