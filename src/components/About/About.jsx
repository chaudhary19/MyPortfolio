import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Competitive Programmer | Expert at Codeforces | Front end developer | Public speaker'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Teacher</h3>
                    <p className='about-details'>
                        I really likes to teach and share my knowledge, till now, I've taught hundreds
                        of students about Data Structures and Algortihms.
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Competitive Programmer</h3>
                    <p className='about-details'>
                        I've been into competitive programming from around 2 years now, and
                        became Expert at Codeforces.
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Public Speaker</h3>
                    <p className='about-details'>
                        Being a passionate public speaker, I've given talks at
                        more than 5 events till now! Want me to speak in your
                        event?{' '}
                        <a
                            className='about-link-element'
                            href='mailto:chaudharymayank022@gmail.com'
                        >
                            Email me the details!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
