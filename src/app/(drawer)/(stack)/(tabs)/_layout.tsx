import { Tabs } from 'expo-router';
import { ExploreHeaderLeft } from '@/components/ExploreHeandlerLeft';
import {tabScreenOptions } from '@/navigation/buttom-tabs/options'

const TabsGroup = () => (
    <Tabs screenOptions={tabScreenOptions}>
        <Tabs.Screen
            name="index"
            options={{
                headerLeft: ExploreHeaderLeft,
                headerTitle: '',
                tabBarLabel: 'Explore',
            }}
        />
        <Tabs.Screen
            name="sushi"
            options={{
                headerTitle: 'Sushi menu',
                tabBarLabel: 'Sushi menu',
            }}
        />
        <Tabs.Screen
            name="productCards"
            options={{
                headerTitle: 'Products',
                tabBarLabel: 'Products',
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                headerTitle: 'Search',
                tabBarLabel: 'Search',
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                headerTitle: 'Profile',
                tabBarLabel: 'Profile',
            }}
        />
    </Tabs>
);

export default TabsGroup;