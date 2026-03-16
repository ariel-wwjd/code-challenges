import { useEffect, useState } from "react"
import './styles.css'

export default function Counter() {
    const [seconds, setSeconds] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    console.log({ seconds,  })

    useEffect(() => {
        if (isPaused) {
            return
        }
        const timer = setTimeout(() => {
            setSeconds((seconds) => (seconds + 1))
        }, 1000)

        return () => {
            clearTimeout(timer)
        }

    }, [seconds, isPaused])

    const increaseHandler = () => {
        setSeconds((seconds) => seconds + 1)
    }

    const decreaseHandler = () => {
        setSeconds((seconds) => seconds - 1)
    }

    const pauseHandler = () => {
        setIsPaused(!isPaused)
    }

    const restartHandler = () => {
        setSeconds(0)
    }

    return (
        <div>
            <h1>Build a counter that increments every 2 seconds and can be increased or decreased manually</h1>
            <div>
                <div className="counter-container">
                    <button onClick={decreaseHandler}><h1>-</h1></button>
                    <h1 className="seconds">{seconds} Sec</h1>
                    <button onClick={increaseHandler}><h1>+</h1></button>
                </div>
                <div className="counter-actions">
                    <button onClick={pauseHandler}>{isPaused? 'Continue' : 'Pause'}</button>
                    <button onClick={restartHandler}>Restart</button>
                </div>
            </div>
        </div>
    )
}