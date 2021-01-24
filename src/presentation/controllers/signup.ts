/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissinParamError } from '../errors/missing-params-error';
import { badRequest } from '../helpers/http-helper';
import { Controller } from '../protocols/controller';
import { EmailValidator } from '../protocols/email-validator';
import { InvalidParamError } from '../errors/invalid-params-error';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissinParamError(field));
      }
    }
    const isValid: boolean = this.emailValidator.isValid(
      httpRequest.body.email
    );
    if (!isValid) {
      return badRequest(new InvalidParamError('email'));
    }
    return badRequest(new InvalidParamError('undefined'));
  }
}
