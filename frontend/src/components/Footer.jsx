import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer> 
        <Container>

            <Row>   
                <Col className="text-center py-3">
                    MyShop {currentYear} | <a href="https://github.com/dilshadmustafa/myshop-demo" target="_blank" rel="noreferrer">MyShop Demo</a>
                    
                    </Col>
            </Row>

        </Container>
    </footer>    
          )
}

export default Footer