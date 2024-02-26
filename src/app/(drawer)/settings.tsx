import {View, Text, StyleSheet, useColorScheme, Switch} from 'react-native';
import {useAppSelector} from "@/hooks/useAppSelector";
import {selectTheme, toggleTheme} from "@/store/theme/themeSlice";
import {useAppDispatch} from "@/hooks/useAppDispatch";

const SettingsScreen = () => {

    const theme = useAppSelector(selectTheme);

    const dispatch = useAppDispatch()

    const isDark = useColorScheme() === 'dark';
    const screenTitleStyle = [
        styles.screenTitle,
        { color: isDark ? '#fff' : '#000' },
    ];

    const handleValueChange = () => {
        //dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'))
        dispatch(toggleTheme());
    }

    return (
        <View style={styles.container}>
            <Text style={screenTitleStyle}>Settings Screen</Text>
            <Text style={screenTitleStyle}>{theme}</Text>
            <Switch  value={theme === 'dark'}
                     onValueChange={handleValueChange}
            />
            <View style={[styles.screenView,{backgroundColor:theme === 'light' ? '#fff' : '#000'}]}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 26,
        marginTop: 44,
        alignItems:"center",
        backgroundColor:"lightgrey"
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
    screenView: {
        width:260,
        height:260,
        marginTop:20,
    }
});

export default SettingsScreen;