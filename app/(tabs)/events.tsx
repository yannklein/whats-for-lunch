import EventList from '@/components/EventList';
import { View, Text } from 'react-native';

export default function Events() {
  return (
    <View className="pt-14 py-6">
      <View className="flex items-center justify-end">
        <View className="flex items-center my-14">
          <Text className="text-5xl text-center font-extrabold">
            Upcoming events in Tokyo 📅
          </Text>
        </View>
        <EventList />
      </View>
    </View>
  );
}
