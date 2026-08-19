import { MockPropertyContext } from 'node:test';
import { UserCharacterGuard } from './user-character.guard';

describe('UserCharacterGuard', () => {
  it('should be defined', () => {
    expect(new UserCharacterGuard(new MockPropertyContext())).toBeDefined();
  });
});
