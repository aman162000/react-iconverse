
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 160c52.94 0 96 43.06 96 96s-43.06 96-96 96S96 308.9 96 256S139.1 160 192 160zM192 80C94.83 80 16 158.8 16 256c0 97.17 78.83 176 176 176s176-78.83 176-176C368 158.8 289.2 80 192 80z"/><path className="fa-secondary" d="M192 320c-35.3 0-64-28.7-64-64c0-35.3 28.7-64 64-64s64 28.7 64 64C256 291.3 227.3 320 192 320z"/>
</>],
['light',<>
	<path d="M192 112c79.4 0 144 64.6 144 144s-64.6 144-144 144S48 335.4 48 256S112.6 112 192 112zM192 80C94.8 80 16 158.8 16 256s78.8 176 176 176s176-78.8 176-176S289.2 80 192 80z"/>
</>],
['regular',<>
	<path d="M192 80C94.8 80 16 158.8 16 256s78.8 176 176 176s176-78.8 176-176S289.2 80 192 80zM192 384c-70.58 0-128-57.42-128-128s57.42-128 128-128s128 57.42 128 128S262.6 384 192 384z"/>
</>],
['solid',<>
	<path d="M192 80C94.83 80 16 158.8 16 256c0 97.17 78.83 176 176 176s176-78.83 176-176C368 158.8 289.2 80 192 80zM192 352c-52.95 0-96-43.05-96-96c0-52.95 43.05-96 96-96s96 43.05 96 96C288 308.9 244.1 352 192 352z"/>
</>],
['thin',<>
	<path d="M192 96c88.22 0 160 71.78 160 160s-71.78 160-160 160s-160-71.78-160-160S103.8 96 192 96zM192 80C94.8 80 16 158.8 16 256s78.8 176 176 176s176-78.8 176-176S289.2 80 192 80z"/>
</>],

]);

const Genderless: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Genderless.displayName = "Genderless";

export default Genderless;
