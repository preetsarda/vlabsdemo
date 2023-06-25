import React, { useState } from 'react';

const LabAccordion = ({ labs }) => {
    const objs = labs.objectives;
    const [Answer, setAnswer] = useState();
    const [Count, setCount] = useState(1);
    const handleAnswerChange = (event) => {
        const updatedAnswer = event.target.value;
        setAnswer(updatedAnswer);
    };
    const extract2 = (question) => {
        return question.answer;
    }
    const extract1 = (obj) => {
        return obj.questions.map(extract2)
    }
    const answers = objs.map(extract1)
    // const getSum = (total, arr) => {
    //     return total + arr.length;
    // }
    const getSum1 = (indo) => {
        let s = 0;
        for (let i = 0; i < indo; i++) {
            s += answers[i].length;
        }
        return s;
    }
    // const qlen = answers.reduce(getSum, 0);
    // console.log(qlen);
    console.log(answers)
    const discheck = (ob, q) => {
        if (Count > (getSum1(ob) + q)) {
            return false;
        }
        return true;
    }
    return (
        <div>
            <h2>{labs.title}</h2>
            <div className="accordion" id="parent">
                {objs.map((obj) => (
                    <div key={obj.id} className="accordion-item" >
                        <h2 className='accordian-header'>
                            <button className="accordion-button" type="button" data-bs-toggle='collapse' data-bs-target={"#step" + obj.id} aria-expanded="true" aria-controls={"step" + obj.id}>{obj.objective}</button></h2>
                        <div className="accordion-collapse collapse" id={"step" + obj.id} data-bs-parent="#parent"> <div className='accordian-body'>
                            <ul style={{ 'listStyleType': 'none' }}>
                                {obj.questions.map((question) => (
                                    <li key={question.id}> <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id={"flexCheckDefault" + question.id} disabled={discheck(obj.id - 1, question.id - 1)} />
                                        <label className="form-check-label disabled" htmlFor={"flexCheckDefault" + question.id}>
                                            {question.question}{question.command !== undefined && (
                                                <React.Fragment>
                                                    <br></br>
                                                    <em>Use : </em>
                                                    <mark>
                                                        <small>{question.command}</small>
                                                    </mark>
                                                </React.Fragment>
                                            )}<br />
                                            {question.answer_textbox !== false && (<React.Fragment><input className="form-control mt-1" id={'floatingInput' + question.id} placeholder="Answer" value={answers[question.id] || ''} onChange={(event) => handleAnswerChange(question.id, event)} /></React.Fragment>)}
                                        </label>
                                    </div></li>
                                ))}


                            </ul>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LabAccordion;
