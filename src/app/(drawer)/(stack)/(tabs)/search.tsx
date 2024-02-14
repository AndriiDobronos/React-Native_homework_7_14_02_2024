import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import {SearchAndFilter} from "@/components/SearchAndFilter";

const SearchScreen = () => {
    const isDark = useColorScheme() === 'dark';
    const screenTitleStyle = [
        styles.screenTitle,
        { color: isDark ? '#fff' : '#000' },
    ];

    return (
        <View style={styles.container}>
            {/*<Text style={screenTitleStyle}>Search Screen</Text>*/}
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