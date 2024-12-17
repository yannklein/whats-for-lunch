import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

type Event = {
  id: string;
  tky_even_meetup_id: string;
  name: string;
  venue: string;
  event_date: string;
  url: string;
  description: string;
};

export default function EventList({ limit }: { limit?: number }) {
  const fetchEvents = async () => {
    try {
      const url = 'https://tokyo-events.herokuapp.com/api';
      const response = await fetch(url);
      const events = await response.json();
      if (limit) {
        setEvents(events.slice(0, limit));
      } else {
        setEvents(events);
      }
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
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <View className="mb-5">
      {events.map((event) => (
        <Link key={event.id} href={event.url} className="mb-3">
          <View className="flex flex-row gap-2 items-center">
            <View className="flex flex-col items-center justify-center border-2 border-red-600 rounded-2xl h-16 w-16">
              <Text className="text-red-600 text-md">
                {extractDate(event.event_date)}
              </Text>
              <Text className="text-red-600 text-md">
                {event.event_date.split('-')[0]}
              </Text>
            </View>
            <Text className="text-xl max-w-80">{event.name}</Text>
          </View>
        </Link>
      ))}
    </View>
  );
}
