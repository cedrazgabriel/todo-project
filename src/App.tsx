
import BaseLogo from './assets/base-logo.png'
import 'animate.css';

export function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='text-center flex flex-col gap-2'>
        <img src={BaseLogo} alt="logo-name" className='w-[600px] h-[400px] fill-emerald-600' />
        <h1 className='text-3xl text-black font-sans font-bold animate__animated animate__bounce animate__infinite'>
          Em construção..
        </h1>
        <h1 className='text-3xl text-black font-sans font-bold animate__animated animate__fadeIn animate__infinite'>
          Estamos construindo um site novinho em folha..
        </h1>
      </div>
    </div>
  );
}
