
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['regular',<>
	<path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
</>],

]);

const Ethereum: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Ethereum.displayName = "Ethereum";

export default Ethereum;
