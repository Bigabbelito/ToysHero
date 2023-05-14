

import { useState, useRef, useEffect } from 'react'
import {Container, Row, Col} from 'reactstrap'
import {useParams} from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product-details.css'
import {motion} from 'framer-motion'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'

const procductDetails = () => {

  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()



  const [rating,setRating] = useState(null)


  const {id} = useParams()

  const product = products.find((item) => item.id === id)

  const {imgUrl, productName , price, avgRating, reviews, category,  description, shortdesc} = products

  const relatedProducts = products.filter(item=> item.category === category)

  const submitHandler = (e) =>{
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    // console.log(reviewUserName, reviewUserMsg, rating)
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating
    }
    console.log(reviewObj)
    toast.success('Review submitted')
 }
    const addToCart = ()=> {
      dispatch(cartActions.addItem({
        id,
        image:imgUrl,
        productName,
        price,
        
      }))

      toast.success('Product added to successfully')

    }
    
    useEffect(() => {
      window.scrollTo(0,0)
    }, [product])



 return (
  <>
  <Helmet title={productName}>
    <CommonSection title={productName} />
    <section className='pt-0'> 
    <Container>
      <Row>
        <Col lg='6'>
          <img src={imgUrl} alt=''/>
        </Col>


        <Col lg='6'>
          <div className='product_details'>
          <h2>{productName}</h2>
            <div className='product__rating d-flex align-items-center gab-5 mb-3'>
             <div>
            <span ><i className='ri-star-s-fill'></i></span>
            <span><i className='ri-star-s-fill'></i></span>
            <span><i className='ri-star-s-fill'></i></span>
            <span><i className='ri-star-s-fill'></i></span>
            <span><i className='ri-star-half-s-fill'></i></span>
            </div>
            <p>(<span>{avgRating}</span>ratings)</p>
            </div>
            <div className='d-flex align-items-center gap-5'>
            <span className='product__price'>{price} kr</span>
            <span>Category: {category} </span>
            </div>
            <p className='mt-3'>{shortdesc}</p>

            <motion.button whileTap={{scale:1.2}} className='buy__btn' onClick={addToCart}>Add to cart</motion.button>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='tab__wrapper d-flex align-items-center gap-5'>
              <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={()=> setTab('desc')}>Description</h6>
              <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={()=> setTab('rev')}>Reviews ({reviews})</h6>
            </div>

            {
              tab === 'desc' ? (
            <div className='tab__content mt-5'>
            <p>{description}</p>
            </div>
             ): (
              <div className='product__review'>
              <div className='review__wrapper'>
                <ul>
                  {
                    reviews?.map((item,index)=> (
                      <li key={index} className='mb-4'> 
                      <h6>Jhon Karlsson</h6>
                      <span>{item.rating} rating</span>
                      <p>{item.text}</p>
                      </li>
                    ))}
                </ul>
                <div className='reonClick={() => setRating(1)}view__form'>
                <h1>leave your experience</h1>
                <form action='' onSubmit={submitHandler}>
                  <div className='form__group'>
                    <input type='text' placeholder='Enter name' ref={reviewUser} required/>
                  </div>

                  <div className='form__group d-flex align-items-center gab-5 rating__group'>
                  <motion.span whileTap={{scale:1.2}} onClick={() => setRating(1)}>1<i className='ri-star-s-fill'></i></motion.span>
                  <motion.span whileTap={{scale:1.2}} onClick={() => setRating(2)}>2<i className='ri-star-s-fill'></i></motion.span>
                  <motion.span whileTap={{scale:1.2}} onClick={() => setRating(3)}>3<i className='ri-star-s-fill'></i></motion.span>
                  <motion.span whileTap={{scale:1.2}} onClick={() => setRating(4)}>4<i className='ri-star-s-fill'></i></motion.span>
                  <motion.span whileTap={{scale:1.2}} onClick={() => setRating(5)}>5<i className='ri-star-half-s-fill'></i></motion.span>
                  </div>


                  <div className='form__group'>
                  <textarea ref={reviewMsg}  required rows={4} type='text' placeholder='Review Message...'/>

                  </div>

                  <motion.button whileTap={{scale:1.2}} type='submit' className='buy__btn'>
                  Submit
                  </motion.button>
                </form>
                </div>
              </div>
              </div>
              )}
          </Col>

          <Col lg='12'>
            <h2 className='related__title mt-5'>You might also like</h2>
          </Col>
          <ProductsList data={relatedProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>

  </>
 )
}
      export default procductDetails



