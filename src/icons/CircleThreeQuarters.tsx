
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 256H512C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0V256z"/><path className="fa-secondary" d="M256 256V0C397.4 0 512 114.6 512 256H256z"/>
</>],
['light',<>
	<path d="M224.1 1.971C241.6-.2109 256 14.33 256 31.1V255.1H480C497.7 255.1 512.2 270.4 510 287.9C494.3 414.2 386.6 512 256 512C114.6 512 0 397.4 0 255.1C0 125.4 97.75 17.69 224.1 1.971V1.971zM224 287.1V34.26C115.5 49.77 32 143.2 32 255.1C32 379.7 132.3 480 256 480C368.8 480 462.2 396.5 477.7 287.1H224z"/>
</>],
['regular',<>
	<path d="M224.1 1.971C241.6-.2109 256 14.33 256 31.1V255.1H480C497.7 255.1 512.2 270.4 510 287.9C494.3 414.2 386.6 512 256 512C114.6 512 0 397.4 0 255.1C0 125.4 97.75 17.69 224.1 1.971V1.971zM208 303.1V53.55C116.3 75.21 48 157.7 48 255.1C48 370.9 141.1 464 256 464C354.3 464 436.8 395.7 458.4 303.1H208z"/>
</>],
['solid',<>
	<path d="M256 255.1H480C497.7 255.1 512.2 270.4 510 287.9C494.3 414.2 386.6 512 256 512C114.6 512 0 397.4 0 255.1C0 125.4 97.75 17.69 224.1 1.971C241.6-.2109 256 14.33 256 31.1V255.1z"/>
</>],
['thin',<>
	<path d="M224.1 1.971C241.6-.2109 256 14.33 256 31.1V255.1H480C497.7 255.1 512.2 270.4 510 287.9C494.3 414.2 386.6 512 256 512C114.6 512 0 397.4 0 255.1C0 125.4 97.75 17.69 224.1 1.971V1.971zM240 271.1V31.1C240 22.55 232.7 17.02 226 17.85C107.6 32.58 16 133.6 16 255.1C16 388.5 123.5 496 256 496C378.4 496 479.4 404.4 494.2 285.1C494.1 279.3 489.4 271.1 480 271.1H240z"/>
</>],

]);

const CircleThreeQuarters: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleThreeQuarters.displayName = "CircleThreeQuarters";

export default CircleThreeQuarters;