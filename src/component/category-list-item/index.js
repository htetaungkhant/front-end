import React from 'react';
import { Link } from 'react-router-dom';

import './cli.css';

function CategoryListItem({name, category, isActive}) {
    return(
        <Link to={`/work?tags=${category}`} className="cli-container">
            <label className={isActive ? "active-category" : "category"}>{name}</label>
        </Link>
    );
}

export default CategoryListItem;