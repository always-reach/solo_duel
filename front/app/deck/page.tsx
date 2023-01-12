import TextField from "../../components/TextField"

const CreateDeck: React.FC = () => {
    return (
        <div>
            <TextField placeholder="デッキ名" />
            <div className="grid grid-cols-9">
                <div className="bg-blue-300 border-2 rounded-lg col-span-1">
                    デッキの中身
                </div>
                <div className="bg-blue-300 border-2 rounded-lg col-span-1">
                    カードリスト
                </div>
            </div>
            

        </div>
    )
}

export default CreateDeck