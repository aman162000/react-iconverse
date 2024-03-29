
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32 384C14.33 384 0 398.3 0 415.1v64C0 497.7 14.33 512 31.1 512S64 497.7 64 480V415.1C64 398.3 49.67 384 32 384z"/><path className="fa-secondary" d="M160 288C142.3 288 128 302.3 128 319.1v160C128 497.7 142.3 512 159.1 512S192 497.7 192 480V319.1C192 302.3 177.7 288 160 288zM288 192C270.3 192 256 206.3 256 223.1v256C256 497.7 270.3 512 287.1 512S320 497.7 320 480V223.1C320 206.3 305.7 192 288 192zM416 96C398.3 96 384 110.3 384 127.1V480C384 497.7 398.3 512 415.1 512S448 497.7 448 480V127.1C448 110.3 433.7 96 416 96zM544 0C526.3 0 512 14.33 512 31.1V480C512 497.7 526.3 512 543.1 512S576 497.7 576 480V31.1C576 14.33 561.7 0 544 0z"/>
</>],
['light',<>
	<path d="M32 384C23.16 384 16 391.2 16 400v96c0 8.844 7.156 16 15.1 16S48 504.8 48 496v-96C48 391.2 40.84 384 32 384z"/>
</>],
['regular',<>
	<path d="M56 408v80c0 13.25-10.75 24-24 24S8 501.3 8 488v-80c0-13.25 10.75-24 24-24S56 394.8 56 408z"/>
</>],
['solid',<>
	<path d="M32 384C14.33 384 0 398.3 0 415.1v64C0 497.7 14.33 512 31.1 512S64 497.7 64 480V415.1C64 398.3 49.67 384 32 384z"/>
</>],
['thin',<>
	<path d="M32 384C27.59 384 24 387.6 24 392v112c0 4.406 3.594 8 7.1 8S40 508.4 40 504v-112C40 387.6 36.41 384 32 384z"/>
</>],

]);

const SignalWeak: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SignalWeak.displayName = "SignalWeak";

export default SignalWeak;
