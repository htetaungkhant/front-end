import React from 'react';

import NavBar from '../component/navigation-bar';
import color from '../config/colors';

class Aboutus extends React.Component {
    render() {
        return (
            <>
                <NavBar color = {color.white} image='https://www.codigo.co/img/ui/logo-codigo-red.svg'  activeStatus ="aboutus"/>
                <h4>Sorry for Aboutus ...</h4>
            </>
        );
    }
}

export default Aboutus;