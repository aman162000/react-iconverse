
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M191.1 32C191.1 14.33 206.3 0 223.1 0H352C369.7 0 384 14.33 384 32H459.1C479.7 32 490.7 56.29 477.2 71.8L456 96H119.1L98.83 71.8C85.25 56.29 96.27 32 116.9 32H191.1zM512 160V283.5C512 296.8 507.8 309.8 500.1 320.7L448.7 392.6C446.8 393.7 444.1 394.9 443.2 396.1C427.7 406.8 409.1 414.2 392.1 416H375.6C358.5 414.2 340.6 406.1 324.8 396.1C302.8 380.6 273.3 380.6 251.2 396.1C236.3 406.3 218.7 414.1 200.5 416H183.9C166.9 414.2 148.3 406.8 132.9 396.1C131.1 394.8 129.2 393.7 127.3 392.6L75.92 320.7C68.17 309.8 64 296.8 64 283.5V160C64 142.3 78.33 128 96 128H480C497.7 128 512 142.3 512 160H512zM448 192H127.1V288H448V192z"/><path className="fa-secondary" d="M269.5 421.9C280.6 414 295.4 414 306.5 421.9C328.1 437.4 356.5 448 384 448C410.9 448 439.4 437.2 461.4 421.9L461.5 421.9C473.4 413.4 489.5 414.1 500.7 423.6C515 435.5 533.2 444.6 551.3 448.8C568.5 452.8 579.2 470.1 575.2 487.3C571.2 504.5 553.1 515.2 536.7 511.2C512.2 505.4 491.9 494.6 478.5 486.2C449.5 501.7 417 512 384 512C352.1 512 323.4 502.1 303.6 493.1C297.7 490.5 292.5 487.8 288 485.4C283.5 487.8 278.3 490.5 272.4 493.1C252.6 502.1 223.9 512 192 512C158.1 512 126.5 501.7 97.5 486.2C84.12 494.6 63.79 505.4 39.27 511.2C22.06 515.2 4.853 504.5 .8422 487.3C-3.169 470.1 7.532 452.8 24.74 448.8C42.84 444.6 60.96 435.5 75.31 423.6C86.46 414.1 102.6 413.4 114.5 421.9L114.6 421.9C136.7 437.2 165.1 448 192 448C219.5 448 247 437.4 269.5 421.9H269.5z"/>
</>],
['light',<>
	<path d="M352 0C369.7 0 384 14.33 384 32H452C469.1 32 480.7 49.42 474.2 65.23L461.3 96H464C490.5 96 512 117.5 512 144V295.1C512 303.8 509.6 312.4 505.2 319.8L461.7 392.2C457.2 399.8 447.3 402.3 439.8 397.7C432.2 393.2 429.7 383.3 434.3 375.8L467.7 320H108.3L141.7 375.8C146.3 383.3 143.8 393.2 136.2 397.7C128.7 402.3 118.8 399.8 114.3 392.2L70.84 319.8C66.36 312.4 64 303.8 64 295.1V144C64 117.5 85.49 96 112 96H114.7L101.8 65.23C95.26 49.42 106.9 32 124 32H192C192 14.33 206.3 0 224 0L352 0zM416 192H159.1V288H416V192zM480 288V144C480 135.2 472.8 128 464 128H111.1C103.2 128 95.1 135.2 95.1 144V288H127.1V176C127.1 167.2 135.2 160 143.1 160H432C440.8 160 448 167.2 448 176V288H480zM426.7 96L440 64H352V32H223.1V64H135.1L149.3 96H426.7zM250.1 458.8C259.9 452.1 268.2 444.8 276.1 436.9C282.6 430.4 293.3 430.4 299.8 436.9C307.8 444.8 315.1 452.1 325.8 458.8C342.3 470 363.1 479.1 383.1 479.1C404.9 479.1 425.6 470 442.2 458.8C451.9 452.1 460.2 444.8 468.1 436.9C474.6 430.4 485.3 430.4 491.8 436.9C499.8 444.8 507.1 452.1 517.8 458.8C530.6 467.5 545.9 475.4 561.9 478.6C569.6 480.1 576 486.4 576 494.2C576 504 567.1 512.1 558.3 510.4C535.2 506.5 514.7 495.4 499.8 485.2C491.8 479.8 485.1 474.4 479.1 469.1C474.8 474.4 468.1 479.8 460.2 485.2C441.5 497.9 414.3 511.1 383.1 511.1C353.7 511.1 326.4 497.9 307.8 485.2C299.8 479.8 293.1 474.4 287.1 469.1C282.8 474.4 276.1 479.8 268.2 485.2C249.5 497.9 222.3 511.1 191.1 511.1C161.7 511.1 134.4 497.9 115.8 485.2C107.8 479.8 101.1 474.4 95.96 469.1C90.82 474.4 84.12 479.8 76.19 485.2C61.25 495.4 40.81 506.5 17.69 510.4C8.015 512.1 0 504 0 494.2C0 486.4 6.421 480.1 14.13 478.6C30.07 475.4 45.38 467.5 58.16 458.8C67.94 452.1 76.16 444.8 84.07 436.9C90.64 430.4 101.3 430.4 107.8 436.9C115.8 444.8 124.1 452.2 133.8 458.8C150.3 470 171.1 479.1 191.1 479.1C212.9 479.1 233.6 470 250.1 458.8H250.1z"/>
</>],
['regular',<>
	<path d="M192 32C192 14.33 206.3 0 224 0H352C369.7 0 384 14.33 384 32H452C469.1 32 480.7 49.42 474.2 65.23L468 80H472C502.9 80 528 105.1 528 136V293.9C528 305.4 524.5 316.6 517.9 326L467.7 397.8C460.1 408.6 445.1 411.3 434.2 403.7C423.4 396.1 420.7 381.1 428.3 370.2L463.5 320H112.5L147.7 370.2C155.3 381.1 152.6 396.1 141.8 403.7C130.9 411.3 115.9 408.6 108.3 397.8L58.12 326C51.53 316.6 48 305.4 48 293.9V136C48 105.1 73.07 80 104 80H108L101.8 65.23C95.26 49.42 106.9 32 124 32H192zM480 136C480 131.6 476.4 128 472 128H104C99.58 128 96 131.6 96 136V272H128V184C128 170.7 138.7 160 152 160H424C437.3 160 448 170.7 448 184V272H480V136zM176 208V272H400V208H176zM191.1 464C220.8 464 250.5 448.7 272 430.1C281.1 421.1 294.9 421.1 303.1 430.1C325.5 448.7 355.1 464 383.1 464C412.8 464 442.5 448.7 464 430.1C473.1 421.1 486.8 421.1 495.9 430.1C512.9 445.1 535.2 456.9 557.2 461.8C570.1 464.7 578.3 477.5 575.4 490.5C572.5 503.4 559.6 511.5 546.7 508.6C518 502.2 494.4 488.2 479.1 478.2C451.9 497.7 418.6 512 383.1 512C349.4 512 316.1 497.7 287.1 478.2C259.9 497.7 226.6 512 191.1 512C157.4 512 124.1 497.7 95.98 478.2C81.61 488.2 57.99 502.2 29.31 508.6C16.37 511.5 3.535 503.4 .6339 490.5C-2.267 477.5 5.865 464.7 18.8 461.8C41 456.8 62.76 444.1 79.1 430.1C89.09 421.1 102.8 421.1 111.9 430.1C133.5 448.7 163.1 464 191.1 464L191.1 464z"/>
</>],
['solid',<>
	<path d="M352 0C369.7 0 384 14.33 384 32H459.1C479.7 32 490.7 56.29 477.2 71.8L456 96H119.1L98.83 71.8C85.25 56.29 96.27 32 116.9 32H191.1C191.1 14.33 206.3 0 223.1 0L352 0zM95.1 128H480C497.7 128 512 142.3 512 160V283.5C512 296.8 507.8 309.8 500.1 320.7L448.7 392.6C446.8 393.7 444.1 394.9 443.2 396.1C427.7 406.8 409.1 414.2 392.1 416H375.6C358.5 414.2 340.6 406.1 324.8 396.1C302.8 380.6 273.3 380.6 251.2 396.1C236.3 406.3 218.7 414.1 200.5 416H183.9C166.9 414.2 148.3 406.8 132.9 396.1C131.1 394.8 129.2 393.7 127.3 392.6L75.92 320.7C68.17 309.8 64 296.8 64 283.5V160C64 142.3 78.33 128 96 128H95.1zM127.1 288H448V192H127.1V288zM384 448C410.9 448 439.4 437.2 461.4 421.9L461.5 421.9C473.4 413.4 489.5 414.1 500.7 423.6C515 435.5 533.2 444.6 551.3 448.8C568.5 452.8 579.2 470.1 575.2 487.3C571.2 504.5 553.1 515.2 536.7 511.2C512.2 505.4 491.9 494.6 478.5 486.2C449.5 501.7 417 512 384 512C352.1 512 323.4 502.1 303.6 493.1C297.7 490.5 292.5 487.8 288 485.4C283.5 487.8 278.3 490.5 272.4 493.1C252.6 502.1 223.9 512 192 512C158.1 512 126.5 501.7 97.5 486.2C84.12 494.6 63.79 505.4 39.27 511.2C22.06 515.2 4.853 504.5 .8422 487.3C-3.169 470.1 7.532 452.8 24.74 448.8C42.84 444.6 60.96 435.5 75.31 423.6C86.46 414.1 102.6 413.4 114.5 421.9L114.6 421.9C136.7 437.2 165.1 448 192 448C219.5 448 247 437.4 269.5 421.9C280.6 414 295.4 414 306.5 421.9C328.1 437.4 356.5 448 384 448H384z"/>
</>],
['thin',<>
	<path d="M112 184C112 179.6 115.6 176 120 176H456C460.4 176 464 179.6 464 184V256C464 260.4 460.4 264 456 264C451.6 264 448 260.4 448 256V192H128V256C128 260.4 124.4 264 120 264C115.6 264 112 260.4 112 256V184zM224 0H352C369.7 0 384 14.33 384 32V48H452C469.1 48 480.7 65.42 474.2 81.23L454.7 128H472C494.1 128 512 145.9 512 168V295.9C512 302.6 510.4 309.1 507.2 314.9L455 411.8C452.1 415.7 448.1 417.1 444.2 415C440.3 412.9 438.9 408.1 440.1 404.2L493.1 307.3C493.7 306.2 494.2 305.1 494.6 303.1H81.4C81.8 305.1 82.29 306.2 82.87 307.3L135 404.2C137.1 408.1 135.7 412.9 131.8 415C127.9 417.1 123.1 415.7 120.1 411.8L68.78 314.9C65.64 309.1 64 302.6 64 295.9V168C64 145.9 81.91 128 104 128H121.3L101.8 81.23C95.26 65.42 106.9 48 124 48H192V32C192 14.33 206.3 0 224 0L224 0zM352 16H224C215.2 16 208 23.16 208 32V48H368V32C368 23.16 360.8 16 352 16zM496 288V168C496 154.7 485.3 144 472 144H104C90.75 144 80 154.7 80 168V288H496zM124 64C118.3 64 114.4 69.81 116.6 75.08L138.7 128H437.3L459.4 75.08C461.6 69.81 457.7 64 452 64H124zM294.6 435.4C302.6 446.6 312.1 456.9 322.2 466.1C339.5 481.8 361.5 496 384 496C406.5 496 428.6 481.8 445.8 466.1C455.1 456.9 465.5 446.6 473.5 435.4C474.1 433.3 477.4 432 480 432C482.6 432 485.1 433.3 486.6 435.4C493.9 445.7 502.5 455 511.6 463.7C527.3 478.5 547.7 492.9 569 495.6C573.4 496.1 576.5 500.1 575.9 504.5C575.4 508.9 571.4 511.1 567 511.4C540.5 508.1 516.1 490.7 500.6 475.3C491.8 466.1 484.7 458.9 480 453.1C474.8 459.5 466.8 468.7 456.6 477.9C438.7 494.2 412.7 512 384 512C355.3 512 329.4 494.2 311.4 477.9C301.3 468.7 293.2 459.5 288 453.1L288 453.1L287.1 453.1C282.8 459.5 274.7 468.7 264.6 477.9C246.6 494.2 220.7 512 191.1 512C163.3 512 137.4 494.2 119.4 477.9C109.2 468.7 101.2 459.5 95.98 453.1C91.29 458.9 84.23 466.1 75.4 475.3C59.03 490.7 35.48 508.1 9.001 511.4C4.617 511.1 .616 508.9 .0637 504.5C-.4887 500.1 2.617 496.1 7.001 495.6C28.3 492.9 48.74 478.5 64.42 463.7C73.56 455 82.16 445.7 89.43 435.4C90.93 433.3 93.37 432 95.98 432C98.59 432 101 433.3 102.5 435.4C110.5 446.6 120 456.9 130.2 466.1C147.4 481.8 169.5 496 191.1 496C214.5 496 236.6 481.8 253.8 466.1C263.9 456.9 273.4 446.6 281.4 435.4C284.4 431.1 291.6 431.1 294.6 435.4H294.6z"/>
</>],

]);

const Ferry: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Ferry.displayName = "Ferry";

export default Ferry;