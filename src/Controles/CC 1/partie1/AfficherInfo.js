import React from 'react'

export default function AfficherInfo(props) {
    return (
        <div>
            <p>Bonjour {props.nom} {props.prenom} agé de {props.age}</p>
        </div>
    )
}
