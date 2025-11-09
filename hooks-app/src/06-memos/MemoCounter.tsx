import { useCounter } from '@/hooks/useCounter';
import React, { useMemo } from 'react'

const heavyStuff = (iterationNumber: number) => {
    console.time('heavyStuff started');
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');
    }
    console.timeEnd('heavyStuff started');

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {

    const { counter, increment } = useCounter(4000);

    /**
     * useMemo: Is used to memoize a value so that it is only recalculated when its dependencies change.
     * In this case, heavyStuff(counter) will only be recalculated when counter changes.
     * This helps to avoid unnecessary recalculations on every render, improving performance.
     * The difference with useCallback is that useMemo returns a memoized value, while useCallback returns a memoized function.
     */
    const heavyValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Memo - useMemo </h1>
            <h2 className="text-xl font-thin text-white">Counter: {counter}</h2>
            <h2 className="text-xl font-thin text-white">Heavy Value: {heavyValue}</h2>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={increment}>
                Incrementar
            </button>
        </div>
    )
}
