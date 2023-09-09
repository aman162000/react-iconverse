
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M48 384C21.6 384 0 405.6 0 431.1v32C0 490.4 21.6 512 47.1 512S96 490.4 96 464v-32C96 405.6 74.4 384 48 384z"/><path className="fa-secondary" d="M208 256C181.6 256 160 277.6 160 303.1v160C160 490.4 181.6 512 207.1 512S256 490.4 256 464V303.1C256 277.6 234.4 256 208 256zM368 128C341.6 128 320 149.6 320 175.1v288C320 490.4 341.6 512 367.1 512C394.4 512 416 490.4 416 464V175.1C416 149.6 394.4 128 368 128zM528 0C501.6 0 480 21.6 480 47.1v416C480 490.4 501.6 512 527.1 512S576 490.4 576 464V47.1C576 21.6 554.4 0 528 0z"/>
</>],
['light',<>
	<path d="M64 384H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64C96 398.3 81.67 384 64 384zM64 480H32v-64h32V480z"/>
</>],
['regular',<>
	<path d="M96 384H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64C128 398.3 113.7 384 96 384zM80 464h-32v-32h32V464z"/>
</>],
['solid',<>
	<path d="M48 384C21.6 384 0 405.6 0 431.1v32C0 490.4 21.6 512 47.1 512S96 490.4 96 464v-32C96 405.6 74.4 384 48 384z"/>
</>],
['thin',<>
	<path d="M64 384H32c-17.62 0-32 14.38-32 32v64c0 17.62 14.38 32 32 32h32c17.62 0 32-14.38 32-32v-64C96 398.4 81.63 384 64 384zM80 480c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16v-64c0-8.822 7.178-16 16-16h32c8.822 0 16 7.178 16 16V480z"/>
</>],

]);

const SignalBarsWeak: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SignalBarsWeak.displayName = "SignalBarsWeak";

export default SignalBarsWeak;
