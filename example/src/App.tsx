import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  PaymentIcon,
  VisaFlat,
  MastercardLogo,
  AmexMono,
  type PaymentIconType,
  type PaymentIconStyle,
} from 'react-native-payment-card-icons';

// Simple card type detection
const detectCardType = (number: string): PaymentIconType => {
  const cleanNumber = number.replace(/\s/g, '');
  if (cleanNumber.startsWith('4')) return 'visa';
  if (cleanNumber.startsWith('5') || cleanNumber.startsWith('2'))
    return 'mastercard';
  if (cleanNumber.startsWith('34') || cleanNumber.startsWith('37'))
    return 'amex';
  if (cleanNumber.startsWith('6')) return 'discover';
  if (cleanNumber.startsWith('35')) return 'jcb';
  if (cleanNumber.startsWith('30') || cleanNumber.startsWith('38'))
    return 'diners';
  return 'generic-card';
};

const supportedCards = [
  { type: 'visa' as const, name: 'Visa' },
  { type: 'mastercard' as const, name: 'Mastercard' },
  { type: 'amex' as const, name: 'American Express' },
  { type: 'discover' as const, name: 'Discover' },
  { type: 'maestro' as const, name: 'Maestro' },
  { type: 'jcb' as const, name: 'JCB' },
  { type: 'diners' as const, name: 'Diners Club' },
  { type: 'unionpay' as const, name: 'UnionPay' },
  { type: 'paypal' as const, name: 'PayPal' },
  { type: 'alipay' as const, name: 'Alipay' },
];

const variants: { variant: PaymentIconStyle; name: string }[] = [
  { variant: 'flat', name: 'Flat' },
  { variant: 'flatRounded', name: 'Flat Rounded' },
  { variant: 'logo', name: 'Logo' },
  { variant: 'logoBorder', name: 'Logo Border' },
  { variant: 'mono', name: 'Mono' },
  { variant: 'monoOutline', name: 'Mono Outline' },
];

export default function App() {
  const [cardNumber, setCardNumber] = useState('');
  const [selectedVariant, setSelectedVariant] =
    useState<PaymentIconStyle>('flat');
  const cardType = detectCardType(cardNumber);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Payment Card Icons</Text>
        <Text style={styles.subtitle}>React Native Example</Text>
      </View>

      {/* Basic Usage Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Usage</Text>
        <View style={styles.basicExamples}>
          <View style={styles.exampleItem}>
            <PaymentIcon type="visa" width={60} height={38} />
            <Text style={styles.exampleLabel}>Visa</Text>
          </View>
          <View style={styles.exampleItem}>
            <PaymentIcon
              type="mastercard"
              variant="flatRounded"
              width={60}
              height={38}
            />
            <Text style={styles.exampleLabel}>Mastercard</Text>
          </View>
          <View style={styles.exampleItem}>
            <PaymentIcon
              type="amex"
              variant="mono"
              fill="#007bff"
              width={60}
              height={38}
            />
            <Text style={styles.exampleLabel}>Amex (Custom)</Text>
          </View>
        </View>
      </View>

      {/* Individual Components */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Individual Components</Text>
        <View style={styles.basicExamples}>
          <View style={styles.exampleItem}>
            <VisaFlat width={60} height={38} />
            <Text style={styles.exampleLabel}>VisaFlat</Text>
          </View>
          <View style={styles.exampleItem}>
            <MastercardLogo width={60} height={38} />
            <Text style={styles.exampleLabel}>MastercardLogo</Text>
          </View>
          <View style={styles.exampleItem}>
            <AmexMono width={60} height={38} fill="#333" />
            <Text style={styles.exampleLabel}>AmexMono</Text>
          </View>
        </View>
      </View>

      {/* Dynamic Payment Form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dynamic Card Detection</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter card number..."
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
          <PaymentIcon type={cardType} variant="flat" width={40} height={25} />
        </View>
        <Text style={styles.detectedType}>Detected: {cardType}</Text>
      </View>

      {/* Variant Selector */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Style Variants</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.variantSelector}
        >
          {variants.map((item) => (
            <TouchableOpacity
              key={item.variant}
              style={[
                styles.variantButton,
                selectedVariant === item.variant &&
                  styles.variantButtonSelected,
              ]}
              onPress={() => setSelectedVariant(item.variant)}
            >
              <Text
                style={[
                  styles.variantButtonText,
                  selectedVariant === item.variant &&
                    styles.variantButtonTextSelected,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.variantPreview}>
          <PaymentIcon
            type="visa"
            variant={selectedVariant}
            width={80}
            height={50}
            fill="#007bff"
          />
          <Text style={styles.variantLabel}>Visa - {selectedVariant}</Text>
        </View>
      </View>

      {/* Supported Cards Grid */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Supported Payment Methods</Text>
        <FlatList
          data={supportedCards}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.cardItem}>
              <PaymentIcon
                type={item.type}
                variant="flatRounded"
                width={60}
                height={38}
              />
              <Text style={styles.cardName}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.type}
        />
      </View>

      {/* Themed Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Themed Examples</Text>

        {/* Dark Theme */}
        <View style={[styles.themedSection, styles.darkTheme]}>
          <Text style={styles.themeLabel}>Dark Theme</Text>
          <View style={styles.themedIcons}>
            <PaymentIcon
              type="visa"
              variant="mono"
              fill="#ffffff"
              width={50}
              height={32}
            />
            <PaymentIcon
              type="mastercard"
              variant="mono"
              fill="#ffffff"
              width={50}
              height={32}
            />
            <PaymentIcon
              type="amex"
              variant="mono"
              fill="#ffffff"
              width={50}
              height={32}
            />
            <PaymentIcon
              type="paypal"
              variant="mono"
              fill="#ffffff"
              width={50}
              height={32}
            />
          </View>
        </View>

        {/* Brand Theme */}
        <View style={[styles.themedSection, styles.brandTheme]}>
          <Text style={styles.themeLabel}>Brand Theme</Text>
          <View style={styles.themedIcons}>
            <PaymentIcon
              type="visa"
              variant="monoOutline"
              fill="#007bff"
              width={50}
              height={32}
            />
            <PaymentIcon
              type="mastercard"
              variant="monoOutline"
              fill="#007bff"
              width={50}
              height={32}
            />
            <PaymentIcon
              type="amex"
              variant="monoOutline"
              fill="#007bff"
              width={50}
              height={32}
            />
            <PaymentIcon
              type="paypal"
              variant="monoOutline"
              fill="#007bff"
              width={50}
              height={32}
            />
          </View>
        </View>
      </View>

      {/* Size Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Size Variations</Text>
        <View style={styles.sizeExamples}>
          <View style={styles.sizeItem}>
            <PaymentIcon type="visa" width={30} height={19} />
            <Text style={styles.sizeLabel}>Small</Text>
          </View>
          <View style={styles.sizeItem}>
            <PaymentIcon type="visa" width={50} height={32} />
            <Text style={styles.sizeLabel}>Medium</Text>
          </View>
          <View style={styles.sizeItem}>
            <PaymentIcon type="visa" width={80} height={50} />
            <Text style={styles.sizeLabel}>Large</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  basicExamples: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  exampleItem: {
    alignItems: 'center',
  },
  exampleLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  detectedType: {
    marginTop: 10,
    fontSize: 14,
    color: '#007bff',
    fontWeight: '500',
  },
  variantSelector: {
    marginBottom: 20,
  },
  variantButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  variantButtonSelected: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  variantButtonText: {
    fontSize: 14,
    color: '#666',
  },
  variantButtonTextSelected: {
    color: '#fff',
    fontWeight: '500',
  },
  variantPreview: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  variantLabel: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  cardItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 5,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardName: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  themedSection: {
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  darkTheme: {
    backgroundColor: '#333',
  },
  brandTheme: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  themeLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
    textAlign: 'center',
  },
  themedIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sizeExamples: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sizeItem: {
    alignItems: 'center',
  },
  sizeLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
  },
});
