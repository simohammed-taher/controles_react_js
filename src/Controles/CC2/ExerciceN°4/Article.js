import React from 'react'

export default function Article(props) {
    return (
        <div>
            <p>référence:{props.reference}</p>
            <p>libellé:{props.libellé}</p>
            <p>prix:{props.prix}</p>
            <p>quantité:{props.quantité}</p>
        </div>
    )
}
