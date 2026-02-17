import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('button, a, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setClicked(true);
        const handleMouseUp = () => setClicked(false);

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            {/* Primary Dot */}
            <div
                className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 transition-transform duration-100 ease-out"
                style={{ left: position.x, top: position.y, transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})` }}
            />
            {/* Trailing Ring */}
            <div
                className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30 transition-all duration-300 ease-out"
                style={{
                    left: position.x,
                    top: position.y,
                    width: isHovering ? '60px' : '32px',
                    height: isHovering ? '60px' : '32px',
                    backgroundColor: isHovering ? 'rgba(37, 99, 235, 0.05)' : 'transparent',
                    transform: `translate(-50%, -50%) scale(${clicked ? 0.9 : 1})`
                }}
            />
        </>
    );
}
