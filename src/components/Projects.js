import Personal from '../components/projects/Personal';
import School from '../components/projects/School';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Projects() {

    return (
        <div>
            <h1><code>My Projects</code></h1>
            {/* <p>see <a href = "">my github</a> for all my projects</p> */}
            <Tabs defaultActiveKey="school" id="uncontrolled-tab-example" className="mb-3" >
                
                <Tab eventKey="school" title="School Projects">
                    <School></School>
                </Tab>
                <Tab eventKey="personal" title="Personal Projects">
                    <Personal></Personal>
                </Tab>

            </Tabs>


        </div>

    );
}

export default Projects;