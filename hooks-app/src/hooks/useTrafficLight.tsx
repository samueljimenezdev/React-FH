import { useEffect, useState } from "react";

type LightColor = 'red' | 'yellow' | 'green';

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

export const useTrafficLight = () => {


    const [light, setLight] = useState<LightColor>('red');
    const [countDown, setCountDown] = useState(5);

    useEffect(() => {
        if (countDown === 0) return;
        const intervalId = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [countDown]);

    useEffect(() => {
        if (countDown > 0) return;

        setCountDown(5);

        if (light === 'red') {
            setLight('green');
            return;
        }

        if (light === 'yellow') {
            setLight('red');
            return;
        }

        if (light === 'green') {
            setLight('yellow');
            return;
        }
    }, [countDown, light]);

    return { light, countDown, colors };
};
