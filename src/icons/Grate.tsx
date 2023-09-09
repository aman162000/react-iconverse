
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM384 416H64V96h320V416z"/><path className="fa-secondary" d="M352 288v128h-64V288h-32v128H192V288H160v128H96V288H64V224h32V96h64v128h32V96h64v128h32V96h64v128h32v64H352z"/>
</>],
['light',<>
	<path d="M352 96H96C78.33 96 64 110.3 64 128v256c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V128C384 110.3 369.7 96 352 96zM136 384H96V272h40V384zM136 240H96V128h40V240zM208 384H168V272H208V384zM208 240H168V128H208V240zM280 384H240V272h40V384zM280 240H240V128h40V240zM352 384h-40V272H352V384zM352 240h-40V128H352V240zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416z"/>
</>],
['regular',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 96v136h-56V80H384C392.8 80 400 87.18 400 96zM200 280v152h-48V280H200zM152 232V80h48v152H152zM248 280h48v152h-48V280zM248 232V80h48v152H248zM64 80h40v152H48V96C48 87.18 55.18 80 64 80zM48 416V280h56v152H64C55.18 432 48 424.8 48 416zM384 432h-40V280h56V416C400 424.8 392.8 432 384 432z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM96 416H64V288h32V416zM96 224H64V96h32V224zM192 416H160V288h32V416zM192 224H160V96h32V224zM288 416h-32V288h32V416zM288 224h-32V96h32V224zM384 416h-32V288h32V416zM384 224h-32V96h32V224z"/>
</>],
['thin',<>
	<path d="M352 96H96C78.33 96 64 110.3 64 128v256c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V128C384 110.3 369.7 96 352 96zM136 400H96c-8.822 0-16-7.178-16-16V264h56V400zM136 248H80V128c0-8.822 7.178-16 16-16h40V248zM216 400h-64V264h64V400zM216 248h-64V112h64V248zM296 400h-64V264h64V400zM296 248h-64V112h64V248zM368 384c0 8.822-7.178 16-16 16h-40V264h56V384zM368 248h-56V112H352c8.822 0 16 7.178 16 16V248zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416z"/>
</>],

]);

const Grate: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Grate.displayName = "Grate";

export default Grate;
