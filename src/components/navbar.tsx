
import {useState} from "react";
import {useNavigate , Link} from "react-router-dom";
import {Navbar as NavbarBS, Button, Modal} from 'react-bootstrap'
import {BsCart} from 'react-icons/bs'
import { FaHome } from "react-icons/fa";


function Navbar (){
    const [showModal , setShowModal] = useState(false)

    const navigate = useNavigate()
    function HandleLoginPage(){
        navigate('/Login')
    }
    function HandleHomePage(){
        navigate('/')
    }

    const handleShow = ()=>{setShowModal(true)}
    const handleClose = ()=>{setShowModal(false)}
    return(
        <>
        <NavbarBS className={'border-bottom border-secondary'}>
            <Button variant={'btn btn-outline-secondary'}>
                <div onClick={HandleLoginPage}>
                    <div className={'text-white'}> ثبت نام / ورود </div>
                    <Link to={'login'}></Link>
                </div>
            </Button>

            <NavbarBS.Collapse className={'justify-content-end m-2'}>
                <Button className={'text-white'} onClick={handleShow} variant={'btn btn-outline-secondary'}>
                    <BsCart className={'mx-2'}/>
                    سبد خرید
                </Button>
            </NavbarBS.Collapse>

            <Button className={'text-white'} onClick={HandleHomePage} variant={'btn btn-outline-secondary'}>
              <FaHome className={'m-1'}/>  خانه
                <Link to={'/'}></Link>
            </Button>
        </NavbarBS>

         <Modal show={showModal} onHide={handleClose}>
            <Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal.Header>
         </Modal>
        </>
    )
}

export default Navbar;