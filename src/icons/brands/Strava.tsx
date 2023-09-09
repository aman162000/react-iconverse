
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['regular',<>
	<path d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z"/>
</>],

]);

const Strava: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Strava.displayName = "Strava";

export default Strava;
