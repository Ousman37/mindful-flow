import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Colors from "../constants/Colors";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: string;
  containerStyle?: string;
  disabled?: boolean;
}

const CustomButton = ({
  onPress,
  title,
  textStyle = "",
  containerStyle = "",
  disabled = false,
}: CustomButtonProps) => {
  const backgroundColor = disabled ? Colors.backgroundDark : Colors.primaryDark; 
  const textColor = Colors.textLight; 

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      className={`min-h-[62px] rounded-xl items-center justify-center ${containerStyle}`}
      style={{ backgroundColor }}
    >
      <Text
        className={`text-lg font-semibold ${textStyle}`}
        style={{ color: textColor }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
