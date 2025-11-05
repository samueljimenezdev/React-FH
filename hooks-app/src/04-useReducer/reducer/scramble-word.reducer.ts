import { stat } from "fs";

const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];


const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};


export interface ScrambleWordState {
    currentWord: string;
    scrambledWord: string;
    guess: string;
    points: number;
    errorCounter: number;
    maxAllowErrors: number;
    skipCounter: number;
    maxSkips: number;
    isGameOver: boolean;
    words: string[];
    lengthWords: number;
}

export type ScrambleWordAction =
    { type: 'SET_GUESS', payload: string } |
    { type: 'CHECK_ANSWER' } |
    { type: 'SKIP_WORD' } |
    { type: 'PLAY_AGAIN' };


export const getInitialScrambleWordState = (): ScrambleWordState => {

    const shuffledWords = shuffleArray([...GAME_WORDS]);
    return {
        currentWord: shuffledWords[0],
        scrambledWord: scrambleWord(shuffledWords[0]),
        guess: '',
        points: 0,
        errorCounter: 0,
        maxAllowErrors: 3,
        skipCounter: 0,
        maxSkips: 3,
        isGameOver: false,
        words: shuffledWords,
        lengthWords: shuffledWords.length,
    };
}

export const scrambledWordReducer = (state: ScrambleWordState, action: ScrambleWordAction): ScrambleWordState => {
    switch (action.type) {
        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload.trim().toUpperCase()
            }
        case 'CHECK_ANSWER':
            if (state.currentWord === state.guess) {
                const newWords = state.words.slice(1);
                return {
                    ...state,
                    words: newWords,
                    points: state.points + 1,
                    guess: '',
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0]),
                }
            }
            return {
                ...state,
                guess: '',
                errorCounter: state.errorCounter + 1,
                isGameOver: state.errorCounter > state.maxAllowErrors,
            }

        case 'SKIP_WORD':
            if (state.skipCounter >= state.maxSkips) return state;
            const newWords = state.words.slice(1);
            return {
                ...state,
                skipCounter: state.skipCounter + 1,
                words: newWords,
                currentWord: newWords[0],
                scrambledWord: scrambleWord(newWords[0]),
                guess: '',
            }
        case 'PLAY_AGAIN':
            return getInitialScrambleWordState();
        default:
            return state;
    }
}