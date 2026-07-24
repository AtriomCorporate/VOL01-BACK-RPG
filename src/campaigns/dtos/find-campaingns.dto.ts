import { MinLength, IsInt, IsOptional } from 'class-validator';

export class FindCampaingsDto {
  @IsInt()
  @MinLength(1)
  @IsOptional()
  page: number;
}
