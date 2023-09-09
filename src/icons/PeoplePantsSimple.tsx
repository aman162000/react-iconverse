
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M128 160H64C28.65 160 0 188.7 0 224v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-128c17.67 0 32-14.33 32-32V224C192 188.7 163.3 160 128 160zM384 160h-64c-35.35 0-64 28.65-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-128c17.67 0 32-14.33 32-32V224C448 188.7 419.3 160 384 160z"/><path className="fa-secondary" d="M96 0C60.63 0 32 28.62 32 64s28.62 64 64 64s64-28.62 64-64S131.4 0 96 0zM352 0c-35.38 0-64 28.62-64 64s28.62 64 64 64s64-28.62 64-64S387.4 0 352 0z"/>
</>],
['light',<>
	<path d="M96 128c35.38 0 64-28.62 64-64S131.4 0 96 0S32 28.62 32 64S60.63 128 96 128zM96 32c17.64 0 32 14.36 32 32S113.6 96 96 96S64 81.64 64 64S78.36 32 96 32zM128 160H64C28.65 160 0 188.7 0 224v96c0 17.67 14.33 32 32 32v144C32 504.8 39.16 512 48 512S64 504.8 64 496V352h64v144C128 504.8 135.2 512 144 512S160 504.8 160 496V352c17.67 0 32-14.33 32-32V224C192 188.7 163.3 160 128 160zM160 320H32V224c0-17.64 14.36-32 32-32h64c17.64 0 32 14.36 32 32V320zM384 160h-64c-35.35 0-64 28.65-64 64v96c0 17.67 14.33 32 32 32v144c0 8.844 7.156 16 16 16s16-7.156 16-16V352h64v144c0 8.844 7.156 16 16 16s16-7.156 16-16V352c17.67 0 32-14.33 32-32V224C448 188.7 419.3 160 384 160zM416 320h-128V224c0-17.64 14.36-32 32-32h64c17.64 0 32 14.36 32 32V320zM352 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S316.6 128 352 128zM352 32c17.64 0 32 14.36 32 32s-14.36 32-32 32s-32-14.36-32-32S334.4 32 352 32z"/>
</>],
['regular',<>
	<path d="M384 160h-64c-35.35 0-64 28.65-64 64v96c0 17.67 14.33 32 32 32v136c0 13.25 10.75 24 24 24s24-10.75 24-24V352h32v136c0 13.25 10.75 24 24 24S416 501.3 416 488V352c17.67 0 32-14.33 32-32V224C448 188.7 419.3 160 384 160zM400 304h-96V224c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16V304zM352 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S316.6 128 352 128zM96 128c35.38 0 64-28.62 64-64S131.4 0 96 0S32 28.62 32 64S60.63 128 96 128zM128 160H64C28.65 160 0 188.7 0 224v96c0 17.67 14.33 32 32 32v136C32 501.3 42.75 512 56 512s24-10.75 24-24V352h32v136C112 501.3 122.8 512 136 512S160 501.3 160 488V352c17.67 0 32-14.33 32-32V224C192 188.7 163.3 160 128 160zM144 304h-96V224c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16V304z"/>
</>],
['solid',<>
	<path d="M128 160H64C28.65 160 0 188.7 0 224v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-128c17.67 0 32-14.33 32-32V224C192 188.7 163.3 160 128 160zM96 128c35.38 0 64-28.62 64-64S131.4 0 96 0S32 28.62 32 64S60.63 128 96 128zM352 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S316.6 128 352 128zM384 160h-64c-35.35 0-64 28.65-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-128c17.67 0 32-14.33 32-32V224C448 188.7 419.3 160 384 160z"/>
</>],
['thin',<>
	<path d="M96 128c35.38 0 64-28.62 64-64S131.4 0 96 0S32 28.62 32 64S60.63 128 96 128zM96 16c26.47 0 48 21.53 48 48S122.5 112 96 112S48 90.47 48 64S69.53 16 96 16zM128 160H64C28.65 160 0 188.7 0 224v96c0 17.67 14.33 32 32 32H24v128c0 17.64 14.34 32 32 32s32-14.36 32-32v-128h16v128c0 17.64 14.34 32 32 32s32-14.36 32-32v-128H160c17.67 0 32-14.33 32-32V224C192 188.7 163.3 160 128 160zM72 480c0 8.828-7.188 16-16 16s-16-7.172-16-16v-128h32V480zM152 480c0 8.828-7.188 16-16 16s-16-7.172-16-16v-128h32V480zM176 320c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16V224c0-26.47 21.53-48 48-48h64c26.47 0 48 21.53 48 48V320zM384 160h-64c-35.35 0-64 28.65-64 64v96c0 17.67 14.33 32 32 32h-8v128c0 17.64 14.34 32 32 32s32-14.36 32-32v-128h16v128c0 17.64 14.34 32 32 32s32-14.36 32-32v-128H416c17.67 0 32-14.33 32-32V224C448 188.7 419.3 160 384 160zM328 480c0 8.828-7.188 16-16 16s-16-7.172-16-16v-128h32V480zM408 480c0 8.828-7.188 16-16 16s-16-7.172-16-16v-128h32V480zM432 320c0 8.822-7.178 16-16 16h-128c-8.822 0-16-7.178-16-16V224c0-26.47 21.53-48 48-48h64c26.47 0 48 21.53 48 48V320zM352 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S316.6 128 352 128zM352 16c26.47 0 48 21.53 48 48S378.5 112 352 112S304 90.47 304 64S325.5 16 352 16z"/>
</>],

]);

const PeoplePantsSimple: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PeoplePantsSimple.displayName = "PeoplePantsSimple";

export default PeoplePantsSimple;
