
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M48 127.1L448 128C448.4 128 448.9 128 449.3 128C460.5 128.3 470.9 131.6 480 136.9V136.6C499.1 147.6 512 168.3 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V80C0 106.5 21.49 128 48 128L48 127.1zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"/><path className="fa-secondary" d="M0 80C0 53.49 21.49 32 48 32H432C458.5 32 480 53.49 480 80V136.6C470.6 131.1 459.7 128 448 128L48 128C21.49 128 0 106.5 0 80V80z"/>
</>],
['light',<>
	<path d="M464 32C472.8 32 480 39.16 480 48C480 56.84 472.8 64 464 64H80C53.49 64 32 85.49 32 112V400C32 426.5 53.49 448 80 448H432C458.5 448 480 426.5 480 400V176C480 149.5 458.5 128 432 128H112C103.2 128 96 120.8 96 112C96 103.2 103.2 96 112 96H432C476.2 96 512 131.8 512 176V400C512 444.2 476.2 480 432 480H80C35.82 480 0 444.2 0 400V112C0 67.82 35.82 32 80 32H464zM360 288C360 274.7 370.7 264 384 264C397.3 264 408 274.7 408 288C408 301.3 397.3 312 384 312C370.7 312 360 301.3 360 288z"/>
</>],
['regular',<>
	<path d="M456 32C469.3 32 480 42.75 480 56C480 69.25 469.3 80 456 80H88C65.91 80 48 97.91 48 120V392C48 414.1 65.91 432 88 432H424C446.1 432 464 414.1 464 392V216C464 193.9 446.1 176 424 176H120C106.7 176 96 165.3 96 152C96 138.7 106.7 128 120 128H424C472.6 128 512 167.4 512 216V392C512 440.6 472.6 480 424 480H88C39.4 480 0 440.6 0 392V120C0 71.4 39.4 32 88 32H456zM352 304C352 286.3 366.3 272 384 272C401.7 272 416 286.3 416 304C416 321.7 401.7 336 384 336C366.3 336 352 321.7 352 304z"/>
</>],
['solid',<>
	<path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"/>
</>],
['thin',<>
	<path d="M472 32C476.4 32 480 35.58 480 40C480 44.42 476.4 48 472 48H72C41.07 48 16 73.07 16 104V408C16 438.9 41.07 464 72 464H440C470.9 464 496 438.9 496 408V184C496 153.1 470.9 128 440 128H72C67.58 128 64 124.4 64 120C64 115.6 67.58 112 72 112H440C479.8 112 512 144.2 512 184V408C512 447.8 479.8 480 440 480H72C32.24 480 0 447.8 0 408V104C0 64.24 32.24 32 72 32H472zM440 296C440 318.1 422.1 336 400 336C377.9 336 360 318.1 360 296C360 273.9 377.9 256 400 256C422.1 256 440 273.9 440 296zM400 272C386.7 272 376 282.7 376 296C376 309.3 386.7 320 400 320C413.3 320 424 309.3 424 296C424 282.7 413.3 272 400 272z"/>
</>],

]);

const Wallet: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Wallet.displayName = "Wallet";

export default Wallet;