
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224z"/><path className="fa-secondary" d="M560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z"/>
</>],
['light',<>
	<path d="M528 32H128C110.3 32 96 46.33 96 64l.0086 224c0 53.02 42.98 96 96 96h192C437 384 480 341 480 288V256h48C589.8 256 640 205.8 640 144S589.8 32 528 32zM448 288c0 35.29-28.71 64-64 64H192c-35.29 0-64-28.71-64-64V64h320V288zM528 224H480V64h48C572.1 64 608 99.88 608 144S572.1 224 528 224zM560 416c-8.844 0-16 7.156-16 16c0 8.812-7.188 16-16 16h-480C39.19 448 32 440.8 32 432C32 423.2 24.84 416 16 416S0 423.2 0 432C0 458.5 21.53 480 48 480h480c26.47 0 48-21.53 48-48C576 423.2 568.8 416 560 416z"/>
</>],
['regular',<>
	<path d="M512 32H112C103.2 32 96 39.2 96 48L96.01 288c0 53.02 42.98 96 96 96h192C437 384 480 341 480 288h26.38c66.83 0 126.6-48.78 133-115.3C646.8 96.38 586.8 32 512 32zM432 288c0 26.4-21.6 48-48 48H192c-26.4 0-48-21.6-48-48V80h288V288zM512 240h-32v-160h32c44.13 0 80 35.88 80 80S556.1 240 512 240zM552 432H24C10.75 432 0 442.7 0 456C0 469.3 10.75 480 24 480h528c13.25 0 24-10.75 24-24C576 442.7 565.3 432 552 432z"/>
</>],
['solid',<>
	<path d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224zM560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z"/>
</>],
['thin',<>
	<path d="M544 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C436.9 384 479.8 341.2 480 288.4V224h64c53.02 0 96-42.98 96-96S597 32 544 32zM464 288.4C463.8 332.3 427.9 368 384 368h-192c-44.11 0-80-35.89-80-80V56c0-4.412 3.59-8 8-8H464V288.4zM544 208h-64v-160h64c44.11 0 80 35.89 80 80S588.1 208 544 208zM568 416c-4.406 0-8 3.578-8 8c0 22.06-17.94 40-40 40H56c-22.06 0-40-17.94-40-40C16 419.6 12.41 416 8 416S0 419.6 0 424C0 454.9 25.12 480 56 480h464c30.88 0 56-25.12 56-56C576 419.6 572.4 416 568 416z"/>
</>],

]);

const MugSaucer: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MugSaucer.displayName = "MugSaucer";

export default MugSaucer;
