import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    ListRenderItem,
    useColorScheme,
} from 'react-native';

import { ProductCard } from "@/components/ProductCard";
import { Pizza,PIZZA_DATA } from '@/constants';

const renderItem: ListRenderItem<Pizza> = ({ item }) => (
    <ProductCard mockItemData={item}/>
);

const ProductScreen = () => {
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
                <Text style={screenTitleStyle}>Products Screen</Text>
            }
            data={PIZZA_DATA}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {

    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default ProductScreen;