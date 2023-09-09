
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M344 344c0 17.69-14.31 32-32 32h-144c-17.69 0-32-14.31-32-32s14.31-32 32-32h66.75L113.4 190.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L280 266.8V200c0-17.69 14.31-32 32-32s32 14.31 32 32V344z"/><path className="fa-secondary" d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM344 344c0 17.69-14.31 32-32 32h-144c-17.69 0-32-14.31-32-32s14.31-32 32-32h66.75L113.4 190.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L280 266.8V200c0-17.69 14.31-32 32-32s32 14.31 32 32V344z"/>
</>],
['light',<>
	<path d="M64 480h320c35.35 0 64-28.66 64-64V96c0-35.34-28.65-64-64-64H64C28.65 32 0 60.66 0 96v320C0 451.3 28.65 480 64 480zM32 96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96zM265.1 319.7L175.1 320C167.1 320 159.1 327.2 160 336C160 344.9 167.2 352 176 352l128-.375C312.9 351.6 320 344.4 320 335.6V208C320 199.2 312.8 192 304 192S288 199.2 288 208v89.38L155.3 164.7C152.2 161.6 148.1 160 144 160S135.8 161.6 132.7 164.7c-6.25 6.25-6.25 16.38 0 22.62L265.1 319.7z"/>
</>],
['regular',<>
	<path d="M312 164.7c-13.25 0-24 10.75-24 24v97.34L152.1 151c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L254.1 320H156.7c-13.25 0-24 10.75-24 24s10.75 24 24 24H312c13.25 0 24-10.75 24-24V188.7C336 175.5 325.3 164.7 312 164.7zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16V416z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM344 344c0 17.69-14.31 32-32 32h-144c-17.69 0-32-14.31-32-32s14.31-32 32-32h66.75L113.4 190.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L280 266.8V200c0-17.69 14.31-32 32-32s32 14.31 32 32V344z"/>
</>],
['thin',<>
	<path d="M292.7 336H152c-4.42 0-8 3.582-8 8C144 348.4 147.6 352 152 352h160c4.42 0 8-3.578 8-8v-160c0-4.422-3.576-8-8-8c-4.418 0-7.998 3.578-7.998 8v140.7L141.7 162.3c-3.115-3.117-8.188-3.129-11.31 0c-3.127 3.125-3.117 8.195 0 11.31L292.7 336zM64 480h320c35.35 0 64-28.66 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320C0 451.3 28.65 480 64 480zM16 96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96z"/>
</>],

]);

const SquareArrowDownRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareArrowDownRight.displayName = "SquareArrowDownRight";

export default SquareArrowDownRight;
