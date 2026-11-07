import { View } from 'react-native';

export default function Spacer({ height = 16, width = 0 }) {
  return <View style={{ height, width }} />;
}
