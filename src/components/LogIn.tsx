import React,{useRef} from 'react';
import {View, StyleSheet, TextInput, Text, Animated, useColorScheme,} from "react-native";


const LogIn = () => {

    const isDark = useColorScheme() === 'dark';
    const inputStyle = [styles.input,{ color: isDark ? '#fff' : '#000'}];
    const textStyle = [styles.text,{ color: isDark ? '#fff' : '#000'}];

    const fadeAnim1 = useRef(new Animated.Value(0.3)).current;
    const fadeAnim2 = useRef(new Animated.Value(0.3)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const translateY1 = useRef(new Animated.Value(0)).current;
    const scaleY =  useRef(new Animated.Value(1)).current;
    const scaleY1 =  useRef(new Animated.Value(1)).current;
    const [text, setText] = React.useState("");
    const [textPassword, setTextPassword] = React.useState("");
    const [requiredEmail, setRequiredEmail] = React.useState(false);
    const [requiredPassword, setRequiredPassword] = React.useState(false);

    const focusEmail = () => {
        Animated.timing(fadeAnim1, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(translateY, {
                toValue: -18,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(scaleY, {
                toValue: 0.51,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
        if(textPassword === '') {
            Animated.timing(fadeAnim2, {
                toValue: 0.3,
                duration: 500,
                useNativeDriver: true,
            }).start();
            Animated.timing(translateY1, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start();
            Animated.timing(scaleY1, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start();
        }
        setRequiredEmail(true);
        setRequiredPassword(false);
    };

    const focusPassword = () => {
        Animated.timing(fadeAnim1, {
            toValue: 0.3,
            duration: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(fadeAnim2, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(translateY1, {
                toValue: -18,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(scaleY1, {
                toValue: 0.51,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
        setText(text)
        setRequiredEmail(false);
        setRequiredPassword(true);
        if(text === '') {
            Animated.timing(scaleY, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start();
            Animated.timing(translateY, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start();
        }
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let borderColor
    switch(true) {
        case emailRegex.test(text):
            borderColor="green"
            break;
        case text !== "":
            borderColor="red"
            break;
        default:
            borderColor="grey";
    }

    const prompt = (!requiredEmail || emailRegex.test(text)) ? '':
        (text.length >= 1) ? 'Email is invalid':
            'Email is required'
    const promptPassword = (!requiredPassword || textPassword.length > 2) ? '':
        (textPassword.length) ? 'Password is invalid' :
            'Password is required'

    return(
        <>
            <View style={styles.container} >
                <TextInput
                    style={[inputStyle,{borderColor:borderColor}]}
                    onFocus={focusEmail}
                    onChangeText={setText}
                    value={text}
                    editable
                />
                <Animated.Text style={[textStyle,{
                    opacity: fadeAnim1,
                    transform: [{ translateY },{scaleY}],
                }]}>Personal Email</Animated.Text>
                <Text style={styles.prompt}>{prompt}</Text>
            </View>
            <View style={styles.container} >
                <TextInput
                    style={[inputStyle,{borderColor:(textPassword.length > 2) ? 'green': textPassword === ''?'grey':'red'}]}
                    onFocus={focusPassword}
                    onChangeText={setTextPassword}
                    value={textPassword}
                    editable
                />
                <Animated.Text style={[textStyle,{
                    opacity: fadeAnim2,
                    transform: [{ translateY:translateY1 },{scaleY:scaleY1}],
                }]}>Password</Animated.Text>
                <Text style={styles.prompt}>{promptPassword}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical:10,
        marginBottom:8,
    },
    text: {
        left:5,
        zIndex:-1,
        marginTop:-44,
    },
    input: {
        borderStyle:"solid",
        borderWidth:1,
        borderRadius:6,
        padding:15,
        minWidth:200,
    },
    prompt: {
        color:'red',
        top:18,
    }
});
export default LogIn;