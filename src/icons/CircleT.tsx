
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M360 144h-208C138.8 144 128 154.8 128 168S138.8 192 152 192h80v168C232 373.3 242.8 384 256 384s24-10.75 24-24V192h80C373.3 192 384 181.3 384 168S373.3 144 360 144z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM360 192h-80v168c0 13.25-10.75 24-24 24s-24-10.75-24-24V192h-80C138.8 192 128 181.3 128 168S138.8 144 152 144h208C373.3 144 384 154.8 384 168S373.3 192 360 192z"/>
</>],
['light',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM368 160h-224C135.2 160 128 167.2 128 176S135.2 192 144 192h96v176c0 8.844 7.156 16 16 16s16-7.156 16-16V192h96C376.8 192 384 184.8 384 176S376.8 160 368 160z"/>
</>],
['regular',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM360 144h-208C138.8 144 128 154.8 128 168S138.8 192 152 192h80v168C232 373.3 242.8 384 256 384s24-10.75 24-24V192h80C373.3 192 384 181.3 384 168S373.3 144 360 144z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM360 192h-80v168c0 13.25-10.75 24-24 24s-24-10.75-24-24V192h-80C138.8 192 128 181.3 128 168S138.8 144 152 144h208C373.3 144 384 154.8 384 168S373.3 192 360 192z"/>
</>],
['thin',<>
	<path d="M376 144h-240C131.6 144 128 147.6 128 152S131.6 160 136 160h112v232c0 4.422 3.594 8 8 8s8-3.578 8-8V160h112C380.4 160 384 156.4 384 152S380.4 144 376 144zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleT: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleT.displayName = "CircleT";

export default CircleT;
