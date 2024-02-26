import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import { ComponentProps } from 'react';

export const homeStackScreenOptions: ComponentProps<
    typeof Stack
    >['screenOptions'] = {
    headerShown: false,
};

export const apartmentScreenOptions: NativeStackNavigationOptions = {
    presentation: 'modal',
    headerTitle: 'Sushi Details',
    headerShown: true,
};

export const sushiScreenOptions: NativeStackNavigationOptions = {
    presentation: 'modal',
    headerTitle: 'Sushi Details',
    headerShown: true,
};

export const productScreenOptions: NativeStackNavigationOptions = {
    presentation: 'modal',
    headerTitle: 'Product Details',
    headerShown: true,
};

export const searchScreenOptions: NativeStackNavigationOptions = {
    presentation: 'modal',
    headerTitle: 'Search Details',
    headerShown: true,
};