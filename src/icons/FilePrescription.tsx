
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 0v128h128L256 0zM273.1 379.4l29.88-30c6.25-6.25 6.25-16.38 0-22.62L292.5 315.5c-6.25-6.25-16.38-6.25-22.62 0L240 345.4l-33.5-33.5C226.4 301 240 280.3 240 256c0-35.38-28.62-64-64-64H96C87.13 192 80 199.1 80 208v160C80 376.9 87.13 384 96 384l16.01 .0078c8.875 0 16-7.125 16-16L128 320h18.75l59.25 59.25L176 409.4C169.8 415.6 169.8 425.8 176 432l11.27 11.27c6.25 6.25 16.48 6.234 22.73-.0156L240 413.3l29.1 30.12c6.25 6.25 16.5 6.25 22.75 0L304 432c6.25-6.25 6.25-16.38 0-22.62L273.1 379.4zM176 272H128v-32h48C184.9 240 192 247.1 192 256S184.9 272 176 272z"/><path className="fa-secondary" d="M176 240H128v32h48C184.9 272 192 264.9 192 256S184.9 240 176 240zM256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM304 432l-11.25 11.38c-6.25 6.25-16.5 6.25-22.75 0L240 413.3l-30 30c-6.25 6.25-16.48 6.266-22.73 .0156L176 432c-6.25-6.25-6.25-16.38 0-22.62l29.1-30.12L146.8 320H128l.0078 48.01c0 8.875-7.125 16-16 16L96 384c-8.875 0-16-7.125-16-16v-160C80 199.1 87.13 192 96 192h80c35.38 0 64 28.62 64 64c0 24.25-13.62 45-33.5 55.88L240 345.4l29.88-29.88c6.25-6.25 16.38-6.25 22.62 0l11.38 11.25c6.25 6.25 6.25 16.38 0 22.62l-29.88 30L304 409.4C310.3 415.6 310.3 425.8 304 432z"/>
</>],
['light',<>
	<path d="M192.8 330c21.86-10.78 35.69-35.18 29.95-62.26c-5.539-26.12-30.34-43.74-57.04-43.74L112 224c-8.838 0-16 7.182-15.1 16.02l.0273 127.1c0 8.801 7.178 15.98 15.98 15.98c8.801 0 16-7.199 16-16l.0234-31.98h25.38L201.4 384l-36.69 36.69c-6.25 6.25-6.25 16.38 0 22.62C167.8 446.4 171.9 448 176 448s8.141-1.609 11.27-4.734L224 406.6l36.69 36.69c6.248 6.248 16.38 6.248 22.62 0s6.248-16.38 0-22.62L246.6 384l36.69-36.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L224 361.4L192.8 330zM168 304L128 304v-48h40c13.25 0 24 10.75 24 24S181.3 304 168 304zM365.3 125.3l-106.5-106.5C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5C384 153.5 377.3 137.3 365.3 125.3zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5C346.1 151.3 348.4 155.5 349.9 160H240C231.2 160 224 152.8 224 144V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112C192 170.5 213.5 192 240 192H352V448z"/>
</>],
['regular',<>
	<path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM206.5 311.9c22.46-12.29 36.94-37.2 32.79-65.51C234.6 214.6 205.6 192 173.5 192H96C87.16 192 80 199.2 80 208v152.1C80 373.3 90.75 384 103.1 384S128 373.3 128 360.1V320h18.75l59.25 59.25l-24.43 24.53c-9.318 9.352-9.303 24.49 .0352 33.82c9.348 9.348 24.66 9.371 34.01 .0273L240 413.3l24.35 24.45c9.385 9.426 24.72 9.398 34.07-.0586c9.297-9.398 9.279-24.57-.0703-33.92l-24.35-24.35l24.25-24.35c9.367-9.406 9.311-24.63-.1289-33.97c-9.4-9.297-24.54-9.254-33.89 .0938L240 345.4L206.5 311.9zM176 272H128v-32h48C184.9 240 192 247.1 192 256S184.9 272 176 272z"/>
</>],
['solid',<>
	<path d="M176 240H128v32h48C184.9 272 192 264.9 192 256S184.9 240 176 240zM256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM292.5 315.5l11.38 11.25c6.25 6.25 6.25 16.38 0 22.62l-29.88 30L304 409.4c6.25 6.25 6.25 16.38 0 22.62l-11.25 11.38c-6.25 6.25-16.5 6.25-22.75 0L240 413.3l-30 30c-6.249 6.25-16.48 6.266-22.73 .0156L176 432c-6.25-6.25-6.25-16.38 0-22.62l29.1-30.12L146.8 320H128l.0078 48.01c0 8.875-7.125 16-16 16L96 384c-8.875 0-16-7.125-16-16v-160C80 199.1 87.13 192 96 192h80c35.38 0 64 28.62 64 64c0 24.25-13.62 45-33.5 55.88L240 345.4l29.88-29.88C276.1 309.3 286.3 309.3 292.5 315.5z"/>
</>],
['thin',<>
	<path d="M374.6 150.6l-141.3-141.3C227.4 3.371 219.2 0 210.7 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V173.3C384 164.8 380.6 156.6 374.6 150.6zM224 22.63L361.4 160H248C234.8 160 224 149.2 224 136V22.63zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h144v120c0 22.06 17.94 40 40 40h120V448zM190.5 315.2C210.2 306.5 224 286.9 224 264c0-30.88-25.12-56-56-56h-64C99.58 208 96 211.6 96 216v160C96 380.4 99.55 384 103.1 384S112 380.4 112 376V320h56c1.457 0 2.826-.3203 4.256-.4297L228.7 376l-50.34 50.34c-3.125 3.125-3.125 8.188 0 11.31c3.127 3.127 8.186 3.127 11.31 0L240 387.3l50.34 50.34c3.127 3.127 8.186 3.127 11.31 0c3.125-3.125 3.125-8.188 0-11.31L251.3 376l34.34-34.34c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L240 364.7L190.5 315.2zM168 304L112 304l.002-79.98L168 224c22.06 0 40 17.94 40 40S190.1 304 168 304z"/>
</>],

]);

const FilePrescription: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FilePrescription.displayName = "FilePrescription";

export default FilePrescription;