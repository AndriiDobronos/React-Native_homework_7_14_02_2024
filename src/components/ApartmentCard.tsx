import { useRouter } from 'expo-router';
import { FC } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    useColorScheme,
} from 'react-native';
import {Sushi}from '@/constants';

const ApartmentCard: FC<Sushi> = ({ name, image, price }) => {
    const isDark = useColorScheme() === 'dark';
    const router = useRouter();

    const handlePress = () => {
        router.push(`/(drawer)/(stack)/apartment/${name}`);
    };

    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: isDark ? '#767676' : '#e8e8e8' },
            ]}
            onPress={handlePress}>
            {/*<Image source={{ uri: image }} style={styles.image} />*/}
            <Image source={ image } style={styles.image} />
            <View style={styles.footer}>
                <Text style={[styles.name, { color: isDark ? 'white' : '#000' }]}>
                    {name}
                </Text>
                <Text style={[styles.price, { color: isDark ? '#8cf16d' : 'green' }]}>
                    Price: Uah{price}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 8,
        borderRadius: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    price: {
        fontWeight: 'bold',
    },
    footer: {
        padding: 16,
    },
});

export { ApartmentCard };