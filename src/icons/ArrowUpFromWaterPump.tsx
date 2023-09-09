
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M505.4 134.6L480 109.3V255.1H416V109.3L390.6 134.6C378.1 147.1 357.9 147.1 345.4 134.6C332.9 122.1 332.9 101.9 345.4 89.37L425.4 9.372C437.9-3.124 458.1-3.124 470.6 9.372L550.6 89.37C563.1 101.9 563.1 122.1 550.6 134.6C538.1 147.1 517.9 147.1 505.4 134.6H505.4zM384 448C410.9 448 439.4 437.2 461.4 421.9L461.5 421.9C473.4 413.4 489.5 414.1 500.7 423.6C515 435.5 533.2 444.6 551.3 448.8C568.5 452.8 579.2 470.1 575.2 487.3C571.2 504.5 553.1 515.2 536.7 511.2C512.2 505.4 491.9 494.6 478.5 486.2C449.5 501.7 417 512 384 512C352.1 512 323.4 502.1 303.6 493.1C297.7 490.5 292.5 487.8 288 485.4C283.5 487.8 278.3 490.5 272.4 493.1C252.6 502.1 223.9 512 192 512C158.1 512 126.5 501.7 97.5 486.2C84.12 494.6 63.79 505.4 39.27 511.2C22.06 515.2 4.853 504.5 .8422 487.3C-3.169 470.1 7.532 452.8 24.74 448.8C42.84 444.6 60.96 435.5 75.31 423.6C86.46 414.1 102.6 413.4 114.5 421.9L114.6 421.9C136.7 437.2 165.1 448 192 448C219.5 448 247 437.4 269.5 421.9C280.6 414 295.4 414 306.5 421.9C328.1 437.4 356.5 448 384 448H384z"/><path className="fa-secondary" d="M240 0C266.5 0 288 21.49 288 48V256H528C554.5 256 576 277.5 576 304V400C576 408 574 415.6 570.6 422.2C566.8 420.5 562.7 419.1 558.5 418.1C545.4 415.1 531.8 408.3 521.2 399.5C499 380.8 466.9 379.4 443.2 396.1C425.2 408.5 403 416.5 384 416.5C364.4 416.5 343.2 408.8 324.8 396.1C302.8 380.6 273.3 380.6 251.2 396.1C234 407.9 213.2 416.5 192 416.5C172.1 416.5 150.8 408.5 132.9 396.1C109.1 379.4 77.01 380.8 54.78 399.5C44.18 408.3 30.59 415.1 17.49 418.1C13.27 419.1 9.239 420.5 5.439 422.2C1.965 415.6 0 408 0 400V304C0 277.5 21.49 256 48 256H64V48C64 21.49 85.49 0 112 0H240z"/>
</>],
['light',<>
	<path d="M288 48V256H432V54.63L363.3 123.3C357.1 129.6 346.9 129.6 340.7 123.3C334.4 117.1 334.4 106.9 340.7 100.7L436.7 4.687C442.9-1.562 453.1-1.562 459.3 4.687L555.3 100.7C561.6 106.9 561.6 117.1 555.3 123.3C549.1 129.6 538.9 129.6 532.7 123.3L464 54.63V256H512C547.3 256 576 284.7 576 320V425C570.7 421.9 564.8 419.6 558.5 418.1C553.7 416.1 548.8 415.4 544 413.3V320C544 302.3 529.7 288 512 288H64C46.33 288 32 302.3 32 320V413.3C27.21 415.4 22.32 416.1 17.49 418.1C11.19 419.6 5.326 421.9 0 425V320C0 284.7 28.65 256 64 256V48C64 21.49 85.49 0 112 0H240C266.5 0 288 21.49 288 48L288 48zM96 48V256H256V48C256 39.16 248.8 32 240 32H112C103.2 32 96 39.16 96 48zM250.1 458.8C259.9 452.1 268.2 444.8 276.1 436.9C282.6 430.4 293.3 430.4 299.8 436.9C307.8 444.8 315.1 452.1 325.8 458.8C342.3 470 363.1 479.1 383.1 479.1C404.9 479.1 425.6 470 442.2 458.8C451.9 452.1 460.2 444.8 468.1 436.9C474.6 430.4 485.3 430.4 491.8 436.9C499.8 444.8 507.1 452.1 517.8 458.8C530.6 467.5 545.9 475.4 561.9 478.6C569.6 480.1 576 486.4 576 494.2C576 504 567.1 512.1 558.3 510.4C535.2 506.5 514.7 495.4 499.8 485.2C491.8 479.8 485.1 474.4 479.1 469.1C474.8 474.4 468.1 479.8 460.2 485.2C441.5 497.9 414.3 511.1 383.1 511.1C353.7 511.1 326.4 497.9 307.8 485.2C299.8 479.8 293.1 474.4 287.1 469.1C282.8 474.4 276.1 479.8 268.2 485.2C249.5 497.9 222.3 511.1 191.1 511.1C161.7 511.1 134.4 497.9 115.8 485.2C107.8 479.8 101.1 474.4 95.96 469.1C90.82 474.4 84.12 479.8 76.19 485.2C61.25 495.4 40.81 506.5 17.69 510.4C8.016 512.1 .0006 504 .0006 494.2C.0006 486.4 6.422 480.1 14.13 478.6C30.07 475.4 45.38 467.5 58.16 458.8C67.94 452.1 76.16 444.8 84.07 436.9C90.64 430.4 101.3 430.4 107.8 436.9C115.8 444.8 124.1 452.2 133.8 458.8C150.3 470 171.1 479.1 191.1 479.1C212.9 479.1 233.6 470 250.1 458.8H250.1z"/>
</>],
['regular',<>
	<path d="M240 0C266.5 0 288 21.49 288 48V256H424V81.94L384.1 120.1C375.6 130.3 360.4 130.3 351 120.1C341.7 111.6 341.7 96.4 351 87.03L431 7.03C440.4-2.343 455.6-2.343 464.1 7.03L544.1 87.03C554.3 96.4 554.3 111.6 544.1 120.1C535.6 130.3 520.4 130.3 511 120.1L472 81.94V256H512C547.3 256 576 284.7 576 320V425C570.7 421.9 564.8 419.6 558.5 418.1C548.1 415.7 537.3 410.9 528 404.6V319.1C528 311.2 520.8 303.1 512 303.1H64C55.16 303.1 48 311.2 48 319.1V404.6C38.69 410.9 27.94 415.7 17.49 418.1C11.19 419.6 5.326 421.9 0 425V320C0 284.7 28.65 256 64 256V48C64 21.49 85.49 0 112 0H240zM191.1 464C220.8 464 250.5 448.7 272 430.1C281.1 421.1 294.8 421.1 303.1 430.1C325.5 448.7 355.1 464 383.1 464C412.8 464 442.5 448.7 464 430.1C473.1 421.1 486.8 421.1 495.9 430.1C512.9 445.1 535.2 456.9 557.2 461.8C570.1 464.7 578.3 477.5 575.4 490.5C572.5 503.4 559.6 511.5 546.7 508.6C518 502.2 494.4 488.2 479.1 478.2C451.9 497.7 418.6 512 383.1 512C349.4 512 316.1 497.7 287.1 478.2C259.9 497.7 226.6 512 191.1 512C157.4 512 124.1 497.7 95.98 478.2C81.61 488.2 57.99 502.2 29.3 508.6C16.37 511.5 3.535 503.4 .6333 490.5C-2.268 477.5 5.865 464.7 18.8 461.8C41 456.8 62.76 444.1 79.1 430.1C89.09 421.1 102.8 421.1 111.9 430.1C133.5 448.7 163.1 464 191.1 464L191.1 464z"/>
</>],
['solid',<>
	<path d="M239.1 0C266.5 0 287.1 21.49 287.1 48V256H416V109.3L390.6 134.6C378.1 147.1 357.9 147.1 345.4 134.6C332.9 122.1 332.9 101.9 345.4 89.37L425.4 9.373C437.9-3.124 458.1-3.124 470.6 9.373L550.6 89.37C563.1 101.9 563.1 122.1 550.6 134.6C538.1 147.1 517.9 147.1 505.4 134.6L480 109.3V256H528C554.5 256 576 277.5 576 304V400C576 408 574 415.6 570.6 422.2C566.8 420.5 562.8 419.1 558.5 418.1C545.4 415.1 531.8 408.3 521.2 399.5C499 380.8 466.9 379.4 443.2 396.1C425.2 408.5 403 416.5 384 416.5C364.4 416.5 343.2 408.8 324.8 396.1C302.8 380.6 273.3 380.6 251.2 396.1C234 407.9 213.2 416.5 192 416.5C172.1 416.5 150.8 408.5 132.9 396.1C109.1 379.4 77.01 380.8 54.78 399.5C44.18 408.3 30.59 415.1 17.49 418.1C13.27 419.1 9.239 420.5 5.439 422.2C1.965 415.6 0 408 0 400V304C0 277.5 21.49 256 48 256H64V48C64 21.49 85.49 0 112 0H239.1zM384 448C410.9 448 439.4 437.2 461.4 421.9L461.5 421.9C473.4 413.4 489.5 414.1 500.7 423.6C515 435.5 533.2 444.6 551.3 448.8C568.5 452.8 579.2 470.1 575.2 487.3C571.2 504.5 553.1 515.2 536.7 511.2C512.2 505.4 491.9 494.6 478.5 486.2C449.5 501.7 417 512 384 512C352.1 512 323.4 502.1 303.6 493.1C297.7 490.5 292.5 487.8 288 485.4C283.5 487.8 278.3 490.5 272.4 493.1C252.6 502.1 223.9 512 192 512C158.1 512 126.5 501.7 97.5 486.2C84.12 494.6 63.79 505.4 39.27 511.2C22.06 515.2 4.853 504.5 .8422 487.3C-3.169 470.1 7.532 452.8 24.74 448.8C42.84 444.6 60.96 435.5 75.31 423.6C86.46 414.1 102.6 413.4 114.5 421.9L114.6 421.9C136.7 437.2 165.1 448 192 448C219.5 448 247 437.4 269.5 421.9C280.6 414 295.4 414 306.5 421.9C328.1 437.4 356.5 448 384 448H384z"/>
</>],
['thin',<>
	<path d="M288 48V256H440V27.31L357.7 109.7C354.5 112.8 349.5 112.8 346.3 109.7C343.2 106.5 343.2 101.5 346.3 98.34L442.3 2.344C445.5-.7805 450.5-.7805 453.7 2.344L549.7 98.34C552.8 101.5 552.8 106.5 549.7 109.7C546.5 112.8 541.5 112.8 538.3 109.7L456 27.31V256H512C547.3 256 576 284.7 576 320V425C571.1 422.2 565.7 419.1 560 418.5V320C560 293.5 538.5 272 512 272H64C37.49 272 16 293.5 16 320V418.5C10.26 419.1 4.905 422.2 .0006 425V320C.0006 284.7 28.65 256 64 256V48C64 21.49 85.49 0 112 0H240C266.5 0 288 21.49 288 48H288zM80 48V256H272V48C272 30.33 257.7 16 240 16H112C94.33 16 80 30.33 80 48zM294.6 435.4C302.6 446.6 312.1 456.9 322.2 466.1C339.5 481.8 361.5 496 384 496C406.5 496 428.6 481.8 445.8 466.1C455.1 456.9 465.5 446.6 473.5 435.4C474.1 433.3 477.4 432 480 432C482.6 432 485.1 433.3 486.6 435.4C493.9 445.7 502.5 455 511.6 463.7C527.3 478.5 547.7 492.9 569 495.6C573.4 496.1 576.5 500.1 575.9 504.5C575.4 508.9 571.4 511.1 567 511.4C540.5 508.1 516.1 490.7 500.6 475.3C491.8 466.1 484.7 458.9 480 453.1C474.8 459.5 466.8 468.7 456.6 477.9C438.7 494.2 412.7 512 384 512C355.3 512 329.4 494.2 311.4 477.9C301.3 468.7 293.2 459.5 288 453.1L288 453.1L287.1 453.1C282.8 459.5 274.7 468.7 264.6 477.9C246.6 494.2 220.7 512 191.1 512C163.3 512 137.4 494.2 119.4 477.9C109.2 468.7 101.2 459.5 95.98 453.1C91.29 458.9 84.23 466.1 75.4 475.3C59.03 490.7 35.48 508.1 9.001 511.4C4.617 511.1 .616 508.9 .0637 504.5C-.4887 500.1 2.617 496.1 7.001 495.6C28.3 492.9 48.74 478.5 64.42 463.7C73.56 455 82.16 445.7 89.43 435.4C90.93 433.3 93.37 432 95.98 432C98.59 432 101 433.3 102.5 435.4C110.5 446.6 120 456.9 130.2 466.1C147.4 481.8 169.5 496 191.1 496C214.5 496 236.6 481.8 253.8 466.1C263.9 456.9 273.4 446.6 281.4 435.4C284.4 431.1 291.6 431.1 294.6 435.4H294.6z"/>
</>],

]);

const ArrowUpFromWaterPump: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowUpFromWaterPump.displayName = "ArrowUpFromWaterPump";

export default ArrowUpFromWaterPump;
