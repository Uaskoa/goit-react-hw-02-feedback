// import { Component } from "react";
// import Controls from "./Controls"

// class FeedbackCounter extends Component {
//   //   constructor() {
//   //     super();

//   //     this.state = {
//   //       good: 0,
//   //       neutral: 0,
//   //       bad: 0,
//   //     };
//   //   }

//   static defaultProps = {
//     initialValue: {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     },
//   };

//   state = {
//     good: this.props.initialValue.good,
//     neutral: this.props.initialValue.neutral,
//     bad: this.props.initialValue.bad,
//   };

//   //   static propTypes = {};

//   handleGoodFeedback = (event) => {
    

//     this.setState((prevState) => ({ good: prevState.good + 1 }));

//     // const target = event.target;
//   };

//   handleNeutralFeedback = (event) => {
    

//     this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
//   };

//   handleBadFeedback = (event) => {
    

//     this.setState((prevState) => ({ bad: prevState.bad + 1 }));
//   };

    
//     countTotalFeedback = () => {
//         return this.state.good + this.state.neutral + this.state.bad;
//     }

//     countPositiveFeedbackPercentage = () => {
//         return (this.state.good * 100) / this.countTotalFeedback();
//     }

//   render() {
//     return (
//       <div>
//         <h2>Please leave feedback</h2>

//         <Controls
//           onGoodFeedback={this.handleGoodFeedback}
//           onNeutralFeedback={this.handleNeutralFeedback}
//           onBadFeedback={this.handleBadFeedback}
//         />

//         {/* <button type="button" onClick={this.handleGoodFeedback}>
//           Good
//         </button>
//         <button type="button" onClick={this.handleNeutralFeedback}>
//           Neutral
//         </button>
//         <button type="button" onClick={this.handleBadFeedback}>
//           Bad
//         </button> */}

//         <h3>Statistics</h3>
//         <p>Good: {this.state.good}</p>

//         <p>Neutral: {this.state.neutral}</p>
//         <p>Bad: {this.state.bad}</p>
//         <p>Total: {this.countTotalFeedback()}</p>
//         <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
//       </div>
//     );
//   }
// }

// export default FeedbackCounter;
