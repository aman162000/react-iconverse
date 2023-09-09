
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 416H32c-17.67 0-32-14.31-32-32V160c0-17.69 14.33-32 32-32s32 14.31 32 32v192h192c17.67 0 32 14.31 32 32S273.7 416 256 416z"/><path className="fa-secondary" d="M310.6 150.6L109.3 352H64V306.8l201.4-201.4c12.5-12.5 32.75-12.5 45.25 0S323.1 138.1 310.6 150.6z"/>
</>],
['light',<>
	<path d="M315.3 122.6L54.43 383.4L240 384C248.9 384 256 391.2 256 400C255.1 408.9 248.8 416 240 416l-224-.6562C7.141 415.3 0 408.2 0 399.3V176C0 167.2 7.156 160 16 160S32 167.2 32 176v184.6l260.7-260.7c6.25-6.25 16.38-6.25 22.62 0S321.6 116.3 315.3 122.6z"/>
</>],
['regular',<>
	<path d="M312.1 136.1L81.94 368H264c13.25 0 24 10.75 24 24S277.3 416 264 416h-240C10.75 416 0 405.3 0 392v-240C0 138.8 10.75 128 24 128S48 138.8 48 152v182.1l231-231c9.375-9.375 24.56-9.375 33.94 0S322.3 127.6 312.1 136.1z"/>
</>],
['solid',<>
	<path d="M310.6 150.6L109.3 352H256c17.67 0 32 14.31 32 32s-14.33 32-32 32H32c-17.67 0-32-14.31-32-32V160c0-17.69 14.33-32 32-32s32 14.31 32 32v146.8l201.4-201.4c12.5-12.5 32.75-12.5 45.25 0S323.1 138.1 310.6 150.6z"/>
</>],
['thin',<>
	<path d="M7.999 160c4.419 0 7.999 3.58 7.999 7.999v220.7l290.3-290.3c3.116-3.116 8.187-3.127 11.31 0s3.116 8.198 0 11.31l-290.3 290.3h220.7C252.4 400 256 403.6 256 408S252.4 416 248 416H7.999C3.58 416 0 412.4 0 408V167.1C0 163.6 3.577 160 7.999 160z"/>
</>],

]);

const ArrowDownLeft: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowDownLeft.displayName = "ArrowDownLeft";

export default ArrowDownLeft;