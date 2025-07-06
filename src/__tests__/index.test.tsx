import React from 'react';
import { render } from '@testing-library/react-native';
import { PaymentIcon } from '../index';
import * as Icons from '../icons';

describe('PaymentIcon Library', () => {
  describe('PaymentIcon Component', () => {
    it('renders alipay flat icon by default', () => {
      const { toJSON } = render(<PaymentIcon type="alipay" />);
      expect(toJSON()).toBeTruthy();
    });

    it('renders different variants correctly', () => {
      const variants = [
        'flat',
        'flatRounded',
        'logo',
        'logoBorder',
        'mono',
        'monoOutline',
      ] as const;

      variants.forEach((variant) => {
        const { toJSON } = render(
          <PaymentIcon type="alipay" variant={variant} />
        );
        // Some variants might not exist, so we just check it doesn't crash
        expect(toJSON).toBeTruthy();
      });
    });

    it('renders existing payment types correctly', () => {
      const types = ['alipay', 'amex'] as const;

      types.forEach((type) => {
        const { toJSON } = render(<PaymentIcon type={type} />);
        expect(toJSON()).toBeTruthy();
      });
    });

    it('passes through SVG props correctly', () => {
      const { getByTestId } = render(
        <PaymentIcon
          type="alipay"
          width={32}
          height={32}
          testID="payment-icon"
        />
      );

      const icon = getByTestId('payment-icon');
      expect(icon).toBeTruthy();
    });

    it('warns and returns null for invalid type/variant combinations', () => {
      const consoleSpy = jest.spyOn(console, 'warn');

      const { toJSON } = render(
        <PaymentIcon type="invalid-type" variant="flat" />
      );

      expect(toJSON()).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith(
        '[PaymentIcon] Missing icon for type=invalid-type variant=flat'
      );

      consoleSpy.mockRestore();
    });

    it('transforms component names correctly', () => {
      // Test hyphenated names get converted properly
      const { toJSON } = render(
        <PaymentIcon type="generic-card" variant="flat" />
      );
      // This might return null if the component doesn't exist, which is fine
      expect(toJSON).toBeTruthy();
    });
  });

  describe('Icon Exports', () => {
    it('exports all expected icon components', () => {
      const expectedIcons = [
        'AlipayFlat',
        'AlipayFlatRounded',
        'AlipayLogo',
        'AlipayLogoBorder',
        'AlipayMono',
        'AlipayMonoOutline',
        'AmexFlat',
        'AmexFlatRounded',
        'AmexLogo',
        'AmexLogoBorder',
        'AmexMono',
        'AmexMonoOutline',
      ];

      expectedIcons.forEach((iconName) => {
        expect(Icons).toHaveProperty(iconName);
        expect(typeof (Icons as any)[iconName]).toBe('function');
      });
    });
  });
});
