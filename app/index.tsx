import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Splash from './src/screens/Splash';
import Register from './src/screens/Register';
import Login from './src/screens/Login';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [screen, setScreen] = useState<'register' | 'login'>('register');

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.switchRow}>
        <TouchableOpacity
          style={[styles.tab, screen === 'register' && styles.tabActive]}
          onPress={() => setScreen('register')}
        >
          <Text style={[styles.tabText, screen === 'register' && styles.tabTextActive]}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, screen === 'login' && styles.tabActive]}
          onPress={() => setScreen('login')}
        >
          <Text style={[styles.tabText, screen === 'login' && styles.tabTextActive]}>Login</Text>
        </TouchableOpacity>
      </View>

      {screen === 'register' ? <Register /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#071025',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  tabActive: {
    backgroundColor: '#0ea5a4',
  },
  tabText: {
    color: '#cbd5e1',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#04121a',
  },
});
