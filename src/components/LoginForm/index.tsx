import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import { Input } from 'components/Input'
import { useForm } from 'react-hook-form'

import Image from 'next/image'

import logoMvpLogin from '../../assets/logoMvpLogin.png'

export const LoginForm = () => {
  const { register, handleSubmit } = useForm()

  const handleLogin = (values: any) => {
    console.log('submit')
    console.log(values)
  }

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(handleLogin)}
      flexDir="column"
      bg="gray.800"
      padding={[6, 8]}
      width="100%"
      mx="auto"
      maxWidth={360}
      borderRadius={8}
    >
      <Stack spacing={4}>
        <Flex justifyContent="center">
          <Image
            src={logoMvpLogin}
            alt="Logo MVP FullStack"
            layout="fixed"
            placeholder="blur"
          />
        </Flex>
        <Input label="Usuário" {...register('user')} />
        <Input label="Senha" type="password" {...register('password')} />
        <Button colorScheme="yellow" type="submit">
          Entrar
        </Button>
      </Stack>
    </Flex>
  )
}
