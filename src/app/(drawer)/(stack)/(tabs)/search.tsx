import { View, StyleSheet, useColorScheme } from 'react-native';
import {SearchAndFilter} from "@/components/SearchAndFilter";

const SearchScreen = () => {
    const isDark = useColorScheme() === 'dark';
    const screenTitleStyle = [
        styles.screenTitle,
        { color: isDark ? '#fff' : '#000' },
    ];

    return (
        <View style={styles.container}>
            <SearchAndFilter  />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default SearchScreen ;