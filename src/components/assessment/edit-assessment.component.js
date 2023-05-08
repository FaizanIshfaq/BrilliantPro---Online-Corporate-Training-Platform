import React,{ Component } from "react";
import axios from 'axios';

export default class EditAssessment extends Component
{
  constructor(props)
  {
    super(props);

    // Set up functions
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangedurationInMinutes = this.onChangedurationInMinutes.bind(this);
    this.onChangepassingPercentage = this.onChangepassingPercentage.bind(this);
    this.onChangeQuestionStatement = this.onChangeQuestionStatement.bind(this);
    this.onChangeQuestionOption = this.onChangeQuestionOption.bind(this);
    this.onChangeQuestionCorrectOption = this.onChangeQuestionCorrectOption.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Get id from URL
    const segments = window.location.href.split('/');
    const assessmentId = segments[segments.length - 1];
    console.log("AseessmentId : ",assessmentId)
    // Set up state
    this.state = {
      name: "",
      durationInMinutes: "0",
      passingPercentage: "0",
      _id: assessmentId,
      questions: [],
    };
  }

  componentDidMount()
  {
    this.getAssessment();
  }

  getAssessment()
  {
    axios
      .get(`http://localhost:4000/assessments/${this.state._id}`)
      .then((res) =>
      {
        console.log(res.data);
        const { name,durationInMinutes,passingPercentage,questions } = res.data;
        this.setState({
          name: name,
          durationInMinutes: durationInMinutes,
          passingPercentage: passingPercentage,
          questions: questions,
        });
      })
      .catch((error) => console.log(error));
  }

  onChangeName(e)
  {
    this.setState({
      name: e.target.value,
    });
  }

  onChangedurationInMinutes(e)
  {
    this.setState({
      durationInMinutes: e.target.value,
    });
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

  onChangepassingPercentage(e)
  {
    this.setState({
      passingPercentage: e.target.value,
    });
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
    // get our form data out of state
    const { name,durationInMinutes,passingPercentage,questions } = this.state;
    const updatedAssessment = {
      name: name,
      durationInMinutes: durationInMinutes,
      passingPercentage: passingPercentage,
      questions: questions,
    };

    console.log("Our Data to send For update : ",updatedAssessment)
    axios
      .put(`http://localhost:4000/assessments/update-assessment/${this.state._id}`,updatedAssessment)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      durationInMinutes: "",
      passingPercentage: "",
      questions: [],
    });
  }

  render()
  {
    return (
      <div>
        <h3>Update Assessment : <b>{this.state.name}</b></h3>
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
            <input type="submit" value="Update Assessment" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
