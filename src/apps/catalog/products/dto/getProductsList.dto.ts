import { isPositiveIntegerString } from '../../../../validationDecorators/isPositiveIntegerString.decorator';
import { IsDefined } from 'class-validator';

export class GetProductsListDto {
  @IsDefined({ message: 'offset is required' })
  @isPositiveIntegerString({ message: 'offset must be a positive integer' })
  readonly offset: number;

  @IsDefined({ message: 'limit is required' })
  @isPositiveIntegerString({ message: 'limit must be a positive integer' })
  readonly limit: number;
}
