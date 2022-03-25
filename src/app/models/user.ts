export class User{
  _id?: any
  user: string;
  email: string;
  password: string;
  confirmpassword: string;
  profile: string

  constructor(User: string, emailUser: string, passwordUser: string, confirmpasswordUser: string, profileUser: string){
    this.user = User;
    this.email = emailUser;
    this.password = passwordUser;
    this.confirmpassword = confirmpasswordUser;
    this.profile = profileUser
  }
}

