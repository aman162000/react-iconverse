
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M257.1 242.4C276.1 220.1 288 191.6 288 160c0-70.58-57.42-128-128-128H32c-17.67 0-32 14.33-32 32v384c0 17.67 14.33 32 32 32l160-.0049c70.58 0 128-57.42 128-128C320 305.3 294.6 264.8 257.1 242.4zM64 96.01h96c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V96.01zM192 416H64v-128h128c35.3 0 64 28.7 64 64S227.3 416 192 416z"/>
</>],
['light',<>
	<path d="M241.9 234.1C269.7 213.7 288 181.1 288 144C288 82.25 237.8 32 176 32h-160C7.156 32 0 39.16 0 48v416C0 472.8 7.156 480 16 480l176 .0098c70.58 0 128-57.42 128-128C320 299.1 287.7 253.6 241.9 234.1zM32 64h144C220.1 64 256 99.89 256 144S220.1 224 176 224H32V64zM192 448H32V256h160c52.94 0 96 43.06 96 96S244.9 448 192 448z"/>
</>],
['regular',<>
	<path d="M250.1 244.9C273.4 222.4 288 190.9 288 156C288 87.63 232.4 32 164 32H24C10.75 32 0 42.75 0 56v400C0 469.3 10.75 480 24 480h172C264.4 480 320 424.4 320 356C320 307.1 291.3 265.1 250.1 244.9zM48 80h116c41.91 0 76 34.09 76 76S205.9 232 164 232H48V80zM196 432H48V280h148c41.91 0 76 34.09 76 76S237.9 432 196 432z"/>
</>],
['solid',<>
	<path d="M257.1 242.4C276.1 220.1 288 191.6 288 160c0-70.58-57.42-128-128-128H32c-17.67 0-32 14.33-32 32v384c0 17.67 14.33 32 32 32l160-.0049c70.58 0 128-57.42 128-128C320 305.3 294.6 264.8 257.1 242.4zM64 96.01h96c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V96.01zM192 416H64v-128h128c35.3 0 64 28.7 64 64S227.3 416 192 416z"/>
</>],
['thin',<>
	<path d="M236.1 246.4C276.4 229.1 304 189.7 304 144C304 82.25 253.8 32 192 32H8C3.578 32 0 35.58 0 40v432C0 476.4 3.578 480 8 480h192c66.17 0 120-53.83 120-120C320 306.8 284.1 262.1 236.1 246.4zM16 48H192c52.94 0 96 43.06 96 96s-43.06 96-96 96H16V48zM200 464H16V256h184c57.34 0 104 46.66 104 104S257.3 464 200 464z"/>
</>],

]);

const B: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

B.displayName = "B";

export default B;