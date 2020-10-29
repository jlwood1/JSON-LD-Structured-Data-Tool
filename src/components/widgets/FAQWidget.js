import React from 'react'
import {updateQASections} from '../../reducers/widgetReducer'
import {connect} from 'react-redux';

let FaqWidget = (props) => {
    return (
        <div className = 'faq-widget-wrapper'> 
            {
                props.qaSections && props.qaSections.length > 0 ?  
                    <ul className = 'question-list'>
                    {
                        props.qaSections.map(question => (
                            <li key = {question.id} className = 'questions'>
                                <label className = 'form-label'> Question {question.id} </label>
                                <input id = {'question' + question.id} className = 'input-text' type="text" value ={question.question} onChange = {(event) => {props.updateQASections(question.id, event.target.value, '', 'UpdateQuestion')}}/>
                                <div className = 'divider'></div> 
                                <label className = 'form-label'> Answer {question.id}</label>
                                <input id = {'answer' + question.id} className = 'input-text' type="text" value ={question.answer} onChange = {(event) => {props.updateQASections(question.id, '', event.target.value, 'UpdateAnswer')}}/> 
                                <div className = 'delete-button' onClick = {() => {props.updateQASections(question.id, '', '', 'Delete')}}> <i className = 'delete-icon'> x </i>  </div> 
                            </li>
                        ))
                    }
                    </ul>
                :
                    ''
            }
            <div className = 'add-button' onClick = {() => {
                props.updateQASections('', '', '', 'Add')
            }}>
                <h2 className = 'button-text'> <i className = 'add-icon'> + </i>  Add Question </h2>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>  {
    return {
        qaSections: state.app.qaSections
    }
}

FaqWidget = connect(mapStateToProps, {updateQASections})(FaqWidget)

export default FaqWidget;