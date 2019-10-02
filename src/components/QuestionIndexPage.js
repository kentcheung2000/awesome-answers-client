import React from 'react';

import questionData from './questionData';
import '../styles/QuestionIndexPage.css';

function QuestionIndexPage(props) {
    return (
        <main className="QuestionIndexPage">
            <h1>Questions</h1>
            <ul>
                {questionData.map((question, index) => (
                    <li key={question.id}>
                        <p>
                            {index} -
							{question.title}
                            <br />
                            <small>Seen {question.view_count} time(s)</small>
                            <small>Created at: {new Date(question.created_at).toLocaleDateString()}</small>
                        </p>
                        <p>{question.body}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default QuestionIndexPage;
