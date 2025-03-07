import React from 'react'
//import PropTypes from 'prop-types'
//import styled from 'styled-components'


const Hero = props => {
  return (
      <>
          <div className="hero">
              <div className="hero-text">
                  <h1>Marvel App</h1>
                  <p>
                      Find your favorite Marvel
                      Hero
                  </p>
                  <input
                      type="text"
                      className="input-search"
                  />
                  <button>search Hero</button>
              </div>
          </div>
      </>
  );
}

Hero.propTypes = {}

export default Hero