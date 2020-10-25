import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../component/footer';

import ListItem from '../component/list-item';
import NavBar from '../component/navigation-bar';
import color from '../config/colors';
import testData from '../testData';

class Blog extends React.Component {

    testList = testData.blogMostRecentList;

    render() {
        return (
            <>
                <NavBar color = {color.white} image='https://www.codigo.co/img/ui/logo-codigo-red.svg'  activeStatus ="blog"/>
                <Container style={{marginTop: 80}}>
                    <Row>
                        <Col xs={{order: 2}} lg={{ size: 3, order: 1}}>
                            <label style={styles.title}>Most Recent</label>
                            {
                                this.testList.map((item, index) => <ListItem key={index} item={item}  />)
                            }
                        </Col>
                        <Col xs={{order: 1}} lg={{ size: 9, order: 2}}>
                            <span style={styles.space}></span>
                            <div>
                                <div style={styles.headerContainer}>
                                    <label style={styles.header}>How Much Does It Cost to Develop a Mobile Application in Singapore?</label>
                                </div>
                                <p style={styles.paragraph}>So how much does it really cost to develop a mobile application in Singapore? On average, developing a basic mobile app in Singapore will cost around $50,000 SGD. If you factor in content strategy, user experience, UI/UX design and backend, the cost will be around $90,000 SGD. </p>
                                <p style={{...styles.paragraph, marginTop: '5%'}}>This is dependent on the complexity of the mobile application too. You can expect complex mobile applications to be more expensive, while basic mobile apps will need less cost to develop. </p>
                                <p style={{...styles.paragraph, marginTop: '5%'}}>The cheapest possible app that you can create is anything that provides users with certain kinds of information in a static format. However, the development costs can increase if you factor in things like an ability to fetch user data. </p>
                                <p style={{...styles.paragraph, marginTop: '5%'}}>Speak with us @ Codigo today for a no-obligation cost quotation on your mobile application project. </p>
                                <label style={styles.subtitle}>Types of Mobile Applications</label>
                                <p style={styles.paragraph}>The Apple App store contains 24 app categories while Google Play has 33 app categories in comparison. Only apps that fit into these categories can successfully reach their targeted audience. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </>
        );
    }
}

const styles = {
    header: {
        display: 'block', 
        textAlign: 'center', 
        fontSize: 25, 
        fontWeight: 'bold'
    },
    headerContainer: {
        padding: '10%',
        paddingTop: '8%',
        paddingBottom: '8%'
    },
    paragraph: {
        color: '#676767',
        fontSize: 17
    },
    space: {
        display: 'block', 
        height: 40, 
        borderTop: '1px solid black', 
        borderBottom: '1px solid black'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: '5%'
    },
    title: {
        display: 'block', 
        paddingTop: 14, 
        paddingBottom: 14, 
        borderBottom: '1px solid black', 
        borderTop: '1px solid black', 
        fontWeight: 'bold', 
        fontSize: 14
    }
}

export default Blog;