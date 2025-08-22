export const products = [
  { id: '1', name: 'Look Invierno Urbano', price: 50000, image: 'https://i.pinimg.com/736x/00/ee/fa/00eefa32835f98261c292a0e938c77c8.jpg' },
  { id: '2', name: 'Retro Street Vibes', price: 50000, image: 'https://i.pinimg.com/736x/08/70/86/0870869c2387f2f5ce5f98a78e15837e.jpg' },
  { id: '3', name: 'Soft Everyday Glow', price: 40000, image: 'https://i.pinimg.com/736x/c5/99/14/c5991402c9dcd48eee31c5efdc0d7edf.jpg' },
  { id: '4', name: 'Urban Cool Vibes', price: 30000, image: 'https://i.pinimg.com/736x/29/3a/19/293a1947da9e1b4425ec40c6a41574be.jpg' },
  { id: '5', name: 'Chic Burbundy Shoes', price: 20000, image: 'https://i.pinimg.com/736x/ad/7c/83/ad7c8363976f89387323429374f4f9e4.jpg' },
  { id: '6', name: 'Bags', price: 20000, image: 'https://i.pinimg.com/736x/fd/a6/8c/fda68c5189f7cd37f044e201a77acc1e.jpg' },
  { id: '7', name: 'Brown Bags', price: 20000, image: 'https://i.pinimg.com/736x/3e/aa/84/3eaa849d6ad2725f7ae095e2068a18f5.jpg' },
].map((product, i) => ({
  ...product,
  comments: Array.from({ length: 3 }, (_, j) => ({
    id: `${(i + 1) * 10 + j}`,
    text: `Comentarios ${j + 1} para ${product.name}`
  }))
}));
