import * as React from 'react'

type CardKind = "monster" | "magicTrap" | "field" | "grave" | "deck" | "extra" | "link"
type DuelFieldProps = {
}
const DuelField: React.FC<DuelFieldProps> = (props) => {
    const upperFiledKind: CardKind[] = ["link", "link"]
    const centerFiledKind: CardKind[] = ["field", "monster", "monster", "monster", "monster", "monster", "grave"]
    const lowerFiledKind: CardKind[] = ["extra", "magicTrap", "magicTrap", "magicTrap", "magicTrap", "magicTrap", "deck"]
    return (
        <div className="border-2 border-gray-500 w-11/12">
            <div className='flex justify-between h-2/5'>

                {centerFiledKind.map((kind: CardKind, index: number) => {
                    return (
                        <div className="w-3/12 h-48" key={index}>
                            <CardField kindOfCard={kind} />
                        </div>
                    )
                })}

            </div>

            <div className='flex justify-between'>
                {lowerFiledKind.map((kind: CardKind, index: number) => {
                    return (
                        <div className="w-3/12 h-48" key={index}>
                            <CardField kindOfCard={kind} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DuelField

type MonsterFieldProps = {
    kindOfCard: CardKind
}
const CardField: React.FC<MonsterFieldProps> = (props) => {
    const color = () => {
        switch (props.kindOfCard) {
            case "monster":
                return "bg-orange-300"
            case "magicTrap":
                return "bg-blue-300"
            case "field":
                return ""
            case "grave":
                return "bg-gray-300"
            case "deck":
                return ""
            case "extra":
                return ""
            case "link":
                return ""
            default:
                return ""
        }

    }

    return (
        <div className={`border-2 border-gray-500 h-full ${color()}`}>
            {props.kindOfCard}
        </div>
    )
}

