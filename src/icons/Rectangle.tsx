
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128z"/>
</>],
['light',<>
	<path d="M448 64C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H448zM448 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H448C465.7 416 480 401.7 480 384V128C480 110.3 465.7 96 448 96z"/>
</>],
['regular',<>
	<path d="M448 64C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H448zM448 112H64C55.16 112 48 119.2 48 128V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V128C464 119.2 456.8 112 448 112z"/>
</>],
['solid',<>
	<path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128z"/>
</>],
['thin',<>
	<path d="M448 64C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H448zM448 80H64C37.49 80 16 101.5 16 128V384C16 410.5 37.49 432 64 432H448C474.5 432 496 410.5 496 384V128C496 101.5 474.5 80 448 80z"/>
</>],

]);

const Rectangle: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Rectangle.displayName = "Rectangle";

export default Rectangle;