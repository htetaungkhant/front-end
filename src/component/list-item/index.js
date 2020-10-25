import React from 'react';

const ListItem = ({item}) => {
    return (
        <div style={styles.container}>
            <span style={styles.prefix}> &gt; </span>
            <div style={styles.text}>{item}</div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex', 
        paddingTop: 10, 
        paddingBottom: 10, 
        fontSize: 13, 
        fontWeight: 'bold'
    },
    prefix: {
        width: '10%', 
        fontWeight: 'bold', 
        fontSize: 18
    },
    text: {
        width: '90%'
    }
}

export default ListItem;