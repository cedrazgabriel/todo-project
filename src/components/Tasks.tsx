import ClipBoard from '../assets/Clipboard.png';
import { Task } from './Task';

interface TasksProps {
    countTaskCreated: number,
    countTaskFinished: number
    tasks: string[]
}

export function Tasks({countTaskCreated, countTaskFinished} : TasksProps){
    const hasTasks = true;
    return(
        <div className='flex flex-col w-[736px] items-center gap-6 mt-8'>
        <div className='flex justify-between items-end w-[736px] mt-6'>
        <div className='flex items-center gap-2'>
         <span className='text-sm text-blue font-bold'>Tarefas criadas</span>
         <span className='flex py-[2px] px-2 flex-col justify-center items-center gap-2 bg-gray-500 rounded-full text-gray-200 font-semibold '>{countTaskCreated}</span>
        </div>
        <div className='flex items-center gap-2'>
         <span className='text-purple-dark text-sm font-bold'>Concluídas</span>
         <span className='flex py-[2px] px-2 flex-col justify-center items-center gap-2 bg-gray-500 rounded-full text-gray-200 font-semibold '>{countTaskFinished}</span>
        </div>
       </div>
       <div className='flex py-16 px-6 flex-col justify-center items-center g-4 rounded-lg border border-slate-700 text-gray-300 w-full'>
        {!hasTasks && 
        <>
         <img src={ClipBoard} alt="" className='mb-4' />
         <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
         <p>Crie tarefas e organize seus itens a fazer</p>
        </>
        }
        {hasTasks &&
        <Task />
        }
        
        </div>
       </div>
    )
}