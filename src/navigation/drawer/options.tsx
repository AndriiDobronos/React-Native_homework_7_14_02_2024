import { Drawer } from 'expo-router/drawer';
import { ComponentProps } from 'react';

export const drawerScreenOptions: ComponentProps<
    typeof Drawer
    >['screenOptions'] = {
    headerShown: false,
};