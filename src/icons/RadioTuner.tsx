
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M511 17.25c-3.719-12.7-16.1-19.1-29.78-16.28L51.75 126.9C43.7 129.2 36.52 133.2 29.1 137.1c9.87-6.223 21.47-9.953 33.1-9.953L218.5 128l276.2-80.97C507.5 43.3 514.7 29.97 511 17.25zM415.1 192H96c-17.67 0-31.1 14.33-31.1 31.1S78.33 256 96 256h319.1c17.67 0 31.1-14.33 31.1-31.1S433.7 192 415.1 192zM383.1 319.1c-35.32 0-63.1 28.68-63.1 63.1s28.68 63.1 63.1 63.1c35.33 0 63.1-28.68 63.1-63.1S419.3 319.1 383.1 319.1z"/><path className="fa-secondary" d="M447.1 128H63.1c-35.35 0-63.1 28.65-63.1 63.1v255.1c0 35.35 28.65 63.1 63.1 63.1h383.1c35.35 0 63.1-28.65 63.1-63.1v-255.1C511.1 156.7 483.3 128 447.1 128zM208 423.1c0 4.406-3.594 7.1-7.1 7.1h-111.1c-4.406 0-7.1-3.594-7.1-7.1v-15.1c0-4.406 3.594-8 7.1-8h111.1c4.406 0 7.1 3.594 7.1 8V423.1zM224 359.1c0 4.406-3.594 7.1-7.1 7.1H72c-4.406 0-7.1-3.594-7.1-7.1v-15.1c0-4.406 3.594-7.1 7.1-7.1h143.1c4.406 0 7.1 3.594 7.1 7.1V359.1zM383.1 447.1c-35.32 0-63.1-28.68-63.1-63.1s28.68-63.1 63.1-63.1c35.33 0 63.1 28.68 63.1 63.1S419.3 447.1 383.1 447.1zM415.1 256H96C78.33 256 64 241.7 64 224s14.33-31.1 31.1-31.1h319.1c17.67 0 31.1 14.33 31.1 31.1S433.7 256 415.1 256z"/>
</>],
['light',<>
	<path d="M191.1 400l-95.1-.001c-8.844 0-15.1 7.156-15.1 15.1c0 8.844 7.156 16 15.1 16H191.1c8.844 0 16-7.157 16-16S200.8 400 191.1 400zM79.1 368h127.1c8.844 0 16-7.156 16-15.1c0-8.844-7.158-15.1-16-15.1L79.1 336c-8.844 0-15.1 7.159-15.1 16S71.16 368 79.1 368zM367.1 448c44.12 0 79.1-35.87 79.1-79.1s-35.87-79.1-79.1-79.1s-79.1 35.87-79.1 79.1S323.9 448 367.1 448zM367.1 320c26.5 0 47.1 21.5 47.1 47.1c0 26.5-21.5 47.1-47.1 47.1c-26.5 0-47.1-21.5-47.1-47.1C319.1 341.5 341.5 320 367.1 320zM447.1 128L198.5 128l302.4-96.76c8.422-2.687 13.06-11.69 10.36-20.11c-2.687-8.406-11.64-13.08-20.11-10.36L93.52 128L63.1 128c-35.37 0-63.1 28.62-63.1 63.1v255.1c0 35.37 28.63 63.1 63.1 63.1h383.1c35.37 0 63.1-28.62 63.1-63.1v-255.1C511.1 156.6 483.4 128 447.1 128zM479.1 448c0 17.62-14.37 31.1-31.1 31.1H63.1c-17.62 0-31.1-14.37-31.1-31.1v-191.1h447.1V448zM479.1 224H31.1V192c0-17.62 14.37-31.1 31.1-31.1h383.1c17.62 0 31.1 14.37 31.1 31.1V224z"/>
</>],
['regular',<>
	<path d="M208 384h-96c-8.799 0-16 7.2-16 16C95.1 408.8 103.2 416 112 416l95.1 .0006C216.8 416 224 408.8 224 400C224 391.2 216.8 384 208 384zM96 352l127.1 .0029C232.8 352 240 344.8 240 336C240 327.2 232.8 320 224 320H96c-8.799 0-16 7.201-16 16C79.1 344.8 87.2 352 96 352zM368 432c35.33 0 64-28.68 64-64s-28.67-64-64-64c-35.32 0-64 28.68-64 64S332.7 432 368 432zM439.1 127.1H201.2l293.1-80.86c12.78-3.531 20.28-16.75 16.76-29.52c-3.516-12.78-16.78-20.23-29.51-16.77L52.86 119.1C21.73 127.7 0 156.3 0 188.5v251.5C0 479.7 32.3 512 71.1 512h367.1c39.7 0 71.1-32.3 71.1-72V199.1C511.1 160.3 479.7 127.1 439.1 127.1zM463.1 439.1c0 13.23-10.77 24-24 24H71.1c-13.23 0-23.1-10.77-23.1-24V272h415.1V439.1z"/>
</>],
['solid',<>
	<path d="M447.1 128L218.5 128l276.2-80.97c12.72-3.734 19.1-17.06 16.28-29.78c-3.719-12.7-17-19.1-29.78-16.28L51.75 126.9C22.68 135.4 2.203 161.7 .3589 191.6L-.0001 192v255.1c0 35.31 28.69 63.1 63.1 63.1h383.1c35.31 0 63.1-28.69 63.1-63.1v-255.1C511.1 156.7 483.3 128 447.1 128zM208 423.1c0 4.406-3.594 7.1-7.1 7.1h-111.1c-4.406 0-7.1-3.594-7.1-7.1v-15.1c0-4.406 3.594-8 7.1-8h111.1c4.406 0 7.1 3.594 7.1 8V423.1zM224 359.1c0 4.406-3.594 7.1-7.1 7.1H72c-4.406 0-7.1-3.594-7.1-7.1v-15.1c0-4.406 3.594-7.1 7.1-7.1h143.1c4.406 0 7.1 3.594 7.1 7.1V359.1zM383.1 447.1c-35.32 0-63.1-28.68-63.1-63.1s28.68-63.1 63.1-63.1c35.33 0 63.1 28.68 63.1 63.1S419.3 447.1 383.1 447.1zM415.1 256H96C78.33 256 64 241.7 64 224s14.33-31.1 31.1-31.1h319.1c17.67 0 31.1 14.33 31.1 31.1S433.7 256 415.1 256z"/>
</>],
['thin',<>
	<path d="M200 408h-112c-4.406 0-8 3.593-8 7.999S83.59 424 88 424h112c4.406 0 7.999-3.593 7.999-7.999S204.4 408 200 408zM447.1 128L134.2 128l372.1-112.3c4.219-1.279 6.625-5.748 5.344-9.967c-1.25-4.219-5.531-6.719-9.969-5.344L78.83 128L63.1 128c-35.35 0-63.1 28.66-63.1 63.1v255.1c0 35.34 28.65 63.1 63.1 63.1h383.1c35.35 0 63.1-28.65 63.1-63.1v-255.1C511.1 156.7 483.3 128 447.1 128zM496 448c0 26.46-21.53 47.1-48 47.1H64c-26.47 0-48-21.53-48-47.1V272h480V448zM496 256h-480V192C16 165.6 37.53 144 64 144h384c26.47 0 48 21.53 48 47.1V256zM72 360h144c4.406 0 7.999-3.597 7.999-8.001c0-4.406-3.593-7.997-7.999-7.997h-144c-4.406 0-8 3.592-8 7.998C63.1 356.4 67.59 360 72 360zM383.1 447.1c35.35 0 63.1-28.65 63.1-63.1s-28.65-63.1-63.1-63.1c-35.35 0-63.1 28.65-63.1 63.1S348.7 447.1 383.1 447.1zM384 336c26.47 0 48 21.53 48 48s-21.53 48-48 48s-48-21.53-48-48S357.5 336 384 336z"/>
</>],

]);

const RadioTuner: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RadioTuner.displayName = "RadioTuner";

export default RadioTuner;
