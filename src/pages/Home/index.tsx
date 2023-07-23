import { ChangeEvent, useState } from 'react'

import { ArrowRight } from '@phosphor-icons/react'
import AppBar from '../../components/AppBar'
import Button from '../../components/Button'
import Copyright from '../../components/Copyright'
import TextField from '../../components/TextField'

const Home = () => {
  const [cpf, setCpf] = useState('')

  const handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value)
  }

  return (
    <>
      <AppBar />
      <main className='bg-[url("/src/assets/family.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className='container mx-auto px-4 py-24 flex flex-col text-white'>
          <span className='text-lg'>Conta do Nudemo</span>
          <h1 className='font-bold text-5xl mt-4 mb-48 max-w-5xl'>Você no controle: receba, movimente e guarde seu dinheiro de um jeito simples.</h1>
          <div className='flex flex-col bg-white text-black rounded-3xl overflow-hidden self-end p-6 w-[35%] max-w-xs'>
            <h2 className='font-bold text-xl mb-8'>Com o Nudemo a resposta vem em menos de 1 minuto</h2>
            <TextField placeholder='Digite seu CPF' name='cpf' value={cpf} onChange={handleCpfChange}/>
            <Button className='flex items-center justify-between bg-purple-700 rounded-full font-bold px-6 py-3 text-white mt-4'>
              Continuar
              <ArrowRight size={20} weight='bold' />
            </Button>
          </div>
        </div>
      </main>
      <Copyright />
    </>
  )
}

export default Home
