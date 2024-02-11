import { registerDecorator, ValidationOptions } from 'class-validator';
import { isPositiveIntegerStringUtil } from '../utils/isPositiveIntegerString.util';

export function isPositiveIntegerString(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'isPositiveIntegerString',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return isPositiveIntegerStringUtil(value);
        },
      },
    });
  };
}
