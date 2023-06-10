import { useState} from "react"
import CommonSection from "../components/UI/CommonSection"
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap"
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {
  const[productsData, setProductsData] = useState(products)

  const handelFiler = e =>{
    const filterValue = e.target.value
    if(filterValue === 'New-Arraivel'){
      const filteredProducts = products.filter((item) => item.category === 'New-Arraivel')

      setProductsData(filteredProducts)
    }

    if(filterValue === 'Lekpool'){
      const filteredProducts = products.filter((item) => item.category === 'Lekpool')

      setProductsData(filteredProducts)
    }

    if(filterValue === 'Popular'){
      const filteredProducts = products.filter((item) => item.category === 'Popular')

      setProductsData(filteredProducts)
    }

    if(filterValue === 'VattenPistol'){
      const filteredProducts = products.filter((item) => item.category === 'VattenPistol')

      setProductsData(filteredProducts)
    }
  }

  const handelSearch = e=> {
    const searchTerm = e.target.value

    const searchProducts = products.filter(item => item.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

    setProductsData(searchProducts)
  }



  return  (
    <Helmet title='Shop'>
  <CommonSection title='Products'/>

  <section>
    <Container>
      <Row>
      
        <Col lg='3' md='6'>
          <div className='filter__widget'>
            <select onChange={handelFiler}>
            <option>Filter By Category</option>
              <option value='New-Arraivel'>New-Arraivel</option>
              <option value='Popular'>Popular</option>
              <option value='VattenPistol'>VattenPistol</option>
              <option value='Lekpool'>Lekpool</option>
            </select>
          </div>
        </Col>
        <Col lg='3' md='6' className="text-end">
        <div className='filter__widget'>
            <select>
            <option>Sort By</option>
              <option value='ascending'>Ascending</option>
              <option value='descending'>Descending</option>
            </select>
          </div>
        </Col>
        <Col lg='6' md='12'>
          <div className="search__box">
            <input type="text" placeholder="Search..."  onChange={handelSearch}>
               
            </input>
            <span><i className="ri-search-line"></i></span>
          </div>
        </Col>
      </Row>
    </Container>
  </section>

  <section className="pt-0">
    <Container>
      <Row>
        {
          productsData.length === 0? (<h1 className="text-center fs-5">No products are found!</h1>) : (
            <ProductsList data={productsData}/>
          )}
      </Row>
    </Container>
  </section>
  </Helmet>
  )
}

export default Shop
