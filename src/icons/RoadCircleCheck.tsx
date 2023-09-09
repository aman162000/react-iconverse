
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3z"/><path className="fa-secondary" d="M288 96C288 113.7 302.3 128 320 128C337.7 128 352 113.7 352 96V32H426.8C453.9 32 478 49.08 487.1 74.63L529.8 195.2C518.9 193.1 507.6 192 496 192C436.5 192 383.9 221.6 352 266.8V224C352 206.3 337.7 192 320 192C302.3 192 288 206.3 288 224V288C288 305.7 302.3 320 320 320C322.3 320 324.6 319.7 326.8 319.3C322.4 334.7 320 351.1 320 368C320 373.4 320.2 378.7 320.7 384L320 384C302.3 384 288 398.3 288 416V480H86.61C56.45 480 32 455.5 32 425.4C32 419.2 33.06 413 35.13 407.2L152.9 74.63C161.1 49.08 186.1 32 213.2 32H287.1L288 96z"/>
</>],
['light',<>
	<path d="M157.5 74.04C166.7 48.79 190.7 32 217.6 32H422.4C449.3 32 473.3 48.79 482.5 74.04L526.6 194.7C516.7 192.9 506.4 192 496 192C494.5 192 493.1 192 491.6 192.1L452.5 85.02C447.9 72.4 435.9 64 422.4 64H336V112C336 120.8 328.8 128 320 128C311.2 128 304 120.8 304 112V64H217.6C204.1 64 192.1 72.4 187.5 85.02L70.59 405C62.96 425.9 78.41 448 100.6 448H339.2C345 459.4 352.1 470.2 360.2 480H100.6C56.19 480 25.27 435.8 40.53 394L157.5 74.04zM336 208V294.6C332.5 302.2 329.5 310.2 327.1 318.3C324.1 319.4 322.6 319.1 320 319.1C311.2 319.1 304 312.8 304 303.1V207.1C304 199.2 311.2 191.1 320 191.1C328.8 191.1 336 199.2 336 207.1V208zM563.3 324.7C569.6 330.9 569.6 341.1 563.3 347.3L491.3 419.3C485.1 425.6 474.9 425.6 468.7 419.3L428.7 379.3C422.4 373.1 422.4 362.9 428.7 356.7C434.9 350.4 445.1 350.4 451.3 356.7L480 385.4L540.7 324.7C546.9 318.4 557.1 318.4 563.3 324.7H563.3zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 480C557.9 480 608 429.9 608 368C608 306.1 557.9 256 496 256C434.1 256 384 306.1 384 368C384 429.9 434.1 480 496 480z"/>
</>],
['regular',<>
	<path d="M422.3 32C452.6 32 479.7 51.05 490 79.61L531.8 195.6C520.2 193.3 508.3 192 496 192C490.5 192 485.1 192.3 479.7 192.7L444.8 95.87C441.4 86.35 432.4 80 422.3 80H344V104C344 117.3 333.3 128 319.1 128C306.7 128 295.1 117.3 295.1 104V80H217.7C207.6 80 198.6 86.35 195.2 95.87L85.71 399.9C80.08 415.5 91.67 432 108.3 432H295.1V408C295.1 394.7 306.7 384 319.1 384C320.2 384 320.5 384 320.7 384C323.1 420.3 338.3 453.4 360.2 480H108.3C58.43 480 23.66 430.5 40.55 383.6L149.1 79.61C160.3 51.05 187.4 32 217.7 32H422.3zM319.1 320C306.7 320 295.1 309.3 295.1 296V216C295.1 202.7 306.7 192 319.1 192C333.3 192 344 202.7 344 216V279.2C336.8 291.6 330.1 304.9 326.9 318.1C324.7 319.6 322.4 320 319.1 320zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7H540.7z"/>
</>],
['solid',<>
	<path d="M213.2 32H288V96C288 113.7 302.3 128 320 128C337.7 128 352 113.7 352 96V32H426.8C453.9 32 478 49.08 487.1 74.63L529.8 195.2C518.9 193.1 507.6 192 496 192C436.5 192 383.9 221.6 352 266.8V224C352 206.3 337.7 192 320 192C302.3 192 288 206.3 288 224V288C288 305.7 302.3 320 320 320C322.3 320 324.6 319.7 326.8 319.3C322.4 334.7 320 351.1 320 368C320 373.4 320.2 378.7 320.7 384L320 384C302.3 384 288 398.3 288 416V480H86.61C56.45 480 32 455.5 32 425.4C32 419.2 33.06 413 35.13 407.2L152.9 74.63C161.1 49.08 186.1 32 213.2 32H213.2zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7H540.7z"/>
</>],
['thin',<>
	<path d="M422.6 32C446 32 466.1 46.58 475.1 68.55L521.5 193.8C515.7 192.1 509.8 192.4 503.8 192.2L460.1 74.11C454.3 58.42 439.3 48 422.6 48H328V104C328 108.4 324.4 112 319.1 112C315.6 112 311.1 108.4 311.1 104V48H217.4C200.7 48 185.7 58.42 179.9 74.11L55.45 410.1C45.78 436.2 65.1 464 92.96 464H311.1V408C311.1 403.6 315.6 400 319.1 400C321.1 400 322.1 400.2 323 400.6C324.3 407.4 325.1 414.1 328 420.6V464H348.5C352.1 469.6 356 474.9 360.2 480H92.96C53.96 480 26.9 441.1 40.45 404.6L164.9 68.55C173 46.58 193.1 32 217.4 32H422.6zM328 312C328 316.4 324.4 320 320 320C315.6 320 312 316.4 312 312V200C312 195.6 315.6 192 320 192C324.4 192 328 195.6 328 200V312zM565.7 322.3C568.8 325.5 568.8 330.5 565.7 333.7L485.7 413.7C482.5 416.8 477.5 416.8 474.3 413.7L426.3 365.7C423.2 362.5 423.2 357.5 426.3 354.3C429.5 351.2 434.5 351.2 437.7 354.3L480 396.7L554.3 322.3C557.5 319.2 562.5 319.2 565.7 322.3H565.7zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 496C566.7 496 624 438.7 624 368C624 297.3 566.7 240 496 240C425.3 240 368 297.3 368 368C368 438.7 425.3 496 496 496z"/>
</>],

]);

const RoadCircleCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RoadCircleCheck.displayName = "RoadCircleCheck";

export default RoadCircleCheck;
