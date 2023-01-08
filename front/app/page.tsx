import DuelField from '../components/DuelField'
import Header from '../components/Header'

export default function Home() {
    return (<div>
        <Header />
        <div className='flex justify-center items-center'>
            <DuelField />
        </div>
    </div>)
}