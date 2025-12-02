import { SaunaRoom } from './types';

export const BUSINESS_INFO = {
  address: "г. Иваново, ул. Московская, д. 16б",
  phone: "+7 (4932) 93-44-95",
  email: "info@sauna-oasis-ivanovo.ru",
  vk: "https://vk.com/baninamoscovscoi"
};

export const SAUNA_ROOMS: SaunaRoom[] = [
  {
    id: 'oasis',
    name: 'Сауна "Оазис"',
    price: 5500,
    durationLabel: '2 часа',
    capacity: 7,
    extraPersonPrice: 500,
    description: 'Роскошный зал для большой компании. Просторная парная и зона отдыха.',
    image: 'https://picsum.photos/id/122/800/600', // Using generic architectural images
    features: ['До 7 человек', 'Бассейн с гидромассажем и подсветкой', 'TV/Музыка', 'Большой стол']
  },
  {
    id: 'grot',
    name: 'Сауна "Грот"',
    price: 5000,
    durationLabel: '2 часа',
    capacity: 5,
    extraPersonPrice: 500,
    description: 'Уютная атмосфера пещеры для камерного отдыха. Идеально для небольших компаний.',
    image: 'https://picsum.photos/id/204/800/600',
    features: ['До 5 человек', 'Бассейн с гидромассажем и подсветкой', 'Стилизация под камень', 'Караоке']
  }
];

export const APARTMENT_PRICE = 2500;