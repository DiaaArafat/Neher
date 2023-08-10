import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './dynamicText.scss';

function DynamicText() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['&nbsp;Prodüksiyon', '&nbsp;Animasyon', '&nbsp;Belgesel'],
      startDelay: 300, // Correct the typo in "startDelay"
      typeSpeed: 130,
      backDelay: 130,
      backSpeed: 130,
      smartBackspace: 130,
      showCursor: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    window.AOS.init();
  }, []);

  return (
    <div className='dynamicText'>
      <p>
        Neher{' '}
        <span >
          <motion.span
          className='change'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={typedRef}
            dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
          />
        </span>
      </p>
    </div>
  );
}

export default DynamicText;
