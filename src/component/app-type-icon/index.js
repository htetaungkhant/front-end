import React from 'react';

import './app-icons.css';

function AppType({appType}) {
    switch(appType){
        case 'app':
            return (
                <div className="app-icon">
    
                </div>
            );
        case 'web':
            return (
                <div className="web-icon">
    
                </div>
            );
        case 'cms':
            return (
                <div className="cms-icon">
    
                </div>
            );
        case 'ui/ux':
            return (
                <div className="uiux-icon">
    
                </div>
            );
        default:
            return (
                <>
                </>
            );
    }
}

export default AppType;