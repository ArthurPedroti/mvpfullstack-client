import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import { Input } from 'components/Input'
import { useForm } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Image from 'next/image'

import logoMvpLogin from '../../assets/logoMvpLogin.png'

const loginFormSchema = zod.object({
  username: zod.string().min(1, 'Usuário obrigatório'),
  password: zod.string().min(1, 'Senha obrigatória')
})

type LoginFormData = zod.infer<typeof loginFormSchema>

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema)
  })

  const handleLogin = (values: LoginFormData) => {
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
        <Input
          label="Usuário"
          {...register('username')}
          error={errors.username}
        />
        <Input
          label="Senha"
          type="password"
          {...register('password')}
          error={errors.password}
        />
        <Button colorScheme="yellow" type="submit">
          Entrar
        </Button>
      </Stack>
    </Flex>
  )
}
