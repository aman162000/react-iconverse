
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M504.8 273.5l-144.1 136c-6.975 6.578-17.2 8.375-26 4.594c-8.803-3.797-14.51-12.47-14.51-22.05l-.0918-71.1l-128-.001c-17.69 0-32.02-14.33-32.02-32v-64c0-17.67 14.34-32 32.02-32l128 .001l.0918-72c0-9.578 5.707-18.25 14.51-22.05c8.803-3.781 19.03-1.984 26 4.594l144.1 136C514.4 247.6 514.4 264.4 504.8 273.5z"/><path className="fa-secondary" d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480z"/>
</>],
['light',<>
	<path d="M176 448h-96C53.53 448 32 426.5 32 400v-288C32 85.53 53.53 64 80 64h96C184.8 64 192 56.84 192 48S184.8 32 176 32h-96C35.88 32 0 67.88 0 112v288C0 444.1 35.88 480 80 480h96C184.8 480 192 472.8 192 464S184.8 448 176 448zM502.6 233.4l-128-128c-9.156-9.156-22.91-11.91-34.88-6.938C327.8 103.4 320 115.1 320 128l.0918 63.1L176 192C149.5 192 128 213.5 128 240v32C128 298.5 149.5 320 176 320l144.1-.001L320 384c0 12.94 7.797 24.62 19.75 29.56c11.97 4.969 25.72 2.219 34.88-6.938l128-128C508.9 272.4 512 264.2 512 256S508.9 239.6 502.6 233.4zM352 384V288H176C167.2 288 160 280.8 160 272v-32C160 231.2 167.2 224 176 224H352l-.0039-96l128 128L352 384z"/>
</>],
['regular',<>
	<path d="M168 432H96c-26.4 0-48-21.6-48-48V128c0-26.4 21.6-48 48-48h72C181.3 80 192 69.25 192 56C192 42.74 181.3 32 168 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h72C181.3 480 192 469.3 192 456C192 442.7 181.3 432 168 432zM503.9 238.6L351.5 104.4c-9.844-8.75-24-10.88-36.09-5.469C303.6 104.3 296 115.9 296 128.7v55.31H176c-22.06 0-40 17.94-40 40v64c0 22.06 17.94 40 40 40h120v55.31c0 12.75 7.625 24.41 19.41 29.72c4.438 2 9.156 2.969 13.84 2.969c8.062 0 16.03-2.906 22.25-8.438l152.4-133.1C509.1 269.9 512 263.4 512 256.5S509.1 243.1 503.9 238.6zM344 350V279.1h-160v-48h160V161.1l107.8 94.54L344 350z"/>
</>],
['solid',<>
	<path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/>
</>],
['thin',<>
	<path d="M40 480h80C124.4 480 128 476.4 128 472S124.4 464 120 464h-80c-13.23 0-24-10.77-24-24V72c0-13.23 10.77-24 24-24h80C124.4 48 128 44.42 128 40S124.4 32 120 32h-80C17.94 32 0 49.94 0 72v368C0 462.1 17.94 480 40 480zM502.6 233.4l-128-128c-9.156-9.156-22.91-11.91-34.88-6.938C327.8 103.4 320 115.1 320 128l.0918 63.1L160 192C142.3 192 128 206.3 128 224v64c0 17.67 14.33 32 32 32l160.1-.001L320 384c0 12.94 7.797 24.62 19.75 29.56c11.97 4.969 25.72 2.219 34.88-6.938l128-128C508.9 272.4 512 264.2 512 256S508.9 239.6 502.6 233.4zM491.3 267.3l-128 128c-4.596 4.598-11.44 5.961-17.45 3.463C339.9 396.3 336 390.5 336 384V304H160C151.2 304 144 296.8 144 288V224c0-8.822 7.178-16 16-16h176V128c0-6.502 3.869-12.3 9.885-14.79c5.988-2.486 12.83-1.123 17.43 3.475l128 128C494.3 247.7 496 251.7 496 256S494.3 264.3 491.3 267.3z"/>
</>],

]);

const RightFromBracket: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RightFromBracket.displayName = "RightFromBracket";

export default RightFromBracket;