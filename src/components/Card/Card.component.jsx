import React from 'react';

import './card.styles.css'

const Card = props => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.singleMonster.id}?set=set2&size=180x180`}/>
        <h2>{props.singleMonster.name}</h2>
        <p>{props.singleMonster.email}</p>

    </div>
)

export default Card