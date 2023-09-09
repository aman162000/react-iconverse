
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352 160H160C142.3 160 128 174.3 128 192v11.57l128 51.2l128-51.2V192C384 174.3 369.7 160 352 160zM256 288C253.1 288 251.1 287.6 250.1 286.9L128 238V320c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V238l-122.1 48.82C260 287.6 258 288 256 288z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM384 320c0 17.67-14.33 32-32 32H160c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h192c17.67 0 32 14.33 32 32V320z"/>
</>],
['light',<>
	<path d="M352 160H160C142.3 160 128 174.3 128 192v128c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V192C384 174.3 369.7 160 352 160zM352 320H160V245.3l89.3 41.21C251.4 287.5 253.7 288 256 288s4.578-.5 6.703-1.469L352 245.3V320zM352 210.1l-96 44.31L160 210.1V192h192V210.1zM256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"/>
</>],
['regular',<>
	<path d="M256 288C253.1 288 251.1 287.6 250.1 286.9L128 238V320c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V238l-122.1 48.82C260 287.6 258 288 256 288zM352 160H160C142.3 160 128 174.3 128 192v11.57l128 51.2l128-51.2V192C384 174.3 369.7 160 352 160zM256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM384 320c0 17.67-14.33 32-32 32H160c-17.67 0-32-14.33-32-32V238l122.1 48.82C251.1 287.6 253.1 288 256 288s4.031-.375 5.938-1.141L384 238V320zM384 203.6l-128 51.2L128 203.6V192c0-17.67 14.33-32 32-32h192c17.67 0 32 14.33 32 32V203.6z"/>
</>],
['thin',<>
	<path d="M352 160H160C142.3 160 128 174.3 128 192v128c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V192C384 174.3 369.7 160 352 160zM368 320c0 8.822-7.178 16-16 16H160c-8.822 0-16-7.178-16-16V236.7l94.13 47.06C243.7 286.6 249.8 288 256 288s12.28-1.406 17.88-4.203L368 236.7V320zM368 218.9l-101.3 50.63c-6.75 3.375-14.75 3.375-21.5 0L144 218.9V192c0-8.822 7.178-16 16-16h192c8.822 0 16 7.178 16 16V218.9zM256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleEnvelope: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleEnvelope.displayName = "CircleEnvelope";

export default CircleEnvelope;
