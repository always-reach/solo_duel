import {atom}from 'jotai'

const useDuel=()=>{
    const deck=atom<string[]>([])

    return deck
}

export default useDuel