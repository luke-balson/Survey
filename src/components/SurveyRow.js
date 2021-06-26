import SurveyRowItem from './../components/SurveyRowItem'

const SurveyRow = ({survey}) => {
    return (
        <div>
            <h3>Completes Surveys</h3>
            <select></select>
            {survey.survey_results.map((survey, i) => (
                <SurveyRowItem survey={survey} key={i} /> 
            ))}
        </div>
    )
}

export default SurveyRow
