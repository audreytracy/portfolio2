import React, { useState, useEffect } from 'react';

import { Table, Tab, Tabs, Button } from 'react-bootstrap';
import classes from '../data/classes.txt'
import transcript from '../data/SSR_TSRPT.pdf';
import resume from '../data/Audrey_Tracy_2024_resume.pdf';

function Documents() {
    const [textContent, setTextContent] = useState([]);
    const headers = ['Semester', 'Class ID', 'Class Name', 'Grade', 'Credits'];

    const handleCardClick = (route) => {
        window.location.href = route;
    };
    useEffect(() => {
        const fetchTextDocument = async () => {
            try {
                const response = await fetch(classes);
                const text = await response.text();
                const lines = text.split('\n');
                setTextContent(lines);
            } catch (error) {
                console.error('Could not fetch text doc classes.txt ', error);
            }
        };

        fetchTextDocument();
    }, []);

    async function download(src, name) {
        const doc = await fetch(src);
        const url = URL.createObjectURL(await doc.blob());
        const link = document.createElement("a");
        link.href = url;
        link.download = name; //"" + Date.now(); // default download name is, for example, "SAVI1712698039341.png", for sake of uniqueness
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div>
            <Tabs defaultActiveKey="transcript" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="transcript" title="Transcript">
                    <div className="spaced">
                        <h3><code>Transcript : 3.97 GPA</code></h3>
                        <Button variant="outline-dark" onClick={() => { download(transcript, "Audrey_Tracy_unofficial_transcript.pdf");}}>download</Button>
                    </div>
                    <Table striped bordered hover responsive variant="dark" size="md" width="narrow">
                        <thead>
                            <tr> {headers.map((header, i) => (<th key={i}>{header}</th>))} </tr>
                        </thead>
                        <tbody>
                            {textContent.map((line, index) => {
                                const data = line.split(",");
                                return (<tr key={index}> {data.map((d, i) => (<td key={i}>{d}</td>))} </tr>)
                            })}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="resume" title="Resume">
                    <div className="spaced">
                        <h3><code>Resume</code></h3>
                        <Button variant="outline-dark" onClick={() => { download(resume, "Audrey_Tracy_resume_2024.pdf");}}>download</Button>
                    </div>
                    <div className = "spaced">
                    <iframe src={resume} width="100%" height="550px" />
                    </div>
                </Tab>
                <Tab eventKey="rec_letter" title="Recommendation">
                    {/* <div>
                        <iframe src={resume} width="100%" height="500px" />
                    </div> */}
                </Tab>

            </Tabs>


        </div>

    );
}

export default Documents;