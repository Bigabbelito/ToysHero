import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import '../styles/home.css'
import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col } from 'react-bootstrap';
import heroImg from '../assets/images/hero-img.png'
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

const Home = () => {

  const [data, setData] = useState(products)
  const year = new Date().getFullYear()

  useEffect(()=> {
    const filteredProducts = products.filter(item => item.category ==='Vatten-Pistol');

    setData(filteredProducts)
  }[
    
  ])
  return <Helmet title={'Home'}>
  <section className="hero__section">
  <Container>
    <Row>
      <Col lg='6' md='6'>
        <div className="hero__content">
        <p className="hero__subtitle">Trending product in {year}</p>
        <h2>Make Your Dream More Reality & Far Beyond The Horizon</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <motion.button whileTap={{scale:1.2}} className='buy__btn'>
        <Link to='/shop'>Shop Now</Link>
        </motion.button>
        </div>
      </Col>

      <Col lg='6' md='6'>
      <div className="hero__img">
        <img src={heroImg} alt=""/>
      </div>
      </Col>



    </Row>
  </Container>
  </section>
  <Services/>
  <section className='trending__products'>
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className='section_title'>Trending Products</h2>
        </Col>
        <ProductsList data={data}/>
      </Row>
    </Container>
  </section>
  </Helmet>
}

export default Home
