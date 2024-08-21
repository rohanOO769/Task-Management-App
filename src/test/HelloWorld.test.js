// HelloWorld.test.js

const React = require('react');
const HelloWorld = require('../pages/HelloWorld').default;

// Mock React.createElement
global.React = {
  createElement: React.createElement
};

test('HelloWorld component renders correctly', () => {
  const element = HelloWorld();

  expect(element.type).toBe('div');
  expect(element.props.children).toBe('Hello!');
});