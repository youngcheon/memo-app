import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useTheme} from 'styled-components';

import {RootStackParamList} from '@/types';
import Detail from '@/page/Detail/Detail';
import Home from '@/page/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
    const {color} = useTheme();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: color.main,
                    },
                    headerTintColor: color.white,
                    headerTitleStyle: {
                        fontWeight: 700,
                    },
                    headerBackTitleVisible: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} options={{title: '메모 리스트'}} />
                <Stack.Screen name="Detail" component={Detail} options={{title: ''}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
