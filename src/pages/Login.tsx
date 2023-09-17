import { Button, Input } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useAppDispatch } from '../store/hooks';
import { setUser } from '../store/features/userSlice';
import { FirebaseError } from 'firebase/app';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/');
      })
      .catch((error) => {
        if (
          error instanceof FirebaseError &&
          error.code.startsWith('auth/')
        ) {
          const errorCode = error.code.replace('auth/', '');
          if (errorCode === 'invalid-email') {
            setErrMessage('Неверный формат почты');
          } else if (errorCode === 'wrong-password') {
            setErrMessage('Неверный пароль');
          } else if (errorCode === 'user-not-found') {
            setErrMessage('Вы не зарегистрированы');
          } else {
            setErrMessage(`Ошибка: ${errorCode}`);
          }
        } else {
          setErrMessage(`Произошла неизвестная ошибка:${error}`);
        }
      });
  };

  return (
    <div className="w-full h-screen bg-white bg-opacity-50 flex justify-center align-middle items-center">
      <div className="sm:relative px-2 sm:px-36 sm:pt-32 sm:py-40 bg-white flex flex-col align-middle rounded-3xl sm:shadow-formShadow">
        <h1 className="text-[40px] text-center font-bold text-[#008000] mb-5">
          Войти в аккаунт
        </h1>
        <p className="text-center text-[#ACACAC] text-base mb-10">
          Чтобы конвертировать свою активность в благотворительность
        </p>

        <form className="flex flex-col gap-5">
          <Input
            placeholder="Логин"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={() => handleLogin(email, password)}
            className="w-full sm:w-[300px] sm:mx-auto"
            _hover={{ bg: '#006E00' }}
            marginTop={'10'}
            size="lg"
            colorScheme="green"
            bg="#008000">
            Войти
          </Button>
        </form>

        <p className="text-center text-red-900">{errMessage}</p>

        <div className="absolute bottom-9 right-9 text-lg font-semibold">
          <span className="opacity-50">Нет аккаунта? </span>
          <Link to="/register" className="text-[#008000]">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
