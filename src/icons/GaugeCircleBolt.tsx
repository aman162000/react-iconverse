
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM546.5 301.8C549.2 296.9 548.2 290.7 543.9 286.1C539.6 283.2 533.3 283 528.8 286.4L432.8 358.4C428.7 361.5 426.1 366.9 428.6 371.8C430.2 376.7 434.8 380 440 380H475.6L445.5 434.2C442.8 439.1 443.8 445.3 448.1 449C452.4 452.8 458.7 452.1 463.2 449.6L559.2 377.6C563.3 374.5 565 369.1 563.4 364.2C561.8 359.3 557.2 356 552 356H516.4L546.5 301.8z"/><path className="fa-secondary" d="M503.1 192.2C501.3 192.1 498.7 192 496 192C398.8 192 320 270.8 320 368C320 413.9 337.6 455.7 366.4 487C332.1 503 295.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C375.4 0 475.6 81.67 503.1 192.2zM256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM368 176C385.7 176 400 161.7 400 144C400 126.3 385.7 112 368 112C350.3 112 336 126.3 336 144C336 161.7 350.3 176 368 176z"/>
</>],
['light',<>
	<path d="M256 480C288.2 480 318.8 473.2 346.5 460.1C352.3 470.3 358.1 479 366.4 487C332.1 503 295.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C375.4 0 475.6 81.67 503.1 192.2C501.3 192.1 498.7 192 496 192C487.6 192 479.3 192.6 471.2 193.7C444.3 100.3 358.1 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480zM192 352C192 322.2 212.4 297.1 239.1 290L239.1 95.1C239.1 87.16 247.2 79.1 255.1 79.1C264.8 79.1 271.1 87.16 271.1 95.1L271.1 290C299.6 297.1 320 322.2 320 352C320 387.3 291.3 416 256 416C220.7 416 192 387.3 192 352V352zM256 384C273.7 384 288 369.7 288 352C288 334.3 273.7 320 256 320C238.3 320 224 334.3 224 352C224 369.7 238.3 384 256 384zM120 144C120 130.7 130.7 120 144 120C157.3 120 168 130.7 168 144C168 157.3 157.3 168 144 168C130.7 168 120 157.3 120 144zM120 256C120 269.3 109.3 280 96 280C82.75 280 72 269.3 72 256C72 242.7 82.75 232 96 232C109.3 232 120 242.7 120 256zM392 144C392 157.3 381.3 168 368 168C354.7 168 344 157.3 344 144C344 130.7 354.7 120 368 120C381.3 120 392 130.7 392 144zM543.9 286.1C548.2 290.7 549.2 296.9 546.5 301.8L516.4 356H552C557.2 356 561.8 359.3 563.4 364.2C565 369.1 563.3 374.5 559.2 377.6L463.2 449.6C458.7 452.1 452.4 452.8 448.1 449C443.8 445.3 442.8 439.1 445.5 434.2L475.6 380H440C434.8 380 430.2 376.7 428.6 371.8C426.1 366.9 428.7 361.5 432.8 358.4L528.8 286.4C533.3 283 539.6 283.2 543.9 286.1V286.1zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 256C434.1 256 384 306.1 384 368C384 429.9 434.1 480 496 480C557.9 480 608 429.9 608 368C608 306.1 557.9 256 496 256z"/>
</>],
['regular',<>
	<path d="M256 464C285.4 464 313.3 457.9 338.6 446.9C346 461.6 355.4 475.1 366.4 487C332.1 503 295.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C375.4 0 475.6 81.67 503.1 192.2C501.3 192.1 498.7 192 496 192C482 192 468.5 193.6 455.4 196.7C429.9 110.7 350.3 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464zM200 352C200 329.7 213.1 310.4 231.1 301.4V119.1C231.1 106.7 242.7 95.1 255.1 95.1C269.3 95.1 279.1 106.7 279.1 119.1V301.4C298.9 310.4 312 329.7 312 352C312 382.9 286.9 408 256 408C225.1 408 200 382.9 200 352V352zM192 160C192 177.7 177.7 192 160 192C142.3 192 128 177.7 128 160C128 142.3 142.3 128 160 128C177.7 128 192 142.3 192 160zM80 256C80 238.3 94.33 224 112 224C129.7 224 144 238.3 144 256C144 273.7 129.7 288 112 288C94.33 288 80 273.7 80 256zM384 160C384 177.7 369.7 192 352 192C334.3 192 320 177.7 320 160C320 142.3 334.3 128 352 128C369.7 128 384 142.3 384 160zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM528.8 286.4L432.8 358.4C428.7 361.5 426.1 366.9 428.6 371.8C430.2 376.7 434.8 380 440 380H475.6L445.5 434.2C442.8 439.1 443.8 445.3 448.1 449C452.4 452.8 458.7 452.1 463.2 449.6L559.2 377.6C563.3 374.5 565 369.1 563.4 364.2C561.8 359.3 557.2 356 552 356H516.4L546.5 301.8C549.2 296.9 548.2 290.7 543.9 286.1C539.6 283.2 533.3 283 528.8 286.4V286.4z"/>
</>],
['solid',<>
	<path d="M320 368C320 413.9 337.6 455.7 366.4 487C332.1 503 295.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C375.4 0 475.6 81.67 503.1 192.2C501.3 192.1 498.7 192 496 192C398.8 192 320 270.8 320 368zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7zM144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176zM96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224zM368 112C350.3 112 336 126.3 336 144C336 161.7 350.3 176 368 176C385.7 176 400 161.7 400 144C400 126.3 385.7 112 368 112zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM528.8 286.4L432.8 358.4C428.7 361.5 426.1 366.9 428.6 371.8C430.2 376.7 434.8 380 440 380H475.6L445.5 434.2C442.8 439.1 443.8 445.3 448.1 449C452.4 452.8 458.7 452.1 463.2 449.6L559.2 377.6C563.3 374.5 565 369.1 563.4 364.2C561.8 359.3 557.2 356 552 356H516.4L546.5 301.8C549.2 296.9 548.2 290.7 543.9 286.1C539.6 283.2 533.3 283 528.8 286.4V286.4z"/>
</>],
['thin',<>
	<path d="M256 496C291.6 496 325.4 488.3 355.8 474.4C359.1 478.8 362.6 482.1 366.4 487C332.1 503 295.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C375.4 0 475.6 81.67 503.1 192.2C501.3 192.1 498.7 192 496 192C493.1 192 490.3 192.1 487.4 192.2C459.5 90.62 366.5 16 256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496zM192 352C192 319.4 216.4 292.4 247.1 288.5V79.1C247.1 75.58 251.6 71.1 255.1 71.1C260.4 71.1 263.1 75.58 263.1 79.1V288.5C295.6 292.4 320 319.4 320 352C320 387.3 291.3 416 256 416C220.7 416 192 387.3 192 352zM256 400C282.5 400 304 378.5 304 352C304 325.5 282.5 304 256 304C229.5 304 208 325.5 208 352C208 378.5 229.5 400 256 400zM128 128C128 119.2 135.2 112 144 112C152.8 112 160 119.2 160 128C160 136.8 152.8 144 144 144C135.2 144 128 136.8 128 128zM112 240C112 248.8 104.8 256 96 256C87.16 256 80 248.8 80 240C80 231.2 87.16 224 96 224C104.8 224 112 231.2 112 240zM384 128C384 136.8 376.8 144 368 144C359.2 144 352 136.8 352 128C352 119.2 359.2 112 368 112C376.8 112 384 119.2 384 128zM532.5 281.4C535.4 283.4 536.7 287.1 535.6 290.5L517.8 344H576C579.3 344 582.3 346.1 583.5 349.2C584.7 352.4 583.7 355.9 581.2 358.1L469.2 454.1C466.5 456.4 462.5 456.6 459.5 454.6C456.6 452.6 455.3 448.9 456.4 445.5L474.2 392H416C412.7 392 409.7 389.9 408.5 386.8C407.3 383.6 408.3 380.1 410.8 377.9L522.8 281.9C525.5 279.6 529.5 279.4 532.5 281.4H532.5zM437.6 376H485.3C487.9 376 490.3 377.2 491.8 379.3C493.3 381.4 493.7 384.1 492.9 386.5L480.7 423.1L554.4 360H506.7C504.1 360 501.7 358.8 500.2 356.7C498.7 354.6 498.3 351.9 499.1 349.5L511.3 312.9L437.6 376zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 496C566.7 496 624 438.7 624 368C624 297.3 566.7 240 496 240C425.3 240 368 297.3 368 368C368 438.7 425.3 496 496 496z"/>
</>],

]);

const GaugeCircleBolt: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GaugeCircleBolt.displayName = "GaugeCircleBolt";

export default GaugeCircleBolt;