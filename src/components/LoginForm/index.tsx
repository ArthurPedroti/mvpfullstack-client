import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import { Input } from 'components/Input'

import Image from 'next/image'

import logoMvpLogin from '../../assets/logoMvpLogin.png'

export const LoginForm = () => {
  return (
    <Flex
      as="form"
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
        <Input name="user" label="Usuário" />
        <Input name="password" label="Senha" type="password" />
        <Button colorScheme="yellow">Entrar</Button>
      </Stack>
    </Flex>
  )
}
