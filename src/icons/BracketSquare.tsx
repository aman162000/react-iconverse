
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M128 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h96C145.7 480 160 465.7 160 448S145.7 416 128 416H64V96h64C145.7 96 160 81.67 160 64S145.7 32 128 32z"/>
</>],
['light',<>
	<path d="M48 64h96C152.8 64 160 56.82 160 48S152.8 32 144 32h-96C21.53 32 0 53.53 0 80v352C0 458.5 21.53 480 48 480h96c8.822 0 16-7.178 16-16S152.8 448 144 448h-96C39.18 448 32 440.8 32 432v-352C32 71.18 39.18 64 48 64z"/>
</>],
['regular',<>
	<path d="M120 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h88c13.25 0 24-10.75 24-23.1S133.3 432 120 432H48v-352h72C133.3 80 144 69.25 144 56S133.3 32 120 32z"/>
</>],
['solid',<>
	<path d="M128 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h96C145.7 480 160 465.7 160 448S145.7 416 128 416H64V96h64C145.7 96 160 81.67 160 64S145.7 32 128 32z"/>
</>],
['thin',<>
	<path d="M40 48h80C124.4 48 128 44.42 128 40S124.4 32 120 32h-80C17.94 32 0 49.94 0 72v368C0 462.1 17.94 480 40 480h80c4.406 0 8-3.578 8-8s-3.594-8-8-8h-80c-13.22 0-24-10.77-24-24V72C16 58.77 26.78 48 40 48z"/>
</>],

]);

const BracketSquare: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={192} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BracketSquare.displayName = "BracketSquare";

export default BracketSquare;
