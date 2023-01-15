
import DeckContext from "../../components/DeckContent"
import TextField from "../../components/TextField"
const CreateDeck: React.FC = () => {
    return (
        <div>
            <TextField placeholder="デッキ名" />

            <div className='flex border-2'>
                <DeckContext />
                <div className="bg-blue-300 border-2 rounded-lg w-2/5">
                    カードリスト
                </div>
            </div>


        </div>
    )
}

export default CreateDeck