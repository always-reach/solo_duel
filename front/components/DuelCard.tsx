import * as React from 'react'
type DuelCardProps = {
    cardName: string
    cardImagePath?: string
}

const DuelCard: React.FC<DuelCardProps> = (props) => {
    return (
        <div className="border-2 border-gray-500 p-4">
            <div className="border-2 border-gray-500">{props.cardName}</div>
            {props.cardImagePath ?
                <img src={props.cardImagePath} alt="Image" />
                : <div>noImage</div>}
        </div>
    )
}

export default DuelCard