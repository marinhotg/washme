import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BottomMenuProps {
  currentRoute: 'home' | 'calendar' | 'profile' | 'settings' | 'more';
  onPress: (route: string) => void;
}

export function BottomMenu({ currentRoute, onPress }: BottomMenuProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => onPress('home')}
      >
        <Ionicons 
          name={currentRoute === 'home' ? 'home' : 'home-outline'} 
          size={currentRoute === 'home' ? 32 : 24} 
          color={currentRoute === 'home' ? '#276672' : '#000000'} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => onPress('calendar')}
      >
        <Ionicons 
          name={currentRoute === 'calendar' ? 'calendar' : 'calendar-outline'} 
          size={currentRoute === 'calendar' ? 32 : 24} 
          color={currentRoute === 'calendar' ? '#276672' : '#000000'} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => onPress('profile')}
      >
        <Ionicons 
          name={currentRoute === 'profile' ? 'person' : 'person-outline'} 
          size={currentRoute === 'profile' ? 32 : 24} 
          color={currentRoute === 'profile' ? '#276672' : '#000000'} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => onPress('settings')}
      >
        <Ionicons 
          name={currentRoute === 'settings' ? 'settings' : 'settings-outline'} 
          size={currentRoute === 'settings' ? 32 : 24} 
          color={currentRoute === 'settings' ? '#276672' : '#000000'} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => onPress('more')}
      >
        <Ionicons 
          name={currentRoute === 'more' ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline'} 
          size={currentRoute === 'more' ? 32 : 24} 
          color={currentRoute === 'more' ? '#276672' : '#000000'} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
});