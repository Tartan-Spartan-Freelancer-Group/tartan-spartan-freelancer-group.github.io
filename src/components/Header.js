import PropTypes from 'prop-types'
import React from 'react'
import logoImg from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="logo-img" src={logoImg} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Tartan Spartan Freelancer Group</h1>
        <p>
          Contracting with the galaxy's best institutions since 3306.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('crew')
            }}
          >
            The Crew
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intel')
            }}
          >
            Intel
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('join')
            }}
          >
            Join Us
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
