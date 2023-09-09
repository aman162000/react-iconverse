
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M105.4 246.6c-12.49-12.5-12.49-32.75 0-45.25c12.5-12.5 32.76-12.5 45.25 0L224 274.8V32c0-17.67 14.33-32 32-32c17.67 0 32 14.33 32 32v242.8l73.38-73.38c12.49-12.5 32.75-12.5 45.25 0c12.49 12.5 12.49 32.75 0 45.25l-128 128C272.4 380.9 264.2 384 256 384s-16.38-3.125-22.62-9.375L105.4 246.6z"/><path className="fa-secondary" d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456z"/>
</>],
['light',<>
	<path d="M245.4 379.1C248.4 382.7 252.2 384 256 384s7.594-1.344 10.62-4.047l144-128c6.594-5.859 7.219-15.98 1.344-22.58c-5.875-6.625-16.06-7.234-22.59-1.328L272 332.4V16C272 7.156 264.8 0 256 0S240 7.156 240 16v316.4L122.6 228C116.1 222.1 105.9 222.8 100 229.4C94.16 235.1 94.78 246.1 101.4 251.1L245.4 379.1zM448 320h-48c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16H448c17.67 0 32 14.33 32 32v64c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32v-64c0-17.67 14.33-32 32-32h48C120.8 352 128 344.8 128 336C128 327.2 120.8 320 112 320H64c-35.35 0-64 28.65-64 64v64c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-64C512 348.7 483.3 320 448 320zM440 416c0-13.25-10.75-24-24-24s-24 10.75-24 24s10.75 24 24 24S440 429.3 440 416z"/>
</>],
['regular',<>
	<path d="M448 304h-53.5l-48 48H448c8.822 0 16 7.178 16 16V448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-80C48 359.2 55.18 352 64 352h101.5l-48-48H64c-35.35 0-64 28.65-64 64V448c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-80C512 332.7 483.3 304 448 304zM432 408c0-13.26-10.75-24-24-24S384 394.7 384 408c0 13.25 10.75 24 24 24S432 421.3 432 408zM239 368.1C243.7 373.7 249.8 376 256 376s12.28-2.344 16.97-7.031l136-136c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L280 294.1V24C280 10.75 269.3 0 256 0S232 10.75 232 24v270.1L136.1 199c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L239 368.1z"/>
</>],
['solid',<>
	<path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/>
</>],
['thin',<>
	<path d="M480 352h-88C387.6 352 384 355.6 384 360s3.582 8 8 8H480c8.822 0 16 7.178 16 16v96c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16v-96c0-8.822 7.178-16 16-16h88C124.4 368 128 364.4 128 360S124.4 352 120 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM464 432c0-17.6-14.4-32-32-32s-32 14.4-32 32c0 17.6 14.4 32 32 32S464 449.6 464 432zM416 432c0-8.822 7.178-16 16-16s16 7.178 16 16S440.8 448 432 448S416 440.8 416 432zM250.3 413.7c3.125 3.125 8.188 3.125 11.31 0l152-152C415.2 260.1 416 258.1 416 256s-.7813-4.094-2.344-5.656c-3.125-3.125-8.188-3.125-11.31 0L264 388.7V8C264 3.594 260.4 0 256 0S248 3.594 248 8v380.7L109.7 250.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L250.3 413.7z"/>
</>],

]);

const Download: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Download.displayName = "Download";

export default Download;