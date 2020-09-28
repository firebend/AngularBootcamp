import { ClickCountPipe } from './click-count.pipe';

describe('ClickCountPipe', () => {
  it('create an instance', () => {
    const pipe = new ClickCountPipe();
    expect(pipe).toBeTruthy();
  });
});
