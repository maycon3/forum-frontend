export class FormValidations {
  static getErroMsg(
    feildName: string,
    validationName: string,
    validationValue?: any): any {
      const config = {
        required: `O campo ${feildName} é obrigatório.`,
        maxlength:`teste`
      };
      return (config as any)[validationName];
  }
}
