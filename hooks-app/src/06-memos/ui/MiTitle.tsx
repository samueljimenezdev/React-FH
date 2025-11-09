import React from 'react'

interface MiTitleProps {
    title: string;
}

export const MiTitle = React.memo(({ title }: MiTitleProps) => {

    console.log('MiTitle se volvió a renderizar');

    return (
        <div>{title}</div>
    )
});
