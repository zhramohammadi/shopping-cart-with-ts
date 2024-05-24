import { Button, Form,Col,Row,Container,Image  } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";
function Login(){
    const navigate = useNavigate()
    function homePage(){
        navigate('/')
    }
    function handleRegisterPage(){
        navigate('/Register')
    }
    return (
        <Container  className="mt-5">
            <Row className="d-flex justify-content-center align-items-center ">
                <Col  className="d-flex justify-content-center align-items-center p-5">
                    <Form className="col-lg-8 col-md-10 col-sm-12 col-12" dir="rtl">
                        <Form.Group >
                            <Form.Label>آدرس ایمیل:</Form.Label>
                            <Form.Control className="opacity" type="email" placeholder="ایمیل  خود را وارد کنید" />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>رمز عبور:</Form.Label>
                            <Form.Control className="opacity" type="password" placeholder="رمز عبور خود را وارد کنید" />
                        </Form.Group>
                        <Button onClick={homePage}  variant="btn btn-outline-secondary" className="mt-3 text-white "  type="submit">
                            ورود
                            <Link to={'/'}></Link>
                        </Button>
                        <div >
                            اگر حساب کاربردی ندارید <Button onClick={handleRegisterPage}  variant="btn" className="text-info">ثبت نام کنید
                            <Link to={'/register'}></Link>
                        </Button>
                        </div>
                    </Form>
                </Col>
                <Col className="d-flex justify-content-center align-items-center mt-5 d-lg-block d-none" >
                    <Image className="col-12" src="../public/images/login.svg" width={700}  alt="تصویر نمونه" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;