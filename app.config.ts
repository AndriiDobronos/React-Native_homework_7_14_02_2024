import 'ts-node/register' // Add this to import TypeScript files
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
    plugins: ['expo-router'],
    scheme: 'your-app-scheme',
    name: 'my-app',
    slug: 'my-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
        '**/*'
    ],
    ios: {
        supportsTablet: true
    },
    android: {
        adaptiveIcon: {
            foregroundImage: './assets/adaptive-icon.png',
            backgroundColor: '#ffffff'
        }
    },
    web: {
        favicon: './assets/favicon.png',
        bundler: 'metro',
    },
    experiments: {
        tsconfigPaths: true,
        typedRoutes: true,
    }
};

export default config;