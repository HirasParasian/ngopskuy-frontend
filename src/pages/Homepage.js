/* eslint-disable react/jsx-key */
import React from 'react'
import { Col, Container, Form, Row, Image, Card } from 'react-bootstrap'
import Button from '../components/Button'
import { FaSearch, FaUser, FaStar } from 'react-icons/fa'
import ImgIll from '../assets/images/home-ill.png'
import hazelnut from '../assets/images/hazelnut.png'
import world from '../assets/images/world.png'
import amazon from '../assets/images/amazon.png'
import discord from '../assets/images/discord.png'
import reddit from '../assets/images/reddit.png'
import netflix from '../assets/images/netflix.png'
import spotify from '../assets/images/spotify.png'
import { HiCheckCircle } from 'react-icons/hi'
import Carousel from 'react-elastic-carousel'
import NavbarHome from "../components/NavbarHome"
import Footer from "../components/Footer"
import Helmets from '../components/Helmets'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Homepage = () => {
	const tokens = useSelector(state => state.auth.token)
	const auth = useSelector(state => state.auth)
	const navigate = useNavigate()
	const goSearch = () => {
		navigate('/search')
	}
	const goSearchAdmin = () => {
		navigate('/search-admin')
	}
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	]

	return (
		<>
			<Helmets children={"Home"} /><NavbarHome />
			<header className='home-head'>
				<div className='overlay'>
					<Container>
						<Row>
							<Col className='d-flex align-items-center' sm={12} md={6}>
								<div>
									<h1>Start Your Day with Coffee and Good Meals</h1>
									<div>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</div>
									<Button padding={'py-3'}>Get Started</Button>
								</div>
							</Col>
							<Col className='d-flex justify-content-end' sm={12} md={6}>
								{(tokens === null) &&
									<div>
										<Form onClick={goSearch} className='position-relative'>
											<Form.Control name='search' placeholder='Search' className='bg-white rounded-pill px-3' />
											<FaSearch className='position-absolute top-50 end-0 translate-middle-y me-3' color='#000' />
										</Form>
									</div>
								}
								{(auth.userData.id_role === 3) &&
									<div>
										<Form onClick={goSearch} className='position-relative'>
											<Form.Control name='search' placeholder='Search' className='bg-white rounded-pill px-3' />
											<FaSearch className='position-absolute top-50 end-0 translate-middle-y me-3' color='#000' />
										</Form>
									</div>
								}
								{(auth.userData.id_role === 1) &&
									<div>
										<Form onClick={goSearchAdmin} className='position-relative'>
											<Form.Control name='search' placeholder='Search' className='bg-white rounded-pill px-3' />
											<FaSearch className='position-absolute top-50 end-0 translate-middle-y me-3' color='#000' />
										</Form>
									</div>
								}
								{(auth.userData.id_role === 2) &&
									<div>
										<Form onClick={goSearchAdmin} className='position-relative'>
											<Form.Control name='search' placeholder='Search' className='bg-white rounded-pill px-3' />
											<FaSearch className='position-absolute top-50 end-0 translate-middle-y me-3' color='#000' />
										</Form>
									</div>
								}
							</Col>
						</Row>
					</Container>
				</div>
			</header>
			<main>
				<Container>
					<section className='info-bar rounded rounded-3 bg-white shadow p-3'>
						<Row className='w-100 g-0 gy-3'>
							{[...Array(3)].map(() => (
								<Col sm={12} md={4}>
									<Row>
										<Col className='d-flex justify-content-end'>
											<div className="icon-wrapper text-white bg-black rounded-circle">
												<FaUser />
											</div>
										</Col>
										<Col>
											<strong>90+</strong>
											<div>Staff</div>
										</Col>
									</Row>
								</Col>
							))}
						</Row>
					</section>
					<section>
						<Row className='mt-5'>
							<Col sm={12} md={6}>
								<Image fluid className='mx-auto' src={ImgIll}></Image>
							</Col>
							<Col sm={12} xl={6} className="mt-5">
								<div>
									<h1>We Provide Good Coffee and Healthy Meals</h1>
									<Card.Text>You can explore the menu that we provide with fun and have their own taste and make your day better.</Card.Text>
									<Card.Text><HiCheckCircle color="green" fontSize={'1.5rem'} />High quality beans</Card.Text>
									<Card.Text><HiCheckCircle color="green" fontSize={'1.5rem'} />Healthy meals, you can request the ingredients</Card.Text>
									<Card.Text><HiCheckCircle color="green" fontSize={'1.5rem'} />Chat with our staff to get better experience for ordering</Card.Text>
									<Card.Text><HiCheckCircle color="green" fontSize={'1.5rem'} />Free member card with a minimum purchase of IDR 200.000.</Card.Text>
								</div>
							</Col>
							<Col sm={12} className="my-5 d-flex justify-content-center">
								<div>
									<h1>Here is People’s Favorite</h1>
									<div>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</div>
								</div>
							</Col>
						</Row>
					</section>
					<section >
						<Row xs={1} md={3} className="g-4 mt-5">
							{Array.from({ length: 3 }).map((_, idx) => (
								<Col className='my-5' key={idx}>
									<Card className='position-relative'>
										<Image width={150} roundedCircle className='top-0 start-0 mx-auto translate-middle-y' src={hazelnut}></Image>
										<Card.Body className='text-center'>
											<Card.Title as="h4">Pinki Promise</Card.Title>
											<Card.Text><HiCheckCircle color="green" fontSize={'1.3rem'} />High quality beans</Card.Text>
											<Card.Text><HiCheckCircle color="green" fontSize={'1.3rem'} />High quality beans</Card.Text>
											<Card.Text><HiCheckCircle color="green" fontSize={'1.3rem'} />High quality beans</Card.Text>
											<Card.Text><HiCheckCircle color="green" fontSize={'1.3rem'} />High quality beans</Card.Text>
											<Card.Title as="h4" className='mt-5'>IDR 25.000</Card.Title>
											<Button variant='pallet-3' padding={'py-3'}>Order Now</Button>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</section>
					<section>
						<Row>
							<Col className='d-flex justify-content-center my-5' sm={12}>
								<div>
									<h1 className='text-center'>Visit Our Store in the </h1>
									<h1 className='text-center'>Spot on the Map Below</h1>
									<div className=' mt-5'>See our store in every city on the spot and spen your good day there. See you soon!</div>
								</div>
							</Col>
							<Col className='d-flex justify-content-center my-5' sm={12}>
								<Image fluid src={world}></Image>
							</Col>
						</Row>
					</section>
					<section>
						<Col className='d-flex justify-content-center py-5' sm={12}>
							<div>
								<h1 className='text-center'>Our Partner </h1>
							</div>
						</Col>
						<Col className='d-flex justify-content-center my-5' sm={12}>
							<Col><Image width={100} fluid src={netflix}></Image></Col>
							<Col><Image width={100} fluid src={reddit}></Image></Col>
							<Col><Image width={100} fluid src={discord}></Image></Col>
							<Col className='pb-1'><Image width={100} fluid src={amazon}></Image></Col>
							<Col><Image width={100} fluid src={spotify}></Image></Col>

						</Col>
					</section>
					<section>
						<Col sm={12} className="py-5">
							<h1 className='text-center'>Loved by Thousands of Happy Customer </h1>
							<div className='text-center'>These are the stories of our customers who have visited us with great pleasure.</div>
						</Col>
						<Col sm={12}>
							{/* <h1 style={{ textAlign: "center" }}></h1> */}
							<div className="App py-5 mb-5">
								<Carousel breakPoints={breakPoints}>
									{[...Array(6)].map(() => (
										<div>
											<Card className="text-center">
												<Card.Body>
													<Row>
														<Col sm={4}>
															<Image width={50} roundedCircle className='me-auto' src={hazelnut}></Image>
														</Col>
														<Col sm={4}>
															<Card.Text>
																Yessica Christy
															</Card.Text>
														</Col>
														<Col sm={4}>
															<Card.Text>
																<FaStar color='yellow' size={30} /> <div>4.5</div>
															</Card.Text>
														</Col>
													</Row>
													<Card.Title>
														“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!
													</Card.Title>
												</Card.Body>
												<Card.Footer className="text-muted">2 days ago</Card.Footer>
											</Card>
										</div>
									))}
								</Carousel>
							</div>
						</Col>
					</section>
					<section className='position-relative info-bar rounded rounded-3 bg-white shadow p-3 mt-5'>
						<Row className='w-100 g-0 gy-3'>
							<Col sm={12} md={5} className="">
								<Row>
									<Col className='d-flex justify-content-end'>
										<div>
											<h1>Check our promo today!</h1>
											<h5>Let&lsquo;s see the deals and pick yours!</h5>
										</div>
									</Col>
								</Row>
							</Col>
							<Col sm={12} md={3}>
							</Col>
							<Col sm={12} md={4}>
								<Row>
									<Col className='d-flex justify-content-center'>
										<div >
											<Button variant='pallet-3' padding={'py-3'}>See Promo</Button>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</section>
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default Homepage