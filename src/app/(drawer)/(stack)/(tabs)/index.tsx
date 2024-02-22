import { Text, StyleSheet, ScrollView, useColorScheme,View } from 'react-native';

import { ApartmentCard } from '@/components/ApartmentCard';
import { APARTMENT_DATA,PIZZA_DATA,SUSHI_DATA } from '@/constants';
import {ProductCard} from "@/components/ProductCard";

const ExploreScreen = () => {
    const isDark = useColorScheme() === 'dark';

    const screenTitleStyle = [
        styles.screenTitle,
        { color: isDark ? '#fff' : '#000' },
    ];

    const sectionTitleStyle = [
        styles.sectionTitle,
        { color: isDark ? '#fff' : '#000' },
    ];

    return (
        <ScrollView >
            <Text style={screenTitleStyle}>General menu</Text>

            <ProductCard  mockItemData={PIZZA_DATA[0]}/>
            <ProductCard  mockItemData={PIZZA_DATA[1]}/>
            <ProductCard  mockItemData={PIZZA_DATA[2]}/>
            <ProductCard  mockItemData={PIZZA_DATA[3]}/>
            <ProductCard  mockItemData={PIZZA_DATA[4]}/>
            <ProductCard  mockItemData={PIZZA_DATA[5]}/>
            <ProductCard  mockItemData={PIZZA_DATA[6]}/>
            <ProductCard  mockItemData={PIZZA_DATA[7]}/>
            <ProductCard  mockItemData={PIZZA_DATA[8]}/>
            <ProductCard  mockItemData={PIZZA_DATA[9]}/>
            <ProductCard  mockItemData={PIZZA_DATA[10]}/>
            <ProductCard  mockItemData={PIZZA_DATA[11]}/>

            <View contentContainerStyle={styles.container}>
                <Text style={sectionTitleStyle}>Salmon Sushi</Text>
                <ApartmentCard {...SUSHI_DATA[0]} />
                <ApartmentCard {...SUSHI_DATA[1]} />
                <ApartmentCard {...SUSHI_DATA[2]} />

                <Text style={sectionTitleStyle}>Most Popular Sushi</Text>
                <ApartmentCard {...SUSHI_DATA[3]} />
                <ApartmentCard {...SUSHI_DATA[4]} />
                <ApartmentCard {...SUSHI_DATA[5]} />

                <Text style={sectionTitleStyle}>Sushi at the best price</Text>
                <ApartmentCard {...SUSHI_DATA[6]} />
                <ApartmentCard {...SUSHI_DATA[7]} />
                <ApartmentCard {...SUSHI_DATA[8]} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 16,
    },
    sectionTitle: {
        fontSize: 18,
        marginTop: 16,
        fontWeight: 'bold',
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default ExploreScreen;