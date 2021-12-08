import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import SectionTitle from '../SectionTitle/SectionTitle';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const total1 = Math.round((good / total) * 100);
    return total1;
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countGood = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };

  countNeutral = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };

  countbBad = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    const sum = this.state.good + this.state.neutral + this.state.bad;
    return sum;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="conteiner">
        <SectionTitle title="Please leave feedback" />
        <FeedbackOptions
          countGood={this.countGood}
          countNeutral={this.countNeutral}
          countbBad={this.countbBad}
        />
        {this.countTotalFeedback() > 0 ? (
          <ul>
            <SectionTitle title="Statistics" />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </ul>
        ) : (
          <p>No feetback given</p>
        )}
      </div>
    );
  }
}

export default App;