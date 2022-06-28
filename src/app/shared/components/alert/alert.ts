export class Alert {
  constructor(
    public readonly alertType: AlertType,
    public readonly mensagem: string
  ){}
}

export enum AlertType {
  SUCCESS,
  DANGER
}
