import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'



const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6' >
        <div className='logo'>
        <div>
          <h1 className='text-white'>ToysHero</h1>
        </div>
        
      </div>
      <p className='footer_text mt-3'>
        Lorem Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        </Col>

        <Col lg='3' md='3' className='mb-4'>
          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Top Categorie</h4>
            <ListGroup className='links'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Vatten-pistols</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Lekpool</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>cyckel-motor</Link>
              </ListGroupItem>
              
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Popular</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='2' md='3' className='mb-4'>
        <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup className='links'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>
              
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4'>
        <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className='links footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i className='ri-map-pin-line'></i></span>
              <p>653 31, Karlstad, Varmland, Sweden</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>
              <span><i className='ri-phone-line'></i></span>
              <p>+46 540 450 55</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>
              <span><i className='ri-mail-line'></i></span>
              <p>ToyHeros@karlstad.se</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'  className='mb-4'>
          <p className='footer__copyright'>
          Copyright {year} developed by Abdulah Abou Shihab. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
  
}

export default Footer
