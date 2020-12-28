import { ExponentialPipe } from './shared/pipes/exponential/exponential.pipe';

describe('ExponentialPipe', () => {
  it('create an instance', () => {
    const pipe = new ExponentialPipe();
    expect(pipe).toBeTruthy();
  });
});
