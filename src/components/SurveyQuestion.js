import React from 'react'
import { default as icon } from './../assets/chevron-up.icon.svg';

const SurveyQuestion = ({question}) => {
    return (
        <div className="theme-body__question">
            <div className="theme-body__question-content">
                <p className="col">{question.description}</p>
                <p className="col">4.5</p>
                <span className="col accordion-link">breakdown<img src={icon} alt="show/hide" /></span>
            </div>
            <div className="theme-body__question-breakdown">
                {/* This would be a breakdown component with the detailed graph/information */}
                <p>404 graph not found, if I had time it would have looked so good, I'm talking animations and the whole shebang!</p>
            </div>
        </div>
    )
}

export default SurveyQuestion
