import { IsString, MinLength, MaxLength } from 'class-validator';

import { Stock } from '../interfaces';

export class UpdateStockDto implements Stock {
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  readonly title: string;
  readonly waybillPrefix: string;
}
