
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M608 224h-256c-17.67 0-32 14.31-32 31.1v32c0 17.69 14.33 32 32 32s32-14.31 32-32h64v128h-16c-17.67 0-32 14.31-32 32s14.33 32 32 32h96c17.67 0 32-14.31 32-32s-14.33-32-32-32H512v-128h64c0 17.69 14.33 32 32 32s32-14.31 32-32v-32C640 238.3 625.7 224 608 224z"/><path className="fa-secondary" d="M256 416H224v-320h96v32c0 17.69 14.33 32 32 32s32-14.31 32-32v-64c0-17.69-14.33-32-32-32H32c-17.67 0-32 14.31-32 32v64c0 17.69 14.33 32 32 32s32-14.31 32-32v-32h96v320H128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S273.7 416 256 416z"/>
</>],
['light',<>
	<path d="M0 48l0 96C0 152.8 7.156 160 16 160S32 152.8 32 144V64h144v384h-64C103.2 448 96 455.2 96 464S103.2 480 112 480h160C280.8 480 288 472.8 288 464S280.8 448 272 448h-64V64H352v80C352 152.8 359.2 160 368 160S384 152.8 384 144v-96C384 39.16 376.8 32 368 32h-352C7.156 32 0 39.16 0 48zM320 240v64c0 8.844 7.156 16 16 16S352 312.8 352 304V256h112v192H416c-8.844 0-16 7.156-16 16S407.2 480 416 480h128c8.844 0 16-7.156 16-16S552.8 448 544 448h-48V256H608v48c0 8.844 7.156 16 16 16S640 312.8 640 304v-64C640 231.2 632.8 224 624 224h-288C327.2 224 320 231.2 320 240z"/>
</>],
['regular',<>
	<path d="M320 248v48C320 309.3 330.8 320 344 320s24-10.75 24-24V272h88v160h-32c-13.25 0-24 10.75-24 24S410.8 480 424 480h112c13.25 0 24-10.75 24-24s-10.75-24-24-24h-32v-160h88v24c0 13.25 10.75 24 24 24S640 309.3 640 296v-48C640 234.8 629.3 224 616 224h-272C330.8 224 320 234.8 320 248zM0 56l0 80C0 149.3 10.75 160 24 160S48 149.3 48 136V80h120v352h-48C106.8 432 96 442.8 96 456S106.8 480 120 480h144C277.3 480 288 469.3 288 456S277.3 432 264 432h-48v-352h120v56C336 149.3 346.8 160 360 160S384 149.3 384 136v-80C384 42.75 373.3 32 360 32H24C10.75 32 0 42.75 0 56z"/>
</>],
['solid',<>
	<path d="M256 416H224v-320h96v32c0 17.69 14.33 32 32 32s32-14.31 32-32v-64c0-17.69-14.33-32-32-32H32c-17.67 0-32 14.31-32 32v64c0 17.69 14.33 32 32 32s32-14.31 32-32v-32h96v320H128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S273.7 416 256 416zM608 224h-256c-17.67 0-32 14.31-32 31.1v32c0 17.69 14.33 32 32 32s32-14.31 32-32h64v128h-16c-17.67 0-32 14.31-32 32s14.33 32 32 32h96c17.67 0 32-14.31 32-32s-14.33-32-32-32H512v-128h64c0 17.69 14.33 32 32 32s32-14.31 32-32v-32C640 238.3 625.7 224 608 224z"/>
</>],
['thin',<>
	<path d="M0 40l0 80C0 124.4 3.578 128 8 128S16 124.4 16 120V48h168v416h-80C99.58 464 96 467.6 96 472S99.58 480 104 480h176C284.4 480 288 476.4 288 472S284.4 464 280 464h-80v-416h168v72C368 124.4 371.6 128 376 128S384 124.4 384 120v-80C384 35.58 380.4 32 376 32H8C3.578 32 0 35.58 0 40zM320 232v80C320 316.4 323.6 320 328 320s8-3.578 8-8V240h136v224h-64c-4.422 0-8 3.578-8 8S403.6 480 408 480h144c4.422 0 8-3.578 8-8s-3.578-8-8-8h-64v-224h136v72c0 4.422 3.578 8 8 8S640 316.4 640 312v-80C640 227.6 636.4 224 632 224h-304C323.6 224 320 227.6 320 232z"/>
</>],

]);

const TextSize: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TextSize.displayName = "TextSize";

export default TextSize;
