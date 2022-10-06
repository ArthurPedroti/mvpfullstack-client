import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

type InputProps = {
  name: string
  label?: string
} & ChakraInputProps

const InputBase = ({ name, label, ...rest }: InputProps) => {
  return (
    <Box>
      <FormControl>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <Input name={name} id={name} focusBorderColor="yellow.500" {...rest} />
      </FormControl>
    </Box>
  )
}

export default InputBase
