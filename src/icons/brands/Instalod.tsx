
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['regular',<>
	<path d="M153.384,480H387.113L502.554,275.765,204.229,333.211ZM504.726,240.078,387.113,32H155.669L360.23,267.9ZM124.386,48.809,7.274,256,123.236,461.154,225.627,165.561Z"/>
</>],

]);

const Instalod: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Instalod.displayName = "Instalod";

export default Instalod;
