import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer> 
        <Container>

            <Row>   
                <Col className="text-center py-3">
                    MyShop &copy; {currentYear} | <a href="https://github.com/dilshadmustafa" target="_blank" rel="noreferrer">Dilshad Mustafa</a>
                    
                    </Col>
            </Row>

        </Container>
    </footer>    
          )
}

export default Footer