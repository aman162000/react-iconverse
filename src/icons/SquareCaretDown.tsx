
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z"/><path className="fa-secondary" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z"/>
</>],
['light',<>
	<path d="M342.6 246.6C362.6 226.5 348.5 192 320 192H128C99.64 192 85.28 226.5 105.4 246.6l95.95 96c12.49 12.5 32.86 12.5 45.35 0L342.6 246.6zM128 224h192l-96 96L128 224zM448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320C419.3 480 448 451.3 448 416zM64 448c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64z"/>
</>],
['regular',<>
	<path d="M320 192H128C118.5 192 109.8 197.7 105.1 206.4C102.2 215.1 103.9 225.3 110.4 232.3l96 104C210.9 341.2 217.3 344 224 344s13.09-2.812 17.62-7.719l96-104c6.469-7 8.188-17.19 4.375-25.91C338.2 197.7 329.5 192 320 192zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16V416z"/>
</>],
['solid',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z"/>
</>],
['thin',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.34 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416zM313.6 192H134.4C123.1 192 112.8 198.6 108.2 208.9C103.5 219.2 105.3 231.3 112.8 239.8l89.56 102.4C207.8 348.4 215.7 352 224 352s16.2-3.59 21.67-9.846l89.59-102.4c7.426-8.428 9.227-20.56 4.555-30.87C335.2 198.6 324.9 192 313.6 192zM323.2 229.2l-89.6 102.4C231.2 334.4 227.7 336 224 336s-7.199-1.6-9.625-4.375L124.8 229.2c-3.324-3.775-4.098-9.15-2.023-13.72C124.8 210.9 129.4 208 134.4 208h179.2c5.023 0 9.574 2.924 11.65 7.5C327.3 220.1 326.6 225.4 323.2 229.2z"/>
</>],

]);

const SquareCaretDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareCaretDown.displayName = "SquareCaretDown";

export default SquareCaretDown;