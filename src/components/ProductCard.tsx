import {Image, StyleSheet, Text, useColorScheme, View,TouchableOpacity} from "react-native";
import React from "react";
import {ColorsVar} from "@/constants/ColorsVar";
import image from "../images/Pizza1.png";
import trolley from "../images/trolley.png";
import redHeart from "../images/redHeart.png";
import {useRouter} from "expo-router";
import {mockItemData1} from "@/constants/mockItemData";

type mockProps = {
    mockItemData:{
    title: string,
    isNew: boolean,
    newPrice: string,
    priceNew: string,
    priceOld: string,
    oldPrice: string,
    description:string,
    imageInternet: string,
    image: image,
    trolley: trolley,
    redHeart: redHeart,
    buy: string,
    new: string,
    }
};

const ProductCard = (props:mockProps) => {
    const isDark = useColorScheme() === 'dark';
    const router = useRouter();

    const handlePress = () => {
        router.push(`/(drawer)/(stack)/productCard/${props.mockItemData.title}`);
    };

    return(

        <TouchableOpacity
            style={[

                { backgroundColor: isDark ? '#767676' : '#e8e8e8' },
            ]}
            onPress={handlePress}>
        <View style={styles.container}>
            <Image style={styles.imageMain} source={props.mockItemData.image}/>
            <View style={styles.roundContainer}>
                <Text style={styles.textNew}>{props.mockItemData.nw}</Text>
            </View>
            <View style={styles.centerContainer}>
                <Text style={styles.textStyle}>{props.mockItemData.title}</Text>
                <View style={styles.box}>
                    <Text style={styles.textAverage}>{props.mockItemData.newPrice}</Text>
                    <Text style={styles.textAverageRight}>{props.mockItemData.oldPrice}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.textAverage}>{props.mockItemData.priceNew}</Text>
                    <Text style={styles.textAverage}>{props.mockItemData.priceOld}</Text>
                </View>
                <Text numberOfLines={1}  elipsizeModel = "tail" style={styles.textDescription}>{props.mockItemData.description}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image style={styles.imageRedHeart} source={props.mockItemData.redHeart}/>
                <View style={styles.bottomBox}>
                    <Text style={styles.textAverage}>{props.mockItemData.buy}</Text>
                    <Image style={styles.imageTrolley} source={props.mockItemData.trolley}/>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        //flex:0.2,
        height:146,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:8,
        margin:10,
        backgroundColor: ColorsVar.cardsBackground,
        borderRadius:8,
        borderStyle: "solid",
        borderWidth:1,
        borderColor: ColorsVar.borderColor,
        shadowColor: ColorsVar.shadowColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    roundContainer: {
        marginLeft:-50,
        //left:-26,
        marginTop:6,
        height:46,
        width:46,
        borderRadius:23,
        borderStyle: "solid",
        borderWidth:1,
        borderColor: ColorsVar.borderColor,
        backgroundColor: ColorsVar.mainBackground,
        justifyContent:"center",
        alignItems:"center",
    },
    centerContainer: {
        flexDirection:"column",
        justifyContent:"space-evenly",
        marginLeft:8,
    },
    rightContainer: {
        flexDirection:"column",
        justifyContent:"space-evenly",
    },
    box: {
        flexDirection:"row",
        justifyContent:"space-around",
        //justifyContent:"space-evenly",
        //maxWidth:200,
        gap:5,

    },
    bottomBox: {
        flexDirection:"row",
        alignItems:  "center",
    },
    imageMain:{
        marginTop:20,
        width:100,
        height:100,
        marginHorizontal:12,
        marginVertical:16,
    },
    imageRedHeart: {
        width:40,
        height:40,
        marginLeft: 30,
        marginBottom:34,
    },
    imageTrolley: {
        width:40,
        height:40,
        marginLeft: 7,
    },
    textStyle: {
        textTransform:"uppercase"
    },
    textAverage: {
        fontSize:12,
        fontWeight:"bold",
    },
    textAverageRight: {
        fontSize:12,
        textDecorationLine:"line-through",
        marginBottom: -10,
    },
    textDescription: {
        marginLeft:-10,
        maxWidth:146,
        fontSize: 12,
        marginBottom:5,
    },
    textNew: {
        fontSize:10,
    },
})

export {ProductCard}