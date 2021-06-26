const Header = ({pageTitle, count, rate, submitted}) => {
  return (
    <header>
      <span>logo</span>
      <h1>{pageTitle}</h1>
      { rate &&
        <div>
          <p>Response rate {Math.floor(( rate ) * 100)}% </p>
          <p>Participant Count: {count}  |  Response Count: {submitted} </p>
        </div>
      }

    </header>
  )
}

export default Header
