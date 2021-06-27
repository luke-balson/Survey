import { default as logo } from './../assets/CA-logo-rev.png';


const Header = ({pageTitle, count, rate, submitted}) => {
  return (
    <header>
      <div className="header-intro">
        <a href= '/'><img  className="logo" src={logo} alt="Culture Amp" /></a>
        <h2>{pageTitle}</h2>
      </div>
      { rate &&
        <div className="header-summary">
          <p className="lead">Response rate {Math.floor(( rate ) * 100)}% </p>
          <p>Participant Count: {count}  |  Response Count: {submitted} </p>
        </div>
      }
    </header>
  )
}

export default Header
