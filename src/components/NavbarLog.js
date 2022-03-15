/* eslint-disable jsx-a11y/aria-props */
/* eslint-disable no-import-assign */
/* eslint-disable no-redeclare */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../assets/images/Logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Profile from '../assets/images/photo.png'
import { getProfile } from '../redux/actions/auth'

export const NavbarLog = () => {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goLogin = () => {
        navigate(`/login`)
    }
    const goSignUp = () => {
        navigate(`/signup`)
    }
    useEffect(() => {
      if(auth.token) {
        dispatch(getProfile(token))
      }
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-pallet-4">
            <div className="container">
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        width="120"
                        height="120"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {auth.token &&
                            <li className="nav-item dropdown mx-auto">
                                <div className="nav-link dropdown-toggle img-profile-login" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <Link className="" to="/profile">
                                        <img src={auth.userData.image || Profile} width="50"
                                            height="50" alt="Avatar Logo" className=" rounded-pill" />
                                    </Link>
                                </div>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li onClick={() => dispatch({ type: 'AUTH_LOGOUT' })} style={{ cursor: 'pointer' }} className="dropdown-item" to="/login">Logout</li>

                                </ul>
                            </li>
                        }
                        {auth.token === null &&
                            <li className="d-flex align-item-center d-grid">
                                <div className=' d-flex justify-content-start'>
                                    <Button onClick={goLogin} block variant='pallet-4 px-5 py-2 fs-5 rb text-pallet-1 fw-bold' padding='mx-1' >Login</Button>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarLog