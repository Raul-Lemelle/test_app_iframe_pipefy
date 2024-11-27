/* globals PipefyApp */
import React from 'react';
import { render } from 'react-dom';

const pipefy = PipefyApp.init();

class ReactSample extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { pipe: null };
  }
  componentDidMount() {
    PipefyApp.render(() => {
      pipefy.pipe().then((pipe) => {
        this.setState({ pipe })
      });
    });
  }
  
  render() {
    if (!this.state.pipe) { return <div /> };
    return (
      <div>
        <h1>GED on Pipe: {this.state.pipe.name}</h1>
        <iframe
          src="https://portal-galapagoscapital-dev.sydle.com/home"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          title="External Site"
        />
      </div>
    );
  }
}


render(<ReactSample />, document.getElementById('application'));