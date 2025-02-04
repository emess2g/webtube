import { Menu } from 'lucide-react'
import logo from '../assets/Logo.png'
import { Button } from '../components/Button'

export default function PageHeader(){
    return (
        <div className="flex gap-10 lg:gap-0 justify-between">
            <div className="flex gap-4 items-center flex-shrink-0 ">
                <Button className='border-none bg-black' variant="ghost" size="icon">
                    <Menu className='border-none bg-black mr-6'/>
                </Button>
                <a href="/"><img className='h-6 ml-4' src={logo} alt="" /></a>
             
            </div>
            <div className='underline'>home</div>
            <div></div>
        </div>
    )
}