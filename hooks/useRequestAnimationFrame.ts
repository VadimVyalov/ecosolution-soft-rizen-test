import { useEffect, useRef } from "react";

    const useRequestAnimationFrame = (callback: { (deltaTime: any): void; (arg0: number): void; }) => {
        const requestRef = useRef(0);
        const previousTimeRef = useRef(0);

        const step = (time: number) => {
            if (previousTimeRef.current) callback(time - previousTimeRef.current);
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(step);
        };

        useEffect(() => {
            requestRef.current = requestAnimationFrame(step);
            return () => cancelAnimationFrame(requestRef.current);
        }, []);
};
    export default useRequestAnimationFrame