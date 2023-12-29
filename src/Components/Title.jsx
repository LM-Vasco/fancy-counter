function Title({ isLocked }) {
    return (
        <h1 className="title">
            {isLocked
                ? (
                    <span>
                        Limit! CLick <b>reset</b>
                    </span>
                )
                : 'Fancy Counter'
            }
        </h1>
    )
}

export default Title