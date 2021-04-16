import dotenv from 'dotenv'
import path from 'path'

const getEnvPath = (): string => {
  const absolutePath = path.dirname(import.meta.url).substr(7)
  return `${absolutePath}/${process.env.NODE_ENV}.env`
}

dotenv.config({
  path: getEnvPath()
});

console.log("NODE_ENV", process.env.NODE_ENV)

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || 3000
}