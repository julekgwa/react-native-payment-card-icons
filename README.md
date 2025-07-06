<h1 align="center">
  react-native-payment-card-icons
</h1>
A collection of high-quality, customizable payment card brand icons (Visa, Mastercard, Maestro, Amex, and more) as React Native SVG components, fully compatible with React Native, Expo, and React Native Web for seamless cross-platform use.
<p align="center">
  <a href="https://www.npmjs.com/package/react-native-payment-card-icons">
    <img src="https://img.shields.io/npm/v/react-native-payment-card-icons.svg" alt="npm version"/>
  </a>
  <a href="https://www.npmjs.com/package/react-native-payment-card-icons">
    <img src="https://img.shields.io/npm/dm/react-native-payment-card-icons.svg" alt="npm downloads"/>
  </a>
  <a href="https://github.com/julekgwa/react-native-payment-card-icons/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/react-native-payment-card-icons.svg" alt="license"/>
  </a>
  <a href="https://github.com/julekgwa/react-native-payment-card-icons">
    <img src="https://img.shields.io/github/stars/julekgwa/react-native-payment-card-icons.svg?style=social" alt="stars"/>
  </a>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
- [Usage](#usage)
  - [Basic Usage with PaymentIcon Component](#basic-usage-with-paymenticon-component)
  - [Using Individual Icon Components](#using-individual-icon-components)
- [API Reference](#api-reference)
  - [PaymentIcon Props](#paymenticon-props)
  - [Supported Payment Types](#supported-payment-types)
  - [Supported Variants](#supported-variants)
- [Examples](#examples)
  - [Visual Showcase](#visual-showcase)
  - [Live Example App](#live-example-app)
  - [Dynamic Payment Form](#dynamic-payment-form)
  - [Card Grid Display](#card-grid-display)
  - [Custom Themed Icons](#custom-themed-icons)
- [Platform Support](#platform-support)
  - [Expo Support](#expo-support)
  - [React Native Web Support](#react-native-web-support)
  - [TypeScript Support](#typescript-support)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)
  - [Common Issues](#common-issues)
- [Contributing](#contributing)
  - [Development](#development)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Screenshots](#screenshots)
  - [Running the Example App](#running-the-example-app)
  - [Screenshot Locations](#screenshot-locations)

## Features

- 🎨 **Multiple styles**: flat, flatRounded, logo, logoBorder, mono, monoOutline
- 💳 **Comprehensive coverage**: Supports 17+ payment providers
- 📱 **Cross-platform**: Works with React Native, Expo, and React Native Web
- 🔧 **Fully customizable**: Size, color, and styling options
- 🎯 **TypeScript support**: Complete type definitions included
- 📦 **Zero dependencies**: Only requires `react-native-svg`

## Installation

```sh
npm install react-native-payment-card-icons
# or
yarn add react-native-payment-card-icons
```

### Prerequisites

This library requires `react-native-svg` to be installed and configured in your project:

```sh
npm install react-native-svg
# or
yarn add react-native-svg
```

For React Native 0.60+, run `npx pod-install` (iOS only) after installation.

## Usage

### Basic Usage with PaymentIcon Component

The easiest way to use the library is with the `PaymentIcon` component:

```tsx
import React from 'react';
import { View } from 'react-native';
import { PaymentIcon } from 'react-native-payment-card-icons';

export default function App() {
  return (
    <View>
      {/* Basic usage */}
      <PaymentIcon type="visa" />

      {/* With custom styling */}
      <PaymentIcon
        type="mastercard"
        variant="flatRounded"
        width={60}
        height={40}
      />

      {/* Monochrome style with custom color */}
      <PaymentIcon
        type="amex"
        variant="mono"
        width={50}
        height={32}
        fill="#007bff"
      />
    </View>
  );
}
```

### Using Individual Icon Components

You can also import and use individual icon components directly:

```tsx
import React from 'react';
import { View } from 'react-native';
import {
  VisaFlat,
  MastercardLogo,
  AmexMono
} from 'react-native-payment-card-icons';

export default function App() {
  return (
    <View>
      <VisaFlat width={60} height={40} />
      <MastercardLogo width={60} height={40} />
      <AmexMono width={60} height={40} fill="#333" />
    </View>
  );
}
```

## API Reference

### PaymentIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `PaymentIconType` | **required** | The payment card brand |
| `variant` | `PaymentIconStyle` | `'flat'` | The icon style variant |
| `width` | `number \| string` | `24` | Icon width |
| `height` | `number \| string` | `24` | Icon height |
| `fill` | `string` | `undefined` | Fill color (mainly for mono variants) |

### Supported Payment Types

| Type | Description |
|------|-------------|
| `'visa'` | Visa |
| `'mastercard'` | Mastercard |
| `'amex'` | American Express |
| `'maestro'` | Maestro |
| `'discover'` | Discover |
| `'jcb'` | JCB |
| `'diners'` | Diners Club |
| `'unionpay'` | UnionPay |
| `'elo'` | Elo |
| `'hiper'` | Hiper |
| `'hipercard'` | Hipercard |
| `'mir'` | Mir |
| `'alipay'` | Alipay |
| `'paypal'` | PayPal |
| `'generic-card'` | Generic Card |
| `'security-code'` | Security Code (CVV) |
| `'security-code-front'` | Security Code Front |

### Supported Variants

| Variant | Description | Best Use Case |
|---------|-------------|---------------|
| `'flat'` | Flat design with brand colors | Modern UI, cards display |
| `'flatRounded'` | Flat design with rounded corners | Card forms, modern UI |
| `'logo'` | Official brand logo | Marketing, branding |
| `'logoBorder'` | Logo with border | Professional docs, forms |
| `'mono'` | Monochrome filled | Custom branded UI |
| `'monoOutline'` | Monochrome outline | Minimalist UI, wireframes |

## Examples

### Visual Showcase

<p align="center">
  <img src="https://github.com/julekgwa/react-native-payment-card-icons/raw/main/screenshots/showcase.jpeg" alt="Payment Icons Showcase" width="600"/>
</p>

The library supports multiple variants for each payment method. Above shows Visa cards in all 6 available styles: flat, flatRounded, logo, logoBorder, mono, and monoOutline.

### Live Example App

Expo snack example: [https://snack.expo.dev/@lekgwaraj/react-native-payment-card-icons](https://snack.expo.dev/@lekgwaraj/react-native-payment-card-icons)

### Dynamic Payment Form

<p align="center">
  <img src="https://github.com/julekgwa/react-native-payment-card-icons/raw/main/screenshots/dynamic-form.gif" alt="Dynamic Payment Form" width="300"/>
</p>

This example shows how to create a dynamic payment form that automatically detects the card type as the user types:

```tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { PaymentIcon } from 'react-native-payment-card-icons';

// Simple card type detection (you might want a more robust solution)
const detectCardType = (number: string) => {
  if (number.startsWith('4')) return 'visa';
  if (number.startsWith('5') || number.startsWith('2')) return 'mastercard';
  if (number.startsWith('3')) return 'amex';
  return 'generic-card';
};

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const cardType = detectCardType(cardNumber);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
        />
        <PaymentIcon
          type={cardType}
          variant="flat"
          width={40}
          height={25}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
});
```

### Card Grid Display

<p align="center">
  <img src="https://github.com/julekgwa/react-native-payment-card-icons/raw/main/screenshots/card-grid.jpeg" alt="Supported Payment Methods Grid" width="300"/>
</p>

Display all supported payment methods in a clean grid layout:

```tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { PaymentIcon } from 'react-native-payment-card-icons';

const supportedCards = [
  { type: 'visa', name: 'Visa' },
  { type: 'mastercard', name: 'Mastercard' },
  { type: 'amex', name: 'American Express' },
  { type: 'discover', name: 'Discover' },
  { type: 'paypal', name: 'PayPal' },
];

export default function SupportedPayments() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We Accept</Text>
      <FlatList
        data={supportedCards}
        numColumns={3}
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
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cardItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  cardName: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
});
```

### Custom Themed Icons

<p align="center">
  <img src="https://github.com/julekgwa/react-native-payment-card-icons/raw/main/screenshots/themed-icons.jpeg" alt="Custom Themed Icons" width="400"/>
</p>

Create custom themes for your payment icons to match your app's design:

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PaymentIcon } from 'react-native-payment-card-icons';

export default function ThemedIcons() {
  return (
    <View style={styles.container}>
      {/* Dark theme */}
      <View style={[styles.section, styles.darkTheme]}>
        <PaymentIcon type="visa" variant="mono" fill="#ffffff" width={50} height={32} />
        <PaymentIcon type="mastercard" variant="mono" fill="#ffffff" width={50} height={32} />
        <PaymentIcon type="amex" variant="mono" fill="#ffffff" width={50} height={32} />
      </View>

      {/* Brand theme */}
      <View style={[styles.section, styles.brandTheme]}>
        <PaymentIcon type="visa" variant="monoOutline" fill="#007bff" width={50} height={32} />
        <PaymentIcon type="mastercard" variant="monoOutline" fill="#007bff" width={50} height={32} />
        <PaymentIcon type="amex" variant="monoOutline" fill="#007bff" width={50} height={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
  },
  darkTheme: {
    backgroundColor: '#333',
  },
  brandTheme: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
});
```

## Platform Support

### Expo Support

This library works seamlessly with Expo. Make sure you have `react-native-svg` installed:

```sh
expo install react-native-svg
```

### React Native Web Support

The library is fully compatible with React Native Web. No additional configuration required.

### TypeScript Support

The library includes complete TypeScript definitions. All component props and types are exported:

```tsx
import {
  PaymentIcon,
  PaymentIconType,
  PaymentIconStyle,
  PaymentIconProps
} from 'react-native-payment-card-icons';

// Type-safe usage
const cardType: PaymentIconType = 'visa';
const variant: PaymentIconStyle = 'flatRounded';
```

## Performance

- **Optimized SVGs**: All icons are optimized for minimal bundle size
- **Tree-shakable**: Import only the icons you need
- **No bitmap images**: Crisp at any resolution
- **Lightweight**: Minimal impact on bundle size

## Troubleshooting

### Common Issues

**Icons not showing:**
- Ensure `react-native-svg` is properly installed and linked
- For React Native 0.60+, run `npx pod-install` on iOS

**TypeScript errors:**
- Make sure you're using the correct prop types
- Update to the latest version of the library

**Performance on large lists:**
- Consider using `getItemLayout` for FlatList performance
- Use appropriate icon sizes to avoid unnecessary rendering

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

### Development

```sh
# Clone the repository
git clone https://github.com/julekgwa/react-native-payment-card-icons.git

# Install dependencies
yarn install

# Run tests
yarn test

# Run the example app
yarn example ios
# or
yarn example android
```

## License

MIT © [Junius Lekgwara](https://github.com/julekgwa)

## Acknowledgments

- Icons based on [CC Icons](https://github.com/aaronfagan/ccicons) by Aaron Fagan
- Built with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

---

**Keywords:** react-native, payment, cards, icons, svg, visa, mastercard, amex, american-express, maestro, discover, jcb, unionpay, paypal, alipay, components, typescript, expo, react-native-web

## Screenshots

To help with documentation, here are the commands to generate screenshots:

### Running the Example App

```sh
# Start the example app
cd example
npm start

# For iOS simulator screenshots
npx react-native run-ios

# For Android emulator screenshots
npx react-native run-android
```

### Screenshot Locations

The screenshots referenced in this README should be placed in a `screenshots/` directory in the repository root:

- `screenshots/showcase.png` - Grid showing all icon variants for Visa
- `screenshots/example-app.gif` - Animated demo of the full example app
- `screenshots/dynamic-form.gif` - Dynamic card detection in action
- `screenshots/card-grid.png` - Supported payment methods grid
- `screenshots/themed-icons.png` - Dark and brand theme examples

*Note: The screenshots referenced above should be generated by running the example app. To create these screenshots:*

1. *Run the example app: `yarn example ios` or `yarn example android`*
2. *Take screenshots of the various sections*
3. *Create a `screenshots/` directory in the repository root*
4. *Add the screenshot files as referenced in the image URLs above*
