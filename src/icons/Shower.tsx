
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M347.3 91.31l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0l-6.631 6.631c-35.15-26.29-81.81-29.16-119.6-8.779L170.5 61.25C132.2 22.95 63.65 18.33 21.98 71.16C7.027 90.11 0 114.3 0 138.4V464C0 472.8 7.164 480 16 480h32C56.84 480 64 472.8 64 464V131.9c0-19.78 16.09-35.87 35.88-35.87c9.438 0 18.69 3.828 25.38 10.5l16.61 16.61C121.5 160.9 124.3 207.6 150.6 242.7L144 249.4c-6.248 6.248-6.248 16.38 0 22.63l11.31 11.31c6.248 6.25 16.38 6.25 22.63 0l169.4-169.4C353.6 107.7 353.6 97.56 347.3 91.31z"/><path className="fa-secondary" d="M288 320c0-17.67-14.33-32-32-32s-32 14.33-32 32c0 17.67 14.33 32 32 32S288 337.7 288 320zM320 288c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32s-32 14.33-32 32C288 273.7 302.3 288 320 288zM384 224c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32s-32 14.33-32 32C352 209.7 366.3 224 384 224zM288 384c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C320 398.3 305.7 384 288 384zM416 256c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C448 270.3 433.7 256 416 256zM352 320c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C384 334.3 369.7 320 352 320zM480 192c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C512 206.3 497.7 192 480 192z"/>
</>],
['light',<>
	<path d="M347.3 100.7c-6.25-6.25-16.38-6.25-22.62 0l-10.45 10.45l-18.33-18.33c-34.53-34.53-88.28-37.71-126.6-10.18L143.2 56.56C127.3 40.72 106.3 32 83.88 32C37.63 32 0 69.63 0 115.9V464C0 472.8 7.156 480 16 480S32 472.8 32 464V115.9C32 87.28 55.27 64 83.88 64c13.86 0 26.89 5.406 36.69 15.19l26.04 26.04C134.7 121.8 128 141.5 128 162.3c0 26.28 10.23 51 28.81 69.56l18.33 18.33L164.7 260.7c-6.25 6.25-6.25 16.38 0 22.62C167.8 286.4 171.9 288 176 288s8.188-1.562 11.31-4.688l160-160C353.6 117.1 353.6 106.9 347.3 100.7zM197.8 227.6L179.4 209.3C166.9 196.8 160 180.1 160 162.3c0-17.72 6.906-34.38 19.44-46.91c25.86-25.84 67.95-25.91 93.84 0l18.33 18.33L197.8 227.6zM296 400c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24S320 437.3 320 424C320 410.7 309.3 400 296 400zM352 264c0-13.26-10.75-24-24-24S304 250.7 304 264C304 277.3 314.7 288 328 288S352 277.3 352 264zM288 328c0-13.26-10.75-24-24-24S240 314.7 240 328c0 13.25 10.75 24 24 24S288 341.3 288 328zM424 272c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24S448 309.3 448 296C448 282.7 437.3 272 424 272zM488 208c-13.25 0-24 10.74-24 24C464 245.3 474.7 256 488 256S512 245.3 512 232C512 218.7 501.3 208 488 208zM416 200c0-13.26-10.75-24-24-24S368 186.7 368 200C368 213.3 378.7 224 392 224S416 213.3 416 200zM360 336c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24S384 373.3 384 360C384 346.7 373.3 336 360 336z"/>
</>],
['regular',<>
	<path d="M344.1 87.03c-9.375-9.375-24.56-9.375-33.94 0L310.2 87.84l-7.031-7.031C281.3 58.94 252.7 48 224 48c-21.57 0-43.13 6.211-61.8 18.6L145.3 52.53C129.4 39.28 109.3 32 88.61 32C39.75 32 0 71.75 0 120.6V456C0 469.3 10.75 480 24 480s24-10.75 24-24V120.6C48 98.22 66.22 80 88.61 80c9.469 0 18.7 3.344 26 9.406l14.29 11.91c-26.67 43.18-21.54 100.4 15.9 137.9L151.8 246.2L151 247c-9.375 9.375-9.375 24.56 0 33.94C155.7 285.7 161.9 288 168 288s12.28-2.344 16.97-7.031l160-160C354.3 111.6 354.3 96.41 344.1 87.03zM185.8 212.3L178.7 205.3c-24.95-24.95-24.95-65.55 .002-90.51C190.8 102.7 206.9 96 224 96c17.09 0 33.17 6.656 45.26 18.75l7.031 7.029L185.8 212.3zM480 192c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C512 206.3 497.7 192 480 192zM288 384c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C320 398.3 305.7 384 288 384zM352 320c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C384 334.3 369.7 320 352 320zM416 256c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C448 270.3 433.7 256 416 256zM288 320c0-17.67-14.33-32-32-32s-32 14.33-32 32c0 17.67 14.33 32 32 32S288 337.7 288 320zM320 224c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C352 238.3 337.7 224 320 224zM384 224c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32s-32 14.33-32 32C352 209.7 366.3 224 384 224z"/>
</>],
['solid',<>
	<path d="M288 384c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C320 398.3 305.7 384 288 384zM416 256c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C448 270.3 433.7 256 416 256zM480 192c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C512 206.3 497.7 192 480 192zM288 320c0-17.67-14.33-32-32-32s-32 14.33-32 32c0 17.67 14.33 32 32 32S288 337.7 288 320zM320 224c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C352 238.3 337.7 224 320 224zM384 224c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32s-32 14.33-32 32C352 209.7 366.3 224 384 224zM352 320c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C384 334.3 369.7 320 352 320zM347.3 91.31l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0l-6.631 6.631c-35.15-26.29-81.81-29.16-119.6-8.779L170.5 61.25C132.2 22.95 63.65 18.33 21.98 71.16C7.027 90.11 0 114.3 0 138.4V464C0 472.8 7.164 480 16 480h32C56.84 480 64 472.8 64 464V131.9c0-19.78 16.09-35.87 35.88-35.87c9.438 0 18.69 3.828 25.38 10.5l16.61 16.61C121.5 160.9 124.3 207.6 150.6 242.7L144 249.4c-6.248 6.248-6.248 16.38 0 22.63l11.31 11.31c6.248 6.25 16.38 6.25 22.63 0l169.4-169.4C353.6 107.7 353.6 97.56 347.3 91.31z"/>
</>],
['thin',<>
	<path d="M336 256C327.2 256 320 263.2 320 272S327.2 288 336 288C344.8 288 352 280.8 352 272S344.8 256 336 256zM272 320c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16S280.8 320 272 320zM400 192C391.2 192 384 199.2 384 208S391.2 224 400 224C408.8 224 416 216.8 416 208S408.8 192 400 192zM496 224C487.2 224 480 231.2 480 240S487.2 256 496 256C504.8 256 512 248.8 512 240S504.8 224 496 224zM432 288C423.2 288 416 295.2 416 304s7.164 16 16 16c8.838 0 16-7.164 16-16S440.8 288 432 288zM368 352c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16S376.8 352 368 352zM304 416c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16S312.8 416 304 416zM365.7 98.34c-3.125-3.125-8.188-3.125-11.31 0l-192 192c-3.125 3.125-3.125 8.188 0 11.31C163.9 303.2 165.1 304 168 304s4.094-.7813 5.656-2.344l192-192C368.8 106.5 368.8 101.5 365.7 98.34zM166.5 260.8c3.125-3.125 3.125-8.188 0-11.31C146.8 229.9 136 203.8 136 176s10.81-53.91 30.45-73.53c40.56-40.56 106.5-40.56 147.1 0c3.125 3.125 8.188 3.125 11.31 0s3.125-8.188 0-11.31C280 46.28 208.4 44.91 161.4 86.07l-31.84-31.85C115.2 39.88 96.16 32 75.88 32C34.03 32 0 66.03 0 107.9V472C0 476.4 3.578 480 8 480s8-3.594 8-8V107.9C16 74.88 42.86 48 75.88 48c16 0 31.03 6.219 42.34 17.53l31.82 31.83C130.9 119.2 120 146.7 120 176c0 32.06 12.48 62.19 35.14 84.84c1.562 1.562 3.609 2.344 5.656 2.344S164.9 262.4 166.5 260.8z"/>
</>],

]);

const Shower: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Shower.displayName = "Shower";

export default Shower;