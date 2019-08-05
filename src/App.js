import React, { Component /* , Fragment */ } from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

// const App = async () => {
//   const { coords } = await window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   console.log(coords);

//   return <div className='App'>Latitude: </div>;
// };
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: '' };
  // }
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner msg='Please accept location request' />;
  }

  render() {
    // return (
    //   // <Fragment>
    //   //   {!this.state.errorMessage ? (
    //   //     <SeasonDisplay lat={this.state.lat} />
    //   //   ) : (
    //   //     <div>Error: {this.state.errorMessage}</div>
    //   //   )}
    //   // </Fragment>

    // );
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

export default App;
