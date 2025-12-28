import React from "react"

import notFoundStyle from "../styles/404.scss"
import { QuartzComponent, QuartzComponentConstructor } from "../types"

const NotFound: QuartzComponent = () => {
  return (
    <article className="previewable">
      <div id="not-found-div">
        <div>
          <h1>404</h1>
          <p>
            That page doesn't exist. <br />
            But don't leave! There's <br />
            plenty more to explore.
          </p>
        </div>

        <div id="logo-404" className="no-select" aria-hidden="true">
          <span style={{ fontSize: "4rem" }}>📝</span>
        </div>
      </div>
    </article>
  )
}
NotFound.css = notFoundStyle

export default (() => NotFound) satisfies QuartzComponentConstructor
