import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLocalSearchParams } from 'expo-router';
import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import {PIZZA_DATA } from "@/constants";
import { SUSHI_DATA } from "@/constants";
import { ApartmentCard } from '@/components/ApartmentCard';
import { APARTMENT_DATA } from '@/constants';

const ApartmentScreen = () => {
    const isDark = useColorScheme() === 'dark';
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const { slug } = useLocalSearchParams<{ slug: string }>();

    //const item = APARTMENT_DATA.find((item) => item.name === slug);
    const item = SUSHI_DATA.find((item) => item.name === slug);
    const item1 = PIZZA_DATA.find((item1) => item1.title === slug);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: item?.name ?? 'Sushi Details',
        });
    }, [navigation, item?.name]);

    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.screenTitle,
                    {
                        color: isDark ? '#fff' : '#000',
                    },
                ]}>
                Sushi Details
            </Text>
            {item && <ApartmentCard {...item} />}
            {/*{item1 && <ProductCard {...item1}/>}*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default ApartmentScreen;