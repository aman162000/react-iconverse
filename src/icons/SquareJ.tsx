
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 128C266.8 128 256 138.8 256 152v138.7C256 315.7 234.5 336 208 336S160 315.7 160 290.7V280C160 266.8 149.3 256 136 256S112 266.8 112 280v10.67C112 342.1 155.1 384 208 384s96-41.86 96-93.33V152C304 138.8 293.3 128 280 128z"/><path className="fa-secondary" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM304 290.7C304 342.1 260.9 384 208 384s-96-41.86-96-93.33V280C112 266.8 122.8 256 136 256S160 266.8 160 280v10.67C160 315.7 181.5 336 208 336S256 315.7 256 290.7V152C256 138.8 266.8 128 280 128s24 10.75 24 24V290.7z"/>
</>],
['light',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416zM304 128C295.2 128 288 135.2 288 144v149.3C288 325.7 259.3 352 224 352s-64-26.31-64-58.67V272C160 263.2 152.8 256 144 256S128 263.2 128 272v21.33C128 343.3 171.1 384 224 384s96-40.67 96-90.67V144C320 135.2 312.8 128 304 128z"/>
</>],
['regular',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V416zM280 128C266.8 128 256 138.8 256 152v138.7C256 315.7 234.5 336 208 336S160 315.7 160 290.7V280C160 266.8 149.3 256 136 256S112 266.8 112 280v10.67C112 342.1 155.1 384 208 384s96-41.86 96-93.33V152C304 138.8 293.3 128 280 128z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM304 290.7C304 342.1 260.9 384 208 384s-96-41.86-96-93.33V280C112 266.8 122.8 256 136 256S160 266.8 160 280v10.67C160 315.7 181.5 336 208 336S256 315.7 256 290.7V152C256 138.8 266.8 128 280 128s24 10.75 24 24V290.7z"/>
</>],
['thin',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416zM312 128c-4.406 0-8 3.578-8 8v160c0 39.7-35.88 72-80 72s-80-32.3-80-72C144 291.6 140.4 288 136 288S128 291.6 128 296C128 344.5 171.1 384 224 384s96-39.47 96-88v-160C320 131.6 316.4 128 312 128z"/>
</>],

]);

const SquareJ: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareJ.displayName = "SquareJ";

export default SquareJ;