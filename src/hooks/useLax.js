import { useEffect, useRef } from 'react'
import lax from 'lax.js'

const useLax = () => {
  useEffect(() => {
    lax.setup()

    const updateLax = () => lax.update(window.scrollY)

    document.addEventListener('scroll', updateLax)

    updateLax()

    return () => document.removeEventListener('scroll', updateLax)
  }, [])
}

const useLaxElement = () => {
  const ref = useRef()

  useEffect(() => {
    const currentNode = ref.current
    lax.addElement(currentNode)
    return () => lax.removeElement(currentNode)
  }, [])

  return ref
}

export { useLax, useLaxElement }
