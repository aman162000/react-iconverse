
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64.44 421.4C66.1 437.1 81.78 448 97.72 448h318.3C433.7 448 448 462.3 448 479.1C448 497.7 433.7 512 416 512H96c-53.02 0-96-42.98-96-96V96c0-53.02 42.98-96 96-96h304C426.5 0 448 21.49 448 48v136H280C266.8 184 256 194.8 256 208s10.75 24 24 24H448v104c0 26.51-21.49 48-48 48H96C76.57 384 61.18 401.3 64.44 421.4z"/><path className="fa-secondary" d="M64 416c0 17.67 14.33 32 32 32h320L416 384H96C78.33 384 64 398.3 64 416zM632.1 191l-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L558.1 184H280C266.8 184 256 194.8 256 208s10.75 24 24 24h278.1l-39.03 39.03C514.3 275.7 512 281.8 512 288s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80C642.3 215.6 642.3 200.4 632.1 191z"/>
</>],
['light',<>
	<path d="M432 272C423.2 272 416 279.2 416 288v80c0 8.836-7.164 16-16 16H64c-11.71 0-22.55 3.389-32 8.9V80C32 53.49 53.49 32 80 32h320C408.8 32 416 39.16 416 48V128c0 8.836 7.164 16 16 16S448 136.8 448 128V48C448 21.49 426.5 0 400 0h-320C35.82 0 0 35.82 0 80V448c0 35.35 28.66 64 64 64h367.2c7.969 0 15.35-5.455 16.62-13.32C449.4 488.6 441.7 480 432 480H416v-66.95c18.59-6.627 32-24.22 32-45.05V288C448 279.2 440.8 272 432 272zM384 480H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320V480zM635.3 196.7l-96-96c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L585.4 192H272C263.2 192 256 199.2 256 208S263.2 224 272 224h313.4l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.62C519.8 318.4 523.9 320 528 320s8.188-1.562 11.31-4.688l96-96C641.6 213.1 641.6 202.9 635.3 196.7z"/>
</>],
['regular',<>
	<path d="M424 288c-13.25 0-24 10.74-24 24V352h-320c-11.38 0-22.2 2.375-32 6.688V80c0-17.67 14.33-32 32-32h320v56C400 117.3 410.7 128 424 128S448 117.3 448 104V48C448 21.49 426.5 0 400 0h-320C35.82 0 0 35.82 0 80v352C0 476.2 35.82 512 80 512h344c13.25 0 24-10.75 24-24s-10.75-24-24-24H416v-66.95C434.6 390.4 448 372.8 448 352V312C448 298.7 437.3 288 424 288zM368 464h-288c-17.64 0-32-14.34-32-32s14.36-32 32-32h288V464zM632.1 191l-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L558.1 184H280C266.8 184 256 194.8 256 208s10.75 24 24 24h278.1l-39.03 39.03C514.3 275.7 512 281.8 512 288s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80C642.3 215.6 642.3 200.4 632.1 191z"/>
</>],
['solid',<>
	<path d="M224 208c0-13.26 10.75-24 24-24H448V48C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320C433.7 512 448 497.7 448 479.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336V232H248C234.7 232 224 221.3 224 208zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448zM632.1 191l-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L558.1 184H448v48h110.1l-39.03 39.03C514.3 275.7 512 281.8 512 288s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80C642.3 215.6 642.3 200.4 632.1 191z"/>
</>],
['thin',<>
	<path d="M440 272c-4.418 0-8 3.582-8 8v104c0 8.836-7.164 15.1-16 15.1L56 399.1c-15.68 0-29.82 6.516-40 16.93V64c0-26.51 21.49-48 48-48h352c8.836 0 16 7.162 16 16v104c0 4.418 3.582 8 8 8S448 140.4 448 136V32c0-17.67-14.33-32-32-32H64C28.66 0 0 28.65 0 64v391.1c0 30.93 25.07 56 56 56L439.1 512C444.4 512 448 508.4 448 504c0-4.422-3.586-8.008-8.008-8.008H416v-79.99c17.67 0 32-14.33 32-32V280C448 275.6 444.4 272 440 272zM400 495.1H56c-23.38 0-42.13-20.14-39.8-43.99c2.016-20.78 20.7-36.02 41.57-36.02L400 416V495.1zM637.7 202.9l-108-108C528.1 93.37 526.1 92.59 524 92.59s-4.094 .7813-5.656 2.344c-3.125 3.125-3.125 8.188 0 11.31l94.34 94.34H264c-4.406 0-8 3.578-8 8s3.594 8 8 8h348.7l-93.17 93.17c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0l106.8-106.8C640.8 211.1 640.8 206.1 637.7 202.9z"/>
</>],

]);

const BookArrowRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BookArrowRight.displayName = "BookArrowRight";

export default BookArrowRight;