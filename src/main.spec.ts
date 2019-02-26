// tslint:disable no-unused-expression no-empty
import { expect } from 'chai';

import { main } from './main';

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;

describe('main', () => {
  it('is a async function', () => {
    expect(main).to.be.instanceof(AsyncFunction);
  });
});
