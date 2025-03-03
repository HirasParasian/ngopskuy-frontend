/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card'
import Background from '../assets/images/bg-forgot.png'
import BackgroundMobile from '../assets/images/forgot-mobile.png'
import Button from '../components/Button'
import Input from '../components/Input'
import InputUnderline from '../components/InputUnderline'
import { requestVerify } from '../redux/actions/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NavbarHome from "../components/NavbarHome"
import Helmets from '../components/Helmets'
import ModalLoading from '../components/ModalLoading'
import ModalNotifSuccess from '../components/ModalNotifSuccess'
import ModalNotifError from '../components/ModalNotifError'

export const VerifyEmail = () => {
    const auth = useSelector(state => state.auth)
    const data = useSelector(state => state.auth.userData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!auth.token) {
            const token = window.localStorage.getItem('token')
            if (token) {
                dispatch({ type: 'CLEAR_MESSAGE' });
            } else {
                window.alert('Please login first')
                navigate('/login')
            }
        }
    }, [])

    const onVerify = (e) => {
        e.preventDefault()
        const email = data.email
        const code = e.target.elements['code'].value
        dispatch(requestVerify(auth.token, email, code))
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Helmets children={"Verify Email"} /><NavbarHome />
            <ModalLoading isLoading={auth.isLoading} />
            <ModalNotifSuccess message={auth.message} />
            <ModalNotifError message={auth.errorMsg} />
            <ModalNotifError message={auth.errMsg} />
            <Card className="bg-dark text-white">
                <Card.Img src={Background} alt="Backround Footer" className='bg-footer d-none d-md-block' />
                <Card.ImgOverlay className='d-flex flex-column container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className='my-3'>
                                <h1 className='d-none d-md-block mt-5 pt-5'><b>Let's Verify?</b></h1>
                                <h1 className='d-md-none text-dark'>Don’t worry</h1>
                            </div>
                            <img className='img-fluid d-md-none ' src={BackgroundMobile} alt="bg-mobile"></img>
                            <Card.Text as="h5" className='mb-5 pb-5'>
                                Don’t worry, Let's Verify Your Account!
                            </Card.Text>

                        </div>
                        <form onSubmit={(e) => onVerify(e)}>
                            <div className='col-12 d-md-none'>
                                <InputUnderline version="input-underline background-transparent py-4 "
                                    block placeholder="Enter your email adress to get link"></InputUnderline>
                            </div>
                            <div className='col-12 d-none d-md-block'>
                                <Input name="code" version="background-transparent py-4 bg-pallet-4 outline-0 border-0"
                                    block placeholder="Enter your Code"></Input>
                            </div>
                            <div className='col-12 pt-4 d-flex justify-content-center'>
                                <div className='col-12 col-lg-6 col-md-6 col-xl-4'>
                                    <Button type="submit" block variant='pallet-1 radius btn-forgot px-5 py-4' padding="px-1" > Send Code or Verify</Button>
                                </div>
                            </div>
                        </form>
                        <div className='col-12 text-center mt-5 pt-5'>
                            <Card.Text as="h4" className='d-none d-md-block'>
                                <b>Click Again if you didn’t receive any link in 2 minutes</b>
                            </Card.Text>
                            <Card.Text className='d-md-none'>
                                Haven’t received any link?
                            </Card.Text>
                            {/* <div className='col-12 pt-4 d-flex justify-content-center'>
                                <div className='col-12 col-lg-6 col-md-6 col-xl-4'>
                                    <Button block variant='pallet-1 radius btn-forgot px-5 py-4' padding="px-1" > Resend Link </Button>
                                </div>
                            </div> */}
                            <Card.Text>
                                <b> 01.54</b>
                            </Card.Text>
                        </div>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <Footer />
        </>
    )
}
export default VerifyEmail