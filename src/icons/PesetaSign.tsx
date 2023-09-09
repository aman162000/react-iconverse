
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32 64C32 46.33 46.33 32 64 32H192C280.4 32 352 103.6 352 192C352 280.4 280.4 352 192 352H96V448C96 465.7 81.67 480 64 480C46.33 480 32 465.7 32 448V64zM96 288H192C245 288 288 245 288 192C288 138.1 245 96 192 96H96V288z"/><path className="fa-secondary" d="M32 224C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160V224zM282.5 224H96V160H282.5C286.1 170 288 180.8 288 192C288 203.2 286.1 213.1 282.5 224zM352 192C352 181 350.9 170.3 348.8 160H352C369.7 160 384 174.3 384 192C384 209.7 369.7 224 352 224H348.8C350.9 213.7 352 202.1 352 192z"/>
</>],
['light',<>
	<path d="M208 32C282.1 32 343.2 88 351.1 160H368C376.8 160 384 167.2 384 176C384 184.8 376.8 192 368 192H351.1C343.2 263.1 282.1 320 208 320H64V464C64 472.8 56.84 480 48 480C39.16 480 32 472.8 32 464V192H16C7.164 192 0 184.8 0 176C0 167.2 7.164 160 16 160H32V72.69C32 50.22 50.22 32 72.69 32H208zM318.9 160C311.1 105.7 264.4 64 208 64H72.69C67.89 64 64 67.89 64 72.69V160H318.9zM64 192V288H208C264.4 288 311.1 246.3 318.9 192H64z"/>
</>],
['regular',<>
	<path d="M192 32C274.1 32 343.2 95.15 351.2 176H360C373.3 176 384 186.7 384 200C384 213.3 373.3 224 360 224H348.8C333.1 297 269.4 352 192 352H96V456C96 469.3 85.25 480 72 480C58.75 480 48 469.3 48 456V224H24C10.75 224 0 213.3 0 200C0 186.7 10.75 176 24 176H48V77.94C48 52.57 68.57 32 93.94 32H192zM302.9 176C295.1 121.7 248.4 80 192 80H96V176H302.9zM96 224V304H192C242.7 304 285.6 270.3 299.4 224H96z"/>
</>],
['solid',<>
	<path d="M192 32C269.4 32 333.1 86.97 348.8 160H352C369.7 160 384 174.3 384 192C384 209.7 369.7 224 352 224H348.8C333.1 297 269.4 352 192 352H96V448C96 465.7 81.67 480 64 480C46.33 480 32 465.7 32 448V224C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160V64C32 46.33 46.33 32 64 32H192zM282.5 160C269.4 122.7 233.8 96 192 96H96V160H282.5zM96 224V288H192C233.8 288 269.4 261.3 282.5 224H96z"/>
</>],
['thin',<>
	<path d="M192 32C271.5 32 336 96.47 336 176H376C380.4 176 384 179.6 384 184C384 188.4 380.4 192 376 192H335.1C327.2 263.1 266.1 320 192 320H64V472C64 476.4 60.42 480 56 480C51.58 480 48 476.4 48 472V192H8C3.582 192 0 188.4 0 184C0 179.6 3.582 176 8 176H48V63.31C48 46.02 62.02 32 79.31 32H192zM320 176C320 105.3 262.7 48 192 48H79.31C70.86 48 64 54.86 64 63.31V176H320zM64 192V304H192C257.3 304 311.1 255.1 319 192H64z"/>
</>],

]);

const PesetaSign: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PesetaSign.displayName = "PesetaSign";

export default PesetaSign;
