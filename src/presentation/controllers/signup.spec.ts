import { SignUpController } from './signup';
import { MissinParamError } from '../errors/missing-params-error';

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'any@mail.com',
        password: 'secret',
        passwordConfirmation: 'secret',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissinParamError('name'));
  });

  test('should return 400 if no email is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'any',
        password: 'secret',
        passwordConfirmation: 'secret',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissinParamError('email'));
  });

  test('should return 400 if no password is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'any',
        email: 'any@mail.com',
        passwordConfirmation: 'secret',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissinParamError('password'));
  });

  test('should return 400 if no passwordConfirmation is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'any',
        email: 'any@mail.com',
        password: 'secret',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissinParamError('passwordConfirmation')
    );
  });
});
