import { useEffect, useState } from 'react'

export default function useNearScreen ({ distance = '600px', rootElement, once = false, externalRef } = {}) {
  const [isNearScreen, setShow] = useState(false)

  useEffect(() => {
    let observer

    const root = rootElement.current
    const element = externalRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        root: root,
        rootMargin: distance
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen }
}
