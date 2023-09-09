
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 96C269.3 96 280 106.7 280 120V360C280 373.3 269.3 384 256 384C242.7 384 232 373.3 232 360V120C232 106.7 242.7 96 256 96z"/><path className="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM280 120C280 106.7 269.3 96 256 96C242.7 96 232 106.7 232 120V360C232 373.3 242.7 384 256 384C269.3 384 280 373.3 280 360V120z"/>
</>],
['light',<>
	<path d="M272 368C272 376.8 264.8 384 256 384C247.2 384 240 376.8 240 368V112C240 103.2 247.2 96 256 96C264.8 96 272 103.2 272 112V368zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M280 360C280 373.3 269.3 384 256 384C242.7 384 232 373.3 232 360V120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V360zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM280 120C280 106.7 269.3 96 256 96C242.7 96 232 106.7 232 120V360C232 373.3 242.7 384 256 384C269.3 384 280 373.3 280 360V120z"/>
</>],
['thin',<>
	<path d="M264 376C264 380.4 260.4 384 256 384C251.6 384 248 380.4 248 376V104C248 99.58 251.6 96 256 96C260.4 96 264 99.58 264 104V376zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const ClockSix: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ClockSix.displayName = "ClockSix";

export default ClockSix;
