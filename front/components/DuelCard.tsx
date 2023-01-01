import * as React from 'react'
type DuelCardProps={
    cardName:string
}

const DuelCard:React.FC<DuelCardProps>=(props)=>{
    return(
        <div className="border-2 border-sky-500">
            {props.cardName}
        </div>
    )
}

export default DuelCard