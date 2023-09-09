
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M96 384h304c26.51 0 48-21.49 48-48v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1C448 462.3 433.7 448 416 448l-318.6 0c-16.71 0-31.64-12.22-33.22-28.86C62.33 400.1 77.29 384 96 384zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192z"/><path className="fa-secondary" d="M400 384H96c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32h320v-66.94C410.1 382.8 405.6 384 400 384z"/>
</>],
['light',<>
	<path d="M448 368v-320C448 21.49 426.5 0 400 0h-320C35.82 0 0 35.82 0 80V448c0 35.35 28.65 64 64 64h368c8.844 0 16-7.156 16-16S440.8 480 432 480H416v-66.95C434.6 406.4 448 388.8 448 368zM32 80C32 53.49 53.49 32 80 32H96v352H64c-11.71 0-22.55 3.389-32 8.9V80zM384 480H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320V480zM400 384H128V32h272C408.8 32 416 39.17 416 48v320C416 376.8 408.8 384 400 384zM352 128H192C183.2 128 176 135.2 176 144S183.2 160 192 160h160c8.844 0 16-7.156 16-16S360.8 128 352 128zM352 224H192C183.2 224 176 231.2 176 240S183.2 256 192 256h160c8.844 0 16-7.156 16-16S360.8 224 352 224z"/>
</>],
['regular',<>
	<path d="M448 352V48C448 21.53 426.5 0 400 0h-320C35.89 0 0 35.88 0 80v352C0 476.1 35.89 512 80 512h344c13.25 0 24-10.75 24-24s-10.75-24-24-24H416v-66.95C434.6 390.4 448 372.8 448 352zM368 464h-288c-17.64 0-32-14.34-32-32s14.36-32 32-32h288V464zM400 352h-320c-11.38 0-22.2 2.375-32 6.688V80c0-17.66 14.36-32 32-32h320V352zM152 160h176C341.3 160 352 149.3 352 136S341.3 112 328 112h-176C138.8 112 128 122.8 128 136S138.8 160 152 160zM152 240h176C341.3 240 352 229.3 352 216S341.3 192 328 192h-176C138.8 192 128 202.8 128 216S138.8 240 152 240z"/>
</>],
['solid',<>
	<path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"/>
</>],
['thin',<>
	<path d="M448 384V32c0-17.67-14.33-32-32-32H64C28.65 0 0 28.65 0 64v391.1c0 30.93 25.07 56 55.1 56l383.1 .0078C444.4 511.1 448 508.4 448 503.1c0-4.422-3.584-8.008-8.006-8.008H416V416C433.7 416 448 401.7 448 384zM16 64c0-26.47 21.53-48 48-48h48v383.1l-56 .0039c-15.68 0-29.82 6.516-40 16.93V64zM400 495.1H56c-23.38 0-42.12-20.14-39.81-43.98c2.02-20.78 20.7-36.02 41.58-36.02L400 416V495.1zM128 399.1V16h288c8.836 0 16 7.164 16 16v352c0 8.824-7.178 16-16 16L128 399.1zM376 127.1h-192c-4.406 0-8 3.578-8 8s3.594 8 8 8h192c4.406 0 8-3.578 8-8S380.4 127.1 376 127.1zM376 207.1h-192c-4.406 0-8 3.578-8 8s3.594 8 8 8h192c4.406 0 8-3.578 8-8S380.4 207.1 376 207.1z"/>
</>],

]);

const Book: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Book.displayName = "Book";

export default Book;
