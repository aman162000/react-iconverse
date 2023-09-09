
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V288h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z"/><path className="fa-secondary" d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336z"/>
</>],
['light',<>
	<path d="M448 96h-64V48C384 21.53 362.5 0 336 0h-160C149.5 0 128 21.53 128 48V96H64C28.65 96 0 124.7 0 160v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM160 48C160 39.17 167.2 32 176 32h160C344.8 32 352 39.17 352 48V96H160V48zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V288h144v64c0 8.844 7.156 16 16 16h128c8.844 0 16-7.156 16-16V288H480V416zM208 336V288h96v48H208zM480 256H32V160c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32V256z"/>
</>],
['regular',<>
	<path d="M448 96h-64V64c0-35.35-28.65-64-64-64H192C156.7 0 128 28.65 128 64v32H64C28.65 96 0 124.7 0 160v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM192 48h128c8.837 0 16 7.163 16 16v32h-160V64C176 55.16 183.2 48 192 48zM64 144h384c8.8 0 16 7.2 16 16v96h-416V160C48 151.2 55.2 144 64 144zM448 432H64c-8.8 0-16-7.2-16-16V304H192V320c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V304h144V416C464 424.8 456.8 432 448 432z"/>
</>],
['solid',<>
	<path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z"/>
</>],
['thin',<>
	<path d="M464 96H384V40C384 17.94 366.1 0 344 0h-176C145.9 0 128 17.94 128 40V96H48C21.49 96 0 117.5 0 144v288C0 458.5 21.49 480 48 480h416c26.51 0 48-21.49 48-48v-288C512 117.5 490.5 96 464 96zM144 40c0-13.22 10.78-24 24-24h176c13.22 0 24 10.78 24 24V96h-224V40zM496 432c0 17.64-14.36 32-32 32h-416c-17.64 0-32-14.36-32-32v-160h160v56C176 341.2 186.8 352 200 352h112c13.22 0 24-10.78 24-24V272h160V432zM320 272v56c0 4.406-3.594 8-8 8h-112C195.6 336 192 332.4 192 328V272H320zM16 256V144c0-17.64 14.36-32 32-32h416c17.64 0 32 14.36 32 32V256H16z"/>
</>],

]);

const Briefcase: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Briefcase.displayName = "Briefcase";

export default Briefcase;
