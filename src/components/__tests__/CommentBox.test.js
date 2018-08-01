import React from 'react';
import { mount } from 'enzyme';
import 'components/setupTests';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox/>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('The text area', () => {
  beforeEach(() => {
    wrapped.find('textarea')
      .simulate('change', {target: { value: 'testing' }});

    wrapped.update();
  });

  it('accepts text', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('testing');
  });

  it('empties upon submission', () => {
    wrapped.find('form').simulate('submit');

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});