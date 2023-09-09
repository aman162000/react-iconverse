
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M320 256C320 344.4 248.4 416 160 416C71.63 416 0 344.4 0 256C0 167.6 71.63 96 160 96C248.4 96 320 167.6 320 256z"/>
</>],
['light',<>
	<path d="M320 256C320 344.4 248.4 416 160 416C71.63 416 0 344.4 0 256C0 167.6 71.63 96 160 96C248.4 96 320 167.6 320 256zM160 128C89.31 128 32 185.3 32 256C32 326.7 89.31 384 160 384C230.7 384 288 326.7 288 256C288 185.3 230.7 128 160 128z"/>
</>],
['regular',<>
	<path d="M320 256C320 344.4 248.4 416 160 416C71.63 416 0 344.4 0 256C0 167.6 71.63 96 160 96C248.4 96 320 167.6 320 256zM160 144C98.14 144 48 194.1 48 256C48 317.9 98.14 368 160 368C221.9 368 272 317.9 272 256C272 194.1 221.9 144 160 144z"/>
</>],
['solid',<>
	<path d="M320 256C320 344.4 248.4 416 160 416C71.63 416 0 344.4 0 256C0 167.6 71.63 96 160 96C248.4 96 320 167.6 320 256z"/>
</>],
['thin',<>
	<path d="M0 256C0 167.6 71.63 96 160 96C248.4 96 320 167.6 320 256C320 344.4 248.4 416 160 416C71.63 416 0 344.4 0 256zM160 400C239.5 400 304 335.5 304 256C304 176.5 239.5 112 160 112C80.47 112 16 176.5 16 256C16 335.5 80.47 400 160 400z"/>
</>],

]);

const CircleSmall: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleSmall.displayName = "CircleSmall";

export default CircleSmall;
