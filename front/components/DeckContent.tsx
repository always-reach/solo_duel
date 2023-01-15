type DeckContentType={
    card?:[]
}

const DeckContext = () => {
    return (
        <div className="bg-gray-200 border-2 rounded-lg w-3/5 h-80">
            デッキの中身
        </div>
    )
}

export default DeckContext