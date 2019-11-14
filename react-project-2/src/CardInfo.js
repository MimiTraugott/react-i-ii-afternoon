import React from 'react'

function CardInfo (props) {
return (<div>
    <div>
        <div>
            <h2>{props.currentCardIndex +1 +'/'+ props.cardsLength}
            </h2>
        </div>
    </div>
    <div>
        <h1>{props.card.name.first + ' ' + props.card.name.last}</h1>
        <div>
            <h3>{props.card.city + ', ' + props.card.country}</h3>
            <h3>{props.card.employer}</h3>
            <h3>{props.card.title}</h3>
        </div>
    </div>
    <div>
        <h2>Favorite Movies:</h2>
        <ul>
            <li>{props.card.favoriteMovies[0]}</li>
            <li>{props.card.favoriteMovies[1]}</li>
            <li>{props.card.favoriteMovies[2]}</li>
        </ul>
    </div>

</div>
)
}

export default CardInfo