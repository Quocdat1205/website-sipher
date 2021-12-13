import { Input, FormControl, FormControlProps } from "@chakra-ui/react"
interface TextFormControlProps extends Omit<FormControlProps, "onChange"> {
    label: string
    error?: string
    type?: string
    isRequired?: boolean
    inputRef?: React.RefObject<HTMLInputElement>
}

export const TextFormControl = ({ label, type, inputRef, ...rest }: TextFormControlProps) => {
    return (
        <FormControl {...rest}>
            <Input
                placeholder={label}
                type={type}
                border="1px"
                rounded="full"
                borderColor="main.gray"
                _focus={{
                    borderColor: "main.orange",
                }}
                fontSize={["sm", "md"]}
                color="whiteAlpha.900"
                px={6}
                ref={inputRef}
            />
        </FormControl>
    )
}

export default TextFormControl
