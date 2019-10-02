import React from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList';
import questionData from './questionData';

// Question Show Component
function QuestionShowPage(props) {
    return (
        <div>
            <h1>Question Number {props.number}</h1>
            <QuestionDetails
                title={questionData[0].title}
                body={questionData[0].body}
                view_count={questionData[0].view_count}
                author={questionData[0].author.full_name}
                created_at={new Date(questionData[0].created_at)}
            />

            <AnswerList answers={questionData[0].answers} />

            {/* <AnswerDetails body="Red." author={{ full_name: "Michael Owen" }} created_at={new Date()} /> */}
        </div>
    );
}
export default QuestionShowPage;
