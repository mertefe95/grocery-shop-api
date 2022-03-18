import handleResponse from "../utils/handleResponse"
export {}



const userLogin = (username: string,  password: string, session:any) => {
  console.log(session);
  if (username !== 'Mert') {
    throw new Error('Hey')
  } else {
    handleResponse
  }
}  

const userRegister = () => {
  
}

const forgotPassword = () => {

}

const changeForgotPassword = () => {

}

const changePassword = () => {

}

const editDetails = () => {

}

const deleteAccount = () => {

}

export = {
  userLogin,
  userRegister,
  forgotPassword,
  changeForgotPassword,
  changePassword,
  editDetails,
  deleteAccount
}