
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M640 255.1C640 273.6 625.6 288 607.9 288h-576C14.41 288 0 273.6 0 256C0 238.4 14.39 224 32.06 224h576C625.7 224 640 238.4 640 255.1z"/>
</>],
['light',<>
	<path d="M624 272h-608C7.156 272 0 264.9 0 256S7.156 240 16 240h608c8.844 0 16 7.131 16 15.97S632.8 272 624 272z"/>
</>],
['regular',<>
	<path d="M616 280H24C10.75 280 0 269.3 0 256S10.75 232 24 232h592c13.25 0 24 10.72 24 23.97S629.3 280 616 280z"/>
</>],
['solid',<>
	<path d="M607.9 288h-576C14.25 288 0 273.7 0 256S14.38 224 32.06 224h576C625.8 224 640 238.3 640 255.1S625.6 288 607.9 288z"/>
</>],
['thin',<>
	<path d="M640 255.1c0 4.406-3.594 8.025-8 8.025H8c-4.406 0-8-3.568-8-7.975s3.594-8.025 8-8.025h624C636.4 247.1 640 251.6 640 255.1z"/>
</>],

]);

const HorizontalRule: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HorizontalRule.displayName = "HorizontalRule";

export default HorizontalRule;
