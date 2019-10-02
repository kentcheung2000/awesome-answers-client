import React, { Component } from 'react';

import questionData from './questionData';
import '../styles/QuestionIndexPage.css';

class QuestionIndexPage extends Component {
    render() {
        return (
            <main className="QuestionIndexPage">
                <h1>Questions</h1>
                <ul>
                    {questionData.map((question, index) => (
                        <li key={index}>
                            <p>
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
}

export default QuestionIndexPage;
