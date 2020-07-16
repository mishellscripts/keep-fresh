// these apis are mocked for now. will become actual api requests to a server

const mockData = [
  {
    name: 'Apple',
    quantity: 3,
    category: 'Fruit',
  },
  {
    name: 'Mango',
    quantity: 4,
    category: 'Fruit',
  },
  {
    name: 'Lemon',
    quantity: 2,
    category: 'Fruit',
  },
  {
    name: 'Steak',
    quantity: 1,
    category: 'Meat',
  },
];

export const getList = () => (
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(mockData), 1000);
  })
);

export const addItem = () => (
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
);

export const increaseQuantity = () => (
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
);

export const decreaseQuantity = () => (
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
);

export const deleteItem = () => (
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
);