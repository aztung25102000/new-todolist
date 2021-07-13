import { render } from '@testing-library/react';
import React from 'react';

//class PErson extends Component {
//  render() {
//    return (
//      <p> This is a Person. I'm {Math.floor(Math.random() *30)} year old.</p>
// );
//}
//}

const Person = (props)=> {
    return <p> This is a Person. I'm {Math.floor(Math.random() *30)} year old.</p>
}
export default Person;