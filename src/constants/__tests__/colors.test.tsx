import { COLORS } from '../colors';

describe('COLORS', () => {
  it('should have expected values', () => {
    expect(COLORS).toMatchSnapshot();
  });
});
