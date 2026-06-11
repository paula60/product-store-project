import backpack from '../assets/backpack.jpg';
import bag from '../assets/bag.jpg';
import coffee from '../assets/coffee.jpg';
import coffeeMachine from '../assets/coffeeMachine.jpg';
import earbuds from '../assets/earbuds.jpg';
import headphones from '../assets/headphones.jpg';
import keyboard from '../assets/keyboard.jpg';
import kindle from '../assets/kindle.jpg';
import legoSet from '../assets/legoSet.jpg';
import mysteryBox from '../assets/mysteryBox.jpg';
import shoes from '../assets/shoes.jpg';
import speaker from '../assets/speaker.jpg';
import watch from '../assets/watch.jpg';

const products = [
    {
        id: '1',
        title: 'Sony Headphones',
        description: 'Industry-leading noise cancelling wireless headphones with premium sound quality.',
        categories: ['Electronics', 'Audio'],
        price: 349.99,
        fx: 'EUR',
        image: headphones,
        brand: 'Sony',
        shippingDays: 2,
        options: [
            { label: 'Black', price: 0 },
            { label: 'Silver', price: 10 }
        ]
    },
    {
        id: '2',
        title: 'Mystery Reward Box',
        description: 'A surprise selection of premium reward items. Contents vary.',
        categories: ['Rewards', 'Surprise'],
        price: 7500,
        fx: 'Points',
        image: mysteryBox
    },
    {
        id: '3',
        title: 'Nike Shoes',
        description: 'Lightweight and responsive shoes designed for everyday wear.',
        categories: ['Footwear', 'Sports'],
        price: 129.99,
        fx: 'EUR',
        image: shoes,
        brand: 'Nike',
        shippingDays: 5,
        options: [
            { label: 'UK 4', price: 0 },
            { label: 'UK 5', price: 0 },
            { label: 'UK 7', price: 0 }
        ]
    },
    {
        id: '4',
        title: 'Amazon Kindle Paperwhite',
        description: 'Waterproof e-reader with glare-free display and weeks of battery life.',
        categories: ['Electronics', 'Books'],
        price: 149.99,
        fx: 'USD',
        image: kindle,
        brand: 'Amazon',
        shippingDays: 4
    },
    {
        id: '5',
        title: 'Apple AirPods',
        description: 'AirPods reduce background noise and isolate during calls.',
        categories: ['Electronics', 'Accessories'],
        price: 35,
        fx: 'EUR',
        image: earbuds,
        brand: 'Apple'
    },
    {
        id: '6',
        title: 'Reward Points Gift Card',
        description: 'Redeem reward points for a digital gift card delivered instantly.',
        categories: ['Rewards'],
        price: 5000,
        fx: 'Points'
    },
    {
        id: '7',
        title: 'Travel Backpack',
        description: 'Durable carry-on backpack with laptop compartment.',
        categories: ['Travel', 'Accessories'],
        price: 89.99,
        fx: 'EUR',
        image: backpack,
        shippingDays: 7
    },
    {
        id: '8',
        title: 'Luxury Spa Experience',
        description: 'Full-day spa package including massage, sauna, and wellness treatments.',
        categories: ['Experiences', 'Wellness'],
        price: 120,
        fx: 'EUR',
        shippingDays: 1
    },
    {
        id: '9',
        title: 'Lego Set',
        description: 'Detailed Lego skyline set featuring iconic London landmarks.',
        categories: ['Toys', 'Collectable'],
        price: 59.99,
        fx: 'USD',
        image: legoSet,
        brand: 'Lego',
        shippingDays: 5
    },
    {
        id: '10',
        title: 'Coffee Machine',
        description: 'Convenient capsule coffee machine delivering barista-quality coffee at home.',
        categories: ['Home', 'Kitchen'],
        price: 59.99,
        fx: 'EUR',
        image: coffeeMachine,
        brand: 'Nespresso',
        shippingDays: 1
    },
    {
        id: '11',
        title: 'Smart Fitness Watch',
        description: 'Track workouts, monitor heart rate, and stay connected with notifications.',
        categories: ['Wearables', 'Fitness'],
        price: 149.99,
        fx: 'EUR',
        image: watch,
        brand: 'FitPro',
        shippingDays: 5,
        options: [
            { label: 'Black', price: 0 },
            { label: 'Silver', price: 10 }
        ]
    },
    {
        id: '12',
        title: 'Bluetooth Speaker',
        description: 'Compact speaker with powerful sound and up to 12 hours of battery life.',
        categories: ['Audio'],
        price: 9.99,
        fx: 'USD',
        image: speaker,
        brand: 'SoundWave',
        shippingDays: 5
    },
    {
        id: '13',
        title: 'Coffee Subscription Voucher',
        description: 'Redeem for a monthly coffee subscription and enjoy premium blends.',
        categories: ['Rewards'],
        price: 5000,
        fx: 'Points',
        image: coffee
    },
    {
        id: '14',
        title: 'Work Bag',
        description: 'Durable bag with multiple compartments for travel and everyday use.',
        categories: ['Accessories'],
        price: 59.99,
        fx: 'EUR',
        image: bag,
        shippingDays: 5
    },
    {
        id: '15',
        title: 'Mechanical Gaming Keyboard',
        description: 'RGB mechanical keyboard with customizable switches and lighting.',
        categories: ['Gaming', 'Computers'],
        price: 199.99,
        fx: 'USD',
        image: keyboard,
        shippingDays: 2,
        options: [
            { label: 'Red Switches', price: 0 },
            { label: 'Blue Switches', price: 5 },
            { label: 'Brown Switches', price: 5 }
        ]
    },
    {
        id: '16',
        title: 'Mystery Reward Box',
        description: 'A surprise reward box containing a selection of exclusive items.',
        categories: ['Rewards'],
        price: 3000,
        fx: 'Points',
        brand: 'Product Store'
    }
];

export default products;
