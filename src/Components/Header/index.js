import './styles.css';
import logoXoCalo from '../../assets/logo-xo-calo.png';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__img-container'>
                <img className='logo-xocalo' src={logoXoCalo} alt='Xô Calô' />
            </div>
            <span className='header__title'>Clique no ícone desejado e navegue!</span>
        </header>
    )
}