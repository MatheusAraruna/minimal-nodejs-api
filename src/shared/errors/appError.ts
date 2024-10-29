import EErrorCode from './eErrorCode'

interface NamedParameters {
  message: string
  statusCode?: number
  showMessage?: boolean
  errorCode?: EErrorCode
}

export default class AppError {
  public readonly message: string

  public readonly statusCode: number

  public readonly showMessage: boolean

  public readonly errorCode: EErrorCode

  constructor({
    message,
    statusCode = 500,
    showMessage = false,
    errorCode = EErrorCode.DEF001
  }: NamedParameters) {
    this.message = message
    this.statusCode = statusCode
    this.showMessage = showMessage
    this.errorCode = errorCode
  }
}
