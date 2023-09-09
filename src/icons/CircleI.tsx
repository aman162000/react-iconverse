
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M328 176C341.3 176 352 165.3 352 152S341.3 128 328 128h-144C170.8 128 160 138.8 160 152S170.8 176 184 176h48v160h-48C170.8 336 160 346.8 160 360S170.8 384 184 384h144c13.25 0 24-10.75 24-24s-10.75-24-24-24h-48v-160H328z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM328 336c13.25 0 24 10.75 24 24S341.3 384 328 384h-144C170.8 384 160 373.3 160 360s10.75-24 24-24h48v-160h-48C170.8 176 160 165.3 160 152S170.8 128 184 128h144C341.3 128 352 138.8 352 152S341.3 176 328 176h-48v160H328z"/>
</>],
['light',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM352 144C352 135.2 344.8 128 336 128h-160C167.2 128 160 135.2 160 144S167.2 160 176 160h64.88C240.5 161.4 240 162.8 240 164.4v183.3C240 349.2 240.5 350.6 240.9 352H176C167.2 352 160 359.2 160 368S167.2 384 176 384h160c8.844 0 16-7.156 16-16S344.8 352 336 352h-64.88C271.5 350.6 272 349.2 272 347.6V164.4C272 162.8 271.5 161.4 271.1 160H336C344.8 160 352 152.8 352 144z"/>
</>],
['regular',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM328 176C341.3 176 352 165.3 352 152S341.3 128 328 128h-144C170.8 128 160 138.8 160 152S170.8 176 184 176h48v160h-48C170.8 336 160 346.8 160 360S170.8 384 184 384h144c13.25 0 24-10.75 24-24s-10.75-24-24-24h-48v-160H328z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM328 336c13.25 0 24 10.75 24 24S341.3 384 328 384h-144C170.8 384 160 373.3 160 360s10.75-24 24-24h48v-160h-48C170.8 176 160 165.3 160 152S170.8 128 184 128h144C341.3 128 352 138.8 352 152S341.3 176 328 176h-48v160H328z"/>
</>],
['thin',<>
	<path d="M344 144C348.4 144 352 140.4 352 136S348.4 128 344 128h-176C163.6 128 160 131.6 160 136S163.6 144 168 144h80v224h-80C163.6 368 160 371.6 160 376S163.6 384 168 384h176c4.406 0 8-3.578 8-8s-3.594-8-8-8h-80v-224H344zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleI: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleI.displayName = "CircleI";

export default CircleI;
