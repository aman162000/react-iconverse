
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2V172.2z"/><path className="fa-secondary" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM339.8 211.8C350.7 200.9 350.7 183.1 339.8 172.2C328.9 161.3 311.1 161.3 300.2 172.2L192 280.4L147.8 236.2C136.9 225.3 119.1 225.3 108.2 236.2C97.27 247.1 97.27 264.9 108.2 275.8L172.2 339.8C183.1 350.7 200.9 350.7 211.8 339.8L339.8 211.8z"/>
</>],
['light',<>
	<path d="M203.3 331.3C197.1 337.6 186.9 337.6 180.7 331.3L116.7 267.3C110.4 261.1 110.4 250.9 116.7 244.7C122.9 238.4 133.1 238.4 139.3 244.7L192 297.4L308.7 180.7C314.9 174.4 325.1 174.4 331.3 180.7C337.6 186.9 337.6 197.1 331.3 203.3L203.3 331.3zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64H64C46.33 64 32 78.33 32 96z"/>
</>],
['regular',<>
	<path d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/>
</>],
['solid',<>
	<path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM339.8 211.8C350.7 200.9 350.7 183.1 339.8 172.2C328.9 161.3 311.1 161.3 300.2 172.2L192 280.4L147.8 236.2C136.9 225.3 119.1 225.3 108.2 236.2C97.27 247.1 97.27 264.9 108.2 275.8L172.2 339.8C183.1 350.7 200.9 350.7 211.8 339.8L339.8 211.8z"/>
</>],
['thin',<>
	<path d="M197.7 325.7C194.5 328.8 189.5 328.8 186.3 325.7L122.3 261.7C119.2 258.5 119.2 253.5 122.3 250.3C125.5 247.2 130.5 247.2 133.7 250.3L192 308.7L314.3 186.3C317.5 183.2 322.5 183.2 325.7 186.3C328.8 189.5 328.8 194.5 325.7 197.7L197.7 325.7zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM16 96V416C16 442.5 37.49 464 64 464H384C410.5 464 432 442.5 432 416V96C432 69.49 410.5 48 384 48H64C37.49 48 16 69.49 16 96z"/>
</>],

]);

const SquareCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareCheck.displayName = "SquareCheck";

export default SquareCheck;