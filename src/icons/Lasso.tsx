
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M576 176C576 273.2 447.1 352 288 352C273.1 352 258.4 351.3 244.1 349.1C251.8 365.3 256 382.4 256 400.2C256 461.9 205.9 512 144.2 512H56C42.75 512 32 501.3 32 488C32 474.7 42.75 464 56 464H144.2C179.4 464 208 435.4 208 400.2C208 375.3 193.5 352.7 170.9 342.2L126.6 321.8C50.2 290.1 0 236.6 0 176C0 78.8 128.9 0 288 0C447.1 0 576 78.8 576 176zM288 304C420.5 304 528 246.7 528 176C528 105.3 420.5 48 288 48C155.5 48 48 105.3 48 176C48 246.7 155.5 304 288 304z"/>
</>],
['light',<>
	<path d="M576 176C576 273.2 447.1 352 288 352C265.1 352 242.7 350.4 221.3 347.3C233.3 364.5 240 385.2 240 407C240 464.1 192.1 512 135 512H48C39.16 512 32 504.8 32 496C32 487.2 39.16 480 48 480H135C175.3 480 208 447.3 208 407C208 379.4 192.4 354.1 167.6 341.7L132.8 324.3C52.91 292.1 0 238.3 0 176C0 78.8 128.9 0 288 0C447.1 0 576 78.8 576 176V176zM288 320C429.4 320 544 255.5 544 176C544 96.47 429.4 32 288 32C146.6 32 32 96.47 32 176C32 255.5 146.6 320 288 320z"/>
</>],
['regular',<>
	<path d="M576 176C576 273.2 447.1 352 288 352C273.1 352 258.4 351.3 244.1 349.1C251.8 365.3 256 382.4 256 400.2C256 461.9 205.9 512 144.2 512H56C42.75 512 32 501.3 32 488C32 474.7 42.75 464 56 464H144.2C179.4 464 208 435.4 208 400.2C208 375.3 193.5 352.7 170.9 342.2L126.6 321.8C50.2 290.1 0 236.6 0 176C0 78.8 128.9 0 288 0C447.1 0 576 78.8 576 176zM288 304C420.5 304 528 246.7 528 176C528 105.3 420.5 48 288 48C155.5 48 48 105.3 48 176C48 246.7 155.5 304 288 304z"/>
</>],
['solid',<>
	<path d="M576 176C576 273.2 447.1 352 288 352C274.8 352 261.7 351.5 248.1 350.4C253.6 363.2 256 376.9 256 391C256 457.8 201.8 512 135 512H64C46.33 512 32 497.7 32 480C32 462.3 46.33 448 64 448H135C166.5 448 192 422.5 192 391C192 369.4 179.8 349.7 160.5 340L113.7 316.6L113.9 316.2C44.69 284.1 0 233.2 0 176C0 78.8 128.9 0 288 0C447.1 0 576 78.8 576 176V176zM288 288C411.7 288 512 237.9 512 176C512 114.1 411.7 64 288 64C164.3 64 64 114.1 64 176C64 237.9 164.3 288 288 288z"/>
</>],
['thin',<>
	<path d="M576 176C576 273.2 447.1 352 288 352C257.6 352 228.4 349.1 200.9 343.8C220.4 361.9 232 387.6 232 415C232 468.6 188.6 512 135 512H40C35.58 512 32 508.4 32 504C32 499.6 35.58 496 40 496H135C179.7 496 216 459.7 216 415C216 384.3 198.7 356.3 171.2 342.6L140.5 327.2C56.36 296.5 0 240.3 0 176C0 78.8 128.9 0 288 0C447.1 0 576 78.8 576 176L576 176zM288 336C438.2 336 560 264.4 560 176C560 87.63 438.2 16 288 16C137.8 16 16 87.63 16 176C16 264.4 137.8 336 288 336z"/>
</>],

]);

const Lasso: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Lasso.displayName = "Lasso";

export default Lasso;