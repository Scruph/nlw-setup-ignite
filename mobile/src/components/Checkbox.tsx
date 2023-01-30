import Animated, { FlipInXDown, ZoomOut } from "react-native-reanimated";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import colors from "tailwindcss/colors";
import { Feather } from '@expo/vector-icons'

interface CheckboxProps extends TouchableOpacityProps{
  title: string;
  checked?: boolean;
}

export function Checkbox({ title, checked = false, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity 
      {...rest}
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
    >
      {checked ? (
        <Animated.View 
          exiting={ZoomOut}
          entering={FlipInXDown}
          className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
        >
          <Feather 
            size={20}
            name="check"
            color={colors.white}
          />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white text-base ml-3 font-semibold">
        {title}
      </Text>

    </TouchableOpacity>
  )
}