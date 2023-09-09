
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M128 82.56L64 69.76V0H0v96c0 15.26 10.75 28.38 25.73 31.39L128 147.8V82.56zM320 0v69.76l-64 12.8v65.28l102.3-20.45C373.2 124.4 384 111.3 384 96V0H320zM288 192h-64V64c0-17.66-14.34-32-32-32S160 46.34 160 64v128H96C78.34 192 64 206.3 64 224s14.34 32 32 32h192c17.66 0 32-14.34 32-32S305.7 192 288 192z"/><path className="fa-secondary" d="M24 448C10.75 448 0 458.8 0 472s10.82 24 24 24s24-10.79 24-24C48 458.8 37.25 448 24 448zM88 384C74.75 384 64 394.8 64 408c0 13.21 10.82 24 24 24s24-10.69 24-24C112 394.8 101.2 384 88 384zM136 448c-13.25 0-24 10.75-24 24s10.82 24 24 24S160 485.2 160 472C160 458.8 149.2 448 136 448zM248 368c13.25 0 24-10.79 24-24c0-13.25-10.75-24-24-24S224 330.8 224 344C224 357.2 234.8 368 248 368zM296 384c-13.25 0-24 10.78-24 24c0 13.31 10.75 24 24 24S320 421.3 320 408S309.2 384 296 384zM248 448C234.8 448 224 458.8 224 472c0 13.21 10.75 24 24 24s24-10.79 24-24C272 458.8 261.2 448 248 448zM136 320c-13.25 0-24 10.75-24 24s10.82 24 24 24S160 357.2 160 344C160 330.8 149.2 320 136 320zM360 448c-13.25 0-24 10.78-24 24c0 13.21 10.75 24 24 24S384 485.2 384 472C384 458.8 373.2 448 360 448zM192 384c-13.25 0-24 10.75-24 24S178.8 432 192 432s24-10.69 24-24C216 394.8 205.2 384 192 384z"/>
</>],
['light',<>
	<path d="M192 384c-8.832 0-16 7.168-16 16S183.2 416 192 416s16-7.168 16-16S200.8 384 192 384zM144 320C135.2 320 128 327.2 128 336S135.2 352 144 352S160 344.8 160 336S152.8 320 144 320zM144 448C135.2 448 128 455.2 128 464S135.2 480 144 480S160 472.8 160 464S152.8 448 144 448zM11.62 111.4l112 32c8.479 2.432 17.34-2.496 19.78-11.01c2.432-8.479-2.496-17.34-11.01-19.78L32 83.94V16C32 7.168 24.83 0 16 0S0 7.168 0 16V96C0 103.1 4.736 109.4 11.62 111.4zM80 384C71.17 384 64 391.2 64 400S71.17 416 80 416S96 408.8 96 400S88.83 384 80 384zM16 448C7.168 448 0 455.2 0 464S7.168 480 16 480S32 472.8 32 464S24.83 448 16 448zM304 224h-96V48C208 39.17 200.8 32 192 32S176 39.17 176 48V224h-96C71.17 224 64 231.2 64 240S71.17 256 80 256h224C312.8 256 320 248.8 320 240S312.8 224 304 224zM240 448c-8.832 0-16 7.168-16 16s7.168 16 16 16s16-7.168 16-16S248.8 448 240 448zM368 0C359.2 0 352 7.168 352 16v67.94l-100.4 28.67c-8.514 2.432-13.44 11.3-11.01 19.78c2.432 8.514 11.29 13.44 19.78 11.01l112-32C379.3 109.4 384 103.1 384 96V16C384 7.168 376.8 0 368 0zM368 448c-8.832 0-16 7.168-16 16s7.168 16 16 16s16-7.168 16-16S376.8 448 368 448zM240 320c-8.832 0-16 7.168-16 16s7.168 16 16 16s16-7.168 16-16S248.8 320 240 320zM304 384c-8.832 0-16 7.168-16 16s7.168 16 16 16s16-7.168 16-16S312.8 384 304 384z"/>
</>],
['regular',<>
	<path d="M88 384C74.75 384 64 394.8 64 408c0 13.21 10.82 24 24 24s24-10.69 24-24C112 394.8 101.2 384 88 384zM24 448C10.75 448 0 458.8 0 472s10.82 24 24 24s24-10.79 24-24C48 458.8 37.25 448 24 448zM136 448c-13.25 0-24 10.75-24 24s10.82 24 24 24S160 485.2 160 472C160 458.8 149.2 448 136 448zM72 232C72 245.2 82.75 256 96 256h192c13.25 0 24-10.75 24-24S301.2 208 288 208h-72V56C216 42.75 205.2 32 192 32S168 42.75 168 56V208H96C82.75 208 72 218.8 72 232zM19.52 119.6L128 140.3V91.39L48 76.13V0H0v96C0 107.5 8.193 117.4 19.52 119.6zM224 344c0 13.21 10.75 24 24 24s24-10.79 24-24c0-13.25-10.75-24-24-24S224 330.8 224 344zM360 448c-13.25 0-24 10.78-24 24c0 13.21 10.75 24 24 24S384 485.2 384 472C384 458.8 373.2 448 360 448zM336 0v76.13L256 91.39v48.86l108.5-20.67C375.8 117.4 384 107.5 384 96V0H336zM296 384c-13.25 0-24 10.78-24 24c0 13.31 10.75 24 24 24S320 421.3 320 408S309.2 384 296 384zM136 320c-13.25 0-24 10.75-24 24s10.82 24 24 24S160 357.2 160 344C160 330.8 149.2 320 136 320zM248 448C234.8 448 224 458.8 224 472c0 13.21 10.75 24 24 24s24-10.79 24-24C272 458.8 261.2 448 248 448zM192 384c-13.25 0-24 10.75-24 24S178.8 432 192 432s24-10.69 24-24C216 394.8 205.2 384 192 384z"/>
</>],
['solid',<>
	<path d="M88 384C74.75 384 64 394.8 64 408c0 13.21 10.82 24 24 24s24-10.69 24-24C112 394.8 101.2 384 88 384zM136 448c-13.25 0-24 10.75-24 24s10.82 24 24 24S160 485.2 160 472C160 458.8 149.2 448 136 448zM192 384c-13.25 0-24 10.75-24 24S178.8 432 192 432s24-10.69 24-24C216 394.8 205.2 384 192 384zM136 320c-13.25 0-24 10.75-24 24s10.82 24 24 24S160 357.2 160 344C160 330.8 149.2 320 136 320zM25.73 127.4L128 147.8v-65.28L64 69.76V0H0v96C0 111.3 10.75 124.4 25.73 127.4zM24 448C10.75 448 0 458.8 0 472s10.82 24 24 24s24-10.79 24-24C48 458.8 37.25 448 24 448zM320 0v69.76l-64 12.8v65.28l102.3-20.45C373.2 124.4 384 111.3 384 96V0H320zM360 448c-13.25 0-24 10.78-24 24c0 13.21 10.75 24 24 24S384 485.2 384 472C384 458.8 373.2 448 360 448zM288 192h-64V64c0-17.66-14.34-32-32-32S160 46.34 160 64v128H96C78.34 192 64 206.3 64 224s14.34 32 32 32h192c17.66 0 32-14.34 32-32S305.7 192 288 192zM296 384c-13.25 0-24 10.78-24 24c0 13.31 10.75 24 24 24S320 421.3 320 408S309.2 384 296 384zM248 368c13.25 0 24-10.79 24-24c0-13.25-10.75-24-24-24S224 330.8 224 344C224 357.2 234.8 368 248 368zM248 448C234.8 448 224 458.8 224 472c0 13.21 10.75 24 24 24s24-10.79 24-24C272 458.8 261.2 448 248 448z"/>
</>],
['thin',<>
	<path d="M144 448C135.2 448 128 455.2 128 464S135.2 480 144 480S160 472.8 160 464S152.8 448 144 448zM144 320C135.2 320 128 327.2 128 336S135.2 352 144 352S160 344.8 160 336S152.8 320 144 320zM80 384C71.17 384 64 391.2 64 400S71.17 416 80 416S96 408.8 96 400S88.83 384 80 384zM5.953 103.7l120 32C130.2 136.9 134.6 134.3 135.7 130C136.9 125.8 134.3 121.4 130 120.3L16 89.86V8C16 3.584 12.42 0 8 0S0 3.584 0 8V96C0 99.62 2.432 102.8 5.953 103.7zM368 448c-8.832 0-16 7.168-16 16s7.168 16 16 16s16-7.168 16-16S376.8 448 368 448zM16 448C7.168 448 0 455.2 0 464S7.168 480 16 480S32 472.8 32 464S24.83 448 16 448zM192 384c-8.832 0-16 7.168-16 16S183.2 416 192 416s16-7.168 16-16S200.8 384 192 384zM376 0c-4.416 0-8 3.584-8 8v81.86l-114 30.4c-4.289 1.152-6.816 5.535-5.664 9.791c1.119 4.289 5.504 6.816 9.76 5.697l120-32C381.6 102.8 384 99.62 384 96V8C384 3.584 380.4 0 376 0zM240 448c-8.832 0-16 7.168-16 16s7.168 16 16 16s16-7.168 16-16S248.8 448 240 448zM312 240H224V64c0-17.66-14.34-32-32-32S160 46.34 160 64v176H72C67.58 240 64 243.6 64 248S67.58 256 72 256h240C316.4 256 320 252.4 320 248S316.4 240 312 240zM208 240h-32V64c0-8.832 7.168-16 16-16s16 7.168 16 16V240zM304 384c-8.832 0-16 7.168-16 16s7.168 16 16 16s16-7.168 16-16S312.8 384 304 384zM240 320c-8.832 0-16 7.168-16 16s7.168 16 16 16s16-7.168 16-16S248.8 320 240 320z"/>
</>],

]);

const SprinklerCeiling: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SprinklerCeiling.displayName = "SprinklerCeiling";

export default SprinklerCeiling;
