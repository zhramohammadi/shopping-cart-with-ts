interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const productList: Product[] = [
    {
        id: 1,
        title: 'headset',
        price: 59,
        image: '/images/headset.jpg'
    },
    {
        id: 2,
        title: 'headset',
        price: 73,
        image: '/images/headphone.jpg'
    },
    {
        id: 3,
        title: 'ipad',
        price: 4500,
        image: '/images/ipad1.jpg'
    },
    {
        id: 4,
        title: 'ipad',
        price: 4000,
        image: '/images/ipad.jpg'
    },
    {
        id: 5,
        title: 'Xiaomi',
        price: 1000,
        image: '/images/Xiaomi.jpg'
    },
    {
        id: 6,
        title: 'iphon',
        price: 3000,
        image: '/images/iphon.jpg'
    },
    {
        id: 7,
        title: 'iphon x',
        price: 5000,
        image: '/images/iphone-.jpg'
    },
    {
        id: 8,
        title: 'samsung',
        price: 2500,
        image: '/images/samsung.webp'
    },
]

function getProductData(id: string | number): Product {
    const productData = productList.find((item) => item.id === id);
    if (productData) {
      return productData;
    } else {
      throw new Error(`Product with ID ${id} not found`);
    }
  }
  

export { productList, getProductData };