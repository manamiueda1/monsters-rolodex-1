import React from 'react';
import Card from '../Card/Card.component'
import './CardList.styles.css'
const CardList = (props) => {
    
    
    console.log(props.monsters)
    return (
        <div className='card-list'>
            {props.monsters.map((monster) => (
                <Card key={monster.id} singleMonster={monster}/>
            ))}
        </div>
    )

   
}

export default CardList