import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Hello from '../../../src/js/components/Hello';
import HelloView from '../../../src/js/views/HelloView';

describe('HelloView', () => {
  let helloView;

  describe('#render', () => {
    beforeEach(() => {
      helloView = mount(<HelloView />);
    });

    it('should render hello in the view', () => {
      expect(helloView).to.have.descendants(Hello);
    });
  });
});
