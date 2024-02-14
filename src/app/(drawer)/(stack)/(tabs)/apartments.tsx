import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    ListRenderItem,
    useColorScheme,
} from 'react-native';

import { ApartmentCard } from '@/components';
import { Apartment, APARTMENT_DATA } from '@/constants';
const renderItem: ListRenderItem<Apartment> = ({ item }) => (
    <ApartmentCard {...item} />
);

const ApartmentsScreen = () => {
    const isDark = useColorScheme() === 'dark';

    const ref = useRef<FlatList>(null);

    useScrollToTop(ref);

    const screenTitleStyle = [
        styles.screenTitle,
        { color: isDark ? '#fff' : '#000' },
    ];

    return (
        <FlatList
            ref={ref}
            ListHeaderComponent={
                <Text style={screenTitleStyle}>Apartments Screen</Text>
            }
            data={APARTMENT_DATA}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 16,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default ApartmentsScreen;