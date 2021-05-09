import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter,
  AddAccountRepository,
} from './db-add-account.protocols';

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;

  private readonly addAccountRepository: AddAccountRepository;

  constructor(
    encrypter: Encrypter,
    addAccountRepository: AddAccountRepository
  ) {
    this.encrypter = encrypter;
    this.addAccountRepository = addAccountRepository;
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassord = await this.encrypter.encrypt(accountData.password);
    const account = this.addAccountRepository.add({
      ...accountData,
      password: hashedPassord,
    });
    return new Promise((resolve) => resolve(account));
  }
}
