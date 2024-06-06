import { styled } from '@gluestack-style/react';
import { StyleSheet, TextInput } from 'react-native';

import { Colors } from '@/configs';

export const StyledInputMessage = styled(TextInput, {
  borderWidth: StyleSheet.hairlineWidth,
  minHeight: 40,
  maxHeight: 160,
  borderRadius: 20,
  paddingVertical: 10,
  paddingLeft: 20,
  fontSize: 14,
  borderColor: Colors.greyLight,
  backgroundColor: Colors.light,
});
