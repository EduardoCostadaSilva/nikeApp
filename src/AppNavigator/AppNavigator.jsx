import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Home from '../pages/Home/index';
import Detail from '../pages/Detail/index';
import LoginScreen from '../pages/Login';
import PhotoPostScreen from '../pages/PhotoPost';
import FeedScreen from '../pages/FeedScreen/FeedScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-cart"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen
                    name="PhotoPost"
                    component={PhotoPostScreen}
                    options={{ title: "Nova Postagem" }}
                />
                <Stack.Screen
                    name="FeedScreen"
                    component={FeedScreen}
                    options={{ title: "Seu feed" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;