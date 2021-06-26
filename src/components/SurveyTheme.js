import SurveyQuestion from './SurveyQuestion'

const SurveyTheme = ({theme}) => {
    return (
        <div>
            <h3>{theme.name}</h3> <span>hide/show</span>
            <h6>Question</h6><h6>Average</h6>
            {theme.questions.map((question, i) => (
                <SurveyQuestion question={question} key={i} /> 
            ))}
        </div>
    )
}

export default SurveyTheme
