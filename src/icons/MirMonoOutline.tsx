import Svg, { Path, G } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
import type { SvgProps } from 'react-native-svg';
const MirMonoOutline = (props: SvgProps) => (
  <Svg
    id="Layer_1"
    x={0}
    y={0}
    viewBox="0 0 780 500"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="M55 14.5h670c22.1 0 40 17.9 40 40v391c0 22.1-17.9 40-40 40H55c-22.1 0-40-17.9-40-40v-391c0-22.1 17.9-40 40-40z"
      fill="none"
      stroke="#393939"
      strokeWidth={30}
    />
    <G id="Page-1">
      <G id="Artboard" transform="translate(-91 -154)">
        <G id="Group" transform="translate(91 154)">
          <Path
            id="Combined-Shape"
            d="M544.1 240.5v108h60v-64h68c28.6-.2 52.9-18.5 62.1-44z"
          />
          <Path
            id="Combined-Shape_1_"
            d="M536.1 151.5c3.5 44.1 45.3 79 96.3 79h104.3c.8-4 1.2-8.2 1.2-12.5 0-36.6-29.5-66.2-66-66.5z"
          />
          <Path
            id="Combined-Shape_2_"
            d="M447.3 229.4v-.1zc.7-1.2 1.8-1.9 3.2-1.9 2 0 3.5 1.6 3.6 3.5v116.5h60v-196h-60c-7.6.3-16.2 5.8-19.4 12.7L387 266.6c-.1.4-.3.8-.5 1.2-.7 1-1.9 1.7-3.3 1.7-2.2 0-4-1.8-4-4v-114h-60v196h60c7.5-.4 15.9-5.9 19.1-12.7l49-105.1c-.1-.1 0-.2 0-.3"
          />
          <Path
            id="Combined-Shape_3_"
            d="m223.3 232.8-35.1 114.7H145l-35-114.8c-.3-1.8-1.9-3.2-3.9-3.2-2.2 0-3.9 1.8-3.9 3.9v114h-60v-196H109c11 0 22.6 8.6 25.8 19.1L164 266c1.5 4.8 3.8 4.7 5.3 0l29.2-95.5c3.2-10.6 14.8-19.1 25.8-19.1h66.8v196h-60V233.3c0-2.2-1.8-3.9-3.9-3.9-2 .1-3.6 1.5-3.9 3.4"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default MirMonoOutline;
