
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['regular',<>
	<path d="M50.77161,479.81213h83.36071V367.84741l-83.36071,47.009Zm329.04675,0h82.35022V414.85645l-82.35022-47.009Zm.00568-448V251.568L256.1759,179.1861,134.50378,251.568V31.81213H50.77161V392.60565L256.1759,270.31909,462.16858,392.60565V31.81213Z"/>
</>],

]);

const Wirsindhandwerk: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Wirsindhandwerk.displayName = "Wirsindhandwerk";

export default Wirsindhandwerk;
