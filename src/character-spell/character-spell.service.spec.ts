import { Test, TestingModule } from '@nestjs/testing';
import { CharacterSpellService } from './character-spell.service';

describe('CharacterSpellService', () => {
  let service: CharacterSpellService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterSpellService],
    }).compile();

    service = module.get<CharacterSpellService>(CharacterSpellService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
