
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M440.1 448.4l-96.28-96.21l-56.56 56.61l96.28 96.21c9.373 9.381 24.57 9.381 33.94 0l22.62-22.64C450.3 472.9 450.3 457.7 440.1 448.4zM285.4 94.89C273.9 38.74 221.8 0 164.6 0H31.1C14.33 0 0 14.34 0 32.03v264.1c0 13.26 10.75 24.01 23.1 24.01l31.1 .085c13.25 0 23.1-10.75 23.1-24.02V240.2H119.4l112.1 112l56.56-56.61L220.5 228C267.3 205.1 297.2 152.6 285.4 94.89zM167.1 160.1H79.1V80.06h87.1c22.06 0 39.1 17.95 39.1 40.03S190.1 160.1 167.1 160.1z"/><path className="fa-secondary" d="M440.6 256.2c9.373-9.381 9.373-24.59 0-33.97l-22.62-22.64c-9.373-9.381-24.57-9.381-33.94 0L135.4 448.4c-9.373 9.381-9.373 24.59 0 33.97l22.62 22.64c9.373 9.38 24.57 9.38 33.94 0L440.6 256.2z"/>
</>],
['light',<>
	<path d="M310.6 352l100.7-100.7c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L288 329.4L182.6 224H192c52.94 0 96-43.06 96-96s-43.06-96-96-96H80C53.53 32 32 53.53 32 80v224C32 312.8 39.16 320 48 320S64 312.8 64 304V224h73.38l128 128l-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62C167.8 478.4 171.9 480 176 480s8.188-1.562 11.31-4.688L288 374.6l100.7 100.7C391.8 478.4 395.9 480 400 480s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L310.6 352zM64 80C64 71.19 71.17 64 80 64H192c35.3 0 64 28.72 64 64s-28.7 64-64 64H64V80z"/>
</>],
['regular',<>
	<path d="M321.9 352l119-119c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L288 318.1L192.3 222.4C246.3 214.4 288 168.2 288 112C288 50.25 237.8 0 176 0H24C10.75 0 0 10.75 0 24v272.2c0 13.25 10.75 24.01 23.1 24.01S48 309.3 48 296V224h78.06l128 128l-119 119c-9.375 9.375-9.375 24.56 0 33.94C139.7 509.7 145.9 512 152 512s12.28-2.344 16.97-7.031L288 385.9l119 119C411.7 509.7 417.9 512 424 512s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L321.9 352zM48 48h128c35.3 0 64 28.72 64 64s-28.7 64-64 64h-128V48z"/>
</>],
['solid',<>
	<path d="M440.1 448.4l-96.28-96.21l95.87-95.95c9.373-9.381 9.373-24.59 0-33.97l-22.62-22.64c-9.373-9.381-24.57-9.381-33.94 0L288.1 295.6L220.5 228c46.86-22.92 76.74-75.46 64.95-133.1C273.9 38.74 221.8 0 164.6 0H31.1C14.33 0 0 14.34 0 32.03v264.1c0 13.26 10.75 24.01 23.1 24.01l31.1 .085c13.25 0 23.1-10.75 23.1-24.02V240.2H119.4l112.1 112L135.4 448.4c-9.373 9.381-9.373 24.59 0 33.97l22.62 22.64c9.373 9.38 24.57 9.38 33.94 0l96.13-96.21l96.28 96.21c9.373 9.381 24.57 9.381 33.94 0l22.62-22.64C450.3 472.9 450.3 457.7 440.1 448.4zM79.1 80.06h87.1c22.06 0 39.1 17.95 39.1 40.03s-17.94 40.03-39.1 40.03H79.1V80.06z"/>
</>],
['thin',<>
	<path d="M299.3 352l146.3-146.3c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L288 340.7L171.3 224H176C237.8 224 288 173.8 288 112S237.8 0 176 0H8C3.594 0 0 3.578 0 8v304C0 316.4 3.594 320 8 320S16 316.4 16 312V224h132.7l128 128l-146.3 146.3c-3.125 3.125-3.125 8.188 0 11.31C131.9 511.2 133.9 512 136 512s4.094-.7813 5.656-2.344L288 363.3l146.3 146.3C435.9 511.2 437.9 512 440 512s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L299.3 352zM16 16h160c52.94 0 96 43.06 96 96s-43.06 96-96 96h-160V16z"/>
</>],

]);

const Prescription: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Prescription.displayName = "Prescription";

export default Prescription;