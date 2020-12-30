

interface IConfig {
  DATABASE_URL:string,
  USER_SERVICES:string
}

export const Config:IConfig = {
  DATABASE_URL:process.env.DATABASE_URL,
  USER_SERVICES:process.env.USER_SERVICES,
}

