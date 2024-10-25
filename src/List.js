import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { followCursor } from 'tippy.js';
const List = ({people}) => {
  return (
    <>
    <div className='person py-3 '>
    {people.map((person)=>{
            const {id,name,age,image,date} = person
            return(
              <Tippy content={person.date} delay={100}
              plugins={[followCursor]}
              followCursor="horizontal"
              placement='top'>
                <div className='hover:shadow-slate-400 hover:shadow-xl hover:transition-shadow 
                rounded-xl my-1'>
                <section key={id} className='section m-2'>      
                    <img src={image} alt={name} className=''/>
                    <div className='pl-5'>
                        <h2>{name}</h2>
                        <p>{age} years</p>
                    </div>
            </section>
            </div>
              </Tippy> 
            )
        })}
    </div>
    </>
  )
}

export default List
