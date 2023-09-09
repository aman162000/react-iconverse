
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M233.1 16.72C236.3 6.764 245.5 .0006 256 0V406.4L126.7 506.9C118.4 513.4 106.9 513.7 98.27 507.7C89.65 501.7 85.94 490.7 89.13 480.7L140.1 320.7L9.267 218.9C1.174 212.6-2.027 201.9 1.3 192.2C4.628 182.5 13.75 175.1 24 175.1H182.5L233.1 16.72z"/><path className="fa-secondary" d="M278.9 16.72C275.7 6.764 266.5 .0006 255.1 0V406.4L385.3 506.9C393.6 513.4 405.1 513.7 413.7 507.7C422.4 501.7 426.1 490.7 422.9 480.7L371.9 320.7L502.7 218.9C510.8 212.6 514 201.9 510.7 192.2C507.4 182.5 498.3 175.1 488 175.1H329.5L278.9 16.72z"/>
</>],
['light',<>
	<path d="M231.7 14.37C234.5 5.812 242.4 0 251.4 0C262.8 0 272 9.232 272 20.62V384C272 388.9 269.7 393.6 265.8 396.6L123.1 507.6C119.5 510.5 114.1 512 110.4 512C96.46 512 86.5 498.6 90.55 485.2L141.4 318.3L11.02 224.1C4.1 219.1 0 211.1 0 202.6C0 187.9 11.9 176 26.59 176H180.3L231.7 14.37zM240 93.91L207.2 196.9C205.1 203.5 198.1 208 192 208H43.33L169.4 299C174.9 303 177.3 310.1 175.3 316.7L131.5 460.6L239.1 376.2L240 93.91z"/>
</>],
['regular',<>
	<path d="M259.7 .2865C271.4 2.102 280 12.17 280 24V376C280 383.4 276.6 390.4 270.7 394.9L126.7 506.9C118.4 513.4 106.9 513.7 98.27 507.7C89.65 501.7 85.94 490.7 89.13 480.7L140.1 320.7L9.267 218.9C1.174 212.7-2.027 201.9 1.3 192.2C4.628 182.5 13.75 176 24 176H182.5L233.1 16.73C236.7 5.449 247.1-1.529 259.7 .2862V.2865zM232 178.6L222.9 207.3C219.7 217.2 210.5 224 200 224H93.95L182.7 293.1C190.7 299.2 193.9 309.7 190.9 319.3L158.3 421.6L232 364.3L232 178.6z"/>
</>],
['solid',<>
	<path d="M233.1 16.72C236.3 6.764 245.5 .0006 256 0V406.4L126.7 506.9C118.4 513.4 106.9 513.7 98.27 507.7C89.65 501.7 85.94 490.7 89.13 480.7L140.1 320.7L9.267 218.9C1.174 212.6-2.027 201.9 1.3 192.2C4.628 182.5 13.75 175.1 24 175.1H182.5L233.1 16.72z"/>
</>],
['thin',<>
	<path d="M239.4 8.794C241 3.557 245.9 0 251.4 0C258.3 0 264 5.651 264 12.62V392C264 394.5 262.9 396.8 260.9 398.3L119.5 508.3C116.4 510.7 112.6 512 108.8 512C97.04 512 88.65 500.7 92.06 489.5L142.8 322.7L6.799 209.4C2.491 205.8 0 200.5 0 194.9C0 184.5 8.46 176 18.9 176H186.2L239.4 8.794zM248 34.38L199.6 186.4C198.6 189.7 195.5 192 192 192H18.9C17.3 192 16 193.3 16 194.9C16 195.8 16.38 196.6 17.04 197.1L157.1 313.9C159.6 315.9 160.6 319.3 159.7 322.3L107.4 494.1C107.1 495.1 107.8 496 108.8 496C109.1 496 109.4 495.9 109.6 495.7L248 388.1V34.38z"/>
</>],

]);

const StarSharpHalf: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

StarSharpHalf.displayName = "StarSharpHalf";

export default StarSharpHalf;