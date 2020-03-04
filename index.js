import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import SliderHelper from './SliderHelper'
const data= {"categories": [{"id": "1", "sub_categories": [{"description":"ID _1 SLIDE 1"}, {"description": "ID _1 SLIDE 2"}, {"description": "ID _1 SLIDE 3"}],"name": "Option 1"},{"id": "2", "sub_categories": [{"description":"ID _2 SLIDE 1"}, {"description": "ID _2 SLIDE 2"}],"name": "Option 2",},{"id": "3", "sub_categories": [{"description":"ID _3 SLIDE 1"}, {"description": "ID _3 SLIDE 2"}],"name": "Option 3",}]}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <SliderHelper data={...data}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
