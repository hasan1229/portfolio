import React from 'react'


import html from '../../public/html.png'
import css from '../../public/css.jpg'
import java from '../../public/java.png'
import javascript from '../../public/javascript.png'
import oracle from '../../public/oracle.png'
import springBoot from '../../public/springBoot.jpg'
import spring from '../../public/spring.png'

const Experience = () => {
    const carditem = [
        {
            id: 1,
            logo: html,
            name: "html"
        },
        {
            id: 2,
            logo: java,
            name: "java"
        },
        {
            id: 3,
            logo: css,
            name: "css"
        },
        {
            id: 4,
            logo: oracle,
            name: "oracle"
        },
        {
            id: 4,
            logo: javascript,
            name: "javascript"
        },
                {
            id: 5,
            logo: spring,
            name: "spring"
        },
                        {
            id: 6,
            logo: springBoot,
            name: "springBoot"
        }



    ]
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                <span className='underline font-semibold'>Featured Project</span>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-5 my-3'>

                    {

                        carditem.map(({id,logo,name})=>(

                            <div className='flex flex-col items-center rounded-full cursor-pointer border-[2px] shadow-lg hover:scale-105 duration-300  ' key={id}>

                                <img src={logo} className='w-[150px]  p-5 rounded-ful '></img>
                                <div>
                                <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
                                
                                </div>
                               

                            </div>
                            

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
 
export default Experience
