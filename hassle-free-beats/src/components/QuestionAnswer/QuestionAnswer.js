import React from "react";

import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText'

import "./QuestionAnswer.css";

const QuestionAnswer = ({ question, answer }) => (
  <Card className="question-answer">
    <CardHeader
      title={question}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>{answer}</CardText>
  </Card>
);

export default QuestionAnswer;
