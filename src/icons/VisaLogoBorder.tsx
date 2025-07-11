import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const VisaLogoBorder = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 780 500" {...props}>
    <G clipPath="url(#a)">
      <Path fill="#fff" stroke="#000" strokeWidth={15} d="M780 0H0v500h780z" />
      <Path
        fill="#1434CB"
        d="M489.828 143.11c-46.835 0-88.69 24.282-88.69 69.146 0 51.45 74.231 55.003 74.231 80.851 0 10.883-12.469 20.625-33.765 20.625-30.223 0-52.811-13.613-52.811-13.613l-9.666 45.272s26.022 11.499 60.57 11.499c51.206 0 91.499-25.475 91.499-71.105 0-54.367-74.54-57.815-74.54-81.805 0-8.525 10.236-17.867 31.471-17.867 23.959 0 43.507 9.9 43.507 9.9l9.459-43.725s-21.269-9.178-51.265-9.178m-428.499 3.3-1.134 6.6s19.704 3.607 37.45 10.802c22.85 8.251 24.478 13.055 28.326 27.973l41.935 161.702h56.214l86.602-207.077h-56.085L198.99 287.203 176.283 167.86c-2.082-13.659-12.631-21.45-25.542-21.45zm271.946 0-43.997 207.077h53.482l43.842-207.077zm298.286 0c-12.896 0-19.729 6.906-24.743 18.975l-78.354 188.102h56.085l10.851-31.35h68.328l6.598 31.35h49.487L676.641 146.41zm7.294 55.946 16.625 77.705h-44.538z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h780v500H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default VisaLogoBorder;
