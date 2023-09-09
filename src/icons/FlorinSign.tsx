
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M226.1 91.08C240.1 55.3 275.9 32 314.7 32H352C369.7 32 384 46.33 384 64C384 81.67 369.7 96 352 96H314.7C301.7 96 290.1 103.8 285.1 115.7L157.9 420.9C143 456.7 108.1 480 69.33 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H69.33C82.25 416 93.9 408.2 98.87 396.3L226.1 91.08z"/><path className="fa-secondary" d="M144 288H64C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224H170.7L144 288zM240 224H320C337.7 224 352 238.3 352 256C352 273.7 337.7 288 320 288H213.3L240 224z"/>
</>],
['light',<>
	<path d="M368 32C376.8 32 384 39.16 384 48C384 56.84 376.8 64 368 64H322.4C303.1 64 285.7 75.54 278.2 93.3L222.9 224H336C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H209.4L135.3 431.2C122.7 460.8 93.72 480 61.58 480H16C7.164 480 0 472.8 0 464C0 455.2 7.164 448 16 448H61.58C80.87 448 98.28 436.5 105.8 418.7L174.6 256H48C39.16 256 32 248.8 32 240C32 231.2 39.16 224 48 224H188.2L248.7 80.83C261.3 51.23 290.3 32 322.4 32H368z"/>
</>],
['regular',<>
	<path d="M360 32C373.3 32 384 42.75 384 56C384 69.25 373.3 80 360 80H315.3C298.1 80 284.3 89.96 278.2 105.1L230.6 224H328C341.3 224 352 234.7 352 248C352 261.3 341.3 272 328 272H211.4L150.4 424.7C137 458.1 104.7 480 68.67 480H24C10.75 480 0 469.3 0 456C0 442.7 10.75 432 24 432H68.67C85.03 432 99.73 422 105.8 406.9L159.8 272H56C42.75 272 32 261.3 32 248C32 234.7 42.75 224 56 224H178.1L233.6 87.32C246.1 53.91 279.3 32 315.3 32H360z"/>
</>],
['solid',<>
	<path d="M352 32C369.7 32 384 46.33 384 64C384 81.67 369.7 96 352 96H314.7C301.7 96 290.1 103.8 285.1 115.7L240 224H320C337.7 224 352 238.3 352 256C352 273.7 337.7 288 320 288H213.3L157.9 420.9C143 456.7 108.1 480 69.33 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H69.33C82.25 416 93.9 408.2 98.87 396.3L144 288H64C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224H170.7L226.1 91.08C240.1 55.3 275.9 32 314.7 32H352z"/>
</>],
['thin',<>
	<path d="M376 32C380.4 32 384 35.58 384 40C384 44.42 380.4 48 376 48H323C300.3 48 279.8 61.79 271.2 82.87L207.2 240H344C348.4 240 352 243.6 352 248C352 252.4 348.4 256 344 256H200.6L127.6 435.2C116.6 462.3 90.24 480 60.97 480H8C3.582 480 0 476.4 0 472C0 467.6 3.582 464 8 464H60.97C83.74 464 104.2 450.2 112.8 429.1L183.4 256H39.1C35.58 256 31.1 252.4 31.1 248C31.1 243.6 35.58 240 39.1 240H189.9L256.4 76.83C267.4 49.72 293.8 32 323 32H376z"/>
</>],

]);

const FlorinSign: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FlorinSign.displayName = "FlorinSign";

export default FlorinSign;
