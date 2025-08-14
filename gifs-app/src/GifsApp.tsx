import React from 'react'
import { mockGifs } from './mock-data/figs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './shared/components/PreviousSearches'
import { GifList } from './shared/components/GifList'

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />

            {/* Buscador */}
            <SearchBar placeholder="Buscar gifs.." />

            {/* Busquedas previas */}
            <PreviousSearches searches={['Goku', 'Perros', 'Gatos']} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}
