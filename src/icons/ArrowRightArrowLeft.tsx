
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32 176h370.8l-57.38 57.38c-12.5 12.5-12.5 32.75 0 45.25C351.6 284.9 359.8 288 368 288s16.38-3.125 22.62-9.375l112-112c12.5-12.5 12.5-32.75 0-45.25l-112-112c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L402.8 112H32c-17.69 0-32 14.31-32 32S14.31 176 32 176z"/><path className="fa-secondary" d="M480 336H109.3l57.38-57.38c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-112 112c-12.5 12.5-12.5 32.75 0 45.25l112 112C127.6 508.9 135.8 512 144 512s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L109.3 400H480c17.69 0 32-14.31 32-32S497.7 336 480 336z"/>
</>],
['light',<>
	<path d="M16 160h441.4l-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l128-128C510.4 152.2 512 148.1 512 144s-1.562-8.188-4.688-11.31l-128-128c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L457.4 128H16C7.156 128 0 135.2 0 144S7.156 160 16 160zM496 352H54.63l100.7-100.7c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-128 128C1.563 359.8 0 363.9 0 368s1.562 8.188 4.688 11.31l128 128c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L54.63 384H496c8.844 0 16-7.156 16-16S504.8 352 496 352z"/>
</>],
['regular',<>
	<path d="M488 344H79.24l74.29-79.63C162.6 254.7 162.1 239.5 152.4 230.5C142.7 221.4 127.5 221.9 118.5 231.6l-112 120c-8.625 9.219-8.625 23.53 0 32.75l112 120C123.2 509.4 129.6 512 136 512c5.875 0 11.75-2.125 16.38-6.469c9.688-9.031 10.22-24.22 1.156-33.91L79.24 392H488c13.25 0 24-10.75 24-24S501.3 344 488 344zM24 168h408.8l-74.29 79.63c-9.062 9.688-8.531 24.88 1.156 33.91c9.656 9.094 24.88 8.562 33.91-1.156l112-120c8.625-9.219 8.625-23.53 0-32.75l-112-120C388.8 2.562 382.4 0 376 0c-5.875 0-11.75 2.125-16.38 6.469c-9.688 9.031-10.22 24.22-1.156 33.91L432.8 120H24C10.75 120 0 130.8 0 144S10.75 168 24 168z"/>
</>],
['solid',<>
	<path d="M32 176h370.8l-57.38 57.38c-12.5 12.5-12.5 32.75 0 45.25C351.6 284.9 359.8 288 368 288s16.38-3.125 22.62-9.375l112-112c12.5-12.5 12.5-32.75 0-45.25l-112-112c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L402.8 112H32c-17.69 0-32 14.31-32 32S14.31 176 32 176zM480 336H109.3l57.38-57.38c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-112 112c-12.5 12.5-12.5 32.75 0 45.25l112 112C127.6 508.9 135.8 512 144 512s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L109.3 400H480c17.69 0 32-14.31 32-32S497.7 336 480 336z"/>
</>],
['thin',<>
	<path d="M504 376H30.1l127-105.8c3.391-2.844 3.844-7.875 1.016-11.28C155.3 255.4 150.2 255 146.9 257.8l-144 119.1C1.063 379.4 0 381.6 0 384s1.062 4.625 2.875 6.156l144 119.1C148.4 511.4 150.2 512 152 512c2.281 0 4.562-.9687 6.141-2.875c2.828-3.406 2.375-8.437-1.016-11.28l-127-105.8H504c4.422 0 8-3.594 8-7.1C512 379.6 508.4 376 504 376zM8 136h473.9l-127 105.8c-3.391 2.844-3.844 7.875-1.016 11.28C355.4 255 357.7 256 360 256c1.812 0 3.625-.5938 5.125-1.844l144-119.1C510.9 132.6 512 130.4 512 128c0-2.375-1.062-4.625-2.875-6.156l-144-119.1c-3.359-2.812-8.422-2.375-11.27 1.031c-2.828 3.406-2.375 8.437 1.016 11.28l127 105.8H8c-4.422 0-8 3.594-8 7.1C0 132.4 3.578 136 8 136z"/>
</>],

]);

const ArrowRightArrowLeft: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowRightArrowLeft.displayName = "ArrowRightArrowLeft";

export default ArrowRightArrowLeft;