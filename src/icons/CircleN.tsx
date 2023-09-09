
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M328 128c-13.25 0-24 10.75-24 24v131.2L203.7 138.3c-5.953-8.641-16.88-12.31-26.89-9.25C166.8 132.2 160 141.5 160 152v208C160 373.3 170.8 384 184 384s24-10.75 24-24V228.8l100.3 144.8C312.8 380.3 320.3 384 328 384c2.391 0 4.797-.3594 7.156-1.094C345.2 379.8 352 370.5 352 360v-208C352 138.8 341.3 128 328 128z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM352 360c0 10.5-6.828 19.78-16.84 22.91C332.8 383.6 330.4 384 328 384c-7.719 0-15.17-3.734-19.73-10.34L208 228.8V360C208 373.3 197.3 384 184 384S160 373.3 160 360v-208c0-10.5 6.828-19.78 16.84-22.91c10.02-3.062 20.94 .6094 26.89 9.25L304 283.2V152C304 138.8 314.8 128 328 128S352 138.8 352 152V360z"/>
</>],
['light',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM352 128c-8.844 0-16 7.156-16 16v180.8L172.1 133.6C167.8 128.5 160.7 126.6 154.5 129C148.2 131.3 144 137.3 144 144v224C144 376.8 151.2 384 160 384s16-7.156 16-16V187.3l163.9 191.2C342.1 382 347.4 384 352 384c1.859 0 3.734-.3281 5.547-1C363.8 380.7 368 374.7 368 368v-224C368 135.2 360.8 128 352 128z"/>
</>],
['regular',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM328 128c-13.25 0-24 10.75-24 24v131.2L203.7 138.3c-5.953-8.641-16.88-12.31-26.89-9.25C166.8 132.2 160 141.5 160 152v208C160 373.3 170.8 384 184 384s24-10.75 24-24V228.8l100.3 144.8C312.8 380.3 320.3 384 328 384c2.391 0 4.797-.3594 7.156-1.094C345.2 379.8 352 370.5 352 360v-208C352 138.8 341.3 128 328 128z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM352 360c0 10.5-6.828 19.78-16.84 22.91C332.8 383.6 330.4 384 328 384c-7.719 0-15.17-3.734-19.73-10.34L208 228.8V360C208 373.3 197.3 384 184 384S160 373.3 160 360v-208c0-10.5 6.828-19.78 16.84-22.91c10.02-3.062 20.94 .6094 26.89 9.25L304 283.2V152C304 138.8 314.8 128 328 128S352 138.8 352 152V360z"/>
</>],
['thin',<>
	<path d="M360 128C355.6 128 352 131.6 352 136v218.5L158 130.8C155.9 128.3 152.3 127.4 149.2 128.5C146.1 129.7 144 132.7 144 136v240C144 380.4 147.6 384 152 384S160 380.4 160 376V157.5l193.1 223.8C355.5 383 357.7 384 360 384c.9375 0 1.891-.1719 2.797-.5C365.9 382.3 368 379.3 368 376v-240C368 131.6 364.4 128 360 128zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleN: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleN.displayName = "CircleN";

export default CircleN;