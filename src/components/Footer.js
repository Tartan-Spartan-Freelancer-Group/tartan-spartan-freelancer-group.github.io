import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id='footer' style={props.timeout ? { display: 'none' } : {}}>
        <p className='copyright'>&copy; Tartan Spartan &amp; co. LTD. <a href='https://discord.com/invite/28TtaMeR8j'>Join Us on Discord.</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
