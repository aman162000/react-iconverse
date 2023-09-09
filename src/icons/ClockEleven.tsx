
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 120V256C280 266.6 273.1 275.9 262.1 278.1C252.8 282 241.9 278.1 236 269.3L172 173.3C164.7 162.3 167.7 147.4 178.7 140C189.7 132.7 204.6 135.7 211.1 146.7L231.1 176.7V120C231.1 106.7 242.7 96 255.1 96C269.3 96 280 106.7 280 120H280z"/><path className="fa-secondary" d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 176.7L211.1 146.7C204.6 135.7 189.7 132.7 178.7 140C167.7 147.4 164.7 162.3 172 173.3L236 269.3C241.9 278.1 252.8 282 262.1 278.1C273.1 275.9 280 266.6 280 256V120C280 106.7 269.3 96 256 96C242.7 96 232 106.7 232 120L232 176.7z"/>
</>],
['light',<>
	<path d="M240 112C240 103.2 247.2 96 256 96C264.8 96 272 103.2 272 112V256C272 263.1 267.4 269.3 260.6 271.3C253.9 273.4 246.6 270.7 242.7 264.9L178.7 168.9C173.8 161.5 175.8 151.6 183.1 146.7C190.5 141.8 200.4 143.8 205.3 151.1L239.1 203.2L240 112zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256z"/>
</>],
['regular',<>
	<path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V256C280 266.6 273.1 275.9 262.1 278.1C252.8 282 241.9 278.1 236 269.3L172 173.3C164.7 162.3 167.7 147.4 178.7 140C189.7 132.7 204.6 135.7 211.1 146.7L231.1 176.7L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/>
</>],
['solid',<>
	<path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 176.7L211.1 146.7C204.6 135.7 189.7 132.7 178.7 140C167.7 147.4 164.7 162.3 172 173.3L236 269.3C241.9 278.1 252.8 282 262.1 278.1C273.1 275.9 280 266.6 280 256V120C280 106.7 269.3 96 256 96C242.7 96 232 106.7 232 120L232 176.7z"/>
</>],
['thin',<>
	<path d="M248 104C248 99.58 251.6 96 256 96C260.4 96 264 99.58 264 104V256C264 259.5 261.7 262.6 258.3 263.7C254.9 264.7 251.3 263.4 249.3 260.4L185.3 164.4C182.9 160.8 183.9 155.8 187.6 153.3C191.2 150.9 196.2 151.9 198.7 155.6L248 229.6L248 104zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256z"/>
</>],

]);

const ClockEleven: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ClockEleven.displayName = "ClockEleven";

export default ClockEleven;