
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M400.9 438.6l-49.12-30.75C409.9 367.4 448 300.3 448 224c0-123.8-100.4-224-224-224c-123.8 0-224 100.3-224 224c0 76.25 38.13 143.4 96.13 183.9L47 438.6C37.63 444.5 32 454.8 32 465.8v14.25c0 17.62 14.48 31.1 32.11 31.1L384 512c17.62 0 32-14.38 32-32V465.8C416 454.8 410.3 444.5 400.9 438.6zM224 384c-88.37 0-160.1-71.62-160.1-159.1s71.63-160 159.1-160s160 71.62 160 160S312.3 384 224 384z"/><path className="fa-secondary" d="M224 96C153.4 96 95.92 153.3 95.92 224s57.38 128 128 128c70.75 0 128-57.25 128-128C351.9 153.4 294.6 96 224 96zM223.9 176c-26.5 0-47.88 21.5-48 48c0 8.875-7.125 16-16 16c-8.75 0-16-7.125-16-16c.125-44.13 35.92-80 80.04-80c8.875 0 15.96 7.125 15.96 16S232.8 176 223.9 176z"/>
</>],
['light',<>
	<path d="M390.7 437.8C387.6 434.1 383.1 432 378.4 432c-13.57 0-20.99 15.83-12.3 26.26L384.2 480h-319.9l18.12-21.74C91.13 447.8 83.72 432 70.14 432c-4.75 0-9.256 2.109-12.3 5.758l-17.14 20.56c-7.895 9.471-10.71 22.65-5.932 34.02c5.082 12.07 16.33 19.66 29.33 19.66L382.7 512c12.34 0 24.27-6.303 29.92-17.27c5.992-11.63 4.469-25.25-3.832-35.23L390.7 437.8zM224 448c123.7 0 224-100.3 224-223.1c0-123.7-100.3-224-224-224c-123.7 0-224 100.3-224 224C0 347.7 100.3 448 224 448zM224 32c105.9 0 192 86.13 192 192s-86.13 192-192 192s-192-86.13-192-192S118.1 32 224 32zM224 368c79.41 0 144-64.59 144-144S303.4 80 224 80S80 144.6 80 224S144.6 368 224 368zM224 112c61.75 0 112 50.25 112 112s-50.25 112-112 112S112 285.8 112 224S162.3 112 224 112z"/>
</>],
['regular',<>
	<path d="M224 96C157.7 96 104 149.7 104 216c0 66.27 53.73 120 120 120c66.28 0 120-53.73 120-120C344 149.7 290.3 96 224 96zM224 288C184.3 288 152 255.7 152 216S184.2 144 223.9 144S296 176.3 296 216S263.7 288 224 288zM347.8 392.9C403.5 353.8 440 289.2 440 216c0-119.3-96.71-215.1-216-215.1c-119.3 0-216 96.71-216 215.1c0 73.22 36.52 137.8 92.25 176.9l-63.13 80.29c-5.656 7.219-6.719 17.05-2.719 25.31C38.44 506.8 46.81 512 56 512h336c9.188 0 17.56-5.25 21.59-13.52c4-8.266 2.938-18.09-2.719-25.31L347.8 392.9zM105.4 464l37.61-47.84C168 426.3 195.3 432 224 432s55.96-5.705 80.98-15.84L342.6 464H105.4zM224 384c-92.63 0-168-75.37-168-168C56 123.4 131.4 48 224 48c92.64 0 168 75.36 168 168C392 308.6 316.6 384 224 384z"/>
</>],
['solid',<>
	<path d="M400.9 438.6l-49.12-30.75C409.9 367.4 448 300.3 448 224c0-123.8-100.4-224-224-224c-123.8 0-224 100.3-224 224c0 76.25 38.13 143.4 96.13 183.9L47 438.6C37.63 444.5 32 454.8 32 465.8v14.25c0 17.62 14.48 31.1 32.11 31.1L384 512c17.62 0 32-14.38 32-32V465.8C416 454.8 410.3 444.5 400.9 438.6zM224 384c-88.37 0-160.1-71.62-160.1-159.1s71.63-160 159.1-160s160 71.62 160 160S312.3 384 224 384zM224 96C153.4 96 95.92 153.2 95.92 224s57.38 128 128 128c70.75 0 128-57.25 128-128C351.9 153.4 294.6 96 224 96zM223.9 176c-26.5 0-47.87 21.5-48 48c0 8.875-7.125 16-16 16c-8.75 0-16-7.125-16-16c.125-44.12 35.92-80 80.04-80c8.875 0 15.96 7.125 15.96 16S232.8 176 223.9 176z"/>
</>],
['thin',<>
	<path d="M160 232c4.406 0 8-3.594 8-8c0-30.88 25.12-56 56-56c4.406 0 8-3.594 8-8S228.4 152 224 152C184.3 152 152 184.3 152 224C152 228.4 155.6 232 160 232zM366.1 442.8c-2.812-3.312-7.875-3.75-11.28-.8438c-3.344 2.875-3.719 7.906-.8438 11.28L390.6 496H57.41l36.66-42.78c2.875-3.375 2.5-8.406-.8438-11.28c-3.375-2.906-8.406-2.469-11.28 .8438l-48 56c-2.031 2.375-2.5 5.719-1.219 8.562C34.03 510.2 36.88 512 40 512h368c3.125 0 5.969-1.812 7.281-4.656c1.281-2.844 .8125-6.188-1.219-8.562L366.1 442.8zM224 368c79.4 0 144-64.6 144-144S303.4 80 224 80S80 144.6 80 224S144.6 368 224 368zM224 96c70.69 0 127.9 57.31 127.9 128s-57.31 128-128 128s-128-57.31-128-128S153.3 96 224 96zM224 448c123.5 0 224-100.5 224-223.1s-100.5-224-224-224s-224 100.5-224 224S100.5 448 224 448zM224 16c114.7 0 208 93.31 208 208s-93.31 208-208 208S16 338.7 16 224S109.3 16 224 16z"/>
</>],

]);

const CameraWeb: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CameraWeb.displayName = "CameraWeb";

export default CameraWeb;