import React from 'react'

export default function ListerLangages(props) {
    return (
        <div>
            {props.langages.map((lang, index) => <li key={index}>{lang}</li>)}
        </div>
    )
}
