import './Social.css';
import linkedin from '../../assets/linkedin.svg';

const Social = () => {

    return (
        <div className='social-container inactive'>
            <h4>Or you can reach out on social:</h4>
            <div className='social mt-2'>
                <a href='https://www.linkedin.com/in/george-dumitrache-1021b120b/' rel='noreferrer' target='_blank'><img src={linkedin} alt='' /></a>
            </div>
        </div>
    )
}

export default Social;