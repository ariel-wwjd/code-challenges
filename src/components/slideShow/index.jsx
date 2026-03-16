import { useEffect, useState} from 'react'
import './styles.css'
import guitar1 from '../../../public/guitar1.webp'
import guitar2 from '../../../public/guitar2.webp'
import guitar3 from '../../../public/guitar3.webp'
import guitar4 from '../../../public/guitar4.webp'
import guitar5 from '../../../public/guitar5.webp'

const images = [guitar1, guitar2, guitar3, guitar4, guitar5]

export default function SlideShow() {
    const [index, setIndex] = useState(0)
    const maxIndex = images.length - 1

    console.log(index)

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === maxIndex) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [index, maxIndex])


    const onMoveUpHandler = () => {
        if (index === maxIndex) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const onMoveDownHandler = () => {
        if (index === 0) {
            setIndex(maxIndex)
        } else {
            setIndex(index - 1)
        }
    }

    

    return (
        <div>
            <h1 className='main-title-form'>
                Implement a slideshow that cycles through images automatically or via buttons.
            </h1>
            <div className='container'>
                <div className='arrow-left'>
                    <button onClick={onMoveDownHandler}>
                        <h1>{'<-'}</h1>
                    </button>
                </div>
                <div className='pictures-container'>
                    <img className='image' src={images[index]} alt='guitar image' />
                </div>
                <div className='arrow-right'>
                    <button onClick={onMoveUpHandler}>
                        <h1>{'->'}</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}