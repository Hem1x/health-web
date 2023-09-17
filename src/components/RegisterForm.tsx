import { Button, Input } from '@chakra-ui/react';
import React from 'react';

// sm	640px
// md	768px
// lg	1024px
// xl	1280px
// 2xl	1536px

const RegisterForm = () => {
  return (
    <div className="w-full h-screen bg-white bg-opacity-50 flex justify-center align-middle items-center">
      <div className="sm:relative px-2 sm:px-36 sm:pt-32 sm:py-40 bg-white flex flex-col align-middle rounded-3xl sm:shadow-formShadow">
        <h1 className="text-[40px] text-center font-bold text-[#008000] mb-5">
          Регистрация
        </h1>
        <p className="text-center text-[#ACACAC] text-base mb-10">
          Чтобы конвертировать свою активность в благотворительность
        </p>

        <form className="flex flex-col gap-5">
          <Input placeholder="Логин" />
          <Input placeholder="Пароль" />
          <Button
            className="w-full sm:w-[300px] sm:mx-auto"
            _hover={{ bg: '#006E00' }}
            marginTop={'10'}
            size="lg"
            colorScheme="green"
            bg="#008000">
            Зарегистрироваться
          </Button>
        </form>

        <div className="absolute bottom-9 right-9 text-lg font-semibold">
          <span className="opacity-50">Уже есть аккаунт? </span>
          <span className="text-[#008000]">Войти</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
