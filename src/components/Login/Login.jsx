import React, { useEffect, useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import styles from './../../styles/styles';
import { Link, useNavigate } from "react-router-dom";
import axios  from 'axios';
import { server } from './../../server';
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const  { t } = useTranslation();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Điều hướng về trang chủ nếu đã đăng nhập
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await axios.post(`${server}/user/login-user`,{
      email: email,
      password: password

    },{withCredentials: true}).then((res)=>{
      toast.success(t("login.loginSuccess"))
      navigate("/");
      window.location.reload();
    }).catch((err)=>{
      console.log(err);
       toast.error(err.response.data.message);
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {t('login.title')}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t('login.emailLabel')}
                </label>

                <div className="mt-1">
                  <input
                    type="text"
                    htmlFor="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-nnone focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
            </div>
            
            <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t('login.passwordLabel')}
                </label>

                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    htmlFor="password"
                    name="password"
                    autoComplete="current-passwocrd"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-nnone focus:ring-blue-500 focus:border-blue-500"
                  />

                  {
                    visible ? 
                    <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={()=>setVisible(false)}
                    /> : 
                    <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={()=>setVisible(true)}
                  />
                  }
                 
                </div>


            </div>
            
            <div className={`${styles.normalFlex} justify-between`}>
                  <div className={`${styles.normalFlex}`}>
                      <input
                        type="checkbox" name="remember-me" id="remember-me"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                      >
                     {t('login.rememberMe')}
                      </label>
                  </div>
                  <div className="text-sm">
                    <a
                    href=".forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-50"
                    >
                       {t('login.forgotPassword')}
                    </a>

                  </div>
            </div>
            
            <div>
              <button 
              type="submit"
              className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
               {t('login.button')}
              </button>
            </div>
            
            <div className={`${styles.normalFlex} w-full`}>
            <h4>{t('login.noAccount')}</h4>
                  <Link to="/sign-up" className="text-blue-600 hover:text-blue-400 pl-2">
                  {t('login.signUp')}
                  </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
