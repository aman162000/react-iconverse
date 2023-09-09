
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M305.9 247.8C314.7 235.4 320 220.3 320 204C320 162.1 285.9 128 244 128H152C138.8 128 128 138.8 128 152v208C128 373.3 138.8 384 152 384h108c41.91 0 76-34.09 76-76C336 283.4 324.1 261.7 305.9 247.8zM176 176h68c15.44 0 28 12.56 28 28S259.4 232 244 232H176V176zM260 336H176V280h84C275.4 280 288 292.6 288 308S275.4 336 260 336z"/><path className="fa-secondary" d="M272 204c0-15.44-12.56-28-28-28H176v56h68C259.4 232 272 219.4 272 204zM260 280H176v56h84C275.4 336 288 323.4 288 308S275.4 280 260 280zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM260 384H152C138.8 384 128 373.3 128 360v-208C128 138.8 138.8 128 152 128h92C285.9 128 320 162.1 320 204c0 16.35-5.301 31.41-14.12 43.82C324.1 261.7 336 283.4 336 308C336 349.9 301.9 384 260 384z"/>
</>],
['light',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416zM299.8 249.9C312.2 236.9 320 219.4 320 200C320 160.2 287.8 128 248 128H160C142.3 128 128 142.3 128 160v192c0 17.67 14.33 32 32 32h104c39.77 0 72-32.24 72-72C336 285.3 321.3 262.3 299.8 249.9zM160 160h88C270.1 160 288 177.9 288 200S270.1 240 248 240H160V160zM264 352H160V272h104c22.06 0 40 17.94 40 40S286.1 352 264 352z"/>
</>],
['regular',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM400 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V416zM305.9 247.8C314.7 235.4 320 220.3 320 204C320 162.1 285.9 128 244 128H152C138.8 128 128 138.8 128 152v208C128 373.3 138.8 384 152 384h108c41.91 0 76-34.09 76-76C336 283.4 324.1 261.7 305.9 247.8zM176 176h68c15.44 0 28 12.56 28 28S259.4 232 244 232H176V176zM260 336H176V280h84C275.4 280 288 292.6 288 308S275.4 336 260 336z"/>
</>],
['solid',<>
	<path d="M272 204c0-15.44-12.56-28-28-28H176v56h68C259.4 232 272 219.4 272 204zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM260 384H152C138.8 384 128 373.3 128 360v-208C128 138.8 138.8 128 152 128h92C285.9 128 320 162.1 320 204c0 16.35-5.301 31.41-14.12 43.82C324.1 261.7 336 283.4 336 308C336 349.9 301.9 384 260 384zM260 280H176v56h84C275.4 336 288 323.4 288 308S275.4 280 260 280z"/>
</>],
['thin',<>
	<path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM432 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V416zM276.5 250.3C293.1 237.9 304 218.3 304 196C304 158.5 273.5 128 236 128H136C131.6 128 128 131.6 128 136v240C128 380.4 131.6 384 136 384h124c37.5 0 68-30.5 68-68C328 284.2 306 257.7 276.5 250.3zM144 144h92C264.7 144 288 167.3 288 196S264.7 248 236 248H144V144zM260 368H144V264h116c28.67 0 52 23.33 52 52S288.7 368 260 368z"/>
</>],

]);

const SquareB: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareB.displayName = "SquareB";

export default SquareB;