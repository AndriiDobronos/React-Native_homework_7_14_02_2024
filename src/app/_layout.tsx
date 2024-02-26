import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Provider} from "react-redux";
import { drawerScreenOptions } from '@/navigation/drawer/options';
import store from '@/store/index.ts'
import reduce from "postcss-calc/types/lib/reducer";
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
    initialRouteName: '(drawer)/(stack)',
};

// -- Drawer
//    -- Home Stack Group
//        -- Tabs
//           -- Explore -> Should be the default screen
//           -- Apartments
//           -- ProductCards
//           -- Profile
//        -- Apartment Details -> Modal
//    -- Settings

export default function Layout() {
    const isDark = useColorScheme() === 'dark';

    return (
        <Provider store={store}>
            <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
                <StatusBar style="auto" />
                <GestureHandlerRootView style={styles.container}>
                    <Drawer screenOptions={drawerScreenOptions}>
                        <Drawer.Screen
                            name="(drawer)/(stack)"
                            options={{
                                drawerLabel: 'Home',
                            }}
                        />
                        <Drawer.Screen
                            name="(drawer)/settings"
                            options={{
                                drawerLabel: 'Settings',
                            }}
                        />
                    </Drawer>
                </GestureHandlerRootView>
            </ThemeProvider>
        </Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});