
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3z"/><path className="fa-secondary" d="M384 96C384 129.4 366.1 158.8 341.1 176H352C369.7 176 384 190.3 384 208C384 225.7 369.7 240 352 240H319.1V448H339.2C351.8 472.7 370 493.1 392.2 510.2C384.3 511.4 376.2 512 368 512H208C119.6 512 48 440.4 48 352V345.9L40.97 352.1C31.6 362.3 16.4 362.3 7.029 352.1C-2.343 343.6-2.343 328.4 7.029 319L63.03 263C72.4 253.7 87.6 253.7 96.97 263L152.1 319C162.3 328.4 162.3 343.6 152.1 352.1C143.6 362.3 128.4 362.3 119 352.1L112 345.9V352C112 405 154.1 448 208 448H256V240H224C206.3 240 192 225.7 192 208C192 190.3 206.3 176 224 176H234.9C209 158.8 192 129.4 192 96C192 42.98 234.1 0 288 0C341 0 384 42.98 384 96H384zM287.1 64C270.3 64 255.1 78.33 255.1 96C255.1 113.7 270.3 128 287.1 128C305.7 128 319.1 113.7 319.1 96C319.1 78.33 305.7 64 287.1 64z"/>
</>],
['light',<>
	<path d="M368 80C368 118.7 340.5 151 303.9 158.4C303.1 158.9 304 159.5 304 160V192H368C376.8 192 384 199.2 384 208C384 216.8 376.8 224 368 224H304V480H336C343.7 480 351.4 479.4 358.8 478.2C366.7 488.1 375.6 497 385.5 504.1C369.8 509.5 353.2 512 336 512H239.1C142.8 512 63.1 433.2 63.1 336V310.6L27.31 347.3C21.07 353.6 10.93 353.6 4.686 347.3C-1.562 341.1-1.562 330.9 4.686 324.7L68.69 260.7C74.93 254.4 85.06 254.4 91.31 260.7L155.3 324.7C161.6 330.9 161.6 341.1 155.3 347.3C149.1 353.6 138.9 353.6 132.7 347.3L95.1 310.6V336C95.1 415.5 160.5 480 239.1 480H272V224H207.1C199.2 224 191.1 216.8 191.1 208C191.1 199.2 199.2 192 207.1 192H272V160C272 159.5 272 158.9 272.1 158.4C235.5 151 207.1 118.7 207.1 80C207.1 35.82 243.8 0 287.1 0C332.2 0 368 35.82 368 80H368zM288 128C314.5 128 336 106.5 336 80C336 53.49 314.5 32 288 32C261.5 32 239.1 53.49 239.1 80C239.1 106.5 261.5 128 288 128zM540.7 324.7C546.9 318.4 557.1 318.4 563.3 324.7C569.6 330.9 569.6 341.1 563.3 347.3L491.3 419.3C485.1 425.6 474.9 425.6 468.7 419.3L428.7 379.3C422.4 373.1 422.4 362.9 428.7 356.7C434.9 350.4 445.1 350.4 451.3 356.7L480 385.4L540.7 324.7zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 480C557.9 480 608 429.9 608 368C608 306.1 557.9 256 496 256C434.1 256 384 306.1 384 368C384 429.9 434.1 480 496 480z"/>
</>],
['regular',<>
	<path d="M368 80C368 115.9 344.3 146.3 311.7 156.4C311.9 157.6 312 158.8 312 160V192H360C373.3 192 384 202.7 384 216C384 229.3 373.3 240 360 240H312V464H336C340.1 464 344.1 463.8 348.1 463.5C358.4 479.3 371.1 493.4 385.7 505.2C369.9 509.6 353.2 512 336 512H240C139.8 512 58.25 431.8 56.05 332.1L39.62 346.2C29.56 354.8 14.4 353.7 5.778 343.6C-2.848 333.6-1.682 318.4 8.382 309.8L64.38 261.8C73.37 254.1 86.63 254.1 95.62 261.8L151.6 309.8C161.7 318.4 162.8 333.6 154.2 343.6C145.6 353.7 130.4 354.8 120.4 346.2L104.1 332.2C106.3 405.4 166.3 464 240 464H264V240H216C202.7 240 192 229.3 192 216C192 202.7 202.7 192 216 192H264V160C264 158.8 264.1 157.6 264.3 156.4C231.7 146.3 208 115.9 208 80C208 35.82 243.8 0 288 0C332.2 0 368 35.82 368 80H368zM288 112C305.7 112 320 97.67 320 80C320 62.33 305.7 48 288 48C270.3 48 256 62.33 256 80C256 97.67 270.3 112 288 112zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7H540.7z"/>
</>],
['solid',<>
	<path d="M352 176C369.7 176 384 190.3 384 208C384 225.7 369.7 240 352 240H319.1V448H339.2C351.8 472.7 370 493.1 392.2 510.2C384.3 511.4 376.2 512 368 512H208C119.6 512 48 440.4 48 352V345.9L40.97 352.1C31.6 362.3 16.4 362.3 7.029 352.1C-2.343 343.6-2.343 328.4 7.029 319L63.03 263C72.4 253.7 87.6 253.7 96.97 263L152.1 319C162.3 328.4 162.3 343.6 152.1 352.1C143.6 362.3 128.4 362.3 119 352.1L112 345.9V352C112 405 154.1 448 208 448H256V240H224C206.3 240 192 225.7 192 208C192 190.3 206.3 176 224 176H234.9C209 158.8 192 129.4 192 96C192 42.98 234.1 0 288 0C341 0 384 42.98 384 96C384 129.4 366.1 158.8 341.1 176H352zM287.1 128C305.7 128 319.1 113.7 319.1 96C319.1 78.33 305.7 64 287.1 64C270.3 64 255.1 78.33 255.1 96C255.1 113.7 270.3 128 287.1 128zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM540.7 324.7L480 385.4L451.3 356.7C445.1 350.4 434.9 350.4 428.7 356.7C422.4 362.9 422.4 373.1 428.7 379.3L468.7 419.3C474.9 425.6 485.1 425.6 491.3 419.3L563.3 347.3C569.6 341.1 569.6 330.9 563.3 324.7C557.1 318.4 546.9 318.4 540.7 324.7H540.7z"/>
</>],
['thin',<>
	<path d="M368 80C368 121.5 336.4 155.6 295.1 159.6C295.1 159.7 296 159.9 296 160V208H376C380.4 208 384 211.6 384 216C384 220.4 380.4 224 376 224H296V496H304C325.4 496 345.1 492.3 365.1 485.6C368.1 489.1 373.1 494.1 377.4 498.1C354.7 507.1 329.9 512 304 512H272C161.5 512 72 422.5 72 312V284.8L13.95 349.4C10.99 352.6 5.932 352.9 2.648 349.9C-.6358 346.1-.902 341.9 2.054 338.6L74.05 258.6C75.57 256.1 77.73 256 80 256C82.27 256 84.43 256.1 85.95 258.6L157.9 338.6C160.9 341.9 160.6 346.1 157.4 349.9C154.1 352.9 149 352.6 146.1 349.4L88 284.8V312C88 413.6 170.4 496 272 496H280V224H200C195.6 224 192 220.4 192 216C192 211.6 195.6 208 200 208H280V160C280 159.9 280 159.7 280 159.6C239.6 155.6 208 121.5 208 80C208 35.82 243.8 0 288 0C332.2 0 368 35.82 368 80V80zM288 144C323.3 144 352 115.3 352 80C352 44.65 323.3 16 288 16C252.7 16 224 44.65 224 80C224 115.3 252.7 144 288 144zM565.7 322.3C568.8 325.5 568.8 330.5 565.7 333.7L485.7 413.7C482.5 416.8 477.5 416.8 474.3 413.7L426.3 365.7C423.2 362.5 423.2 357.5 426.3 354.3C429.5 351.2 434.5 351.2 437.7 354.3L480 396.7L554.3 322.3C557.5 319.2 562.5 319.2 565.7 322.3H565.7zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 496C566.7 496 624 438.7 624 368C624 297.3 566.7 240 496 240C425.3 240 368 297.3 368 368C368 438.7 425.3 496 496 496z"/>
</>],

]);

const AnchorCircleCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

AnchorCircleCheck.displayName = "AnchorCircleCheck";

export default AnchorCircleCheck;
