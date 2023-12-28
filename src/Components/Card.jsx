import { useState } from "react"

import Title from './Title'
import Count from './Count'
import ResetButton from './ResetButton'
import ButtonContainer from './ButtonContainer'

function Card() {

    const [count, setCount] = useState(0)
    const isLocked = count === 5 ? true : false

    return (
        <div className={`card ${isLocked ? 'card--limit' : ''}`}>
            <Title />
            <Count count={count} />
            <ResetButton setCount={setCount} />
            <ButtonContainer setCount={setCount} isLocked={isLocked} />
        </div>
    )
}

export default Card