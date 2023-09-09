
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 352V400C640 417.7 625.7 432 608 432C608 370.1 557.9 320 496 320C434.1 320 384 370.1 384 432H256C256 370.1 205.9 320 144 320C82.14 320 32 370.1 32 432C14.33 432 0 417.7 0 400V288C0 260.9 16.81 237.8 40.56 228.4L82.2 124.3C96.78 87.9 132.1 64 171.3 64H353.2C382.4 64 409.1 77.26 428.2 100L528.2 225C591.2 232.1 640 286.8 640 352V352zM327.5 114.4L199.5 194.4C193.5 198.2 190.7 205.6 192.6 212.4C194.6 219.3 200.9 224 208 224H259.7L226.3 279.8C222.5 286.1 223.5 294.2 228.8 299.4C234.1 304.6 242.2 305.5 248.5 301.6L376.5 221.6C382.5 217.8 385.4 210.5 383.4 203.6C381.4 196.7 375.1 192 368 192H316.3L349.7 136.2C353.5 129.9 352.5 121.8 347.2 116.6C341.9 111.4 333.8 110.5 327.5 114.4H327.5z"/><path className="fa-secondary" d="M347.2 116.6C352.5 121.8 353.5 129.9 349.7 136.2L316.3 192H368C375.1 192 381.4 196.7 383.4 203.6C385.4 210.5 382.5 217.8 376.5 221.6L248.5 301.6C242.2 305.5 234.1 304.6 228.8 299.4C223.5 294.2 222.5 286.1 226.3 279.8L259.7 224H208C200.9 224 194.6 219.3 192.6 212.4C190.7 205.6 193.5 198.2 199.5 194.4L327.5 114.4C333.8 110.5 341.9 111.4 347.2 116.6H347.2zM224 432C224 476.2 188.2 512 144 512C99.82 512 64 476.2 64 432C64 387.8 99.82 352 144 352C188.2 352 224 387.8 224 432zM576 432C576 476.2 540.2 512 496 512C451.8 512 416 476.2 416 432C416 387.8 451.8 352 496 352C540.2 352 576 387.8 576 432z"/>
</>],
['light',<>
	<path d="M278.6 192H368C374.5 192 380.3 195.9 382.8 201.9C385.3 207.9 383.9 214.7 379.3 219.3L283.3 315.3C277.1 321.6 266.9 321.6 260.7 315.3C254.4 309.1 254.4 298.9 260.7 292.7L329.4 223.1H240C233.5 223.1 227.7 220.1 225.2 214.1C222.7 208.1 224.1 201.3 228.7 196.7L324.7 100.7C330.9 94.44 341.1 94.44 347.3 100.7C353.6 106.9 353.6 117.1 347.3 123.3L278.6 192zM52.78 192.1L97.05 82.29C109.2 51.92 138.6 32 171.3 32H353.2C377.5 32 400.5 43.05 415.7 62.02L519.9 192.2C586.9 196.3 640 251.1 640 320V368C640 385.7 625.7 400 608 400H574.7C567.1 445.4 527.6 480 480 480C432.4 480 392.9 445.4 385.3 400H254.7C247.1 445.4 207.6 480 160 480C112.4 480 72.94 445.4 65.33 400H32C14.33 400 0 385.7 0 368V256C0 224.5 22.78 198.3 52.78 192.1H52.78zM87.63 192H160V224H64C46.33 224 32 238.3 32 256V368H65.33C72.94 322.6 112.4 288 160 288C207.6 288 247.1 322.6 254.7 368H385.3C392.9 322.6 432.4 288 480 288C527.6 288 567.1 322.6 574.7 368H608V320C608 266.1 565 224 512 224H448V192H478.7L390.7 82.01C381.6 70.63 367.8 64 353.2 64H171.3C151.7 64 134.1 75.95 126.8 94.17L87.63 192zM418 368C416.7 373.1 416 378.5 416 384C416 389.5 416.7 394.9 418 400C425.1 427.6 450.2 448 480 448C509.8 448 534.9 427.6 541.1 400C543.3 394.9 544 389.5 544 384C544 378.5 543.3 373.1 541.1 368C534.9 340.4 509.8 320 480 320C450.2 320 425.1 340.4 418 368V368zM98.02 400C105.1 427.6 130.2 448 160 448C189.8 448 214.9 427.6 221.1 400C223.3 394.9 224 389.5 224 384C224 378.5 223.3 373.1 221.1 368C214.9 340.4 189.8 320 160 320C130.2 320 105.1 340.4 98.02 368C96.7 373.1 96 378.5 96 384C96 389.5 96.7 394.9 98.02 400V400z"/>
</>],
['regular',<>
	<path d="M331.2 100.6C336.5 105.8 337.5 113.9 333.7 120.2L300.3 176H352C359.1 176 365.4 180.7 367.4 187.6C369.4 194.5 366.5 201.8 360.5 205.6L232.5 285.6C226.2 289.5 218.1 288.6 212.8 283.4C207.5 278.2 206.5 270.1 210.3 263.8L243.7 208H192C184.9 208 178.6 203.3 176.6 196.4C174.7 189.6 177.5 182.2 183.5 178.4L311.5 98.43C317.8 94.51 325.9 95.4 331.2 100.6H331.2zM46.82 194.3L89.62 87.32C102.1 53.91 135.3 32 171.3 32H353.2C379.1 32 405.3 44.15 421.1 65.03L523.1 192.6C589.1 198.6 640 253.3 640 320V368C640 385.7 625.7 400 608 400H574.7C567.1 445.4 527.6 480 480 480C432.4 480 392.9 445.4 385.3 400H254.7C247.1 445.4 207.6 480 160 480C112.4 480 72.94 445.4 65.33 400H32C14.33 400 0 385.7 0 368V256C0 226.6 19.82 201.8 46.82 194.3V194.3zM99.45 192H128V240H64C55.16 240 48 247.2 48 256V352H69.46C82.64 314.7 118.2 288 160 288C201.8 288 237.4 314.7 250.5 352H389.5C402.6 314.7 438.2 288 480 288C521.8 288 557.4 314.7 570.5 352H592V320C592 275.8 556.2 240 512 240H416V192H462.1L384.5 95.01C376.9 85.52 365.4 80 353.2 80H171.3C154.1 80 140.3 89.96 134.2 105.1L99.45 192zM434.7 400C441.3 418.6 459.1 432 480 432C500.9 432 518.7 418.6 525.3 400C527 394.1 528 389.6 528 384C528 378.4 527 373 525.3 368C518.7 349.4 500.9 336 480 336C459.1 336 441.3 349.4 434.7 368C432.1 373 432 378.4 432 384C432 389.6 432.1 394.1 434.7 400V400zM205.3 368C198.7 349.4 180.9 336 160 336C139.1 336 121.3 349.4 114.7 368C112.1 373 112 378.4 112 384C112 389.6 112.1 394.1 114.7 400C121.3 418.6 139.1 432 160 432C180.9 432 198.7 418.6 205.3 400C207 394.1 208 389.6 208 384C208 378.4 207 373 205.3 368z"/>
</>],
['solid',<>
	<path d="M171.3 32H353.2C382.4 32 409.1 45.26 428.2 68.03L528.2 193C591.2 200.1 640 254.8 640 320V368C640 385.7 625.7 400 608 400H574.7C567.1 445.4 527.6 480 480 480C432.4 480 392.9 445.4 385.3 400H254.7C247.1 445.4 207.6 480 160 480C112.4 480 72.94 445.4 65.33 400H32C14.33 400 0 385.7 0 368V256C0 228.9 16.81 205.8 40.56 196.4L82.2 92.35C96.78 55.9 132.1 32 171.3 32V32zM525.3 400C527 394.1 528 389.6 528 384C528 357.5 506.5 336 480 336C453.5 336 432 357.5 432 384C432 389.6 432.1 394.1 434.7 400C441.3 418.6 459.1 432 480 432C500.9 432 518.7 418.6 525.3 400zM205.3 400C207 394.1 207.1 389.6 207.1 384C207.1 357.5 186.5 336 159.1 336C133.5 336 111.1 357.5 111.1 384C111.1 389.6 112.1 394.1 114.7 400C121.3 418.6 139.1 432 159.1 432C180.9 432 198.7 418.6 205.3 400zM311.5 98.43L183.5 178.4C177.5 182.2 174.7 189.6 176.6 196.4C178.6 203.3 184.9 208 192 208H243.7L210.3 263.8C206.5 270.1 207.5 278.2 212.8 283.4C218.1 288.6 226.2 289.5 232.5 285.6L360.5 205.6C366.5 201.8 369.4 194.5 367.4 187.6C365.4 180.7 359.1 176 352 176H300.3L333.7 120.2C337.5 113.9 336.5 105.8 331.2 100.6C325.9 95.4 317.8 94.51 311.5 98.43H311.5z"/>
</>],
['thin',<>
	<path d="M323.5 167.9H369.1C385.1 167.9 391.2 188.8 377.7 197.4L252.1 277.3C238 286.3 221.4 270.4 229.6 255.9L261.6 199.9H216C200 199.9 193.9 179 207.4 170.4L332.1 90.55C347 81.59 363.7 97.49 355.4 111.1L323.5 167.9zM275.4 183.9C278.3 183.9 280.9 185.5 282.3 187.9C283.8 190.4 283.8 193.4 282.3 195.9L243.5 263.8L369.1 183.9H309.7C306.8 183.9 304.2 182.4 302.8 179.1C301.3 177.5 301.3 174.4 302.7 171.1L341.5 104.1L216 183.9H275.4zM58.49 192.2L104.5 77.26C115.4 49.92 141.9 32 171.3 32H353.2C375.1 32 395.8 41.94 409.5 59.02L515.9 192.1C584.8 194.1 640 250.6 640 320V368C640 385.7 625.7 400 608 400H574.7C567.1 445.4 527.6 480 480 480C432.4 480 392.9 445.4 385.3 400H254.7C247.1 445.4 207.6 480 160 480C112.4 480 72.94 445.4 65.33 400H32C14.33 400 0 385.7 0 368V256C0 222.5 25.72 195 58.49 192.2L58.49 192.2zM75.82 192H128V208H64C37.49 208 16 229.5 16 256V368C16 376.8 23.16 384 32 384H64C64 330.1 106.1 288 160 288C213 288 256 330.1 256 384H384C384 330.1 426.1 288 480 288C533 288 576 330.1 576 384H608C616.8 384 624 376.8 624 368V320C624 258.1 573.9 208 512 208H448V192H495.4L396.1 69.02C386.3 55.73 370.3 48 353.2 48H171.3C148.4 48 127.8 61.94 119.3 83.2L75.82 192zM160 464C204.2 464 240 428.2 240 384C240 339.8 204.2 304 160 304C115.8 304 80 339.8 80 384C80 428.2 115.8 464 160 464zM480 304C435.8 304 400 339.8 400 384C400 428.2 435.8 464 480 464C524.2 464 560 428.2 560 384C560 339.8 524.2 304 480 304z"/>
</>],

]);

const CarSideBolt: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CarSideBolt.displayName = "CarSideBolt";

export default CarSideBolt;
