export type ProductListProps = {
    onAddToCart: (product: Product) => void;
};

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  