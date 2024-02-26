import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { ComponentProps } from 'react';

export const tabScreenOptions: ComponentProps<typeof Tabs>['screenOptions'] = ({
                                                                                   route,
                                                                               }) => {
    const routeName = route.name;

    return {
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size, focused }) => {
            let iconName: ComponentProps<typeof Ionicons>['name'] = 'alert';

            switch (routeName) {
                case 'index': {
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                }
                case 'apartments': {
                    iconName = focused ? 'albums' : 'albums-outline';
                    break;
                }
                case 'sushi': {
                    iconName = focused ? 'albums' : 'albums-outline';
                    break;
                }
                case 'productCards': {
                    iconName = focused ? 'menu' : 'menu-outline';
                    break;
                }
                case 'search': {
                    iconName = focused ? 'search' : 'search-outline';
                    break;
                }
                case 'profile': {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                    break;
                }
            }

            return <Ionicons name={iconName} size={size} color={color} />;
        },
    };
};
//export default tabScreenOptions;