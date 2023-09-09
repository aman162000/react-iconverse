
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M512 256c0 17.67-14.33 32-32 32H32C14.33 288 0 273.7 0 256s14.33-32 32-32h448C497.7 224 512 238.3 512 256z"/>
</>],
['light',<>
	<path d="M512 256c0 8.832-7.166 16-16 16h-480C7.166 272 0 264.8 0 256c0-8.834 7.166-16 16-16h480C504.8 240 512 247.2 512 256z"/>
</>],
['regular',<>
	<path d="M512 256c0 13.25-10.75 24-24 24H24C10.75 280 0 269.3 0 256s10.75-24 24-24h464C501.3 232 512 242.8 512 256z"/>
</>],
['solid',<>
	<path d="M512 256c0 17.67-14.33 32-32 32H32C14.33 288 0 273.7 0 256s14.33-32 32-32h448C497.7 224 512 238.3 512 256z"/>
</>],
['thin',<>
	<path d="M512 256c0 4.416-3.584 8-8 8H8C3.584 264 0 260.4 0 256c0-4.418 3.584-8 8-8h496C508.4 248 512 251.6 512 256z"/>
</>],

]);

const Dash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Dash.displayName = "Dash";

export default Dash;
