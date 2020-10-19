import React from 'react';

import NavBar from '../component/navigation-bar';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar theme='red' image='https://www.codigo.co/img/ui/logo-codigo.svg'/>
            </div>
        );
    }
}

export default Home;