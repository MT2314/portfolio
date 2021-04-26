import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

// Icons
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ImLibreoffice } from 'react-icons/im';
// Resume
import resume from '../assets/MikeTkachuk-Resume.pdf'
import ContactPage from '../Components/ContactPage';


function HomePage() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="HomePage">



                <ContactPage show={modalShow}
                    onHide={() => setModalShow(false)} />

                {!modalShow && <header className="hero">
                    <h1 className="hero-text">
                        Hi, I am
                    <span> Mike Tkachuk.</span>
                    </h1>
                    <p className="h-sub-text">
                        Practiced Developer capable of building web applications from the ground up.
                        Proven experience developing consumer-focused
                        websites using modern technologies.
                </p>
                    <div className="icons">
                        <a href={resume} className="icon-holder">
                            <ImLibreoffice className="icon resume" style = {{height:'80%'}}/>
                        </a>
                        <a href="https://github.com/MT2314" className="icon-holder">
                            <AiFillGithub className="icon gh" />
                        </a>
                        <a href="https://linkedin.com/in/mike-tkachuk-82909111a" className="icon-holder">
                            <AiFillLinkedin className="icon ln" />
                        </a>
                    </div>
                </header>}
                <Button className="ContactForm" variant="primary" onClick={() => setModalShow(true)}>
                    Contact Me
                </Button>
            </div>
        </>
    )
}

export default HomePage;
