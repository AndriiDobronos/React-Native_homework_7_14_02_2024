import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    ListRenderItem,
    useColorScheme,
} from 'react-native';
import { SushiCard } from '@/components';
import { Sushi,SUSHI_DATA} from '@/constants';

const renderItem: ListRenderItem<Sushi> = ({ item }) => (
    <SushiCard {...item} />
);

const SushiScreen = () => {
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
                <Text style={screenTitleStyle}>Sushi menu Screen</Text>
            }
            data={SUSHI_DATA}
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

export default SushiScreen;