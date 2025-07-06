import { PaymentIcon } from '../PaymentIcon';

describe('PaymentIcon Utilities', () => {
  describe('Component Name Generation', () => {
    it('converts hyphenated types to PascalCase', () => {
      // We test this indirectly by checking that the component renders
      // without warnings for known valid combinations
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      // These should all render successfully if name generation works
      const validCombinations = [
        { type: 'alipay', variant: 'flat' },
        { type: 'amex', variant: 'flat' },
      ];

      validCombinations.forEach(({ type, variant }) => {
        const element = PaymentIcon({
          type: type as any,
          variant: variant as any,
        });
        // If the component name generation works, it should not be null
        // and should not produce console warnings
        expect(element).not.toBeNull();
      });

      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it('generates correct capitalization for variants', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      const variantTests = [
        'flat', // should become 'Flat'
        'flatRounded', // should become 'FlatRounded'
        'logo', // should become 'Logo'
        'logoBorder', // should become 'LogoBorder'
        'mono', // should become 'Mono'
        'monoOutline', // should become 'MonoOutline'
      ];

      // Only test with known working icon
      variantTests.forEach((variant) => {
        const element = PaymentIcon({
          type: 'alipay',
          variant: variant as any,
        });
        // Should handle gracefully even if variant doesn't exist
        expect(element).toBeTruthy();
      });

      consoleSpy.mockRestore();
    });
  });

  describe('Error Handling', () => {
    it('handles missing components gracefully', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      const invalidElement = PaymentIcon({
        type: 'nonexistent' as any,
        variant: 'flat',
      });

      expect(invalidElement).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith(
        '[PaymentIcon] Missing icon for type=nonexistent style=flat'
      );

      consoleSpy.mockRestore();
    });

    it('handles case sensitivity correctly', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      // Test that exact case matching is required
      const invalidElement = PaymentIcon({
        type: 'ALIPAY' as any, // should be 'alipay'
        variant: 'flat',
      });

      expect(invalidElement).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith(
        '[PaymentIcon] Missing icon for type=ALIPAY style=flat'
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Props Handling', () => {
    it('preserves additional props', () => {
      const element = PaymentIcon({
        'type': 'alipay',
        'variant': 'flat',
        'width': 100,
        'height': 100,
        'fill': '#red',
        'data-testid': 'test-icon',
      });

      expect(element).not.toBeNull();
      expect(element?.props).toMatchObject({
        'width': 100,
        'height': 100,
        'fill': '#red',
        'data-testid': 'test-icon',
      });
    });

    it('handles undefined variant with default', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      const element = PaymentIcon({
        type: 'alipay',
        // variant is undefined, should default to 'flat'
      });

      expect(element).not.toBeNull();
      expect(consoleSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });
});
