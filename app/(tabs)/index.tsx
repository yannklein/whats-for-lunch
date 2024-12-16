import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

type Event = {
  id: string;
  tky_even_meetup_id: string;
  name: string;
  venue: string;
  event_date: string;
  url: string;
  description: string;
};

export default function HomeScreen() {
  const fetchEvents = async () => {
    try {
      const url = 'https://tokyo-events.herokuapp.com/api';
      const response = await fetch(url);
      const events = await response.json();      
      setEvents(events);
      
    } catch (error) {
      console.error(error);
    }
  };
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const extractDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);  
  };

  return (
    <>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.mainContainer}>
        <View className="flex items-center mt-16 mb-5">
          <Text className="text-5xl text-center font-bold">
            Le Wagon Tokyo toolkit 🛠️
          </Text>
        </View>
        <View>
          <Text className="text-2xl text-center">
            Your one-stop app to boost your bootcamp experience.
          </Text>
        </View>
        <View className="flex items-center mt-16 min-h-80 justify-end">
          <Text className="text-3xl text-center font-bold mb-5">
            Upcoming events 📅
          </Text>
          <View className="flex flex-col gap-2 items-end w-full mb-5">
            {events.slice(0,3).map((event) => (
              <View key={event.id} className="flex flex-row gap-2 items-center w-full">
                <View className="flex flex-col items-center justify-center border-2 border-red-600 rounded-2xl h-16 w-16">
                  <Text className="text-red-600 text-md">{extractDate(event.event_date)}</Text>
                  <Text className="text-red-600 text-md">
                    {event.event_date.split('-')[0]}
                  </Text>
                </View>
                <Text className="text-xl max-w-80">{event.name}</Text>
              </View>
            ))}
          </View>
          <Text className="bg-red-400 border-2 border-red-500 rounded-2xl px-6 py-4 text-xl">
            See all the events
          </Text>
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
