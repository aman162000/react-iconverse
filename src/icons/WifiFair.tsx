
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M319.1 352c-35.35 0-64 28.66-64 63.1s28.66 64 64 64c35.34 0 64-28.66 64-64S355.3 352 319.1 352zM320 192C249.8 192 182.1 217.6 129.5 264C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 192 320 192z"/><path className="fa-secondary" d="M630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z"/>
</>],
['light',<>
	<path d="M320 192C242.2 192 169.1 222.1 116.6 276.8C110.4 283.1 110.5 293.3 116.8 299.4c6.375 6.219 16.5 6.031 22.63-.25C186.8 250.7 250.9 224 320 224s133.2 26.69 180.6 75.19C503.7 302.4 507.8 304 512 304c4.031 0 8.063-1.5 11.19-4.562c6.313-6.156 6.438-16.31 .25-22.62C470 222.1 397.8 192 320 192zM319.1 352c-35.35 0-64 28.65-64 63.1s28.66 64 64 64s64-28.65 64-64S355.3 352 319.1 352zM320 448c-17.64 0-32-14.36-32-32S302.4 384 320 384s32 14.36 32 32S337.6 448 320 448z"/>
</>],
['regular',<>
	<path d="M319.1 368C289.1 368 264 393.1 264 424s25.07 56 55.1 56S376 454.9 376 424S350.9 368 319.1 368zM520.6 286.7C467.9 235.9 396.6 208 320 208s-147.9 27.94-200.6 78.69C109.8 295.9 109.5 311.1 118.7 320.6c9.219 9.625 24.41 9.844 33.94 .6875C196.4 279.2 255.8 256 320 256s123.6 23.19 167.4 65.31C492 325.8 497.1 328 503.1 328c6.281 0 12.59-2.469 17.31-7.375C530.5 311.1 530.2 295.9 520.6 286.7z"/>
</>],
['solid',<>
	<path d="M319.1 352c-35.35 0-64 28.66-64 63.1s28.66 64 64 64c35.34 0 64-28.66 64-64S355.3 352 319.1 352zM320 192C249.8 192 182.1 217.6 129.5 264C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 192 320 192z"/>
</>],
['thin',<>
	<path d="M319.1 352c-35.34 0-64 28.66-64 63.1c0 35.34 28.66 64 64 64s64-28.66 64-64C383.1 380.7 355.3 352 319.1 352zM319.1 463.1c-26.47 0-48-21.53-48-48c0-26.47 21.54-47.1 48.01-47.1s47.99 21.53 47.99 47.1C367.1 442.5 346.5 463.1 319.1 463.1zM320 192C244.9 192 174.3 221.2 121.2 274.3c-3.125 3.124-3.125 8.188 0 11.31c3.125 3.125 8.188 3.125 11.31 0C182.6 235.6 249.2 208 320 208s137.4 27.58 187.5 77.65C509 287.2 511.1 287.1 513.1 287.1s4.094-.7809 5.656-2.345c3.125-3.124 3.125-8.188 0-11.31C465.7 221.2 395.1 192 320 192z"/>
</>],

]);

const WifiFair: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WifiFair.displayName = "WifiFair";

export default WifiFair;
