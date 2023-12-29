import { useEffect, useState } from "react"

import Title from './Title'
import Count from './Count'
import ResetButton from './ResetButton'
import ButtonContainer from './ButtonContainer'
import CountButton from "./CountButton"

function Card() {

    const [count, setCount] = useState(0)
    const isLocked = count === 5 ? true : false

    useEffect(() => {

        const handleKeydown = (e) => {
            if (e.code === 'Space') {
                setCount(count < 5 ? count + 1 : 5)
            }
        }
        window.addEventListener('keydown', handleKeydown)

        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    }, [count])

    return (
        <div className={`card ${isLocked ? 'card--limit' : ''}`}>
            <Title isLocked={isLocked} />
            <Count count={count} />
            <ResetButton setCount={setCount} />
            <ButtonContainer>
                <CountButton type="minus" setCount={setCount} isLocked={isLocked} />
                <CountButton type="plus" setCount={setCount} isLocked={isLocked} />
            </ButtonContainer>
        </div>
    )
}

export default Card