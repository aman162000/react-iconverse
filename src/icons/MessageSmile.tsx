
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 175.1c17.75 0 32-14.25 32-31.1s-14.25-32-31.1-32s-31.1 14.25-31.1 32S302.3 175.1 320 175.1zM359.5 237.5c-9.998-8.625-25.12-7.375-33.74 2.75C308.5 260.4 283.2 272 256 272c-27.12 0-52.49-11.62-69.74-31.75C177.7 230.1 162.4 229 152.4 237.5C142.3 246.1 141.3 261.3 149.8 271.3c26.5 31 65.09 48.74 106.2 48.74c41.12 0 79.76-17.74 106.3-48.74C370.8 261.3 369.6 246.1 359.5 237.5zM192 175.1c17.75 0 32-14.25 32-31.1s-14.25-32-31.1-32s-31.1 14.25-31.1 32S174.3 175.1 192 175.1z"/><path className="fa-secondary" d="M448 .0039H64C28.75 .0039 0 28.75 0 64v287.1c0 35.25 28.75 63.1 64 63.1h96v83.99c0 9.75 11.25 15.45 19.12 9.699L304 415.1H448c35.25 0 64-28.75 64-63.1V64C512 28.75 483.3 .0039 448 .0039zM320 112c17.75 0 31.1 14.25 31.1 32s-14.25 31.1-32 31.1S288 161.8 288 144S302.3 112 320 112zM192 112c17.75 0 31.1 14.25 31.1 32S209.8 175.1 192 175.1S160 161.8 160 144S174.3 112 192 112zM362.3 271.3c-26.5 31-65.14 48.74-106.3 48.74c-41.12 0-79.72-17.74-106.2-48.74c-8.5-10-7.5-25.12 2.625-33.75c9.998-8.5 25.25-7.375 33.87 2.75C203.5 260.4 228.9 272 256 272c27.12 0 52.49-11.62 69.74-31.75c8.623-10.12 23.75-11.38 33.74-2.75C369.6 246.1 370.8 261.3 362.3 271.3z"/>
</>],
['light',<>
	<path d="M447.1 .0041h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.99c0 9.838 11.03 15.55 19.12 9.7l124.9-93.69h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 .0041 447.1 .0041zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352zM319.9 184c13.25 0 24-10.75 24-24s-10.75-24-24-24s-24 10.75-24 24S306.7 184 319.9 184zM331.7 253.3C312.9 275.4 285.3 288 255.9 288S198.9 275.4 180.2 253.4C174.4 246.8 164.3 246 157.7 251.6c-6.875 5.75-7.5 15.75-1.875 22.62c24.88 29 61.44 45.74 100.2 45.74s75.18-16.74 100.2-45.87c5.75-6.75 4.875-16.88-1.875-22.62C347.7 245.8 337.6 246.6 331.7 253.3zM191.9 184c13.25 0 24-10.75 24-24s-10.75-24-24-24s-24 10.75-24 24S178.7 184 191.9 184z"/>
</>],
['regular',<>
	<path d="M447.1 .0041h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.99c0 9.836 11.02 15.55 19.12 9.7l124.9-93.69h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 .0041 447.1 .0041zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352zM320 175.1c17.75 0 32-14.25 32-31.1s-14.25-32-31.1-32s-31.1 14.25-31.1 32S302.3 175.1 320 175.1zM192 175.1c17.75 0 32-14.25 32-31.1s-14.25-32-31.1-32s-31.1 14.25-31.1 32S174.3 175.1 192 175.1zM325.8 240.3C308.5 260.4 283.2 272 256 272c-27.12 0-52.49-11.62-69.74-31.75C177.7 230.1 162.4 229 152.4 237.5C142.3 246.1 141.3 261.3 149.8 271.3c26.5 31 65.09 48.74 106.2 48.74c41.12 0 79.76-17.74 106.3-48.74c8.5-10 7.375-25.12-2.75-33.75C349.5 228.9 334.4 230.1 325.8 240.3z"/>
</>],
['solid',<>
	<path d="M447.1 .0041h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.99c0 9.75 11.25 15.45 19.12 9.7l124.9-93.69h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 .0041 447.1 .0041zM320 112c17.75 0 31.1 14.25 31.1 32s-14.25 31.1-32 31.1S288 161.8 288 144S302.3 112 320 112zM192 112c17.75 0 31.1 14.25 31.1 32S209.8 175.1 192 175.1S160 161.8 160 144S174.3 112 192 112zM362.3 271.3c-26.5 31-65.14 48.74-106.3 48.74c-41.12 0-79.72-17.74-106.2-48.74c-8.5-10-7.5-25.12 2.625-33.75c9.998-8.5 25.25-7.375 33.87 2.75C203.5 260.4 228.9 272 256 272c27.12 0 52.49-11.62 69.74-31.75c8.623-10.12 23.75-11.38 33.74-2.75C369.6 246.1 370.8 261.3 362.3 271.3z"/>
</>],
['thin',<>
	<path d="M447.1 .0041h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.24 28.75 63.1 64 63.1h96v83.99c0 7.071 5.919 12.01 12.18 12.01c2.369 0 4.786-.7295 6.948-2.307l124.9-93.69h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.76 483.2 .0041 447.1 .0041zM495.1 351.1c0 26.46-21.53 47.99-48 47.99h-149.3l-122.7 92.08v-92.08H63.1c-26.47 0-48-21.53-48-47.99v-287.1c0-26.46 21.53-47.99 48-47.99h384c26.47 0 48 21.53 48 47.99V351.1zM320 175.1c8.822 0 15.98-7.185 15.98-16s-7.178-15.1-16-15.1s-16 7.179-16 15.1S311.2 175.1 320 175.1zM345.1 252c-18.34 32.04-52.47 51.96-89.06 51.96S185.3 284.1 166.9 252c-2.203-3.859-7.109-5.155-10.91-2.968C152.2 251.2 150.9 256.1 153.1 259.9c21.17 37.03 60.64 60.05 102.1 60.05s81.75-23.02 102.9-60.05c2.203-3.828 .875-8.717-2.969-10.9S347.2 248.2 345.1 252zM192 175.1c8.822 0 15.97-7.185 15.97-16S200.8 143.1 191.1 143.1c-8.822 0-16 7.179-16 15.1S183.2 175.1 192 175.1z"/>
</>],

]);

const MessageSmile: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MessageSmile.displayName = "MessageSmile";

export default MessageSmile;