import { useContext } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { getProductData } from '../data/items';
import { CartContext } from '../context/cartContext';

interface CartProductProps {
    id: number;
    quantity: number;
}

const CartProduct: React.FC<CartProductProps> = ({ id, quantity }) => {
    const cart = useContext(CartContext);
    const productData = getProductData(id);

    return (
        <>
            <p className="border-bottom border-secondary opacity"></p>
            <img src={productData.image} height="90px" className="mt-3 image" alt={productData.title} />
            <p className="mb-2">نام محصول: {productData.title}</p>
            <p className="mb-2">تعداد: {quantity}</p>
            <p className="mb-3">قیمت: {quantity * productData.price}</p>

            <Form as={Row}>
                <Col className="mb-2">
                    <Button
                        onClick={() => cart.addItemToCart(id)}
                        size="sm" className="text-white"
                        variant="btn btn-outline-secondary"
                    >
                        +
                    </Button>
                    <Button
                        onClick={() => cart.removeItemFromCart(id)}
                        size="sm" className="mx-2 text-white"
                        variant="btn btn-outline-secondary"
                    >
                        -
                    </Button>
                    <Button
                        size="sm" className="text-white"
                        variant="btn btn-outline-danger"
                        onClick={() => cart.deleteFromCart(id)}
                    >
                        حذف
                    </Button>
                </Col>
            </Form>
        </>
    );
}

export default CartProduct;