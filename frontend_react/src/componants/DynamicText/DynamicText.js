import Typed from 'typed.js'
import { useRef, useEffect } from 'react'
import './dynamicText.scss'
import React from 'react'
import { motion } from "framer-motion";
function DynamicText() {
    const Ref = useRef(null)
    useEffect(() => {
        const typed = new Typed(Ref.current, {
            strings: ['&nbsp;Prodüksiyon', '&nbsp;Animasyon', '&nbsp;Belgese'],
            stratDelay: 300,
            typeSpeed: 130,
            backDelay: 130,
            backSpeed: 130,
            smartBackspace: 130,
            showCursor: true,
            loop: true,


        })


    })
    useEffect(() => {
        window.AOS.init();
      }, []);


    return (
        <div className='dynamicText'  data-aos="fade-down">
            <p>
                Neher <motion.span className='change' ref={Ref}

                >&nbsp; </motion.span>
            </p>
        </div>
    )
}

export default DynamicText;