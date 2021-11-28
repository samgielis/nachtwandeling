import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import { HeaderIconButton, HeaderIconButtonProps } from "./components/HeaderIconButton"

type ColorModeSwitcherProps = Omit<HeaderIconButtonProps, "aria-label">

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <HeaderIconButton
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}
