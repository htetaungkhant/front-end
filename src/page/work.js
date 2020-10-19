import React from 'react';

import NavBar from '../component/navigation-bar';
import color from '../config/colors';

class Work extends React.Component {
    render() {
        return (
            <>
                <NavBar color = {color.white} image='https://www.codigo.co/img/ui/logo-codigo-red.svg'  activeStatus ="work"/>
                <h4>Sorry for Work ...</h4>
            </>
        );
    }
}

export default Work;