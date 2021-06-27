import SurveyRowItem from './../components/SurveyRowItem'

const SurveyRow = ({survey}) => {
    return (
        <div>
            <h3 className="survey-row__title">Completed Surveys</h3>
            <div className="survey-row">
                {survey.survey_results.map((survey, i) => (
                    <SurveyRowItem survey={survey} key={i} /> 
                ))}
            </div>
        </div>
    )
}

export default SurveyRow
