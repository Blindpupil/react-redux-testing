import React from 'react';
import { shallow } from 'enzyme';
import 'components/setupTests';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

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