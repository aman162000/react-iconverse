
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M344 256C344 216.2 376.2 184 416 184C455.8 184 488 216.2 488 256C488 295.8 455.8 328 416 328C376.2 328 344 295.8 344 256zM416 280C429.3 280 440 269.3 440 256C440 242.7 429.3 232 416 232C402.7 232 392 242.7 392 256C392 269.3 402.7 280 416 280zM24 256C24 216.2 56.24 184 96 184C135.8 184 168 216.2 168 256C168 295.8 135.8 328 96 328C56.24 328 24 295.8 24 256zM96 280C109.3 280 120 269.3 120 256C120 242.7 109.3 232 96 232C82.75 232 72 242.7 72 256C72 269.3 82.75 280 96 280z"/><path className="fa-secondary" d="M328 256C328 295.8 295.8 328 256 328C216.2 328 184 295.8 184 256C184 216.2 216.2 184 256 184C295.8 184 328 216.2 328 256zM256 232C242.7 232 232 242.7 232 256C232 269.3 242.7 280 256 280C269.3 280 280 269.3 280 256C280 242.7 269.3 232 256 232z"/>
</>],
['light',<>
	<path d="M480 256C480 291.3 451.3 320 416 320C380.7 320 352 291.3 352 256C352 220.7 380.7 192 416 192C451.3 192 480 220.7 480 256zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224zM320 256C320 291.3 291.3 320 256 320C220.7 320 192 291.3 192 256C192 220.7 220.7 192 256 192C291.3 192 320 220.7 320 256zM256 224C238.3 224 224 238.3 224 256C224 273.7 238.3 288 256 288C273.7 288 288 273.7 288 256C288 238.3 273.7 224 256 224zM32 256C32 220.7 60.65 192 96 192C131.3 192 160 220.7 160 256C160 291.3 131.3 320 96 320C60.65 320 32 291.3 32 256zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288z"/>
</>],
['regular',<>
	<path d="M480 256C480 291.3 451.3 320 416 320C380.7 320 352 291.3 352 256C352 220.7 380.7 192 416 192C451.3 192 480 220.7 480 256zM416 232C402.7 232 392 242.7 392 256C392 269.3 402.7 280 416 280C429.3 280 440 269.3 440 256C440 242.7 429.3 232 416 232zM320 256C320 291.3 291.3 320 256 320C220.7 320 192 291.3 192 256C192 220.7 220.7 192 256 192C291.3 192 320 220.7 320 256zM256 232C242.7 232 232 242.7 232 256C232 269.3 242.7 280 256 280C269.3 280 280 269.3 280 256C280 242.7 269.3 232 256 232zM32 256C32 220.7 60.65 192 96 192C131.3 192 160 220.7 160 256C160 291.3 131.3 320 96 320C60.65 320 32 291.3 32 256zM96 280C109.3 280 120 269.3 120 256C120 242.7 109.3 232 96 232C82.75 232 72 242.7 72 256C72 269.3 82.75 280 96 280z"/>
</>],
['solid',<>
	<path d="M488 256C488 295.8 455.8 328 416 328C376.2 328 344 295.8 344 256C344 216.2 376.2 184 416 184C455.8 184 488 216.2 488 256zM416 232C402.7 232 392 242.7 392 256C392 269.3 402.7 280 416 280C429.3 280 440 269.3 440 256C440 242.7 429.3 232 416 232zM328 256C328 295.8 295.8 328 256 328C216.2 328 184 295.8 184 256C184 216.2 216.2 184 256 184C295.8 184 328 216.2 328 256zM256 232C242.7 232 232 242.7 232 256C232 269.3 242.7 280 256 280C269.3 280 280 269.3 280 256C280 242.7 269.3 232 256 232zM24 256C24 216.2 56.24 184 96 184C135.8 184 168 216.2 168 256C168 295.8 135.8 328 96 328C56.24 328 24 295.8 24 256zM96 280C109.3 280 120 269.3 120 256C120 242.7 109.3 232 96 232C82.75 232 72 242.7 72 256C72 269.3 82.75 280 96 280z"/>
</>],
['thin',<>
	<path d="M464 256C464 282.5 442.5 304 416 304C389.5 304 368 282.5 368 256C368 229.5 389.5 208 416 208C442.5 208 464 229.5 464 256zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224zM304 256C304 282.5 282.5 304 256 304C229.5 304 208 282.5 208 256C208 229.5 229.5 208 256 208C282.5 208 304 229.5 304 256zM256 224C238.3 224 224 238.3 224 256C224 273.7 238.3 288 256 288C273.7 288 288 273.7 288 256C288 238.3 273.7 224 256 224zM48 256C48 229.5 69.49 208 96 208C122.5 208 144 229.5 144 256C144 282.5 122.5 304 96 304C69.49 304 48 282.5 48 256zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288z"/>
</>],

]);

const EllipsisStroke: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

EllipsisStroke.displayName = "EllipsisStroke";

export default EllipsisStroke;
