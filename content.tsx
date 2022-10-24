import scssText from "bundle-text:./style.scss"
import type { PlasmoContentScript } from "plasmo"
import React, { Suspense } from "react"
// This regular import works fine
//import ComponentOne from "~components/componentOne"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"],
}

// Load component styles using DOM injection
export const getStyle = async (): Promise<HTMLStyleElement> => {
  const style = await document.createElement("style")
  style.textContent = scssText
  document.head.appendChild(style)
  return style
}

const ContentScript = () => {
 
  // Lazy loading the component results in an error
  const ComponentOne = React.lazy(() => import("~components/componentOne"))

  return (
    <Suspense>
        <ComponentOne/> 
    </Suspense>
  )
}
export default ContentScript
