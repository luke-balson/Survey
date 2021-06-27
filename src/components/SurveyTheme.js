import SurveyQuestion from './SurveyQuestion'
import { default as icon } from './../assets/chevron-up.icon.svg';

const SurveyTheme = ({theme}) => {
    return (
        <div className='theme'>
            <div className="theme-header">
                <h3>{theme.name}</h3> <span className="accordion-link selected">hide<img src={icon} alt="show/hide" /></span>
            </div>
            <div className="theme-body">
                <div className="theme-body__title">
                    <h5 className="col">Question</h5>
                    <h5 className="col">Average</h5>
                    <h5 className="col">&nbsp;</h5>
                </div>
                {theme.questions.map((question, i) => (
                    <SurveyQuestion question={question} key={i} /> 
                ))}
            </div>
        </div>
    )
}

export default SurveyTheme
