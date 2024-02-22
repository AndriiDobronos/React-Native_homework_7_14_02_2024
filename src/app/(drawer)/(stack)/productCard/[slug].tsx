import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLocalSearchParams } from 'expo-router';
import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import { ProductCard } from "@/components/ProductCard";
import {PIZZA_DATA } from "@/constants";

const ProductScreen = () => {

    const isDark = useColorScheme() === 'dark';
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const { slug } = useLocalSearchParams<{ slug: string }>();

    const item = PIZZA_DATA.find((item) => item.title === slug);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: item?.title ?? 'Product Details',
        });
    }, [navigation, item?.title]);

    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.screenTitle,
                    {
                        color: isDark ? '#fff' : '#000',
                    },
                ]}>
                Product Details
            </Text>
            {item && <ProductCard mockItemData={item}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 36,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default ProductScreen;