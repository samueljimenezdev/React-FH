import { UserContext } from '@/09-useContext/context/UserContext'
import React, { use } from 'react'
import { Link } from 'react-router'

export const AboutPage = () => {

    const { authStatus } = use(UserContext)!;


    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl font-bold'>Página sobre mi</h1>
            <hr />
            {authStatus === 'checking' && <p>Comprobando estado de autenticación...</p>}
            {authStatus === 'not-authenticated' && <Link to="/login" className='mt-2 text-blue-500 underline'>Login</Link>}
            {authStatus === 'authenticated' && <Link to="/profile" className='mt-2 text-blue-500 underline'>Perfil</Link>}
        </div>
    )
}
