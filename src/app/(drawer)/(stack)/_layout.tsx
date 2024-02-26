import { Stack } from 'expo-router';
import {
    sushiScreenOptions, homeStackScreenOptions
} from '@/navigation/native-stack/options';

const HomeStackGroup = () => (
    <Stack screenOptions={homeStackScreenOptions}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="sushi/[slug]" options={sushiScreenOptions} />
    </Stack>
);

export default HomeStackGroup;