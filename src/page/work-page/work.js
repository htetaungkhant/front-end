import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import './work.css';
import Footer from '../../component/footer';
import NavBar from '../../component/navigation-bar';
import CategoryListItem from '../../component/category-list-item';
import LegendItem from '../../component/legend-item';
import Project from '../../component/project';
import color from '../../config/colors';
import testData from '../../testData';

function Work () {

    const query = useQuery();
    const categoryList = testData.categoryList;
    const allProjectList = testData.allProjectList;
    const tagsProjectList = testData.tagsProjectList;

    const [tags, setTag] = useState(query.get("tags"));

    useEffect(() => setTag(query.get("tags")));

    return (
            tags ?
            <>
                <NavBar color = {color.white} image='https://www.codigo.co/img/ui/logo-codigo-red.svg'  activeStatus ="work"/>
                <Container fluid={true} className="work">
                    <Row className="title-row">
                        <Col md="11" lg="9" className="title">Here's 5% of</Col>
                        <Col md="11" lg="9" className="title">our published work.</Col>
                        <Col md="11" lg="9" className="title">See 100% of our power.</Col>
                    </Row>
                    <Row className="category-row">
                        <Col md="9" lg="7">
                            <div className="category-container">
                            {
                                categoryList.map(({category, name}) => 
                                    tags === category ?
                                    <CategoryListItem key={category} name={name} category={category} isActive={true} />
                                    :
                                    <CategoryListItem key={category} name={name} category={category} isActive={false} />
                                )
                            }
                            </div>
                        </Col>
                        <Col md="3" lg="2" className="legend-items-main-container">
                            <div className="legend-items-container">
                                <label className="legend-title">LEGEND</label>
                                <div className="legend-items-wrapper">
                                    <LegendItem image="https://www.codigo.co/img/ui/ico-app.svg" name="APP" />
                                    <LegendItem image="https://www.codigo.co/img/ui/ico-web.svg" name="WEB" />
                                    <LegendItem image="https://www.codigo.co/img/ui/ico-cms.svg" name="CMS" />
                                    <LegendItem image="https://www.codigo.co/img/ui/ico-uiux.svg" name="UI/UX" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="project-row">
                        {
                            tags === 'all' ?
                            allProjectList.map((project, index) => <Project key={index} project={project} />)
                            :
                            tagsProjectList.map((project, index) => 
                                tags === project.category ?
                                <Project key={index} project={project} />
                                :
                                null
                            )
                        }
                    </Row>
                </Container>
                <Footer />
            </>
            :
            <Redirect to={{
                pathname: "/work",
                search: '?tags=all',
            }}/>
            // <Redirect to="/work?tags=all" />
        );
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default Work;