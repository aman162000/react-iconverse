
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 31.1H64c-35.35 0-64 28.65-64 63.1v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64v-320C448 60.65 419.3 31.1 384 31.1zM332.5 378.6c-3.646 3.5-8.543 5.4-13.65 5.4H129.1c-5.105 0-10-1.9-13.65-5.4C83.79 347.4 64 304.1 64 255.1c0-48.1 19.79-91.4 51.46-122.6C119.1 129.9 124 127.9 129.1 128h189.8c5.104-.0996 10 1.9 13.65 5.4C364.2 164.6 384 207.9 384 255.1C384 304.1 364.2 347.4 332.5 378.6z"/><path className="fa-secondary" d="M224 288C210.8 288 200 298.8 200 312v24h48V312C248 298.8 237.2 288 224 288zM160 192C151.2 192 144 199.2 144 208V256c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V208C176 199.2 168.8 192 160 192zM288 192c-8.836 0-16 7.164-16 16V256c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V208C304 199.2 296.8 192 288 192zM332.5 378.6c-3.646 3.5-8.543 5.4-13.65 5.4H129.1c-5.105 0-10-1.9-13.65-5.4C83.79 347.4 64 304.1 64 255.1c0-48.1 19.79-91.4 51.46-122.6C119.1 129.9 124 127.9 129.1 128h189.8c5.104-.0996 10 1.9 13.65 5.4C364.2 164.6 384 207.9 384 255.1C384 304.1 364.2 347.4 332.5 378.6z"/>
</>],
['light',<>
	<path d="M384 31.1H64c-35.35 0-64 28.65-64 63.1v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64v-320C448 60.65 419.3 31.1 384 31.1zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416zM224 288C210.8 288 200 298.8 200 312v24h48V312C248 298.8 237.2 288 224 288zM176 192C167.2 192 160 199.2 160 208V256c0 8.836 7.164 16 16 16C184.8 272 192 264.8 192 256V208C192 199.2 184.8 192 176 192zM272 192C263.2 192 256 199.2 256 208V256c0 8.836 7.164 16 16 16C280.8 272 288 264.8 288 256V208C288 199.2 280.8 192 272 192zM319.3 128c-.123 0-.2441 0-.3672 .0039L128.7 128c-4.971 0-9.721 1.99-13.28 5.404C83.79 164.6 64 207.9 64 255.1c0 48.1 19.79 91.4 51.46 122.6c3.646 3.5 8.541 5.4 13.65 5.4h189.8c5.104 0 10-1.9 13.65-5.4C364.2 347.4 384 304.1 384 255.1c0-48.1-19.79-91.4-51.46-122.6C328.1 129.1 324.2 128 319.3 128zM313.8 351.1H134.2C109.5 325.8 96 291.1 96 256c0-36.07 13.61-70.06 38.17-95.1l179.6-.0078C338.5 186.2 352 220 352 256C352 292.1 338.4 326.1 313.8 351.1z"/>
</>],
['regular',<>
	<path d="M384 31.1H64c-35.35 0-64 28.66-64 63.1v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64v-320C448 60.66 419.3 31.1 384 31.1zM400 416c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16V416zM309.4 144H138.6C134 143.9 129.6 145.7 126.3 148.7C97.81 176 80 213.9 80 256s17.81 79.97 46.31 107.3c3.283 3.062 7.688 4.723 12.28 4.723h170.8c4.594 0 9-1.66 12.28-4.723C350.2 335.1 368 298.1 368 256s-17.81-79.98-46.31-107.3C318.4 145.7 314 143.9 309.4 144zM176 256c0 8.836-7.162 16-16 16C151.2 272 144 264.8 144 256V208C144 199.2 151.2 192 160 192c8.838 0 16 7.164 16 16V256zM248 336h-48V312C200 298.8 210.8 288 224 288s24 10.78 24 24V336zM304 256c0 8.836-7.162 16-16 16c-8.836 0-16-7.164-16-16V208C272 199.2 279.2 192 288 192c8.838 0 16 7.164 16 16V256z"/>
</>],
['solid',<>
	<path d="M224 288C210.8 288 200 298.8 200 312v24h48V312C248 298.8 237.2 288 224 288zM160 192C151.2 192 144 199.2 144 208V256c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V208C176 199.2 168.8 192 160 192zM288 192c-8.836 0-16 7.164-16 16V256c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V208C304 199.2 296.8 192 288 192zM384 31.1H64c-35.35 0-64 28.65-64 63.1v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64v-320C448 60.65 419.3 31.1 384 31.1zM332.5 378.6c-3.646 3.5-8.543 5.4-13.65 5.4H129.1c-5.105 0-10-1.9-13.65-5.4C83.79 347.4 64 304.1 64 255.1c0-48.1 19.79-91.4 51.46-122.6C119.1 129.9 124 127.9 129.1 128h189.8c5.104-.0996 10 1.9 13.65 5.4C364.2 164.6 384 207.9 384 255.1C384 304.1 364.2 347.4 332.5 378.6z"/>
</>],
['thin',<>
	<path d="M224 272c-17.66 0-32 14.36-32 32v24c0 4.422 3.594 8 8 8h48c4.406 0 8-3.578 8-8V304C256 286.4 241.7 272 224 272zM240 320h-32V304C208 295.2 215.2 288 224 288s16 7.172 16 16V320zM160 192C155.6 192 152 195.6 152 200v64C152 268.4 155.6 272 160 272c4.42 0 8-3.582 8-8v-64C168 195.6 164.4 192 160 192zM288 192c-4.418 0-8 3.582-8 8v64c0 4.418 3.582 8 8 8c4.42 0 8-3.582 8-8v-64C296 195.6 292.4 192 288 192zM384 31.1H64c-35.35 0-64 28.65-64 63.1v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64v-320C448 60.65 419.3 31.1 384 31.1zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416zM319.3 128l-.0371 16c.7715 0 1.609 .3447 2.088 .8018C351.4 174.5 368 213.1 368 256c0 42.04-16.58 81.54-46.54 111.1c-.6328 .6074-1.545 .9434-2.566 .9434H129.1c-1.021 0-1.934-.3359-2.418-.7988C96.58 337.5 80 298 80 256c0-42.04 16.58-81.54 46.54-111.1c.625-.5977 1.424-.9434 2.551-.9434l190.1-.0029L319.3 128H128.7c-4.975 0-9.719 1.988-13.28 5.404C83.79 164.6 64 207.9 64 255.1c0 48.1 19.79 91.4 51.46 122.6c3.646 3.5 8.541 5.4 13.65 5.4h189.8c5.104 0 10-1.9 13.65-5.4C364.2 347.4 384 304.1 384 255.1c0-48.1-19.79-91.4-51.46-122.6C328.1 129.1 324.2 128 319.3 128z"/>
</>],

]);

const Outlet: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Outlet.displayName = "Outlet";

export default Outlet;