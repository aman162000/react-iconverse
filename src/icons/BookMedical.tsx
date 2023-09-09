
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M96 384h304c26.51 0 48-21.49 48-48v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1C448 462.3 433.7 448 416 448l-318.6 0c-16.71 0-31.64-12.22-33.22-28.86C62.33 400.1 77.29 384 96 384zM128 166c0-8.838 7.164-16 16-16h53.1V96c0-8.838 7.164-16 16-16h52c8.836 0 16 7.162 16 16v54H336c8.836 0 16 7.162 16 16v52c0 8.836-7.164 16-16 16h-54V288c0 8.836-7.164 16-16 16h-52c-8.836 0-16-7.164-16-16V234H144c-8.836 0-16-7.164-16-16V166z"/><path className="fa-secondary" d="M400 384H96c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32h320v-66.94C410.1 382.8 405.6 384 400 384z"/>
</>],
['light',<>
	<path d="M448 368v-320C448 21.49 426.5 0 400 0h-320C35.82 0 0 35.82 0 80V448c0 35.34 28.65 64 64 64h368c8.844 0 16-7.156 16-16S440.8 480 432 480H416v-66.95C434.6 406.4 448 388.8 448 368zM384 480H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320V480zM400 384H64c-11.71 0-22.55 3.391-32 8.898V80C32 53.49 53.49 32 80 32h320C408.8 32 416 39.16 416 48v320C416 376.8 408.8 384 400 384zM320 159.1h-48V111.1c0-8.836-7.164-16-16-16L224 96C215.2 96 208 103.2 208 111.1V160H160C151.2 160 144 167.2 144 175.1V208c0 8.836 7.164 15.1 16 15.1l48-.002v48C208 280.8 215.2 288 224 288l32-.0031c8.836 0 16-7.163 16-15.1v-48l48-.002c8.836 0 16-7.16 16-15.1V175.1C336 167.2 328.8 159.1 320 159.1z"/>
</>],
['regular',<>
	<path d="M448 352V48C448 21.53 426.5 0 400 0h-320C35.89 0 0 35.88 0 80v352C0 476.1 35.89 512 80 512h344c13.25 0 24-10.75 24-24s-10.75-24-24-24H416v-66.95C434.6 390.4 448 372.8 448 352zM368 464h-288c-17.64 0-32-14.34-32-32s14.36-32 32-32h288V464zM400 352h-320c-11.38 0-22.2 2.375-32 6.688V80c0-17.66 14.36-32 32-32h320V352zM160 223.1l48-.002v48C208 280.8 215.2 288 224 288l32-.0031c8.801 0 16-7.198 16-15.1v-48l48-.002c8.801 0 16-7.199 16-15.1V175.1c0-8.801-7.199-15.1-16-15.1h-48V111.1c0-8.801-7.199-16-16-16L224 96C215.2 96 208 103.2 208 111.1V160H160C151.2 160 144 167.2 144 175.1V208C144 216.8 151.2 223.1 160 223.1z"/>
</>],
['solid',<>
	<path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM128 166c0-8.838 7.164-16 16-16h53.1V96c0-8.838 7.164-16 16-16h52c8.836 0 16 7.162 16 16v54H336c8.836 0 16 7.162 16 16v52c0 8.836-7.164 16-16 16h-54V288c0 8.836-7.164 16-16 16h-52c-8.836 0-16-7.164-16-16V234H144c-8.836 0-16-7.164-16-16V166zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"/>
</>],
['thin',<>
	<path d="M320 159.1h-48V111.1c0-8.828-7.172-16-16-16L208 95.1c-8.828 0-16 7.172-16 16v47.1H144c-8.828 0-16 7.172-16 16v48c0 8.828 7.172 16 16 16H192v48c0 8.828 7.172 16 16 16H256c8.828 0 16-7.172 16-16v-48H320c8.828 0 16-7.172 16-16V175.1C336 167.2 328.8 159.1 320 159.1zM320 223.1l-64-.0039v64L208 287.1V223.1l-64-.0039V175.1l64-.0039V111.1L256 111.1v63.1h64V223.1zM448 384V32c0-17.67-14.33-32-32-32H64C28.65 0 0 28.65 0 64v391.1c0 30.93 25.07 56 55.1 56l383.1 .0078C444.4 511.1 448 508.4 448 503.1c0-4.422-3.584-8.008-8.006-8.008H416V416C433.7 416 448 401.7 448 384zM400 495.1H56c-23.38 0-42.12-20.14-39.81-43.98c2.02-20.78 20.7-36.02 41.58-36.02L400 416V495.1zM56 399.1c-15.68 0-29.82 6.516-40 16.93V64c0-26.47 21.53-48 48-48h352c8.836 0 16 7.164 16 16v352c0 8.824-7.178 16-16 16L56 399.1z"/>
</>],

]);

const BookMedical: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BookMedical.displayName = "BookMedical";

export default BookMedical;