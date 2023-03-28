import { ADMIN_ROLE, CUSTOMER_ROLE, Product } from './common-types';
import { Order } from './api-service/api.service';
import { User } from './auth-service/auth.service';

export const MOCK_USERS: User[] = [
  {
    username: 'admin',
    password: 'admin',
    email: 'admin@admin.ru',
    role: ADMIN_ROLE,
  },

  {
    username: 'customer',
    password: 'customer',
    email: 'customer@customer.ru',
    role: CUSTOMER_ROLE,
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 14 Plus (128 GB) - Blue',
    description: `
      6.7-inch Super Retina XDR display\n
      Advanced camera system for better photos in any light\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 26 hours of video playback\n
      A15 Bionic chip with 5-core GPU for lightning-fast performance.\n 
      Superfast 5G cellular`,

    price: 904,
    photo: 'https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_SX679_.jpg',
  },

  {
    id: 2,
    name: 'Apple iPhone 14 Plus (128 GB) - Red',
    description: `
      6.7-inch Super Retina XDR display\n
      Advanced camera system for better photos in any light\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 26 hours of video playback\n
      A15 Bionic chip with 5-core GPU for lightning-fast performance.\n 
      Superfast 5G cellular`,

    price: 904,
    photo: 'https://m.media-amazon.com/images/I/611mRs-imxL._AC_SX679_.jpg',
  },

  {
    id: 3,
    name: 'Apple iPhone 14 Plus (128 GB) - Yellow',
    description: `
      6.7-inch Super Retina XDR display\n
      Advanced camera system for better photos in any light\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 26 hours of video playback\n
      A15 Bionic chip with 5-core GPU for lightning-fast performance.\n 
      Superfast 5G cellular`,

    price: 904,
    photo: 'https://m.media-amazon.com/images/I/61sJ7qIcGTL._AC_SX679_.jpg',
  },

  {
    id: 4,
    name: 'Apple iPhone 14 Plus (128 GB) - Starlight',
    description: `
      6.7-inch Super Retina XDR display\n
      Advanced camera system for better photos in any light\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 26 hours of video playback\n
      A15 Bionic chip with 5-core GPU for lightning-fast performance.\n 
      Superfast 5G cellular`,

    price: 904,
    photo: 'https://m.media-amazon.com/images/I/61b7Ew7kjYL._AC_SX679_.jpg',
  },

  {
    id: 5,
    name: 'Apple iPhone 14 Pro Max (128 GB) - Deep Purple',
    description: `
    6.7-inch Super Retina XDR display featuring Always-On and ProMotion\n
    Dynamic Island, a magical new way to interact with iPhone\n
    48MP Main camera for up to 4x greater resolution\n
    Cinematic mode now in 4K Dolby Vision up to 30 fps\n
    Action mode for smooth, steady, handheld videos\n
    Vital safety features—Emergency SOS via satellite and Crash Detection\n
    All-day battery life and up to 29 hours of video playback\n
    A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular\n
    Industry-leading durability features with Ceramic Shield and water resistance
    `,
    price: 1270,
    photo: 'https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SX679_.jpg',
  },

  {
    id: 6,
    name: 'Apple iPhone 14 Pro Max (128 GB) - Gold',
    description: `
    6.7-inch Super Retina XDR display featuring Always-On and ProMotion\n
    Dynamic Island, a magical new way to interact with iPhone\n
    48MP Main camera for up to 4x greater resolution\n
    Cinematic mode now in 4K Dolby Vision up to 30 fps\n
    Action mode for smooth, steady, handheld videos\n
    Vital safety features—Emergency SOS via satellite and Crash Detection\n
    All-day battery life and up to 29 hours of video playback\n
    A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular\n
    Industry-leading durability features with Ceramic Shield and water resistance
    `,
    price: 1270,
    photo: 'https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_SX679_.jpg',
  },

  {
    id: 7,
    name: 'Apple iPhone 14 Pro Max (128 GB) - Silver',
    description: `
    6.7-inch Super Retina XDR display featuring Always-On and ProMotion\n
    Dynamic Island, a magical new way to interact with iPhone\n
    48MP Main camera for up to 4x greater resolution\n
    Cinematic mode now in 4K Dolby Vision up to 30 fps\n
    Action mode for smooth, steady, handheld videos\n
    Vital safety features—Emergency SOS via satellite and Crash Detection\n
    All-day battery life and up to 29 hours of video playback\n
    A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular\n
    Industry-leading durability features with Ceramic Shield and water resistance
    `,
    price: 1270,
    photo: 'https://m.media-amazon.com/images/I/61nzPMNY8zL._AC_SX679_.jpg',
  },

  {
    id: 8,
    name: 'Apple iPhone 14 Pro Max (128 GB) - Space Black',
    description: `
    6.7-inch Super Retina XDR display featuring Always-On and ProMotion\n
    Dynamic Island, a magical new way to interact with iPhone\n
    48MP Main camera for up to 4x greater resolution\n
    Cinematic mode now in 4K Dolby Vision up to 30 fps\n
    Action mode for smooth, steady, handheld videos\n
    Vital safety features—Emergency SOS via satellite and Crash Detection\n
    All-day battery life and up to 29 hours of video playback\n
    A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular\n
    Industry-leading durability features with Ceramic Shield and water resistance
    `,
    price: 1270,
    photo: 'https://m.media-amazon.com/images/I/610pghkO81L._AC_SX679_.jpg',
  },

  {
    id: 9,
    name: 'Apple iPhone 14 Pro (128 GB) - Deep Purple',
    description: `
      6.1-inch Super Retina XDR display featuring Always-On and ProMotion\n
      Dynamic Island, a magical new way to interact with iPhone\n
      48MP Main camera for up to 4x greater resolution\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 23 hours of video playback\n
      A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular\n
      Industry-leading durability features with Ceramic Shield and water resistance`,
    price: 1125,
    photo: 'https://m.media-amazon.com/images/I/61HHS0HrjpL._AC_SX679_.jpg',
  },

  {
    id: 10,
    name: 'Apple iPhone 14 Pro (128 GB) - Gold',
    description: `
      6.1-inch Super Retina XDR display featuring Always-On and ProMotion\n
      Dynamic Island, a magical new way to interact with iPhone\n
      48MP Main camera for up to 4x greater resolution\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 23 hours of video playback\n
      A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular\n
      Industry-leading durability features with Ceramic Shield and water resistance`,
    price: 1125,
    photo: 'https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_SX679_.jpg',
  },

  {
    id: 11,
    name: 'Apple iPhone 14 Pro (128 GB) - Silver',
    description: `
      6.1-inch Super Retina XDR display featuring Always-On and ProMotion\n
      Dynamic Island, a magical new way to interact with iPhone\n
      48MP Main camera for up to 4x greater resolution\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 23 hours of video playback\n
      A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular\n
      Industry-leading durability features with Ceramic Shield and water resistance`,
    price: 1125,
    photo: 'https://m.media-amazon.com/images/I/61lKQWyMdDL._AC_SX679_.jpg',
  },

  {
    id: 12,
    name: 'Apple iPhone 14 Pro (128 GB) - Space Black',
    description: `
      6.1-inch Super Retina XDR display featuring Always-On and ProMotion\n
      Dynamic Island, a magical new way to interact with iPhone\n
      48MP Main camera for up to 4x greater resolution\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 23 hours of video playback\n
      A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular\n
      Industry-leading durability features with Ceramic Shield and water resistance`,
    price: 1125,
    photo: 'https://m.media-amazon.com/images/I/61XO4bORHUL._AC_SX679_.jpg',
  },

  {
    id: 13,
    name: 'Apple iPhone 14 (128 GB) - Blue',
    description: `6.1-inch Super Retina XDR display\n
      Advanced camera system for better photos in any light\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 20 hours of video playback\n
      A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular\n
      Industry-leading durability features with Ceramic Shield and water resistance\n
      iOS 16 offers even more ways to personalize, communicate, and share`,
    price: 891,
    photo: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX679_.jpg',
  },

  {
    id: 14,
    name: 'Apple iPhone 14 (128 GB) - RED',
    description: `6.1-inch Super Retina XDR display\n
      Advanced camera system for better photos in any light\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 20 hours of video playback\n
      A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular\n
      Industry-leading durability features with Ceramic Shield and water resistance\n
      iOS 16 offers even more ways to personalize, communicate, and share`,
    price: 891,
    photo: 'https://m.media-amazon.com/images/I/611mRs-imxL._AC_SX679_.jpg',
  },

  {
    id: 15,
    name: 'Apple iPhone 14 (128 GB) - Midnight',
    description: `6.1-inch Super Retina XDR display\n
      Advanced camera system for better photos in any light\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 20 hours of video playback\n
      A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular\n
      Industry-leading durability features with Ceramic Shield and water resistance\n
      iOS 16 offers even more ways to personalize, communicate, and share`,
    price: 891,
    photo: 'https://m.media-amazon.com/images/I/61cwywLZR-L._AC_SX679_.jpg',
  },

  {
    id: 16,
    name: 'Apple iPhone 14 (128 GB) - Midnight',
    description: `6.1-inch Super Retina XDR display\n
      Advanced camera system for better photos in any light\n
      Cinematic mode now in 4K Dolby Vision up to 30 fps\n
      Action mode for smooth, steady, handheld videos\n
      Vital safety features—Emergency SOS via satellite and Crash Detection\n
      All-day battery life and up to 20 hours of video playback\n
      A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular\n
      Industry-leading durability features with Ceramic Shield and water resistance\n
      iOS 16 offers even more ways to personalize, communicate, and share`,
    price: 891,
    photo: 'https://m.media-amazon.com/images/I/61BjthBu9tL._AC_SX679_.jpg',
  },
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 1,
    customer: {
      username: 'test_customer',
      email: 'test_customer@test_customer.com',
    },
    cart: [
      {
        product: MOCK_PRODUCTS[0],
        count: 1,
      },
    ],
    status: 'new',
  },

  {
    id: 2,
    customer: {
      username: 'test_customer',
      email: 'test_customer@test_customer.com',
    },
    cart: [
      {
        product: MOCK_PRODUCTS[1],
        count: 1,
      },
    ],
    status: 'in-progress',
  },

  {
    id: 3,
    customer: {
      username: 'test_customer',
      email: 'test_customer@test_customer.com',
    },
    cart: [
      {
        product: MOCK_PRODUCTS[4],
        count: 1,
      },
      {
        product: MOCK_PRODUCTS[6],
        count: 2,
      },
    ],
    status: 'done',
  },
];
