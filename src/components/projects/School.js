import { Card, Row, Col, Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import ndvi from '../../images/ndvi.png';
import library from '../../images/library.png';
import estimate from '../../images/estimate.png';

function School() {

    const handleCardClick = (route) => {
        window.location.href = route;
    };

    return (
        <Container fluid="sm">
            <Row xs={1} md={3} className="g-4">
                <Col key="1">
                    <Card onClick={() => handleCardClick('/projects/ndvi')} title="NDVI project">
                        <Card.Body>
                            <Card.Title href="/ndvi">Ground Image Calculation & Display</Card.Title>
                            <Card.Subtitle><code>HTML, CSS, JS (React), Python (FastAPI)</code></Card.Subtitle>
                        </Card.Body>
                        <Card.Img variant="top" src={ndvi} />
                        <Card.Body>
                            <Card.Text>
                                Spring 2024 North Dakota State University senior design capstone project with Galois
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Interested in this project? Contact <a className="link" href="https://www.linkedin.com/in/rand-whillock-22606b11/">Rand Whillock</a> at <a className="link" href="https://galois.com/">Galois</a> </small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col key="2">
                    <Card onClick={() => handleCardClick('https://github.com/audreytracy/library-app')} title="Github Repo">
                        <Card.Body>
                            <Card.Title href = "">Library Database App</Card.Title>
                            <Card.Subtitle><code>SQL, Java (Swing) </code></Card.Subtitle>
                        </Card.Body>
                        <Card.Img style={{ backgroundColor: "grey" }} variant="top" src={library} />
                        <Card.Body>
                            <Card.Text>
                                Final project for CSCI 366 (databases). Application queries database to find books in a library, place holds, check out books, etc.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">https://github.com/audreytracy/library-app</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col key="3">
                    <Card onClick={() => handleCardClick('https://github.com/audreytracy/estimate')} title="Github Repo">
                        <Card.Body>
                            <Card.Title>Estimate</Card.Title>
                            <Card.Subtitle><code>Java, Cayenne DB Modeler, Apache Tapestry</code></Card.Subtitle>
                        </Card.Body>
                        <Card.Img variant="top" src={estimate} />
                        <Card.Body>
                            <Card.Text>
                                An application for tracking progress on tasks & improving estimation abilities. Semester project for CSCI 413, involved expanding & maintaining existing code.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">https://github.com/audreytracy/estimate</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default School;