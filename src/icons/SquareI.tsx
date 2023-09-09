
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M296 176C309.3 176 320 165.3 320 152S309.3 128 296 128h-144C138.8 128 128 138.8 128 152S138.8 176 152 176h48v160h-48C138.8 336 128 346.8 128 360S138.8 384 152 384h144c13.25 0 24-10.75 24-24s-10.75-24-24-24h-48v-160H296z"/><path className="fa-secondary" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM296 336c13.25 0 24 10.75 24 24S309.3 384 296 384h-144C138.8 384 128 373.3 128 360s10.75-24 24-24h48v-160h-48C138.8 176 128 165.3 128 152S138.8 128 152 128h144C309.3 128 320 138.8 320 152S309.3 176 296 176h-48v160H296z"/>
</>],
['light',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416zM320 144C320 135.2 312.8 128 304 128h-160C135.2 128 128 135.2 128 144S135.2 160 144 160h64.88C208.5 161.4 208 162.8 208 164.4v183.3C208 349.2 208.5 350.6 208.9 352H144C135.2 352 128 359.2 128 368S135.2 384 144 384h160c8.844 0 16-7.156 16-16S312.8 352 304 352h-64.88C239.5 350.6 240 349.2 240 347.6V164.4C240 162.8 239.5 161.4 239.1 160H304C312.8 160 320 152.8 320 144z"/>
</>],
['regular',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V416zM296 176C309.3 176 320 165.3 320 152S309.3 128 296 128h-144C138.8 128 128 138.8 128 152S138.8 176 152 176h48v160h-48C138.8 336 128 346.8 128 360S138.8 384 152 384h144c13.25 0 24-10.75 24-24s-10.75-24-24-24h-48v-160H296z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM296 336c13.25 0 24 10.75 24 24S309.3 384 296 384h-144C138.8 384 128 373.3 128 360s10.75-24 24-24h48v-160h-48C138.8 176 128 165.3 128 152S138.8 128 152 128h144C309.3 128 320 138.8 320 152S309.3 176 296 176h-48v160H296z"/>
</>],
['thin',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416zM312 144C316.4 144 320 140.4 320 136S316.4 128 312 128h-176C131.6 128 128 131.6 128 136S131.6 144 136 144h80v224h-80C131.6 368 128 371.6 128 376S131.6 384 136 384h176c4.406 0 8-3.578 8-8s-3.594-8-8-8h-80v-224H312z"/>
</>],

]);

const SquareI: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareI.displayName = "SquareI";

export default SquareI;