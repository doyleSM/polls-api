/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissinParamError } from '../errors/missing-params-error';
import { badRequest } from '../helpers/http-helper';
import { Controller } from '../protocols/controller';

export class SignUpController implements Controller {
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
    return badRequest(new Error('undefined'));
  }
}
