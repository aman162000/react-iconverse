
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['regular',<>
	<path d="M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z"/>
</>],

]);

const BlackTie: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BlackTie.displayName = "BlackTie";

export default BlackTie;
