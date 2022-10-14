import {
  Box,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

type InputProps = {
  name: string
  label?: string
} & ChakraInputProps

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, ...rest }, ref) => {
  return (
    <Box>
      <FormControl>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="yellow.500"
          ref={ref}
          {...rest}
        />
      </FormControl>
    </Box>
  )
}

export const Input = forwardRef(InputBase)
