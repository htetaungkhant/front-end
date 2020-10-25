import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';

import './project-detail.css';
import BackKey from '../../component/back-key';
import Footer from '../../component/footer';

function ProjectDetail(){
    return (
        <>
            <BackKey />
            <Container fluid={true} style={{backgroundColor: 'gray', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <label className="project-detail">{`Detail of ${useParams().project}`}</label>
            </Container>
            <Footer />
        </>
    );
}

export default ProjectDetail;