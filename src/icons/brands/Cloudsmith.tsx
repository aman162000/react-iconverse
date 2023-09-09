
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['regular',<>
	<path d="M332.5 419.9c0 46.4-37.6 84.1-84 84.1s-84-37.7-84-84.1 37.6-84 84-84 84 37.6 84 84zm-84-243.9c46.4 0 80-37.6 80-84s-33.6-84-80-84-88 37.6-88 84-29.6 76-76 76-84 41.6-84 88 37.6 80 84 80 84-33.6 84-80 33.6-80 80-80z"/>
</>],

]);

const Cloudsmith: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={332} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Cloudsmith.displayName = "Cloudsmith";

export default Cloudsmith;
