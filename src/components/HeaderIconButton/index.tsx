import * as React from "react"
import {
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"

export type HeaderIconButtonProps = IconButtonProps;
export const HeaderIconButton: React.FC<HeaderIconButtonProps> = (props) => {
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      {...props}
    />
  )
}
