import React from 'react'

interface PreviousSearchesProps {
    searches: string[];
    onLabelCicked: (term: string) => void;
}

export const PreviousSearches = ({ searches, onLabelCicked }: PreviousSearchesProps) => {
    return (
        <div className='previous-searches'>
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map((term) => (
                    <li key={term}
                        onClick={() => onLabelCicked(term)}>{term}</li>
                ))}
            </ul>
        </div>

    )
}
