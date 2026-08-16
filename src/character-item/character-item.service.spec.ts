import { Test, TestingModule } from '@nestjs/testing';
import { CharacterItemService } from './character-item.service';

describe('CharacterItemService', () => {
  let service: CharacterItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterItemService],
    }).compile();

    service = module.get<CharacterItemService>(CharacterItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
