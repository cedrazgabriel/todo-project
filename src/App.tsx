
import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'
export function App(){
  
  const [countTasks, setCountTasks] = useState<number>(0)

  function addCountTasks(){
    setCountTasks(prevState => prevState + 1 )
  }
  return(
   <div className='flex flex-col items-center justify-center'>
    <Header />
    <Input addCountTasks={addCountTasks} />
    <Tasks countTaskCreated={countTasks} countTaskFinished={0} tasks={['teste']} />
   </div>
   
  )
}