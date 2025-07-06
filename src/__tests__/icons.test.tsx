import React from 'react';
import { render } from '@testing-library/react-native';
import AlipayFlat from '../icons/AlipayFlat';
import AmexFlat from '../icons/AmexFlat';

describe('Individual Icon Components', () => {
  describe('AlipayFlat', () => {
    it('renders without crashing', () => {
      const { toJSON } = render(<AlipayFlat />);
      expect(toJSON()).toBeTruthy();
    });

    it('accepts custom props', () => {
      const { getByTestId } = render(
        <AlipayFlat width={48} height={48} testID="alipay-icon" />
      );
      const icon = getByTestId('alipay-icon');
      expect(icon).toBeTruthy();
    });

    it('renders with custom fill color', () => {
      const { toJSON } = render(<AlipayFlat fill="#FF0000" />);
      expect(toJSON()).toBeTruthy();
    });
  });

  describe('AmexFlat', () => {
    it('renders without crashing', () => {
      const { toJSON } = render(<AmexFlat />);
      expect(toJSON()).toBeTruthy();
    });

    it('accepts SVG props', () => {
      const { getByTestId } = render(
        <AmexFlat width="100%" height="100%" testID="amex-icon" />
      );
      const icon = getByTestId('amex-icon');
      expect(icon).toBeTruthy();
    });
  });

  describe('Icon Component Structure', () => {
    it('all icons have consistent structure', () => {
      const icons = [AlipayFlat, AmexFlat];

      icons.forEach((IconComponent) => {
        const { toJSON } = render(<IconComponent />);
        const tree = toJSON();

        // Ensure it's rendered as an object (component)
        expect(tree).toBeTruthy();
        expect(typeof tree).toBe('object');
      });
    });

    it('accepts common SVG props without errors - AlipayFlat', () => {
      const commonProps = {
        width: 32,
        height: 32,
        fill: '#000000',
        opacity: 0.8,
        testID: 'test-icon',
      };

      const renderResult = render(<AlipayFlat {...commonProps} />);
      expect(renderResult.toJSON()).toBeTruthy();
    });

    it('accepts common SVG props without errors - AmexFlat', () => {
      const commonProps = {
        width: 32,
        height: 32,
        fill: '#000000',
        opacity: 0.8,
        testID: 'test-icon',
      };

      const renderResult = render(<AmexFlat {...commonProps} />);
      expect(renderResult.toJSON()).toBeTruthy();
    });
  });
});
