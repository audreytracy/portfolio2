import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Personal() {

    const handleCardClick = (route) => {
        window.location.href = route;
    };

    return (
        <div>
            <CardGroup>
                <Card onClick={() => handleCardClick('/projects/ndvi')} title="NDVI project">
                    <Card.Img variant="top" src="https://static-00.iconduck.com/assets.00/raspberry-pi-icon-2048x2048-p0y4r07x.png" />
                    <Card.Body>
                        <Card.Title href="/ndvi">Remote Sprinkler Control Application</Card.Title>
                        <Card.Subtitle><code>HTML, CSS, TS (Angular), Python (Flask), Google FireBase</code></Card.Subtitle>
                        <Card.Text>
                            Web application for viewing sprinkler zones, setting timers, and toggling sprinklers. Sprinklers are controlled by Raspberry Pi
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Interested in this project? Contact <a href="https://www.linkedin.com/in/rand-whillock-22606b11/">Rand Whillock</a> at <a href="https://galois.com/">Galois</a> </small>
                    </Card.Footer>
                </Card>

                <Card onClick={() => handleCardClick('https://github.com/audreytracy/library-app')} title="Github Repo">
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/19/1b/b9/191bb99bd07fd275c347b1ba566ee89b.png" />
                    <Card.Body>
                        <Card.Title>Lazy Spotify User</Card.Title>
                        <Card.Subtitle><code>Kotlin (Android Studio)</code></Card.Subtitle>
                        <Card.Text>
                            Press one button & this app will identify the song you're hearing and add it to your Spotify liked songs playlist.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">This app is currently under development! Check back later!</small>
                    </Card.Footer>
                </Card>

                <Card onClick={() => handleCardClick('https://github.com/audreytracy/estimate')} title="Github Repo">
                    <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/bluetooth-icon-flat-style-logo-600nw-2297036849.jpg" />
                    <Card.Body>
                        <Card.Title>Bluetooth Keyboard</Card.Title>
                        <Card.Subtitle><code>Python, RPi Pico W</code></Card.Subtitle>

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

export default Personal;