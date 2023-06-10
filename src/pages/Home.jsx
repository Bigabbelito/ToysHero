import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import '../styles/home.css'
import Helmet from "../components/Helmet/Helmet"
import Clock from '../components/UI/Clock'
import { Container, Row, Col } from 'react-bootstrap';
import heroImg from '../assets/images/hero-img.png'
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import counterImg from '../assets/images/counter-timer-img.png'

import useGetData from '../custom-hooks/useGetData'

const Home = () => {

  const {data: products,loading } = useGetData('products')

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSelsProducts, setBestSelsProducts] = useState([])
  const [newProducts, setNewProducts] = useState([])
  const [cyckelProducts, setCyckel] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(()=> {
    const filteredTrendingProducts = products.filter(items => items.category ==='Vatten-Pistol');

    const filteredBestSalesProducts = products.filter(items => items.category ==='Lekpool');

    const filteredNewProcudts = products.filter(items => items.category ==='New-Arraivel');

    const filteredCyckelProducts = products.filter(items => items.category ==='cyckel-motor');

    const filteredPopularProducts = products.filter(items => items.category ==='Popular');

    setTrendingProducts(filteredTrendingProducts)
    setBestSelsProducts(filteredBestSalesProducts)
    setNewProducts(filteredNewProcudts)
    setCyckel(filteredCyckelProducts)
    setPopularProducts(filteredPopularProducts)
  },[products])
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

        {
          loading ? <h5 className='fw-bold'>Loading..... </h5> :  <ProductsList data={trendingProducts}/>
        }
       
      </Row>
    </Container>
  </section>
  <section className='best__sales'>
    <Container>
    <Row>
        <Col lg='12' className='text-center'>
          <h2 className='section_title'>Best Sales</h2>
        </Col>
        {
          loading ? <h5 className='fw-bold'>Loading..... </h5> :  <ProductsList data={bestSelsProducts}/>
        }
      </Row>
    </Container>
  </section>

  <section className='timer__count'>
    <Container>
      <Row>
        <Col lg='6' md='12 ' className='count__down-col'>
        <div className='clock__top-content'>
          <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
          <h3 className='text-white fs-5 mb-3'>Quality Toys</h3>
        </div>
        <Clock/>
        <motion.button whileTap={{scale:1.2}} className='buy__btn store__btn'><Link to='/shop'>Visit Store</Link></motion.button>
          
        </Col>

        <Col lg='6' md='12' className='text-end counter__img'>
        <img src={counterImg} alt=''/>
        
        </Col>
      </Row>
    </Container>
  </section>  


  <section className='new__arrivals'>
    <Container>
      <Row>
      <Col lg='12' className='text-center mb-5'>
          <h2 className='section_title'>New Arrivals</h2>
        </Col>
        {
          loading ? <h5 className='fw-bold'>Loading..... </h5> :  <ProductsList data={newProducts}/>
        }
        {
          loading ? <h5 className='fw-bold'>Loading..... </h5> :  <ProductsList data={cyckelProducts}/>
        }
      </Row>
    </Container>
  </section>

  <section className='popular__category'>
  <Container>
      <Row>
      <Col lg='12' className='text-center mb-5'>
          <h2 className='section_title'>Popular in category</h2>
        </Col>
        {
          loading ? <h5 className='fw-bold'>Loading..... </h5> :  <ProductsList data={popularProducts}/>
        }
      </Row>
    </Container>
  </section>
  </Helmet>
}

export default Home
