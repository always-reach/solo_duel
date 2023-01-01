import * as React from 'react'
type DuelCardProps={
    cardName:string
}

const DuelCard:React.FC<DuelCardProps>=(props)=>{
    return(
        <div className="border-2 border-gray-500 p-4 w-4/12">
            <div className="border-2 border-gray-500">{props.cardName}</div>
            <div className="border-2 border-gray-500 mt-4">image</div>
        </div>
    )
}

export default DuelCard