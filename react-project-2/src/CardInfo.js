import React from 'react'

function CardInfo (props) {
return (<div>
    <div>
        <div>
        </div>
    </div>
    <div>
        <h1>{props.cards.name.first + ' ' + props.cards.name.last}</h1>
        <div>
            <h3>{props.cards.city + ', ' + props.cards.country}</h3>
            <h3>{props.cards.employer}</h3>
            <h3>{props.cards.title}</h3>
        </div>
    </div>
    <div>
        <h2>Favorite Movies:</h2>
        <ul>
            <li>{props.cards.favoriteMovies[0]}</li>
            <li>{props.cards.favoriteMovies[1]}</li>
            <li>{props.cards.favoriteMovies[2]}</li>
        </ul>
    </div>

</div>
)
}

export default CardInfo