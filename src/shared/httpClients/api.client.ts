import app from '@/src/config/app'
import axios, { AxiosInstance } from 'axios'

export default class CepHttpClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: app.externalApiUrl
    })
  }

  public api(): AxiosInstance {
    return this.client
  }
}
