
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M366.6 190.6L245.3 312H312c17.67 0 32 14.31 32 32s-14.33 32-32 32h-144c-17.67 0-32-14.31-32-32v-144c0-17.69 14.33-32 32-32s32 14.31 32 32v66.75l121.4-121.4c12.5-12.5 32.75-12.5 45.25 0S379.1 178.1 366.6 190.6z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM366.6 190.6L245.3 312H312c17.67 0 32 14.31 32 32s-14.33 32-32 32h-144c-17.67 0-32-14.31-32-32v-144c0-17.69 14.33-32 32-32s32 14.31 32 32v66.75l121.4-121.4c12.5-12.5 32.75-12.5 45.25 0S379.1 178.1 366.6 190.6z"/>
</>],
['light',<>
	<path d="M336 160c-4.094 0-8.188 1.562-11.31 4.688L192 297.4V208C192 199.2 184.8 192 176 192S160 199.2 160 208v127.6c0 8.812 7.141 15.97 15.95 16l128 .375C312.8 352 319.1 344.9 320 336c.0313-8.812-7.109-16-15.95-16.03L214.9 319.7l132.4-132.4c6.25-6.25 6.25-16.38 0-22.62C344.2 161.6 340.1 160 336 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"/>
</>],
['regular',<>
	<path d="M327 151L192 286.1V188.7c0-13.25-10.75-24-24-24s-24 10.75-24 24V344c0 13.25 10.75 24 24 24h155.3c13.25 0 24-10.75 24-24s-10.75-24-24-24H225.9l135-135c9.375-9.375 9.375-24.56 0-33.94S336.4 141.7 327 151zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM366.6 190.6L245.3 312H312c17.67 0 32 14.31 32 32s-14.33 32-32 32h-144c-17.67 0-32-14.31-32-32v-144c0-17.69 14.33-32 32-32s32 14.31 32 32v66.75l121.4-121.4c12.5-12.5 32.75-12.5 45.25 0S379.1 178.1 366.6 190.6z"/>
</>],
['thin',<>
	<path d="M338.3 162.3L175.1 324.7V184c0-4.422-3.58-8-7.998-8C163.6 176 160 179.6 160 184v160C160 348.4 163.6 352 168 352h160c4.42 0 8-3.578 8-8s-3.58-8-8-8H187.3l162.3-162.3c3.117-3.117 3.127-8.188 0-11.32C346.5 159.2 341.5 159.2 338.3 162.3zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleArrowDownLeft: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleArrowDownLeft.displayName = "CircleArrowDownLeft";

export default CircleArrowDownLeft;