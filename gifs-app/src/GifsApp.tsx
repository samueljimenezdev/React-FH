import React, { useState } from 'react'
import { mockGifs } from './mock-data/figs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './shared/components/PreviousSearches'
import { GifList } from './shared/components/GifList'

export const GifsApp = () => {
    const [previousTerms, setpreviousTerms] = useState(['Naruto'])

    const handleTermClicked = (term: string) => {
        console.log(`Term clicked: ${term}`);
    }

    const handleSearch = (term: string) => {

        if (!term) return;
        if (term.trim().length === 0) return
        term = term.toLowerCase();
        setpreviousTerms((prevTerms) => {
            if (prevTerms.includes(term)) {
                return prevTerms; // No need to add if it already exists
            }

            if (prevTerms.length == 8) {
                prevTerms.pop()
            }
            return [term, ...prevTerms]; // Add new term to the beginning
        });
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />

            {/* Buscador */}
            <SearchBar placeholder="Buscar gifs.." handleSearch={handleSearch} />

            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelCicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}
