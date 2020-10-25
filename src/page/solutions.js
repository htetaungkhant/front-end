import React from 'react';

import NavBar from '../component/navigation-bar';
import color from '../config/colors';

class Solutions extends React.Component {
    render() {
        return (
            <>
                <NavBar color = {color.white} image='https://www.codigo.co/img/ui/logo-codigo-red.svg'  activeStatus ="solutions"/>
                <h4>Solutions Page</h4>
            </>
        );
    }
}

export default Solutions;