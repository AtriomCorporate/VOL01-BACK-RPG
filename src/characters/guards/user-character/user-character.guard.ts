import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CharactersService } from '../../characters.service';

@Injectable()
export class UserCharacterGuard implements CanActivate {
  constructor(private charactersService: CharactersService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const params = request.params;

    const characterId = params.id;
    const userId = request.user.id;

    return this.charactersService
      .findById(characterId, userId)
      .then((x) => x.isActive);
  }
}
