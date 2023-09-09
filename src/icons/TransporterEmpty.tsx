
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 448H32c-17.62 0-32 14.38-32 32v32h320v-32C320 462.4 305.6 448 288 448z"/>
</>],
['light',<>
	<path d="M272 448h-224C21.53 448 0 469.5 0 496C0 504.8 7.156 512 16 512S32 504.8 32 496C32 487.2 39.17 480 48 480h224c8.828 0 16 7.172 16 16c0 8.844 7.156 16 16 16s16-7.156 16-16C320 469.5 298.5 448 272 448z"/>
</>],
['regular',<>
	<path d="M296 464H23.1C10.75 464 0 474.7 0 488S10.75 512 23.1 512h272C309.3 512 320 501.3 320 488S309.3 464 296 464z"/>
</>],
['solid',<>
	<path d="M288 448H32c-17.62 0-32 14.38-32 32v32h320v-32C320 462.4 305.6 448 288 448z"/>
</>],
['thin',<>
	<path d="M320 488v16c0 4.422-3.594 8-8 8s-8-3.578-8-8v-16c0-13.23-10.78-24-24-24h-240c-13.22 0-24 10.77-24 24v16C16 508.4 12.41 512 8 512S0 508.4 0 504v-16C0 465.9 17.94 448 40 448h240C302.1 448 320 465.9 320 488z"/>
</>],

]);

const TransporterEmpty: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TransporterEmpty.displayName = "TransporterEmpty";

export default TransporterEmpty;
