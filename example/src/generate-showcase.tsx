import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PaymentIcon } from 'react-native-payment-card-icons';

// This component can be used to generate a showcase image
// Run this in a React Native app and take a screenshot
export const ShowcaseGrid = () => {
  const variants = [
    'flat',
    'flatRounded',
    'logo',
    'logoBorder',
    'mono',
    'monoOutline',
  ] as const;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Card Icons Showcase</Text>
      <Text style={styles.subtitle}>Visa in all 6 variants</Text>

      <View style={styles.grid}>
        {variants.map((variant) => (
          <View key={variant} style={styles.item}>
            <PaymentIcon
              type="visa"
              variant={variant}
              width={80}
              height={50}
              fill={variant.includes('mono') ? '#333' : undefined}
            />
            <Text style={styles.label}>{variant}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>
        17+ Payment Providers • 6 Style Variants • TypeScript Support
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 500,
  },
  item: {
    alignItems: 'center',
    margin: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 120,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: '#007bff',
    fontWeight: '500',
  },
});

export default ShowcaseGrid;
