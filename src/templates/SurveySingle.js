import SurveyTheme from './../components/SurveyTheme'
import Header from './../components/Header'
import questions from './../data/2.json';

const SurveySingle = () => {
    return (
        <div className="container">
            <Header pageTitle={questions.survey_result_detail.name} 
                count={questions.survey_result_detail.participant_count} 
                submitted={questions.survey_result_detail.submitted_response_count} 
                rate={questions.survey_result_detail.response_rate} 
                />
            {questions.survey_result_detail.themes.map((theme, i) => (
                <SurveyTheme theme={theme} key={i} />                
            ))}
        </div>
    )
}

export default SurveySingle
