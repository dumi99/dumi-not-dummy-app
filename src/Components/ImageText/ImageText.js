import './ImageText.css';
import { useState } from 'react';

const ImageText = ({img, title, text, reverse}) => {
    const [active, setActive] = useState(false);
    return (
        <div className='row justify-content-center align-items-center container-fluid container-md my-2 py-2 my-md-5 py-md-5'>
            <div className={'col-12 col-md-6 d-flex justify-content-center align-items-center ' + (reverse ? 'order-md-2' : '')}>
                <img onClick={() => setActive(!active)} className='image-logo img-fluid rounded mb-3 mb-md-0 w-50' src={img} alt='' />
            </div>
            <div className={'col-12 col-md-6 text-container d-flex justify-content-center align-items-center flex-column text-center ' + (active ? 'opacity-1' : 'opacity-0')}>
                <h2 className='mb-3'>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ImageText;