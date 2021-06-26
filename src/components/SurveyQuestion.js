import React from 'react'

const SurveyQuestion = ({question}) => {
    return (
        <div>
            <p>{question.description}</p>
            <p>4.5</p>
            <span>responses link</span>

            {/* This would be a breakdown component with the detailed graph/information */}
            <div>404 graph not found</div>
        </div>
    )
}

export default SurveyQuestion
