import { Inter } from '@next/font/google'
import DuelField from '../components/DuelField'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center'>
        <DuelField />
      </div>
    </div>
  )
}
