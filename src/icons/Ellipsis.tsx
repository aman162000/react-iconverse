
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"/><path className="fa-secondary" d="M280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256z"/>
</>],
['light',<>
	<path d="M352 256C352 238.3 366.3 224 384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256z"/>
</>],
['regular',<>
	<path d="M336 256C336 229.5 357.5 208 384 208C410.5 208 432 229.5 432 256C432 282.5 410.5 304 384 304C357.5 304 336 282.5 336 256zM176 256C176 229.5 197.5 208 224 208C250.5 208 272 229.5 272 256C272 282.5 250.5 304 224 304C197.5 304 176 282.5 176 256zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z"/>
</>],
['solid',<>
	<path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"/>
</>],
['thin',<>
	<path d="M336 256C336 247.2 343.2 240 352 240C360.8 240 368 247.2 368 256C368 264.8 360.8 272 352 272C343.2 272 336 264.8 336 256zM208 256C208 247.2 215.2 240 224 240C232.8 240 240 247.2 240 256C240 264.8 232.8 272 224 272C215.2 272 208 264.8 208 256zM112 256C112 264.8 104.8 272 96 272C87.16 272 80 264.8 80 256C80 247.2 87.16 240 96 240C104.8 240 112 247.2 112 256z"/>
</>],

]);

const Ellipsis: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Ellipsis.displayName = "Ellipsis";

export default Ellipsis;