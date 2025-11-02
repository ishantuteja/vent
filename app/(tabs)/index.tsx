import { Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F8F9FA', dark: '#1D3D47' }}>
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="title" style={styles.mainTitle}>Daily Journal</ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>Express yourself freely</ThemedText>
        
        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type or speak your mind..."
            placeholderTextColor="#999"
            multiline
            textAlignVertical="top"
          />
          <TouchableOpacity style={styles.voiceButton} onPress={() => {}}>
            <Ionicons name="mic-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </ThemedView>

        <TouchableOpacity style={styles.submitButton}>
          <ThemedText style={styles.submitButtonText}>Save Entry</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    minHeight: 150,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  voiceButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#3b82f6',
    padding: 10,
    borderRadius: 20,
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
