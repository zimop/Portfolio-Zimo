import '../../styles/flip.css';
const HobbyCard: React.FC = () => {
    return (
        <div className ="flip-container">
            <div className ="flip-card">
                <div className="flip-card-front">
                    Front Side
                </div>
                <div className="flip-card-back">
                    Back Side
                </div>
            </div>
        </div>
    )
}

export default HobbyCard