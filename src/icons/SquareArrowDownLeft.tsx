
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M334.6 190.6L213.3 312H280c17.69 0 32 14.31 32 32s-14.31 32-32 32h-144c-17.69 0-32-14.31-32-32v-144c0-17.69 14.31-32 32-32s32 14.31 32 32v66.75l121.4-121.4c12.5-12.5 32.75-12.5 45.25 0S347.1 178.1 334.6 190.6z"/><path className="fa-secondary" d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM334.6 190.6L213.3 312H280c17.69 0 32 14.31 32 32s-14.31 32-32 32h-144c-17.69 0-32-14.31-32-32v-144c0-17.69 14.31-32 32-32s32 14.31 32 32v66.75l121.4-121.4c12.5-12.5 32.75-12.5 45.25 0S347.1 178.1 334.6 190.6z"/>
</>],
['light',<>
	<path d="M448 416V96c0-35.34-28.65-64-64-64H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320C419.3 480 448 451.3 448 416zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416zM315.3 187.3c6.25-6.25 6.25-16.38 0-22.62C312.2 161.6 308.1 160 304 160s-8.188 1.562-11.31 4.688L160 297.4V208C160 199.2 152.8 192 144 192S128 199.2 128 208v127.6c0 8.812 7.141 15.97 15.95 16l128 .375C280.8 352 287.1 344.9 288 336c.0313-8.812-7.109-16-15.95-16.03L182.9 319.7L315.3 187.3z"/>
</>],
['regular',<>
	<path d="M295 151L160 286.1V188.7c0-13.25-10.75-24-24-24s-24 10.75-24 24V344c0 13.25 10.75 24 24 24h155.3c13.25 0 24-10.75 24-24s-10.75-24-24-24H193.9l135-135c9.375-9.375 9.375-24.56 0-33.94S304.4 141.7 295 151zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16V416z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM334.6 190.6L213.3 312H280c17.69 0 32 14.31 32 32s-14.31 32-32 32h-144c-17.69 0-32-14.31-32-32v-144c0-17.69 14.31-32 32-32s32 14.31 32 32v66.75l121.4-121.4c12.5-12.5 32.75-12.5 45.25 0S347.1 178.1 334.6 190.6z"/>
</>],
['thin',<>
	<path d="M317.7 173.7c3.117-3.117 3.127-8.188 0-11.31c-3.125-3.129-8.197-3.117-11.31 0L143.1 324.7V184c0-4.422-3.58-8-7.998-8C131.6 176 128 179.6 128 184v160C128 348.4 131.6 352 136 352h160c4.42 0 8-3.578 8-8c0-4.418-3.58-8-8-8H155.3L317.7 173.7zM448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320C419.3 480 448 451.3 448 416zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416z"/>
</>],

]);

const SquareArrowDownLeft: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareArrowDownLeft.displayName = "SquareArrowDownLeft";

export default SquareArrowDownLeft;