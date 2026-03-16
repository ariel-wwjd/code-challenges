import { useEffect, useState } from 'react'
import './styles.css'
const forbiddenWords = ['the', 'more', 'plus', 'not']

export default function WordsRemover() {

    const [text, setText] = useState('')
    const [validText, setValidText] = useState('')
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const newText = text.split(' ').filter((word) => (!forbiddenWords.includes(word)))       

        setValidText(newText.join(' '))
    }, [text])

    return (
        <div>
            <h1>Build a component that removes certain words from text input.</h1>
            <div className="words-actions-container">
                <textarea 
                    placeholder="Type some text"
                    value={text}
                    onChange={(event) => (setText(event.target.value))}
                />
                <button
                    className='button'
                    onClick={() => (setText(''))}
                >CLEAN</button>
                <button
                    className='button'
                    onClick={() => (setShowAll(!showAll))}
                >{showAll ? 'Hide Words' : 'Show All'}</button>
            </div>
            <div className='result-container'>
                <span>{showAll ? text : validText}</span>
            </div>
        </div>
    )
}