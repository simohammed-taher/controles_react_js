import React from 'react'
import Article from './Article'

export default function Articles() {
    const elements = [
        { reference: 'reference1', libellé: 'libellé1', prix: 'prix1', quantité: 'quantité1' },
        { reference: 'reference2', libellé: 'libellé2', prix: 'prix2', quantité: 'quantité2' }
    ]
    return (
        <div>
            {elements.map((elem, index) => (
                <Article key={index} reference={elem.reference} libellé={elem.libellé} prix={elem.prix} quantité={elem.quantité} />
            ))}
        </div>
    )
}
