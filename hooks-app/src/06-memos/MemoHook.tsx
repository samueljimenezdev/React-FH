import React, { useCallback, useState } from 'react'
import { MiTitle } from './ui/MiTitle'
import { MiSubTitle } from './ui/MiSubTitle';

/**
 * React UseMemo Hook
 * Avoids re-rendering of components when their props have not changed, optimizing performance.
 * In this example, MiTitle and MiSubTitle components are wrapped with React.memo
 * to prevent unnecessary re-renders when their respective props remain unchanged.
 */
export const MemoHook = () => {

    const [title, setTitle] = useState('Mi Título');
    const [subTitle, setSubTitle] = useState('Mi Subtítulo');


    /**
     * useCallback Hook
     * Memoizes the function to prevent its recreation on every render,
     * ensuring that MiSubTitle does not re-render unless subTitle changes.
     */
    const handleMyAPICall = useCallback(() => {
        console.log('Llamando a mi API...' + subTitle);
    }, [subTitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Memo App</h1>
            <MiTitle title={title} />
            <MiSubTitle subtitle={subTitle} callMyAPI={handleMyAPICall} />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={() => setTitle('Título Modificado')}>
                Cambiar título
            </button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={() => setSubTitle('Subtítulo Modificado')}>
                Cambiar subtítulo
            </button>
        </div>
    )
}