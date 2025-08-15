import React, { useState, useEffect } from 'react'

interface SearchBarProps {
    placeholder?: string;
    handleSearch: (term: string) => void;
}
export const SearchBar = ({ placeholder = 'Buscar', handleSearch }: SearchBarProps) => {

    const [query, setquery] = useState('');

    const handleSearchClick = () => {
        handleSearch(query);
        setquery('');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    useEffect(() => {

        const timeOutId = setTimeout(() => {
            handleSearch(query)
        }, 700)

        return () => {
            clearTimeout(timeOutId) //throws when component turns off or the effect reproduces
        }

    }, [query, handleSearch]);

    return (
        <div className='search-container'>
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => {
                    setquery(event.target.value);
                }}
                onKeyDown={handleKeyDown}
            />

            <button
                onClick={handleSearchClick}>Buscar</button>
        </div>
    )
}
