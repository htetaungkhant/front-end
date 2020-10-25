import React from 'react';

function LegendItem({image, name}) {
    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img src={image} style={styles.image} alt="app-icon" />
            </div>
            <div>
                <label style={styles.nameLabel}>{name}</label>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '48%',
        display: 'flex'
    },
    imageContainer: {
        marginRight: 10
    },
    image: {
        width: 13, 
        height: 13
    },
    nameLabel: { 
        fontSize: 10, 
        fontWeight: 500 
    }
}

export default LegendItem;