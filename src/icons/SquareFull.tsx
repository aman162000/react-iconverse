
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M0 0H512V512H0V0z"/>
</>],
['light',<>
	<path d="M512 0V512H0V0H512zM480 32H32V480H480V32z"/>
</>],
['regular',<>
	<path d="M512 0V512H0V0H512zM464 48H48V464H464V48z"/>
</>],
['solid',<>
	<path d="M0 0H512V512H0V0z"/>
</>],
['thin',<>
	<path d="M512 0V512H0V0H512zM496 16H16V496H496V16z"/>
</>],

]);

const SquareFull: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareFull.displayName = "SquareFull";

export default SquareFull;
