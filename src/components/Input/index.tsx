import { Box, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'

type InputProps = {
  name: string
  label?: string
}

const InputBase = ({ name, label }: InputProps) => {
  return (
    <Box>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input name={name} id={name} focusBorderColor="yellow.500" />
      </FormControl>
    </Box>
  )
}

export default InputBase
