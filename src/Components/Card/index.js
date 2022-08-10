import './styles.css';

export default function Card({ mediaLogo, mediaLink, mediaName }) {
    return (
        <a href={mediaLink} className='card-container'>
            <img className='card-logo' src={mediaLogo} alt={mediaName} />
            <div className='text-container'>
                <span className='card-text'>{mediaName}</span>
            </div>
        </a>
    )
}