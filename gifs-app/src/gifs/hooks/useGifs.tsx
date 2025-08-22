import React, { useState } from 'react'
import { getGifByQuery } from '../actions/get-gifs-by-query.action'
import { mockGifs } from '../../mock-data/figs.mock'

export const useGifs = () => {
    const [previousTerms, setpreviousTerms] = useState(['Naruto'])
    const [gifs, setGifs] = useState([...mockGifs]);

    const handleTermClicked = async (term: string) => {
        const gifs = await getGifByQuery(term);
        setGifs(gifs);
    }

    const handleSearch = async (term: string) => {

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

        const gifs = await getGifByQuery(term);
        setGifs(gifs);
    }

    return {
        previousTerms,
        gifs,
        handleTermClicked,
        handleSearch
    }
}