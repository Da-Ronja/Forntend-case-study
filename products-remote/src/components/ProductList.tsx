import { Product } from "../types/product";
import { useState, useEffect } from "react";
import { Button, Card, Flex } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useGetProductsQuery } from "../services/productsApi";


//const ProductList = ({products, onAddToCart}: ProductListProps) => {
const ProductList = () => {
const { data: products, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Somthing went wrong</div>;
    
    return (
        <div>
            <h1>Product List</h1>
            <Flex wrap gap="large" justify="center">
                {products?.map((product: Product) => (
                    <div key={product.id}> 
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={
                                <img 
                                    alt="example" 
                                    src={product.image} 
                                    style={{ maxHeight: 243, objectFit: "contain", display: "block", margin: "0 auto" }}
                                />}
                            >
                            <p style={{ width: '100%' }}><StarFilled style={{ color: '#fadb14' }} /> {product.rating.rate} ({product.rating.count})</p>
                            <Card.Meta 
                            title={product.title} 
                            description={product.description.length > 100 ? product.description.substring(0, 70) + "..." : product.description} 
                            />
                            <p>Price: ${product.price}</p>
                            <Button value="large" block onClick={() => console.log("onClick ProductList")} >Add to Cart</Button>
                        </Card>
                    </div>
                ))}
            </Flex>
        </div>
    )
}

export default ProductList;

                        {/* <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
                        <div>
                            <div>
                                <p>Stars: {product.rating.rate} ({product.rating.count})</p>
                                
                            </div>
                            <h3>{product.title}</h3>
                            <p>{product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}</p>
                            <p>{product.price}kr</p>
                        </div>
                        <button onClick={() => console.log("onClick ProductList")}>Add</button> */}
                        {/* <button onClick={() => onAddToCart(product)}>Add to Cart</button> */}