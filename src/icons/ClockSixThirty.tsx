
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M232 392V256C232 242.7 242.7 232 256 232C269.3 232 280 242.7 280 256V392C280 405.3 269.3 416 256 416C242.7 416 232 405.3 232 392z"/><path className="fa-secondary" d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM280 256C280 242.7 269.3 232 256 232C242.7 232 232 242.7 232 256V392C232 405.3 242.7 416 256 416C269.3 416 280 405.3 280 392V256z"/>
</>],
['light',<>
	<path d="M272 400C272 408.8 264.8 416 256 416C247.2 416 240 408.8 240 400V256C240 247.2 247.2 240 256 240C264.8 240 272 247.2 272 256V400zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256z"/>
</>],
['regular',<>
	<path d="M280 392C280 405.3 269.3 416 256 416C242.7 416 232 405.3 232 392V256C232 242.7 242.7 232 256 232C269.3 232 280 242.7 280 256V392zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256z"/>
</>],
['solid',<>
	<path d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM280 256C280 242.7 269.3 232 256 232C242.7 232 232 242.7 232 256V392C232 405.3 242.7 416 256 416C269.3 416 280 405.3 280 392V256z"/>
</>],
['thin',<>
	<path d="M264 408C264 412.4 260.4 416 256 416C251.6 416 248 412.4 248 408V256C248 251.6 251.6 248 256 248C260.4 248 264 251.6 264 256V408zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256z"/>
</>],

]);

const ClockSixThirty: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ClockSixThirty.displayName = "ClockSixThirty";

export default ClockSixThirty;