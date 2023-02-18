import { LayoutStyle } from '@/components/dom/Layout.style'
import { useRef, forwardRef, useImperativeHandle } from 'react'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <LayoutStyle {...props} ref={localRef}>
      {children}
    </LayoutStyle>
  )
})
Layout.displayName = 'Layout'

export default Layout
