import React from 'react'
import ListerLangages from './ListerLangages'
export default function AppLangages() {
    const langs = ["php", "javascript", "laravel", "sqlite"]
    return (
        <ListerLangages langages={langs} />
    )
}
