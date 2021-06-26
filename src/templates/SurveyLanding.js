import SurveyRow from './../components/SurveyRow'
import Header from './../components/Header'
import surveys from './../data/surveys.json';


const SurveyLanding = () => {
    return (
        <div className="container">
            <Header pageTitle="My Surveys" />
            <SurveyRow survey={surveys} />
        </div>
    )
}

export default SurveyLanding
