import React from 'react'


import python from '../../public/python.webp'
import mongoDB from '../../public/mongodb.jpg'
import express from '../../public/express.png'
import reactjs from '../../public/reactjs.png'
import nodejs from '../../public/node.png'
import java from '../../public/java.png'

const Portfolio = () => {
    const carditem = [
        {
            id: 1,
            logo: mongoDB,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: express,
            name: "Express"
        },
        {
            id: 3,
            logo: reactjs,
            name: "Reactjs"
        },
        {
            id: 4,
            logo: nodejs,
            name: "Nodejs"
        },
        {
            id: 4,
            logo: nodejs,
            name: "Nodejs"
        },
                {
            id: 5,
            logo: python,
            name: "Python"
        },
                        {
            id: 6,
            logo: java,
            name: "Java"
        }



    ]
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline font-semibold'>Featured Project</span>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>

                    {

                        carditem.map(({id,logo,name})=>(

                            <div className='md:h-[280px] md:w-[280px] rounded-lg cursor-pointer border-[2px] shadow-lg hover:scale-95           duration-300 p-1 ' key={id}>

                                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-ful  '></img>
                                <div>
                                <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
                                <p className='px-2 text-grey-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className='px-6 py-6 space-x-3 justify-around'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Vedio</button>
                                    <button  className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
                                </div>

                            </div>
                            

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
 
export default Portfolio
