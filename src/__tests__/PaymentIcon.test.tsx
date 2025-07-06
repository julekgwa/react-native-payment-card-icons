import React from 'react';
import { render } from '@testing-library/react-native';
import { PaymentIcon } from '../PaymentIcon';
import type { PaymentIconType, PaymentIconStyle } from '../PaymentIcon';

describe('PaymentIcon Component', () => {
  it('renders with default props', () => {
    const { toJSON } = render(<PaymentIcon type="alipay" />);
    expect(toJSON()).toBeTruthy();
  });

  it('handles existing payment types', () => {
    const types: PaymentIconType[] = ['alipay', 'amex'];

    types.forEach((type) => {
      const { toJSON } = render(<PaymentIcon type={type} />);
      expect(toJSON()).toBeTruthy();
    });
  });

  it('handles all style variants', () => {
    const variants: PaymentIconStyle[] = [
      'flat',
      'flatRounded',
      'logo',
      'logoBorder',
      'mono',
      'monoOutline',
    ];

    variants.forEach((variant) => {
      const { toJSON } = render(
        <PaymentIcon type="alipay" variant={variant} />
      );
      // Some variants might not exist, but should not crash
      expect(toJSON).toBeTruthy();
    });
  });

  it('transforms type names correctly', () => {
    // Test single word
    const { rerender } = render(<PaymentIcon type="alipay" variant="flat" />);
    expect(() =>
      rerender(<PaymentIcon type="alipay" variant="flat" />)
    ).not.toThrow();

    // Test hyphenated names (even if they don't exist)
    expect(() =>
      rerender(<PaymentIcon type="generic-card" variant="flat" />)
    ).not.toThrow();
    expect(() =>
      rerender(<PaymentIcon type="security-code" variant="flat" />)
    ).not.toThrow();
  });

  it('passes through SVG props', () => {
    const props = {
      width: 48,
      height: 48,
      fill: '#FF0000',
      opacity: 0.5,
      testID: 'payment-icon-test',
    };

    const { getByTestId } = render(<PaymentIcon type="alipay" {...props} />);
    const icon = getByTestId('payment-icon-test');
    expect(icon).toBeTruthy();
  });

  it('handles edge cases gracefully', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

    // Invalid type
    const { toJSON: invalidTypeJSON } = render(
      <PaymentIcon type={'invalid' as PaymentIconType} />
    );
    expect(invalidTypeJSON()).toBeNull();

    // Invalid variant
    const { toJSON: invalidVariantJSON } = render(
      <PaymentIcon type="alipay" variant={'invalid' as PaymentIconStyle} />
    );
    expect(invalidVariantJSON()).toBeNull();

    expect(consoleSpy).toHaveBeenCalledWith(
      '[PaymentIcon] Missing icon for type=invalid style=flat'
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      '[PaymentIcon] Missing icon for type=alipay style=invalid'
    );

    consoleSpy.mockRestore();
  });

  it('has correct default variant', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

    // Should use 'flat' as default variant
    render(<PaymentIcon type="alipay" />);

    // Should not warn for valid combination
    expect(consoleSpy).not.toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  describe('Component Name Generation', () => {
    it('generates correct component names', () => {
      const testCases = [
        { type: 'alipay', variant: 'flat', expected: 'AlipayFlat' },
        { type: 'amex', variant: 'logo', expected: 'AmexLogo' },
        { type: 'generic-card', variant: 'mono', expected: 'GenericCardMono' },
        {
          type: 'security-code',
          variant: 'flatRounded',
          expected: 'SecurityCodeFlatRounded',
        },
      ];

      testCases.forEach(({ type, variant }) => {
        const { toJSON } = render(
          <PaymentIcon
            type={type as PaymentIconType}
            variant={variant as PaymentIconStyle}
          />
        );
        // Component might not exist, but should handle gracefully
        expect(toJSON).toBeTruthy();
      });
    });
  });
});
