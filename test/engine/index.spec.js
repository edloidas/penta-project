import engine from '../../src/js/engine/index';

describe('Engine:', () => {
  test(`Should be initialized`, () => {
    expect(engine).toBeTruthy();
  });
});
