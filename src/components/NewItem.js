import React from 'react';

import ItemDate from './ItemDate';
import './NewItem.css';
import Card from './Card';

function NewItem(props) {
    return (
        <li>
            <Card className='new-item'>
                <ItemDate date={props.date} />
                <div className='new-item__description'>
                    <h2>{props.title}</h2>
                    <div className='new-item__price'>{props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default NewItem;