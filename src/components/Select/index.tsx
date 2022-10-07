import {
  Box,
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps
} from '@chakra-ui/react'

type SelectProps = {
  name: string
  label?: string
  items: {
    value: string | number
    label: string
  }[]
} & ChakraSelectProps

export const Select = ({ name, label, items, ...rest }: SelectProps) => {
  return (
    <Box>
      <FormControl>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraSelect
          name={name}
          id={name}
          focusBorderColor="yellow.500"
          {...rest}
        >
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </ChakraSelect>
      </FormControl>
    </Box>
  )
}
