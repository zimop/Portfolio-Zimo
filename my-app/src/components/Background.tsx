const Background: React.FC = () => {
    const hexagons = Array.from({ length: 41});
    const rows = Array.from({ length: 100});
    return (
        <div className="absolute inset-0 z-0">
            <div className="flex">
            {hexagons.map((_, index) => (
                <div key={index} className="hexagon flex justify-center items-center">
                <div className="hexagon-inner"></div>
                </div>
            ))}
            </div>
            {rows.map((_, i) => (
            <div key = {i}>
                <div className="flex -ml-[calc((100vw/40)/2)] -mt-[calc((100vw/40/0.866/2/2))]">
                {hexagons.map((_, index) => (
                    <div key={index} className="hexagon flex justify-center items-center">
                    <div className="hexagon-inner"></div>
                    </div>
                ))}
                </div>
                <div className="flex -mt-[calc((100vw/40/0.866/2/2))]">
                {hexagons.map((_, index) => (
                    <div key={index} className="hexagon flex justify-center items-center">
                    <div className="hexagon-inner"></div>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
    )
}

export default Background