import I1 from '../assets/img/i1.png';
import F5 from '../assets/img/f1.png';
import D5 from '../assets/img/c3.png';
import F4 from '../assets/img/fi1.png';

const heroData = [
    {
        id: 1,
        name: 'Icecream',
        description: 'Chocolate & Vanilla',
        price: '4.25',
        imageSrc: I1,
    },
    {
        id: 2,
        name: 'fruit',
        description: 'strawberry',
        price: '4.25',
        imageSrc: F5,
    },
    {
        id: 3,
        name: 'Drink',
        description: 'Sprite',
        price: '4.25',
        imageSrc: D5,
    },
    {
        id: 4,
        name: 'fruit',
        description: 'Grape',
        price: '4.25',
        imageSrc: F4,
    },
];
const categories = [
    {
        id: 1,
        name: 'Chicken',
        urlParamName: 'chicken',
    },
    {
        id: 2,
        name: 'Curry',
        urlParamName: 'curry',
    },
    {
        id: 3,
        name: 'Rice',
        urlParamName: 'rice',
    },
    {
        id: 4,
        name: 'Fish',
        urlParamName: 'fish',
    },
    {
        id: 5,
        name: 'Fruits',
        urlParamName: 'fruits',
    },
    {
        id: 6,
        name: 'Icecreams',
        urlParamName: 'icecreams',
    },

    {
        id: 7,
        name: 'Soft Drinks',
        urlParamName: 'drinks',
    },
];
export { heroData, categories };
