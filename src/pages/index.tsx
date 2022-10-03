import { Button } from '@chakra-ui/react'
import Header from 'components/Header'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Button colorScheme="facebook">Clique aqui</Button>
    </div>
  )
}

export default Home
