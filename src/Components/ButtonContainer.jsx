import CountButton from "./CountButton"

function ButtonContainer({ setCount, isLocked }) {
    return (
        <div className="button-container">
            <CountButton type="minus" setCount={setCount} isLocked={isLocked} />
            <CountButton type="plus" setCount={setCount} isLocked={isLocked} />
        </div>
    )
}

export default ButtonContainer

