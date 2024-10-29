interface IAppConfig {
  port: string
  nodenv: string
  externalApiUrl: string
}

export default {
  port: process.env.PORT || '3333',
  nodenv: process.env.NODE_ENV || 'development',
  externalApiUrl: process.env.EXTERNAL_API_BASE_URL || 'http://localhost:3000'
} as IAppConfig
