import * as React from 'react'
type InputProps = JSX.IntrinsicElements['input']
const TextField:React.FC<InputProps>=(props)=>{
    return (
        <div>
            <input className="bg-gray-200 border-2 border-sky-300 rounded-lg focus:ring-blue-300" type="text" {...props}/>
        </div>
    )
}

export default TextField