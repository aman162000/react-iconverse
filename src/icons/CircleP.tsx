
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 128h-96C170.8 128 160 138.8 160 152v208C160 373.3 170.8 384 184 384s24-10.75 24-24V304h72c48.53 0 88-39.47 88-88S328.5 128 280 128zM280 256H208V176h72C302.1 176 320 193.9 320 216S302.1 256 280 256z"/><path className="fa-secondary" d="M280 176H208V256h72C302.1 256 320 238.1 320 216S302.1 176 280 176zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM280 304H208v56C208 373.3 197.3 384 184 384S160 373.3 160 360v-208C160 138.8 170.8 128 184 128h96c48.53 0 88 39.47 88 88S328.5 304 280 304z"/>
</>],
['light',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM272 128h-96C167.2 128 160 135.2 160 144v224C160 376.8 167.2 384 176 384S192 376.8 192 368V320h80c52.94 0 96-43.06 96-96S324.9 128 272 128zM272 288H192V160h80c35.28 0 64 28.7 64 64S307.3 288 272 288z"/>
</>],
['regular',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM280 128h-96C170.8 128 160 138.8 160 152v208C160 373.3 170.8 384 184 384s24-10.75 24-24V304h72c48.53 0 88-39.47 88-88S328.5 128 280 128zM280 256H208V176h72C302.1 176 320 193.9 320 216S302.1 256 280 256z"/>
</>],
['solid',<>
	<path d="M280 176H208V256h72C302.1 256 320 238.1 320 216S302.1 176 280 176zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM280 304H208v56C208 373.3 197.3 384 184 384S160 373.3 160 360v-208C160 138.8 170.8 128 184 128h96c48.53 0 88 39.47 88 88S328.5 304 280 304z"/>
</>],
['thin',<>
	<path d="M280 128h-112C163.6 128 160 131.6 160 136v240C160 380.4 163.6 384 168 384s8-3.578 8-8V304h104c48.53 0 88-39.47 88-88S328.5 128 280 128zM280 288H176V144h104C319.7 144 352 176.3 352 216S319.7 288 280 288zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleP: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleP.displayName = "CircleP";

export default CircleP;