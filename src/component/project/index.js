import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

import './project.css';
import AppTypeIcon from '../app-type-icon';

function Project({project}) {
    return (
        <Col xs={project.screenRatio === '3' ? project.screenRatio * 2 : '12' } sm={project.screenRatio === '3' ? project.screenRatio * 2 : '12' } md={project.screenRatio} className="project-container">
            <Link to={`/work/${project.name}`} className="project-wrapper">
                <div className="project-label-container">
                    <label className="category-title">{project.title}</label>
                    <label className="description">{project.description}</label>
                </div>
                <img src={project.imageUrl} className="image" alt="projectimage" />
                <div className="app-type-container">
                    {
                        project.types.map((appType, index) => <AppTypeIcon key={index} appType={appType} />)
                    }
                </div>
            </Link>
        </Col>
    );
}

export default Project;