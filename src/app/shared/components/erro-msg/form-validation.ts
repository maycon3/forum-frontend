export class FormValidations {
  static getErroMsg(
    feildName: string,
    validationName: string,
    validationValue?: any): any {
      const config = {
        'required': `O campo ${feildName} é obrigatório.`,
        'maxlength':`${feildName} precisa ter no máximo ${validationValue}`,
        'minlength':`${feildName} precisa ter no mínimo ${validationValue}`,
        'email':`O email não é valido`
      };
      return (config as any)[validationName];
  }
}
