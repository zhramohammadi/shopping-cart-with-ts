
import { Row,Col  } from "react-bootstrap";
import ProductItem from '../components/productItem';
import { productList } from "../data/items";

type Product = {
    id: number;
    image: string;
    title: string;
    price: number;
  };

function Shop(){
    return (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 mb-5">
            {productList.map((item: Product)=>(
                <Col align='center' key={item.id}>
                    <ProductItem product={item}/>
                </Col>
            ))}
        </Row>
    )
}

export default Shop;