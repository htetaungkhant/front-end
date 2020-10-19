import React from 'react';

import NavBar from '../component/navigation-bar';
import color from '../config/colors';

class Services extends React.Component {
    render() {
        return (
            <>
                <NavBar color = {color.white} image='https://www.codigo.co/img/ui/logo-codigo-red.svg'  activeStatus ="services"/>
                <h4>Sorry for Services ...</h4>
            </>
        );
    }
}

export default Services;