import { useState } from 'react';
import {ngoLogin} from '../utilities/utils';
import { useRouter } from 'next/navigation';
import cookie from 'cookiejs';
interface LoginData {
  username: string;
  password: string;
}
const useLogin = (initialLoginData: LoginData) => {
  const router = useRouter();
  const [user, setUser] = useState({token:''});
  const handleSignin = async () => {
      const response = await ngoLogin (initialLoginData.username, initialLoginData.password)
      if (response.token.length > 0) {
        cookie.set('loginToken',response.token);
        router.push('/');
      }  else {
        router.push('/signIn');
      }
      setUser(response)
}
return { user, handleSignin };
}
export default useLogin;