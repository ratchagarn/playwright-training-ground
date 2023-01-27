import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 * https://playwright.dev/docs/test-parameterize#passing-environment-variables
 */
export default function readENV() {
  const ownEnv = path.resolve(__dirname, '..', '.env.local')

  if (fs.existsSync(ownEnv)) {
    // Found your own environment file, use this isntead of default
    dotenv.config({ path: ownEnv })
  } else {
    // Load default `env` file instead (.env)
    dotenv.config()
  }
}
