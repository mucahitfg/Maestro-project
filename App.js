import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BlogScreen from './src/screens/BlogScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import BlogContextProvider from './src/store/BlogContext';
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <BlogContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Blog' component={BlogScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Blog Detail' component={BlogDetailScreen} options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#f8efed' },
            headerTitle: 'Details',
            headerTintColor: 'black',
            headerTitleStyle:{fontWeight:'700', fontSize:20},
            headerLeft: () => (
              <Ionicons onPress={() => navigation.navigate('Blog')}
                name='arrow-back-circle'
                size={30}
                color='black'
              />
            )
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogContextProvider>
  );
}


