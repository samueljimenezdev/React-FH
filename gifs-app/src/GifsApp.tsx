import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './shared/components/PreviousSearches'
import { GifList } from './shared/components/GifList'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {

    const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs()

    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />

            {/* Buscador */}
            <SearchBar placeholder="Buscar gifs.." handleSearch={handleSearch} />

            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelCicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>
    )
}
