
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M393.4 41.37C405.9 28.88 426.1 28.88 438.6 41.37C451.1 53.87 451.1 74.13 438.6 86.63L269.3 255.1L438.6 425.4C451.1 437.9 451.1 458.1 438.6 470.6C426.1 483.1 405.9 483.1 393.4 470.6L223.1 301.3L54.63 470.6C42.13 483.1 21.87 483.1 9.372 470.6C-3.124 458.1-3.124 437.9 9.372 425.4L178.7 255.1L9.372 86.63C-3.124 74.13-3.124 53.87 9.372 41.37C21.87 28.88 42.13 28.88 54.63 41.37L223.1 210.7L393.4 41.37z"/>
</>],
['light',<>
	<path d="M420.7 36.69C426.9 30.44 437.1 30.44 443.3 36.69C449.6 42.93 449.6 53.06 443.3 59.31L246.6 256L443.3 452.7C449.6 458.9 449.6 469.1 443.3 475.3C437.1 481.6 426.9 481.6 420.7 475.3L224 278.6L27.31 475.3C21.07 481.6 10.94 481.6 4.686 475.3C-1.562 469.1-1.562 458.9 4.686 452.7L201.4 256L4.686 59.31C-1.562 53.07-1.562 42.94 4.686 36.69C10.93 30.44 21.06 30.44 27.31 36.69L224 233.4L420.7 36.69z"/>
</>],
['regular',<>
	<path d="M224 222.1L407 39.03C416.4 29.66 431.6 29.66 440.1 39.03C450.3 48.4 450.3 63.6 440.1 72.97L257.9 256L440.1 439C450.3 448.4 450.3 463.6 440.1 472.1C431.6 482.3 416.4 482.3 407 472.1L224 289.9L40.97 472.1C31.6 482.3 16.4 482.3 7.029 472.1C-2.343 463.6-2.343 448.4 7.029 439L190.1 256L7.029 72.97C-2.343 63.6-2.343 48.4 7.029 39.03C16.4 29.66 31.6 29.66 40.97 39.03L224 222.1z"/>
</>],
['solid',<>
	<path d="M393.4 41.37C405.9 28.88 426.1 28.88 438.6 41.37C451.1 53.87 451.1 74.13 438.6 86.63L269.3 255.1L438.6 425.4C451.1 437.9 451.1 458.1 438.6 470.6C426.1 483.1 405.9 483.1 393.4 470.6L223.1 301.3L54.63 470.6C42.13 483.1 21.87 483.1 9.372 470.6C-3.124 458.1-3.124 437.9 9.372 425.4L178.7 255.1L9.372 86.63C-3.124 74.13-3.124 53.87 9.372 41.37C21.87 28.88 42.13 28.88 54.63 41.37L223.1 210.7L393.4 41.37z"/>
</>],
['thin',<>
	<path d="M223.1 244.7L434.3 34.34C437.5 31.22 442.5 31.22 445.7 34.34C448.8 37.47 448.8 42.53 445.7 45.66L235.3 255.1L445.7 466.3C448.8 469.5 448.8 474.5 445.7 477.7C442.5 480.8 437.5 480.8 434.3 477.7L223.1 267.3L13.66 477.7C10.53 480.8 5.467 480.8 2.343 477.7C-.7811 474.5-.7811 469.5 2.343 466.3L212.7 255.1L2.343 45.66C-.7811 42.53-.7811 37.47 2.343 34.34C5.467 31.22 10.53 31.22 13.66 34.34L223.1 244.7z"/>
</>],

]);

const XmarkLarge: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

XmarkLarge.displayName = "XmarkLarge";

export default XmarkLarge;
