import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

function CountButton({ type, setCount, isLocked }) {

    const handleClick = () => {
        setCount(prev => {
            if (type === "minus") {
                return prev > 0 ? prev - 1 : 0
            }
            else {
                return prev < 5 ? prev + 1 : 5
            }
        })
    }
    return (
        <button disabled={isLocked} onClick={handleClick} className="count-btn">
            {type === "minus"
                ? <MinusIcon className="count-btn-icon" />
                : <PlusIcon className="count-btn-icon" />}

        </button>
    )
}

export default CountButton