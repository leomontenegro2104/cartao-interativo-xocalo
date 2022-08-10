import './styles.css';
import picoles from '../../assets/picoles.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__img' src={picoles} alt='Picolés' />
        </footer>
    )
}