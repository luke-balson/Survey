import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SurveyLanding from './templates/SurveyLanding'
import SurveySingle from './templates/SurveySingle'

function App() {
  return (
    <div className="survey">
       <BrowserRouter>
        <Switch>
          <Route path="/single">
            <SurveySingle />
          </Route>
          <Route path="/">
            <SurveyLanding />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
