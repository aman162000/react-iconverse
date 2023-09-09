
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 119.1V255.1C280 264.9 275.1 272.1 267.3 277.2C259.5 281.3 250.1 280.9 242.7 275.1L146.7 211.1C135.7 204.6 132.7 189.7 140 178.7C147.4 167.7 162.3 164.7 173.3 172L231.1 211.2V120C231.1 106.7 242.7 96 255.1 96C269.3 96 280 106.7 280 120L280 119.1z"/><path className="fa-secondary" d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 211.2L173.3 172C162.3 164.7 147.4 167.7 140 178.7C132.7 189.7 135.7 204.6 146.7 211.1L242.7 275.1C250.1 280.9 259.5 281.3 267.3 277.2C275.1 272.1 280 264.9 280 255.1V119.1C280 106.7 269.3 95.1 256 95.1C242.7 95.1 232 106.7 232 119.1L232 211.2z"/>
</>],
['light',<>
	<path d="M240 112C240 103.2 247.2 96 256 96C264.8 96 272 103.2 272 112V256C272 261.9 268.8 267.3 263.5 270.1C258.3 272.9 252 272.6 247.1 269.3L151.1 205.3C143.8 200.4 141.8 190.5 146.7 183.1C151.6 175.8 161.5 173.8 168.9 178.7L240 226.1L240 112zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256z"/>
</>],
['regular',<>
	<path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V256C280 264.9 275.1 272.1 267.3 277.2C259.5 281.3 250.1 280.9 242.7 275.1L146.7 211.1C135.7 204.6 132.7 189.7 140 178.7C147.4 167.7 162.3 164.7 173.3 172L231.1 211.2L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/>
</>],
['solid',<>
	<path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 211.2L173.3 172C162.3 164.7 147.4 167.7 140 178.7C132.7 189.7 135.7 204.6 146.7 211.1L242.7 275.1C250.1 280.9 259.5 281.3 267.3 277.2C275.1 272.1 280 264.9 280 255.1V119.1C280 106.7 269.3 95.1 256 95.1C242.7 95.1 232 106.7 232 119.1L232 211.2z"/>
</>],
['thin',<>
	<path d="M248 104C248 99.58 251.6 96 256 96C260.4 96 264 99.58 264 104V256C264 258.1 262.4 261.7 259.8 263.1C257.2 264.4 254 264.3 251.6 262.7L155.6 198.7C151.9 196.2 150.9 191.2 153.3 187.6C155.8 183.9 160.8 182.9 164.4 185.3L248 241.1V104zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256z"/>
</>],

]);

const ClockTen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ClockTen.displayName = "ClockTen";

export default ClockTen;
