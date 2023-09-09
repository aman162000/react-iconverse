
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M40.23 111.9L308.1 4.753C315.7 1.702 324.3 1.702 331.9 4.753L599.8 111.9C624.1 121.6 640 145.2 640 171.3V488C640 501.3 629.3 512 616 512H568C554.7 512 544 501.3 544 488V223.1C544 206.3 529.7 191.1 512 191.1H128C110.3 191.1 96 206.3 96 223.1V488C96 501.3 85.25 512 72 512H24C10.75 512 0 501.3 0 488V171.3C0 145.2 15.93 121.6 40.23 111.9z"/><path className="fa-secondary" d="M128 248C128 234.7 138.7 224 152 224H296C309.3 224 320 234.7 320 248V328C320 341.3 309.3 352 296 352H152C138.7 352 128 341.3 128 328V248zM352 408C352 394.7 362.7 384 376 384H488C501.3 384 512 394.7 512 408V488C512 501.3 501.3 512 488 512H376C362.7 512 352 501.3 352 488V408zM296 384C309.3 384 320 394.7 320 408V488C320 501.3 309.3 512 296 512H152C138.7 512 128 501.3 128 488V408C128 394.7 138.7 384 152 384H296z"/>
</>],
['light',<>
	<path d="M326.2 35.98C322.2 34.3 317.8 34.3 313.8 35.98L51.58 146.4C39.72 151.4 32 162.1 32 175.9V496C32 504.8 24.84 512 16 512C7.164 512 0 504.8 0 496V175.9C0 150.1 15.43 126.9 39.16 116.9L301.4 6.484C313.3 1.469 326.7 1.469 338.6 6.484L600.8 116.9C624.6 126.9 640 150.1 640 175.9V496C640 504.8 632.8 512 624 512C615.2 512 608 504.8 608 496V175.9C608 162.1 600.3 151.4 588.4 146.4L326.2 35.98zM96 224C96 206.3 110.3 192 128 192H512C529.7 192 544 206.3 544 224V496C544 504.8 536.8 512 528 512C519.2 512 512 504.8 512 496V224H128V496C128 504.8 120.8 512 112 512C103.2 512 96 504.8 96 496V224zM480 416V464C480 490.5 458.5 512 432 512H208C181.5 512 160 490.5 160 464V303.1C160 277.5 181.5 255.1 208 255.1H304C330.5 255.1 352 277.5 352 303.1V368H432C458.5 368 480 389.5 480 416zM352 400V480H432C440.8 480 448 472.8 448 464V416C448 407.2 440.8 400 432 400H352zM320 480V400H192V464C192 472.8 199.2 480 208 480H320zM304 287.1H208C199.2 287.1 192 295.2 192 303.1V368H320V303.1C320 295.2 312.8 287.1 304 287.1z"/>
</>],
['regular',<>
	<path d="M323 51.12C321.1 50.34 318.9 50.34 316.1 51.12L62.98 154.1C53.93 157.8 48 166.6 48 176.3V488C48 501.3 37.25 512 24 512C10.75 512 0 501.3 0 488V176.3C0 147 17.78 120.6 44.95 109.6L298.1 6.634C312.5 1.164 327.5 1.164 341 6.634L595 109.6C622.2 120.6 640 147 640 176.3V488C640 501.3 629.3 512 616 512C602.7 512 592 501.3 592 488V176.3C592 166.6 586.1 157.8 577 154.1L323 51.12zM143.1 240V488C143.1 501.3 133.3 512 119.1 512C106.7 512 95.1 501.3 95.1 488V232C95.1 209.9 113.9 192 135.1 192H504C526.1 192 544 209.9 544 232V488C544 501.3 533.3 512 520 512C506.7 512 496 501.3 496 488V240H143.1zM440 416C453.3 416 464 426.7 464 440V488C464 501.3 453.3 512 440 512H376C362.7 512 352 501.3 352 488V440C352 426.7 362.7 416 376 416H440zM175.1 312C175.1 298.7 186.7 288 199.1 288H295.1C309.3 288 319.1 298.7 319.1 312V360C319.1 373.3 309.3 384 295.1 384H199.1C186.7 384 175.1 373.3 175.1 360V312zM295.1 416C309.3 416 319.1 426.7 319.1 440V488C319.1 501.3 309.3 512 295.1 512H199.1C186.7 512 175.1 501.3 175.1 488V440C175.1 426.7 186.7 416 199.1 416H295.1z"/>
</>],
['solid',<>
	<path d="M0 488V171.3C0 145.2 15.93 121.6 40.23 111.9L308.1 4.753C315.7 1.702 324.3 1.702 331.9 4.753L599.8 111.9C624.1 121.6 640 145.2 640 171.3V488C640 501.3 629.3 512 616 512H568C554.7 512 544 501.3 544 488V223.1C544 206.3 529.7 191.1 512 191.1H128C110.3 191.1 96 206.3 96 223.1V488C96 501.3 85.25 512 72 512H24C10.75 512 0 501.3 0 488zM488 384C501.3 384 512 394.7 512 408V488C512 501.3 501.3 512 488 512H376C362.7 512 352 501.3 352 488V408C352 394.7 362.7 384 376 384H488zM128 247.1C128 234.7 138.7 223.1 152 223.1H296C309.3 223.1 320 234.7 320 247.1V328C320 341.3 309.3 352 296 352H152C138.7 352 128 341.3 128 328V247.1zM296 384C309.3 384 320 394.7 320 408V488C320 501.3 309.3 512 296 512H152C138.7 512 128 501.3 128 488V408C128 394.7 138.7 384 152 384H296z"/>
</>],
['thin',<>
	<path d="M329.1 20.38C323.3 17.99 316.7 17.99 310.9 20.38L40.82 131.2C25.8 137.3 16 151.1 16 168.2V503.1C16 508.4 12.42 511.1 8 511.1C3.582 511.1 0 508.4 0 503.1V168.2C0 145.5 13.73 125 34.74 116.4L304.8 5.579C314.5 1.588 325.5 1.588 335.2 5.579L605.3 116.4C626.3 125 640 145.5 640 168.2V503.1C640 508.4 636.4 511.1 632 511.1C627.6 511.1 624 508.4 624 503.1V168.2C624 151.1 614.2 137.3 599.2 131.2L329.1 20.38zM119.1 207.1C115.6 207.1 111.1 211.6 111.1 215.1V503.1C111.1 508.4 108.4 511.1 103.1 511.1C99.58 511.1 95.1 508.4 95.1 503.1V215.1C95.1 202.7 106.7 191.1 119.1 191.1H520C533.3 191.1 544 202.7 544 215.1V503.1C544 508.4 540.4 511.1 536 511.1C531.6 511.1 528 508.4 528 503.1V215.1C528 211.6 524.4 207.1 520 207.1H119.1zM448 384C465.7 384 480 398.3 480 416V480C480 497.7 465.7 512 448 512H191.1C174.3 512 159.1 497.7 159.1 480V320C159.1 302.3 174.3 288 191.1 288H303.1C321.7 288 336 302.3 336 320V384H448zM303.1 304H191.1C183.2 304 175.1 311.2 175.1 320V384H319.1V320C319.1 311.2 312.8 304 303.1 304zM319.1 400H175.1V480C175.1 488.8 183.2 496 191.1 496H319.1V400zM336 496H448C456.8 496 464 488.8 464 480V416C464 407.2 456.8 400 448 400H336V496z"/>
</>],

]);

const WarehouseFull: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WarehouseFull.displayName = "WarehouseFull";

export default WarehouseFull;