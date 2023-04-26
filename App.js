import { SafeAreaView, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BlogScreen from './src/screens/BlogScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import BlogContextProvider from './src/store/BlogContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Blog' component={BlogScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Blog Detail' component={BlogDetailScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
    </BlogContextProvider>
  );
}


