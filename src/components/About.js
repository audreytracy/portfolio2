import React, { useState, useEffect } from 'react';

import { Carousel, CardGroup, Card } from 'react-bootstrap';
import ndvi from '../images/ndvi.png';
import lake from '../images/about/lake.jpg';
import skiing from '../images/about/skiing.jpg';
import marina from '../images/about/marina.jpg';

function About() {

    return (
        <div>
            <h1><code>About</code></h1>
            <h5><code>A little bit about me outside of academics!</code></h5>
            <CardGroup>
                <Card title="NDVI project">
                    {/* <Card.Img variant="top" src="https://static-00.iconduck.com/assets.00/raspberry-pi-icon-2048x2048-p0y4r07x.png" /> */}
                    <Card.Body>
                        <Card.Title href="/ndvi">Recreation</Card.Title>
                        <Card.Subtitle><code>Climbing, hiking, working out, trail running</code></Card.Subtitle>
                        <Card.Text>
                            Web application for viewing sprinkler zones, setting timers, and toggling sprinklers. Sprinklers are controlled by Raspberry Pi
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Interested in this project? Contact <a href="https://www.linkedin.com/in/rand-whillock-22606b11/">Rand Whillock</a> at <a href="https://galois.com/">Galois</a> </small>
                    </Card.Footer>
                </Card>

                <Card title="Github Repo">
                    {/* <Card.Img variant="top" src="https://i.pinimg.com/originals/19/1b/b9/191bb99bd07fd275c347b1ba566ee89b.png" /> */}
                    <Card.Body>
                        <Card.Title>Music</Card.Title>
                        <Card.Subtitle><code>I love all things music. Playing music, making music, listening to music...</code></Card.Subtitle>
                        <Card.Text>
                            Press one button & this app will identify the song you're hearing and add it to your Spotify liked songs playlist.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Listen to my soundcloud! (shameless plug) </small>
                    <small className="text-muted">And my spotify for my fav playlists </small>
                    <small className="text-muted">Listen to my soundcloud! (shameless plug) </small>
                    </Card.Footer>
                </Card>

                <Card title="Github Repo">
                    {/* <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/bluetooth-icon-flat-style-logo-600nw-2297036849.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Rainy day hobbies</Card.Title>
                        <Card.Subtitle><code>Love cooking, crochet, art </code></Card.Subtitle>

                        <Card.Text>
                            Code loaded on RPi Pico W for capturing user key presses & sending them via blutooth to connected device
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">This project is currently under development! Check back later!</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <h5><code>And now</code></h5>
            <CardGroup>
                <Card title="NDVI project">
                    {/* <Card.Img variant="top" src="https://static-00.iconduck.com/assets.00/raspberry-pi-icon-2048x2048-p0y4r07x.png" /> */}
                    <Card.Body>
                        <Card.Title href="/ndvi">Recreation</Card.Title>
                        <Card.Subtitle><code>Climbing, hiking, working out, trail running</code></Card.Subtitle>
                        <Card.Text>
                            Web application for viewing sprinkler zones, setting timers, and toggling sprinklers. Sprinklers are controlled by Raspberry Pi
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Interested in this project? Contact <a href="https://www.linkedin.com/in/rand-whillock-22606b11/">Rand Whillock</a> at <a href="https://galois.com/">Galois</a> </small>
                    </Card.Footer>
                </Card>

                <Card title="Github Repo">
                    {/* <Card.Img variant="top" src="https://i.pinimg.com/originals/19/1b/b9/191bb99bd07fd275c347b1ba566ee89b.png" /> */}
                    <Card.Body>
                        <Card.Title>Music</Card.Title>
                        <Card.Subtitle><code>I love all things music. Playing music, making music, listening to music...</code></Card.Subtitle>
                        <Card.Text>
                            Press one button & this app will identify the song you're hearing and add it to your Spotify liked songs playlist.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">This app is currently under development! Check back later!</small>
                    </Card.Footer>
                </Card>

                <Card title="Github Repo">
                    {/* <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/bluetooth-icon-flat-style-logo-600nw-2297036849.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Rainy day hobbies</Card.Title>
                        <Card.Subtitle><code>Love cooking, crochet, art </code></Card.Subtitle>

                        <Card.Text>
                            Code loaded on RPi Pico W for capturing user key presses & sending them via blutooth to connected device
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">This project is currently under development! Check back later!</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            
        </div>
    );
}

export default About;