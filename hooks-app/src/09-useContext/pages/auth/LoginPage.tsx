import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(UserContext)!;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = login(email, password);

        if (!result) {
            toast.error('Invalid credentials');
            return;
        }
        toast.success(`Welcome`);
        navigate('/profile')

    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl font-bold'>Login Page</h1>
            <hr />
            <form
                className='flex flex-col gap-2 my-10'
                onSubmit={handleSubmit}
            >
                <Input
                    placeholder='Email'
                    type='email'
                    className='mb-2'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder='Password'
                    type='password'
                    className='mb-2'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type='submit' variant='ghost'>Login</Button>
            </form>

            <Link to="/" className='mt-2 hover:text-blue-500 underline'>About</Link>
        </div>
    )
}
