import React,{ Component } from "react";
import axios from 'axios';

export default class CreateAssessment extends Component
{
  constructor(props)
  {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangePassingPercentage = this.onChangePassingPercentage.bind(this);
    this.onChangeQuestionStatement = this.onChangeQuestionStatement.bind(this);
    this.onChangeQuestionOption = this.onChangeQuestionOption.bind(this);
    this.onChangeQuestionCorrectOption = this.onChangeQuestionCorrectOption.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      durationInMinutes: 0,
      passingPercentage: 0,
      questions: []
    };
  }

  onChangeName(e)
  {
    this.setState({ name: e.target.value });
  }

  onChangeDuration(e)
  {
    this.setState({ durationInMinutes: e.target.value });
  }

  onChangePassingPercentage(e)
  {
    this.setState({ passingPercentage: e.target.value });
  }

  onChangeQuestionStatement(e)
  {
    const index = e.target.getAttribute('data-index');
    const newQuestions = [...this.state.questions];
    newQuestions[index].statement = e.target.value;
    this.setState({ questions: newQuestions });
  }

  onChangeQuestionOption(e)
  {
    const index = e.target.getAttribute('data-index');
    const optionIndex = e.target.getAttribute('data-option-index');
    const newQuestions = [...this.state.questions];
    newQuestions[index].options[optionIndex] = e.target.value;
    this.setState({ questions: newQuestions });
  }

  onChangeQuestionCorrectOption(e)
  {
    const index = e.target.getAttribute('data-index');
    const newQuestions = [...this.state.questions];
    newQuestions[index].correctOption = e.target.value;
    this.setState({ questions: newQuestions });
  }

  addQuestion()
  {
    this.setState(prevState => ({
      questions: [...prevState.questions,{ statement: '',options: ['','','',''],correctOption: '' }]
    }));
  }

  onSubmit(e)
  {
    e.preventDefault();

    const assessmentObject = {
      name: this.state.name,
      durationInMinutes: this.state.durationInMinutes,
      passingPercentage: this.state.passingPercentage,
      questions: this.state.questions
    };
    console.log("Data To send: ",assessmentObject);

    axios.post('http://localhost:4000/assessments/create-assessment',assessmentObject)
      .then(res => console.log(res.data))
      .catch((error) => { alert("Error Occured While Creation") });

    this.setState({
      name: '',
      durationInMinutes: 0,
      passingPercentage: 0,
      questions: []
    });
  }

  render()
  {
    return (
      <div>
        <h3>Create New Assessment</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Assessment Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input type="number"
              className="form-control"
              value={this.state.durationInMinutes}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Passing Percentage: </label>
            <input type="number"
              className="form-control"
              value={this.state.passingPercentage}
              onChange={this.onChangePassingPercentage}
            />
          </div>
          <div className="form-group">
            <label>Questions </label>
            <button type="button" className="btn btn-primary" onClick={this.addQuestion}>Add Question</button>
            {
              this.state.questions.map((question,i) => (
                <div key={i}>
                  <div className="form-group">
                    <label>Question {i + 1}: </label>
                    <input type="text"
                      className="form-control"
                      data-index={i}
                      value={question.statement}
                      onChange={this.onChangeQuestionStatement}
                    />
                  </div>
                  <div className="form-group">
                    <label>Options: </label>
                    {question.options.map((option,j) => (
                      <div key={j}>
                        <input type="text"
                          className="form-control"
                          data-index={i}
                          data-option-index={j}
                          value={option}
                          onChange={this.onChangeQuestionOption}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="form-group">
                    <label>Correct Option: </label>
                    <input type="text"
                      className="form-control"
                      data-index={i}
                      value={question.correctOption}
                      onChange={this.onChangeQuestionCorrectOption}
                    />
                  </div>
                </div>
              ))
            }
          </div>
          <div className="form-group">
            <input type="submit" value="Create Assessment" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );

  }
}

