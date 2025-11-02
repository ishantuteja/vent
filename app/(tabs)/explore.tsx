import { StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

// Temporary dummy data - replace with actual data from storage
const heatmapData = Array.from({length: 30}, () => Math.floor(Math.random() * 5));

export default function HeatmapScreen() {
  const currentDate = new Date();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const getColorIntensity = (count: number) => {
    const intensity = Math.min(count, 4);
    return `rgba(33, 150, 243, ${0.2 + intensity * 0.2})`; // Blue gradient
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chart.bar.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText 
          type="title" 
          style={{ ...styles.title, fontFamily: Fonts.rounded }}
        >
          Mood Heatmap
        </ThemedText>
        
        <ThemedView style={styles.heatmapGrid}>
          {Array.from({length: daysInMonth}, (_, i) => (
            <View
              key={i}
              style={[
                styles.dayCell,
                { backgroundColor: getColorIntensity(heatmapData[i]) }
              ]}
            />
          ))}
        </ThemedView>

        <ThemedView style={styles.legend}>
          <ThemedText style={styles.legendText}>Less</ThemedText>
          {[0, 1, 2, 3, 4].map((intensity) => (
            <View
              key={intensity}
              style={[
                styles.legendItem,
                { backgroundColor: getColorIntensity(intensity) }
              ]}
            />
          ))}
          <ThemedText style={styles.legendText}>More</ThemedText>
        </ThemedView>

        <ThemedText style={styles.note}>
          Days with more entries appear darker
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  heatmapGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    justifyContent: 'center',
    marginBottom: 20,
  },
  dayCell: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  legendItem: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    marginHorizontal: 4,
  },
  note: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
  },
});
