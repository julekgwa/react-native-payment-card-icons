import * as Icons from './icons';
export type PaymentIconType =
  | 'alipay'
  | 'amex'
  | 'diners'
  | 'discover'
  | 'elo'
  | 'hiper'
  | 'hipercard'
  | 'jcb'
  | 'maestro'
  | 'mastercard'
  | 'mir'
  | 'paypal'
  | 'unionpay'
  | 'visa'
  | 'generic-card'
  | 'security-code'
  | 'security-code-front';

export type PaymentIconStyle =
  | 'flat'
  | 'flatRounded'
  | 'logo'
  | 'logoBorder'
  | 'mono'
  | 'monoOutline';

export interface PaymentIconProps {
  type: PaymentIconType;
  variant?: PaymentIconStyle;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export function PaymentIcon({
  type,
  variant = 'flat',
  ...rest
}: Readonly<PaymentIconProps>) {
  const componentName =
    type.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase()) +
    variant.charAt(0).toUpperCase() +
    variant.slice(1);

  const IconComponent = (Icons as any)[componentName];

  if (!IconComponent) {
    console.warn(
      `[PaymentIcon] Missing icon for type=${type} variant=${variant}`
    );
    return null;
  }

  return <IconComponent {...rest} />;
}

export default PaymentIcon;
