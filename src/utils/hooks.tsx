"use client"

import { useState, useEffect } from 'react'

// Хук возвращающий ширину экрана при ее изменении
export const useResize = () => {
  
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
    
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  
  return width
};