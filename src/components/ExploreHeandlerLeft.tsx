import { Entypo } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, useColorScheme ,View} from 'react-native';

export const ExploreHeaderLeft = () => {
    const isDark = useColorScheme() === 'dark';
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    return (
            <Pressable onPress={navigation.openDrawer} style={styles.container}>
                <Entypo name="menu" size={24} color={isDark ? '#1DA1F2' : 'grey'} />
            </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        color:"red"
    },
    screen: {
        height:200,
        width: 200,
        alignItems:"center",
        justifyContent: "center",
    }
});
