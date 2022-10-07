import {
  Box,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

type InputProps = {
  name: string
  label?: string
} & ChakraInputProps

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <Box>
      <FormControl>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="yellow.500"
          {...rest}
        />
      </FormControl>
    </Box>
  )
}
