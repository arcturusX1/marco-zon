import MacroGrid from '@/components/MacroGrid';
import RecentMeals from '@/components/RecentMeals';
import { globalStyles } from '@/styles/global';
import { ScrollView, Text } from 'react-native';
import HomeHeader from '../../components/HomeHeader';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals/>
    </ScrollView>
  );
}