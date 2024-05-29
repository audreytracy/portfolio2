import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import sequence from '../../images/ndvi/sequence.png';
import unaligned_rgb from '../../images/ndvi/unaligned_rgb.png';
import aligned_rgb from '../../images/ndvi/aligned_rgb.png';
import colormap from '../../images/ndvi/colormap.png';
import inputs from '../../images/ndvi/inputs.png';
import architecture from '../../images/ndvi/architecture.png';

function NDVI() {
    return (
        <Container>
            <h1><code>Ground Image Calculation & Display</code></h1>
            <h3><code>Features</code></h3>
            <p>Note: implementation details cannot be revealed, as intellectual property is owned by client company Galois</p>
            <Row className="mb-4">
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={sequence} />
                        <Card.Body>
                            <Card.Title>Overview</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>This application's main focus is to calculate and display the Normalized Difference Vegetation Index (NDVI) given a set of multispectral imagery</li>
                                    <li>NDVI returns a value between -1 and 1, indicating general vegetation health. <ul><li>Health can be gauged based on the observation that the ratio between reflectance of R and NIR wavelengths is different when comparing healthy vegetation to stressed vegetation or non-vegetation</li></ul></li>
                                    <li>Multispectral imagery is input into the application & the NDVI image is displayed</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={architecture} />
                        <Card.Body>
                            <Card.Title>General Architecture</Card.Title>
                            <Card.Text>
                                API & image library may be hosted on their own server (separate from frontend) as part of modular design
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={inputs} />
                        <Card.Body>
                            <Card.Title>Inputs</Card.Title>
                            <Card.Text>
                                There are two fully-implemented input formats:
                                <ul>
                                    <li>
                                        Four separate B, G, R, & NIR single-band images (as seen above)
                                    </li>
                                    <li>
                                        Two separate RGB (3-band) & NIR (single-band) images
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={colormap} />
                        <Card.Body>
                            <Card.Title>Other Features</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>
                                        Customizable colormaps (seen above)
                                    </li>
                                    <li>
                                        Image download as PNG, TIF, or JPEG
                                    </li>
                                    <li>
                                        Single-image upload or bulk upload
                                    </li>
                                    <li>
                                        Multiple algorithms:
                                        <ul>
                                            <li>NDVI - Normalized Difference Vegetation Index</li>
                                            <li>SAVI - Soil Adjusted Vegetation Index</li>
                                            <li>VARI - Visible Atmospherically Resistant Index</li>
                                            <li>BAI - Burn Area Index</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Image Alignment
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
            <Row className="mb-4">
                <Col md={12}>

                    <Card>
                        <table><tr><td><Card.Img src={unaligned_rgb} /></td>
                            <td><Card.Img src={aligned_rgb} /></td></tr>
                        </table>
                        <Card.Body>
                            <Card.Title>Image Alignment</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>
                                        For many multispectral cameras, the sensors for each band are physically separated on the drone. This creates an offset between the bands, which is more noticeable the closer the drone flies to the ground.
                                        <ul>
                                            <li>The image on the left is the combined B, G, and R bands without any alignment</li>
                                        </ul>
                                    </li>
                                    <li>
                                        The image library implements an image alignment algorithm to mitigate this issue, as seen in the rightmost image above
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default NDVI;
