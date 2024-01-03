import React, { useState, useRef } from 'react'
import useMouse from './util/useMouse'
import { motion } from 'framer-motion'


const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const section2Ref = useRef(null);
  const size = isHovered ? 500 : 50;
  const { x, y } = useMouse(section2Ref);


  return (
    <main>
      <section id='section01'>
        <h1>Gallery Hover Animation</h1>
      </section>

      <section id='section02' ref={section2Ref}>
        <div className='project__wrap'>
          <motion.div
            className='project__mask'
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <p onMouseEnter={() => { setIsHovered(true) }}
              onMouseLeave={() => { setIsHovered(false) }}>"어려움은 극복해 나가는 것이다."<br />라는 말을 항상 <span>기억합니다.</span> </p>
          </motion.div>
          <div className='project__text'>
            <p>I'm heejin kim, I always<span> remember</span> saying, "The difficulty is to overcome."</p>
          </div>
        </div>
      </section>

      <section id='section03'></section>
    </main>
  )
}

export default App
