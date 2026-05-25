import instance from './axios.customize';

const createUserApi = (name, email, password) => {
  const data = {
    name, email, password
  }

  return instance.post("/v1/api/register", data)
}

const loginApi = (email, password) => {
  const data = {
    email, password
  }

  return instance.post("/v1/api/login", data)
}

const getUserApi = () => {
  return instance.get("/v1/api/user")
}

export {
  createUserApi, loginApi, getUserApi
}
