import React from 'react'
import "../styles/rusticsroots.css"
import RusticScreens from '../components/RusticScreens'
import RusticCaseStudy from '../components/RusticCaseStudy'

function RusticRoots() {
  return (
    <div className="Rustic_Whole">
        <h1>Rustic Roots App <br>
        </br>
        <button type="button"><a href="https://www.figma.com/proto/ThFLGvqKlWvsmi6PO7q5bp/Rustic-Roots?node-id=19-2946&scaling=min-zoom&page-id=19%3A2877&starting-point-node-id=19%3A2946">View the Figma Prototype</a></button></h1>
        <RusticScreens />
        <RusticCaseStudy />
    </div>
  )
}

export default RusticRoots
