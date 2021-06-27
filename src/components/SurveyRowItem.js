import React from 'react'

const SurveyRow = ({survey}) => {
    return (
        <a className="survey-row__item" href="/single">
            <h3> {survey.name}</h3>
            <div className="survey-row__item-summary">
                <p>Participant Count: {survey.participant_count} <br />
                Response Count: {survey.submitted_response_count} </p>
                <p> <span>{Math.floor(( survey.response_rate ) * 100)}%</span>
                Response rate</p>
            </div> 
        </a>
    )
}

export default SurveyRow
