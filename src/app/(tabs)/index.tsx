import { Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { globalStyles } from '@/styles/global';
// importing deafult exports need no braces
import HomeHeader from '@/components/HomeHeader';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MarcoZon</Text>
    
      <HomeHeader/>
    
      <Link href="/meals" style={
        {fontSize: 18, 
        color: '#007bff'}
        }>Meals
      </Link>
      
      <Link href="/add-meals" style={
        {fontSize: 18, 
        color: '#007bff'}
        }>Add New Meals
      </Link>
    
    </ScrollView>
  );
}

