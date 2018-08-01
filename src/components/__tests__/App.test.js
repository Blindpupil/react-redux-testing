import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

Enzyme.configure({ adapter: new Adapter() });

// Context
const wrappedComponent = shallow(<App />);

// Helper function to make tests readable in spite Enzyme's crazy syntax
function allInstancesOf(component) {
  return wrappedComponent.find(component).length
}

// Expectations
it('Shows a comment box', () => {
  expect(allInstancesOf(CommentBox)).toEqual(1);
});

it('Shows a comment box', () => {
  expect(allInstancesOf(CommentList)).toEqual(1);
});