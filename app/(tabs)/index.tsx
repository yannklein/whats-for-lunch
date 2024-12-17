import EventList from '@/components/EventList';
import { Link } from 'expo-router';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.mainContainer}>
        <View className="flex items-center mt-14 mb-3">
          <Text className="text-5xl text-center font-extrabold">
            Tokyo camp toolbox
          </Text>
        </View>
        <View>
          <Text className="text-xl text-center">
            Your one-stop app to boost your bootcamp experience.
          </Text>
        </View>
        <View className="flex items-center mt-14 min-h-80 justify-end">
          <Text className="text-3xl text-center font-bold mb-5">
            Upcoming events 📅
          </Text>
          <EventList limit={3} />
          <Link href="/events" className="bg-red-400 border-2 border-red-500 rounded-2xl px-6 py-4 text-xl">
            See all the events
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 24,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    width: '100%',
    height: 160,
    objectFit: 'contain',
    marginTop: 0,
    padding: 64,
    paddingBottom: 16,
    backgroundColor: 'lightgray',
  },
});
