import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import picExp from '../../assets/ex1.png';
import picExp2 from '../../assets/ex2.png';
import { useState } from 'react';
import FormattedDate from '../../components/FormattedDate';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Picture from '../../components/Picture';
import TitleLink from '../../components/TitleLink';
import Material from '../../components/Material';
import Description from '../../components/Description';
const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
    return (
    <div className="">
        <div className="text-primaryAccent font-medium">Experience</div>
        <div 
            className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter ['ex1'] ? "bg-gray-200":""}`}
            onMouseEnter={() => setIsMouseEnter({['ex1']: true})}
            onMouseLeave={() => setIsMouseEnter({['ex1']:false})}
        >
            <div>
                <FormattedDate isHighLight = {isMouseEnter ['ex1']}>2023-2024</FormattedDate>
                <Picture picture={picExp} title='Fashion Ecommerce'/>
            </div>
            <div className="grid gap-y-4">
                <TitleLink isHighLight = {isMouseEnter ['ex1']} title='Fashion Ecommerce' link="https://www.google.com/"/>
                
                <div className='flex gap-4 text-xl'>
                    <Material icon={faGithub} link="https://www.google.com/" />
                    <Material icon={faMedium} link="https://www.google.com/" />
                    <Material icon={faYoutube} link="https://www.google.com/" />
                </div>

                <Description description="Designing and developing a sports data analysis system that scrapes data from various sports websites."/>
                
                <div className="flex gap-4 text-sm">
                    <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex1'] ? "text-primaryTitle" : ""} `}>React</div>
                    <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex1'] ? "text-primaryTitle" : ""} `}>Node.js</div>
                    <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex1'] ? "text-primaryTitle" : ""} `}>Express</div>
                </div>
            </div>
        </div>
        
        <div 
            className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter ['ex2'] ? "bg-gray-200":""}`}
            onMouseEnter={() => setIsMouseEnter({['ex2']: true})}
            onMouseLeave={() => setIsMouseEnter({['ex2']:false})}
        >
            <div>
                <div>
                    <span className={`text-sm ${isMouseEnter ['ex2'] ?"text-primaryTitle":""}`}>2022-2023</span>
                </div>
                <div>
                    <img src={picExp2} className='w-5/6 rounded-md' />
                </div>
            </div>
            <div className="grid gap-y-4">
                <div className={`text-primaryAccent ${isMouseEnter ['ex2'] ?"text-primaryTitle":""}`}>
                    Fashion Ecommerce
                    <FontAwesomeIcon className={`text-xs -rotate-45 duration-500 ease-out ${isMouseEnter ['ex2'] ? "translate-x-1 -translate-y-1":""}`} icon={faArrowRight}/>
                </div>
                <div className='flex gap-4 text-xl'>
                    <a href='https://www.google.com/' target="_blank" className='hover:scale-110'><FontAwesomeIcon icon={faGithub}/></a>
                    <a href='https://www.google.com/' target="_blank" className='hover:scale-110'><FontAwesomeIcon icon={faMedium}/></a>
                    <a href='https://www.google.com/' target="_blank" className='hover:scale-110'><FontAwesomeIcon icon={faYoutube}/></a>
                </div>
                <div className='text-sm'>Designing and developing a sports data analysis system that scrapes data from various sports websites.</div>
                <div className="flex gap-4 text-sm">
                    <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex2'] ? "text-primaryTitle" : ""} `}>React</div>
                    <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex2'] ? "text-primaryTitle" : ""} `}>Node.js</div>
                    <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex2'] ? "text-primaryTitle" : ""} `}>Express</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Experience;