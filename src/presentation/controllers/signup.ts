/* eslint-disable class-methods-use-this */
import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissinParamError } from '../errors/missing-params-error';
import { badRequest } from '../helpers/http-helper';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissinParamError('name'));
    }
    return badRequest(new MissinParamError('email'));
  }
}
