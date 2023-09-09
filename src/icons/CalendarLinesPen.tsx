
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7zM512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1L441.1 287.8L512.1 358.7z"/><path className="fa-secondary" d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 235.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H48C21.49 512 0 490.5 0 464V192H448V235.6zM120 320H264C277.3 320 288 309.3 288 296C288 282.7 277.3 272 264 272H120C106.7 272 96 282.7 96 296C96 309.3 106.7 320 120 320zM120 368C106.7 368 96 378.7 96 392C96 405.3 106.7 416 120 416H200C213.3 416 224 405.3 224 392C224 378.7 213.3 368 200 368H120z"/>
</>],
['light',<>
	<path d="M128 64H320V16C320 7.164 327.2 0 336 0C344.8 0 352 7.164 352 16V64H384C419.3 64 448 92.65 448 128V192H32V448C32 465.7 46.33 480 64 480H258.5L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H96V16C96 7.164 103.2 0 112 0C120.8 0 128 7.164 128 16V64zM32 128V160H416V128C416 110.3 401.7 96 384 96H64C46.33 96 32 110.3 32 128zM240 352C248.8 352 256 359.2 256 368C256 376.8 248.8 384 240 384H112C103.2 384 96 376.8 96 368C96 359.2 103.2 352 112 352H240zM96 272C96 263.2 103.2 256 112 256H336C344.8 256 352 263.2 352 272C352 280.8 344.8 288 336 288H112C103.2 288 96 280.8 96 272zM473.5 241.4C492.3 222.6 522.7 222.6 541.4 241.4L558.8 258.7C577.5 277.5 577.5 307.9 558.8 326.6L405.1 480.3C398.9 486.5 391.2 490.8 382.8 492.1L307.9 511.7C302.4 513 296.7 511.4 292.7 507.5C288.7 503.5 287.1 497.7 288.5 492.3L307.2 417.4C309.3 408.9 313.7 401.2 319.8 395.1L473.5 241.4zM518.8 264C512.5 257.8 502.4 257.8 496.2 264L471.3 288.8L511.3 328.8L536.2 303.1C542.4 297.7 542.4 287.6 536.2 281.4L518.8 264zM338.2 425.1L325.1 474.2L375 461.9C377.8 461.2 380.4 459.8 382.4 457.7L488.7 351.4L448.7 311.5L342.5 417.7C340.4 419.8 338.9 422.3 338.2 425.1H338.2z"/>
</>],
['regular',<>
	<path d="M128 0C141.3 0 152 10.75 152 24V64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V192H48V448C48 456.8 55.16 464 64 464H262.5L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0V0zM296 256C309.3 256 320 266.7 320 280C320 293.3 309.3 304 296 304H120C106.7 304 96 293.3 96 280C96 266.7 106.7 256 120 256H296zM96 376C96 362.7 106.7 352 120 352H232C245.3 352 256 362.7 256 376C256 389.3 245.3 400 232 400H120C106.7 400 96 389.3 96 376zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z"/>
</>],
['solid',<>
	<path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V235.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H48C21.49 512 0 490.5 0 464V192zM120 272C106.7 272 96 282.7 96 296C96 309.3 106.7 320 120 320H264C277.3 320 288 309.3 288 296C288 282.7 277.3 272 264 272H120zM120 416H200C213.3 416 224 405.3 224 392C224 378.7 213.3 368 200 368H120C106.7 368 96 378.7 96 392C96 405.3 106.7 416 120 416zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z"/>
</>],
['thin',<>
	<path d="M128 64H320V8C320 3.582 323.6 0 328 0C332.4 0 336 3.582 336 8V64H384C419.3 64 448 92.65 448 128V192H16V448C16 474.5 37.49 496 64 496H256C256 501.5 256.1 506.9 258.8 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H112V8C112 3.582 115.6 0 120 0C124.4 0 128 3.582 128 8V64zM64 80C37.49 80 16 101.5 16 128V176H432V128C432 101.5 410.5 80 384 80H336V120C336 124.4 332.4 128 328 128C323.6 128 320 124.4 320 120V80H128V120C128 124.4 124.4 128 120 128C115.6 128 112 124.4 112 120V80H64zM248 384C252.4 384 256 387.6 256 392C256 396.4 252.4 400 248 400H104C99.58 400 96 396.4 96 392C96 387.6 99.58 384 104 384H248zM96 296C96 291.6 99.58 288 104 288H344C348.4 288 352 291.6 352 296C352 300.4 348.4 304 344 304H104C99.58 304 96 300.4 96 296zM292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2L292.7 507.2zM304 495.8L364.1 480.8C366.9 480.1 369.5 478.7 371.6 476.6L514.4 333.7L466.1 285.4L323.2 428.3C321.2 430.3 319.7 432.9 319 435.7L304 495.8zM552.8 261.4L538.4 247C529.1 237.7 513.9 237.7 504.5 247L477.4 274.1L525.7 322.4L552.8 295.4C562.2 285.1 562.2 270.8 552.8 261.4L552.8 261.4zM364.6 482.8L368 496.3z"/>
</>],

]);

const CalendarLinesPen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CalendarLinesPen.displayName = "CalendarLinesPen";

export default CalendarLinesPen;
