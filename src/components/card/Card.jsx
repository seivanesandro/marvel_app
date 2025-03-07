import React from 'react'
//import PropTypes from 'prop-types'
import fotoTest from '../../assets/wanda.jpg';
//import styled from 'styled-components';

const Card = props => {
  return (
      <>
          <div
              className="card"
              style={{ width: '18rem' }}
          >
              <div className="card-header card-img-top ">
                  <img
                      src={fotoTest}
                      alt="noreferer"
                      style={{
                          width: '100%',
                          height: 'auto'
                      }}
                  />
              </div>
              <div className="card-body d-flex flex-column">
                  <span className="card-title">
                      hero
                  </span>
                  <button className="btn btn-danger d-grid gap-2 d-lg-block">
                      button
                  </button>
              </div>
          </div>
      </>
  );
}

Card.propTypes = {}

export default Card