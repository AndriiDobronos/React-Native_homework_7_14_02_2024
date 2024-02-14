import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    useColorScheme, TextInput, TextInputProps, Button,
} from 'react-native';
import React from 'react';
import {useSelector} from "react-redux";
import {
    fetchUserById,
    selectFirstName,
    selectFullName,
    selectLastName, selectUserF,
    selectUserId,
    setFirstName,
    setLastName,
    setUserId,
} from "@/store/user/userSlice";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {useFocusEffect} from "expo-router";
import {useCallback,useEffect} from "react";
import store from "@/store";

const ProfileScreen = () => {

    const dispatch = useAppDispatch();
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    const fullName = useSelector(selectFullName);
    const userId = useSelector(selectUserId);
    const userF = useSelector(selectUserF);
    const loading = useSelector(state => state.user.loading)
    const action = useSelector(state => state.user.userF)
    const isDark = useColorScheme() === 'dark';

    const textStyle = { color: isDark ? '#fff' : '#000' };
    const screenTitleStyle = [styles.screenTitle, textStyle];

    const handleFirstNameChange:TextInputProps['onChangeText'] = (text) => dispatch(setFirstName(text));
    const handleLastNameChange = (text:string) => dispatch(setLastName(text));
    const handleUserIdChange = (text:string) => dispatch(setUserId(text));

    const sendRequest = () => {
        console.log("*********************",userId)
        console.log("store:",store.getState())
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(()=>{
            const promise = dispatch(fetchUserById(+userId))
            return () => {
                promise.abort()
            }
        },[refreshing])

    // useFocusEffect(useCallback(()=>{
    //         const promise = dispatch(fetchUserById(+userId))
    //         return () => {
    //             promise.abort()
    //         }
    //
    //     },[]))

    // if (loading) {
    //     return <Text textStyle>Loading ...</Text>
    // }

    return (
        <View style={styles.container}>
            <Text style={screenTitleStyle}>Profile Screen</Text>
            <Text style={textStyle}>Name: {firstName} {lastName}</Text>
            <Text style={textStyle}>UserId: {userId}</Text>
            <TouchableOpacity>
                <Text style={textStyle}>Edit Profile</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={handleFirstNameChange}
                />
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={handleLastNameChange}
                />
                <TextInput
                    style={styles.input}
                    value={userId}
                    onChangeText={handleUserIdChange}
                />
            </TouchableOpacity>
            <Button
                title={`Make a request by Id: ${userId}`}
                style={styles.button}
                //onPress={sendRequest}
                onPress={onRefresh}
            />
            <Text style={textStyle}>Status: {loading}</Text>
            <Text style={textStyle}>User name of fetch: {userF?.name}</Text>
            <Text style={textStyle}>User id of fetch: {userF?.id}</Text>
            <Text style={textStyle}>Action payload: the fields with the names have changed :
                 {Object.keys(action ? action : {}).join(" , ")}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 24,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
    input: {
        borderWidth:1,
        borderColor:'white',
        color:'white',
        marginBottom:5,
    },
    button: {

    }
});

export default ProfileScreen;