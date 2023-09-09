
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M432 448h-416C7.164 448 0 455.2 0 464v32c0 8.836 7.151 15.99 15.99 15.99h416C440.8 511.1 448 504.8 448 496v-32C448 455.2 440.8 448 432 448zM112 96C120.8 96 128 88.84 128 80C128 71.16 120.8 64 112 64S96 71.16 96 80C96 88.84 103.2 96 112 96zM336 96C344.8 96 352 88.84 352 80C352 71.16 344.8 64 336 64S320 71.16 320 80C320 88.84 327.2 96 336 96z"/><path className="fa-secondary" d="M352 0H96C60.65 0 32 28.65 32 64v384h384V64C416 28.65 387.3 0 352 0zM112 96C103.2 96 96 88.84 96 80C96 71.16 103.2 64 112 64S128 71.16 128 80C128 88.84 120.8 96 112 96zM336 96C327.2 96 320 88.84 320 80C320 71.16 327.2 64 336 64S352 71.16 352 80C352 88.84 344.8 96 336 96z"/>
</>],
['light',<>
	<path d="M128 80C119.2 80 112 87.16 112 96c0 8.836 7.164 16 16 16S144 104.8 144 96C144 87.16 136.8 80 128 80zM320 80c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16s16-7.164 16-16C336 87.16 328.8 80 320 80zM432 480H416V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v416H15.96C7.146 480 0 487.2 0 496s7.173 15.99 15.99 15.99h416C440.8 511.1 448 504.8 448 496S440.9 480 432 480zM384 480H64V64c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32V480z"/>
</>],
['regular',<>
	<path d="M144 88c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24S168 125.3 168 112C168 98.74 157.3 88 144 88zM304 88c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C328 98.74 317.3 88 304 88zM424 464H416V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v400H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h400c13.25 0 24-10.75 24-24C448 474.7 437.3 464 424 464zM368 464h-288V64c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16V464z"/>
</>],
['solid',<>
	<path d="M432 448h-416C7.164 448 0 455.2 0 464v32c0 8.836 7.151 15.99 15.99 15.99h416C440.8 511.1 448 504.8 448 496v-32C448 455.2 440.8 448 432 448zM416 64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v352h384V64zM112 96C103.2 96 96 88.84 96 80C96 71.16 103.2 64 112 64S128 71.16 128 80C128 88.84 120.8 96 112 96zM336 96C327.2 96 320 88.84 320 80C320 71.16 327.2 64 336 64S352 71.16 352 80C352 88.84 344.8 96 336 96z"/>
</>],
['thin',<>
	<path d="M320 64c-17.64 0-32 14.36-32 32s14.36 32 32 32s32-14.36 32-32S337.6 64 320 64zM320 112c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16s16 7.162 16 16C336 104.8 328.8 112 320 112zM128 64C110.4 64 96 78.36 96 96s14.36 32 32 32s32-14.36 32-32S145.6 64 128 64zM128 112C119.2 112 112 104.8 112 96c0-8.838 7.164-16 16-16S144 87.16 144 96C144 104.8 136.8 112 128 112zM440 496H416V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v432H8C3.578 496 0 499.6 0 504S3.578 512 8 512h432c4.422 0 8-3.594 8-8S444.4 496 440 496zM48 496V64c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48l.0215 432H48z"/>
</>],

]);

const Pedestal: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Pedestal.displayName = "Pedestal";

export default Pedestal;
