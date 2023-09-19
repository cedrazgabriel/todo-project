import Rocket from '../assets/rocket.svg'

export function Header(){
    return (
        <div className="w-full h-52 bg-gray-700 flex items-center justify-center">
        <div className="h-12 w-[92px] text-4xl font-extrabold flex gap-3">
        <img src={Rocket} alt="RocketToDo" className='w-6 h-9 mt-2' />
        <div>
        <span className="text-blue">to</span><span className="text-purple-dark">do</span>
        </div>
        </div>
      </div>
    )
}