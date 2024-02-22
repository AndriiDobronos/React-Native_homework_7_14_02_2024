import trolley from "../images/trolley.png";
import redHeart from "../images/redHeart.png";
import image1 from "@/images/Pizza1.png";
import image2 from "@/images/Pizza2.png";
import image3 from "@/images/Pizza3.png";
import image4 from "@/images/Pizza4.png";
import image5 from "@/images/Pizza5.png";
import image6 from "@/images/Pizza6.png";
import image7 from "@/images/Pizza7.png";
import image8 from "@/images/Pizza8.png";
import image9 from "@/images/Pizza9.png";
import image10 from "@/images/Pizza10.png";
import image11 from "@/images/Pizza11.png";
import image12 from "@/images/Pizza12.png";
import {ImageBase } from "react-native";
import sushi1 from "@/images/sushi1.png";
import sushi2 from "@/images/sushi2.png";
import sushi3 from "@/images/sushi3.png";
import sushi4 from "@/images/sushi4.png";
import sushi5 from "@/images/sushi5.png";
import sushi6 from "@/images/sushi6.png";
import sushi7 from "@/images/sushi7.png";
import sushi8 from "@/images/sushi8.png";
import sushi9 from "@/images/sushi9.png";

export interface Pizza {
    title: string,
    isNew: boolean,
    newPrice: string,
    priceNew: string,
    priceOld: string,
    oldPrice: string,
    description:string,
    imageInternet: string,
    image: string,
    trolley: string,
    redHeart: string,
    buy: string,
    nw: string,
}

export interface Apartment {
    name: string;
    image: string;
    price: number;
}

export interface Sushi {
    name: string;
    //image: ImageBase;
    image: sushi1;
    price: number;
}

const APARTMENT_DATA: Apartment[] = [
    {
        name: 'Cozy Apartment',
        image:
            'https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 1200,
    },
    {
        name: 'Modern Loft',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
        price: 1500,
    },
    {
        name: 'Urban Studio',
        image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
        price: 1000,
    },
    {
        name: 'Luxury Penthouse',
        image:
            'https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 2500,
    },
    {
        name: 'Charming Condo',
        image:
            'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 900,
    },
];

const SUSHI_DATA: Sushi[] = [
    {
        name: 'Sushi1',
        image: sushi1,
        price: 100,
    },
    {
        name: 'Sushi2',
        image: sushi2,
        price: 110,
    },
    {
        name: 'Sushi3',
        image: sushi3,
        price: 120,
    },
    {
        name: 'Sushi4',
        image: sushi4,
        price: 150,
    },
    {
        name: 'Sushi',
        image: sushi5,
        price: 105,
    },
    {
        name: 'Sushi6',
        image: sushi6,
        price: 130,
    },
    {
        name: 'Sushi7',
        image: sushi7,
        price: 90,
    },
    {
        name: 'Sushi8',
        image: sushi8,
        price: 95,
    },
    {
        name: 'Sushi9',
        image: sushi9,
        price: 85,
    },
]

const PIZZA_DATA: Pizza[] = [
    {
        title: 'Pizza 1',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '30 uah',
        priceOld: '50 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image1,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "NEW",
    },
    {
        title: 'Pizza 2',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '35 uah',
        priceOld: '55 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image2,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "TOP",
    },
    {
        title: 'Pizza 3',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '33 uah',
        priceOld: '53 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image3,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "BEST",
    },
    {
        title: 'Pizza 4',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '34 uah',
        priceOld: '54 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image4,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "NEW",
    },
    {
        title: 'Pizza 5',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '45 uah',
        priceOld: '75 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image5,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "TOP",
    },
    {
        title: 'Pizza 6',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '36 uah',
        priceOld: '56 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image6,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "BEST",
    },
    {
        title: 'Pizza 7',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '45 uah',
        priceOld: '65 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image7,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "NEW",
    },
    {
        title: 'Pizza 8',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '38 uah',
        priceOld: '58 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image8,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "TOP",
    },
    {
        title: 'Pizza 9',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '37 uah',
        priceOld: '57 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image9,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "GOOD",
    },
    {
        title: 'Pizza 10',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '33 uah',
        priceOld: '53 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image10,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "NEW",
    },
    {
        title: 'Pizza 11',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '45 uah',
        priceOld: '75 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image11,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "TOP",
    },
    {
        title: 'Pizza 12',
        isNew: true,
        newPrice: 'New Price',
        priceNew: '36 uah',
        priceOld: '56 uah',
        oldPrice: 'Old Price',
        description:'Long title long title long title long title',
        imageInternet: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
        image: image12,
        trolley: trolley,
        redHeart: redHeart,
        buy: "Buy",
        nw: "BEST",
    },
]



export { APARTMENT_DATA,PIZZA_DATA,SUSHI_DATA};