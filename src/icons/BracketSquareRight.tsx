
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M32 63.1C32 81.67 46.33 96 63.1 96H128v320H63.1C46.33 416 32 430.3 32 447.1S46.33 480 63.1 480H160c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32H63.1C46.33 32 32 46.33 32 63.1z"/>
</>],
['light',<>
	<path d="M160 80v352c0 8.822-7.178 16-16 16h-96C39.18 448 32 455.2 32 464S39.18 480 48 480h96c26.47 0 48-21.53 48-48v-352C192 53.53 170.5 32 144 32h-96C39.18 32 32 39.18 32 48S39.18 64 48 64h96C152.8 64 160 71.18 160 80z"/>
</>],
['regular',<>
	<path d="M48 55.1C48 69.25 58.75 80 71.1 80H144v352H71.1C58.75 432 48 442.7 48 455.1S58.75 480 72 480H160c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32H72C58.75 32 48 42.75 48 55.1z"/>
</>],
['solid',<>
	<path d="M32 63.1C32 81.67 46.33 96 63.1 96H128v320H63.1C46.33 416 32 430.3 32 447.1S46.33 480 63.1 480H160c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32H63.1C46.33 32 32 46.33 32 63.1z"/>
</>],
['thin',<>
	<path d="M176 72v368c0 13.23-10.78 24-24 24h-80C67.59 464 64 467.6 64 472S67.59 480 72 480h80c22.06 0 40-17.94 40-40V72C192 49.94 174.1 32 152 32h-80C67.59 32 64 35.58 64 40S67.59 48 72 48h80C165.2 48 176 58.77 176 72z"/>
</>],

]);

const BracketSquareRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={192} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BracketSquareRight.displayName = "BracketSquareRight";

export default BracketSquareRight;
