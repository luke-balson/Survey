import React from 'react'

const SurveyRow = ({survey}) => {
    return (
        <div className="card">
            <h4> {survey.name}</h4>
            
            <p>Participant Count: {survey.participant_count} <br />
            Response Count: {survey.submitted_response_count} </p>
            <p>
            <span>{Math.floor(( survey.response_rate ) * 100)}%</span>
            Response rate
            </p>
            
        </div>
    )
}

export default SurveyRow
