/* eslint-disable class-methods-use-this */
import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissinParamError } from '../errors/missing-params-error';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissinParamError('name'),
      };
    }
    return {
      statusCode: 400,
      body: new MissinParamError('email'),
    };
  }
}
