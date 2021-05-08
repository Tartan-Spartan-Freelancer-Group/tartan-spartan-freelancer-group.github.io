import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render () {
    const close = (
      <div
        className='close'
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id='main'
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id='intro'
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Intro</h2>
          <span className='image main'>
            <img src={pic01} alt='An Alliance Chieftan flying through the void of space.' />
          </span>
          <p>
            The <strong>Tartan Spartan Freelancer Group</strong> are an
            Independent mercenary squadron that specialise in securing and
            strengthening systems through means of force and various
            manipulation tactics. They are the military wing of their faction
            and through this they provide armed response and support to their
            partnerships and allies. The group was formed from a collection of
            war veterens and bounty hunters. They specialise in combat tactics,
            in particular bounty hunting, spec ops and wet work contracts.
          </p>
          <p>
            We accept CMDR's from all backgrounds and support activities from
            bountry hunting, exploration, hunting for Raxxla, trading, and
            beyond.
          </p>
          {close}
        </article>

        <article
          id='crew'
          className={`${this.props.article === 'crew' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>The Crew</h2>
          {/*
          <span className='image main'>
            <img src={pic02} alt='Placeholder' />
          </span>
          */}
          <p>
            TSFG was founded by a trio of Scots from the void.
          </p>
          <ul>
            <li>Scootzy - Veteran of the Thargoid War</li>
            <li>Ceejay -  Deep Space Anarchist</li>
            <li>Nitram - Expert in Biowaste Trade and Counter Piracy</li>
          </ul>
          <p>
            We have a squadron of ~90 Pilots covering EU/NA
            We're looking for players of all levels, backgrounds and play styles.<br /><br />

            We offer:
            <ul>
              <li>Trade</li>
              <li>Combat</li>
              <li>Exploration</li>
              <li>Group Grinds (Materials, Missions etc)</li>
            </ul>
            We have 10 carriers that take regular trips out to the black and support the squadron in its activities
            We have our own minor faction, so if you want to help expand and conquer, great. If not. Thats fine. Our whole ethos of "Freelancer" is you are free to do as you wish, but do it with some company and camaraderie
          </p>

          {close}
        </article>

        <article
          id='intel'
          className={`${this.props.article === 'intel' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Intel</h2>
          <p style={{ textAlign: 'center' }}>
            <strong>Intel and guides coming soon.</strong>
          </p>
          {close}
        </article>

        <article
          id='join'
          className={`${this.props.article === 'join' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Join Us</h2>
          <p>Welcome to the <strong>Tartan Spartan Freelancer Group</strong> for Elite Dangerous on PS4/5.</p>
          <h3>Rules</h3>
          <p>
            Although we are a laid back squadron. There are ground rules which each member is expected to comply with.
          </p>

          <ol>
            <li>Do not break PlayStation network/Frontier Developments/Discord EULA,Rules or terms and conditions.</li>
            <li>Do not harass bully or intimidate other members.</li>
            <li>No racist, Sexist, Sectarian, Homophobic, Islamophobic, Antisemitism or Xenophobic content (exceptions made for remarks about Thargoids).</li>
            <li>Don't be a dick</li>
            <li>Vulgar language is fine within reason</li>
            <li>Admins say is final</li>
            <li>Do not post NSFW content on the discord.</li>
            <li>Do not act against the minor faction: Tartan Spartan Freelancer Group (killing wanted NPCs is allowed)</li>
            <li>Do not spam the discord</li>
            <li>Don't be a Thargoid</li>
            <li>No combat logging</li>
          </ol>
          <h3>Discord</h3>
          <p>The first thing you'll want to do is <a href="https://discord.com/invite/28TtaMeR8j">sign up for our discord</a> where all of our primary communications happens.</p>
          <h4>Enlist</h4>
          <p>To join the Squadron, you apply in-game. Select the <strong>Squadron Tile > Browse Squadrons > Search "Tartan" and apply</strong>. We require you join up on <a href="https://inara.cz/squadron/9291/">inara.cz</a> as well</p>
          <p>Once you have completed the above, notify a @SquadronCommander in discord and you'll be granted access to all our squadron has to offer.</p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
}

export default Main
