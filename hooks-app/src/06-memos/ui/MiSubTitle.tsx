import React from 'react'

interface MiSubTitleProps {
    subtitle: string;
    callMyAPI?: () => void;
}

export const MiSubTitle = React.memo(({ subtitle, callMyAPI }: MiSubTitleProps) => {

    console.log('MiSubTitle se volvió a renderizar');

    return (
        <>
            <h6>{subtitle}</h6>
            <button className='bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer'
                onClick={callMyAPI}>
                Llamar función
            </button>
        </>
    )
});
