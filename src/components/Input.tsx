import Plus from '../assets/plus.svg'

interface InputProps {
    addCountTasks(): void
}

export function Input({addCountTasks}: InputProps){
    return(
        <div className="flex w-[736px] items-center gap-1 justify-center absolute mb-36">
        <input
         type="text"
         placeholder='Adicione uma nova tarefa'
         className='flex p-4 items-center gap-2 flex-1 rounded-lg border border-gray-700 bg-gray-500 text-white outline-none' />
        <button
        onClick={addCountTasks}       
         className='flex p-4 justify-center items-center gap-2 rounded-2xl bg-blue-dark text-gray-100'>
            Criar
            <img src={Plus} alt="+" />
        </button>
    </div>
    )
}