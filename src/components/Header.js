const Header = ({pageTitle, count, rate, submitted}) => {
  return (
    <header>
      <div className="header-intro">
        <span className="logo"></span>
        <h1>{pageTitle}</h1>
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
