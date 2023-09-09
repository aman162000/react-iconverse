
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M158.1 96C106.1 96 64 138.1 64 190.1V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V190.1C0 102.8 70.77 32 158.1 32C209.9 32 258.4 57.37 287.9 99.9L416.9 285.6C431.8 307.2 456.4 320 482.6 320H496C540.2 320 576 284.2 576 240C576 207.2 556.3 179 528 166.7V264C528 277.3 517.3 288 504 288C490.7 288 480 277.3 480 264V160.6C465.8 162.2 451.1 166.4 439.3 173.2L432 177.1V251.3L357.6 144.2L409.2 116.7C434.7 103.1 463.1 96 492 96H496C575.5 96 640 160.5 640 240C640 242.7 639.9 245.4 639.8 248H640V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V359.8C553.1 375.1 525.6 384 496 384H482.6C435.4 384 391.2 360.9 364.3 322.1L235.3 136.4C217.7 111.1 188.9 96 158.1 96H158.1z"/><path className="fa-secondary" d="M235.3 136.4L248 154.7V456C248 469.3 237.3 480 224 480C210.7 480 200 469.3 200 456V105.9C213.1 112.8 226.2 123.2 235.3 136.4V136.4zM344 292.9V456C344 469.3 333.3 480 320 480C306.7 480 296 469.3 296 456V223.8L344 292.9zM440 377.6V456C440 469.3 429.3 480 416 480C402.7 480 392 469.3 392 456V351.9C406.2 363.5 422.5 372.2 440 377.6V377.6zM496 384C509.9 384 523.3 382 536 378.4V456C536 469.3 525.3 480 512 480C498.7 480 488 469.3 488 456V384H496zM104 113.1C117.7 103.4 134.2 97.32 152 96.19V456C152 469.3 141.3 480 128 480C114.7 480 104 469.3 104 456V113.1z"/>
</>],
['light',<>
	<path d="M144 64C138.6 64 133.2 64.39 128 65.13V464C128 472.8 120.8 480 112 480C103.2 480 96 472.8 96 464V74.78C58.16 92.75 32 131.3 32 176V464C32 472.8 24.84 480 16 480C7.164 480 0 472.8 0 464V176C0 96.47 64.47 32 144 32H150.6C196.8 32 240.2 54.2 267.3 91.69L392.7 265.4C417.5 299.7 457.2 320 499.6 320H512C565 320 608 277 608 224V218.1C608 178.1 581.1 143.6 544 132.1V255.1C544 264.8 536.8 271.1 528 271.1C519.2 271.1 512 264.8 512 255.1V128.1C489.5 128.9 467.6 134.9 448 145.5V240C448 248.8 440.8 256 432 256C423.2 256 416 248.8 416 240V168.1L394.6 187.1C388 193.8 377.9 193.2 372 186.6C366.2 180 366.8 169.9 373.4 164L399.8 140.6C432.1 111.9 473.8 96 517 96C584.9 96 640 151.1 640 218.1V464C640 472.8 632.8 480 624 480C615.2 480 608 472.8 608 464V308.7C584.5 335.2 550.2 352 512 352V464C512 472.8 504.8 480 496 480C487.2 480 480 472.8 480 464V350.8C457.2 348.1 435.4 340.6 416 329.1V464C416 472.8 408.8 480 400 480C391.2 480 384 472.8 384 464V304.3C377.8 298.1 372 291.4 366.8 284.1L319.1 219.3V464C319.1 472.8 312.8 480 303.1 480C295.2 480 287.1 472.8 287.1 464V175L241.3 110.4C236.3 103.4 230.4 97.03 223.1 91.44V464C223.1 472.8 216.8 480 207.1 480C199.2 480 191.1 472.8 191.1 464V71.95C178.1 66.77 164.9 64 150.6 64L144 64z"/>
</>],
['regular',<>
	<path d="M48 456C48 469.3 37.25 480 24 480C10.75 480 0 469.3 0 456V184C0 100.1 68.05 32 152 32H157.1C206.9 32 253.5 56.4 281.9 97.3L398.4 265C422.3 299.5 461.6 320 503.5 320H512C556.2 320 592 284.2 592 240V232C592 191.7 564.9 157.8 528 147.3V264C528 277.3 517.3 288 504 288C490.7 288 480 277.3 480 264V145.1C463.8 147.2 448.2 152.7 434.1 161.1L416 171.1V234.3L358 150.8L409.4 119.9C435.6 104.3 465.4 96 495.9 96H504C579.1 96 640 156.9 640 232V456C640 469.3 629.3 480 616 480C602.7 480 592 469.3 592 456V339.9C576 352.7 556.9 361.8 536 365.8V456C536 469.3 525.3 480 512 480C498.7 480 488 469.3 488 456V367.3C471.4 365.9 455.3 362.1 440 356.1V456C440 469.3 429.3 480 416 480C402.7 480 392 469.3 392 456V328.2C379.5 317.1 368.4 305.1 358.9 292.4L344 270.9V456C344 469.3 333.3 480 320 480C306.7 480 296 469.3 296 456V201.8L248 132.6V456C248 469.3 237.3 480 224 480C210.7 480 200 469.3 200 456V89.28C186.7 83.25 172.1 80 157.1 80H152V456C152 469.3 141.3 480 128 480C114.7 480 104 469.3 104 456V91.72C70.72 109.1 48 143.9 48 184V456z"/>
</>],
['solid',<>
	<path d="M64 448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V190.1C0 102.8 70.77 32 158.1 32C209.9 32 258.4 57.37 287.9 99.9L416.9 285.6C431.8 307.2 456.4 320 482.6 320H496C540.2 320 576 284.2 576 240C576 207.2 556.3 179 528 166.7V264C528 277.3 517.3 288 504 288C490.7 288 480 277.3 480 264V160.6C465.8 162.2 451.1 166.4 439.3 173.2L432 177.1V251.3L357.6 144.2L409.2 116.7C434.7 103.1 463.1 96 492 96H496C575.5 96 640 160.5 640 240C640 242.7 639.9 245.4 639.8 248H640V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V359.8C563.8 367.9 550.4 374.2 536 378.4V456C536 469.3 525.3 480 512 480C498.7 480 488 469.3 488 456V384H482.6C467.1 384 453.6 381.8 440 377.6V456C440 469.3 429.3 480 416 480C402.7 480 392 469.3 392 456V351.9C381.5 343.5 372.2 333.5 364.3 322.1L344 292.9V456C344 469.3 333.3 480 319.1 480C306.7 480 295.1 469.3 295.1 456V223.8L247.1 154.7V456C247.1 469.3 237.3 480 223.1 480C210.7 480 199.1 469.3 199.1 456V105.9C187.2 99.47 172.8 96 158.1 96C156 96 154 96.06 151.1 96.19V456C151.1 469.3 141.3 480 127.1 480C114.7 480 103.1 469.3 103.1 456V113.1C79.81 130.1 63.1 158.2 63.1 190.1L64 448z"/>
</>],
['thin',<>
	<path d="M136 48C127.8 48 119.8 48.83 112 50.4V472C112 476.4 108.4 480 104 480C99.58 480 96 476.4 96 472V54.83C49.39 71.3 16 115.8 16 168V472C16 476.4 12.42 480 8 480C3.582 480 0 476.4 0 472V168C0 92.89 60.89 32 136 32H142.5C185.6 32 226.2 52.44 251.8 87.09L392.4 277.1C419.9 314.2 463.2 336 509.3 336H512C573.9 336 624 285.9 624 224C624 173.3 590.3 130.4 544 116.6V280C544 284.4 540.4 288 536 288C531.6 288 528 284.4 528 280V113.1C522.8 112.4 517.4 112 512 112H494.2C478.3 112 462.7 114.9 448 120.5V248C448 252.4 444.4 256 440 256C435.6 256 432 252.4 432 248V127.9C430.4 128.7 428.9 129.6 427.4 130.5L380.1 158.9C376.3 161.1 371.4 159.9 369.1 156.1C366.9 152.3 368.1 147.4 371.9 145.1L419.1 116.8C441.8 103.2 467.7 95.1 494.2 95.1H512C582.7 95.1 640 153.3 640 223.1V472C640 476.4 636.4 480 632 480C627.6 480 624 476.4 624 472V286C604.6 320.9 569.4 345.8 528 351V472C528 476.4 524.4 480 520 480C515.6 480 512 476.4 512 472V352H509.3C475.5 352 442.9 341.4 416 322.3V472C416 476.4 412.4 480 408 480C403.6 480 400 476.4 400 472V309.4C392.6 302.5 385.7 294.9 379.6 286.6L304 184.5V472C304 476.4 300.4 480 296 480C291.6 480 288 476.4 288 472V162.9L238.9 96.61C230.3 84.98 219.8 75.16 208 67.46V472C208 476.4 204.4 480 200 480C195.6 480 192 476.4 192 472V58.69C176.6 51.74 159.8 47.1 142.5 47.1L136 48z"/>
</>],

]);

const RollerCoaster: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RollerCoaster.displayName = "RollerCoaster";

export default RollerCoaster;
