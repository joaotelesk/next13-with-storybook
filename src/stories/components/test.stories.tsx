
import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@/components/text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    text: "Example"
  }
} as Meta<TextProps>

export const Texto: StoryObj<TextProps> = {}


