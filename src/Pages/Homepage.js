import Social from '../Components/Social/Social';
import image from '../assets/profile.jpg'
import './style.css';
import { useState } from 'react';

const Homepage = () => {
    const [social, setSocial] = useState(false);

    return (
        <div className='container-fluid'>
            <div className="row g-0">
                <div className='col-12 col-lg-6 my-5 my-lg-0 d-flex align-items-center justify-content-center flex-column'>
                    <div className='container px-2 px-sm-5'>
                        <h1 className='mb-3 mb-xl-5'>George, Fullstack Engineer<br/>ready for action 🚀</h1>
                        <p className='w-100 w-sm-75'>
                            Always ready for action, I can provide you with a full modern web application for
                            your business in the fastest time you have ever seen. With a good habit of developing clean code
                            and some know-how in Software Architecture, I can guide you from zero to finished project in no time!
                        </p>
                        <button className='btn btn-success mt-2 mt-xl-5'>Contact me now!</button>
                        <div className='social-mobile-wrapper'>
                            <Social />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 position-relative'>
                    <div className='overlay'></div>
                    <div onMouseEnter={() => setSocial(true)} onMouseLeave={() => setSocial(false)} className={ social ? 'social-wrapper' : 'social-wrapper inactive'}>
                        <Social />
                    </div>
                    <img className='img-fluid' src={image} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Homepage;