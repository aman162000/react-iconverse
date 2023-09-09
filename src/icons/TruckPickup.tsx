
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M418.6 56.02L527.4 192H576C593.7 192 608 206.3 608 224V288C625.7 288 640 302.3 640 320C640 337.7 625.7 352 608 352H581.2C563.2 314.2 524.7 288 480 288C435.3 288 396.8 314.2 378.8 352H261.2C243.2 314.2 204.7 288 160 288C115.3 288 76.75 314.2 58.78 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288V224C32 206.3 46.33 192 64 192H224V80C224 53.49 245.5 32 272 32H368.6C388.1 32 406.5 40.84 418.6 56.02zM288 192H445.4L368.6 96H288L288 192z"/><path className="fa-secondary" d="M80 400C80 355.8 115.8 320 160 320C204.2 320 240 355.8 240 400C240 444.2 204.2 480 160 480C115.8 480 80 444.2 80 400zM400 400C400 355.8 435.8 320 480 320C524.2 320 560 355.8 560 400C560 444.2 524.2 480 480 480C435.8 480 400 444.2 400 400z"/>
</>],
['light',<>
	<path d="M526.1 192H552C582.9 192 608 217.1 608 248V352H624C632.8 352 640 359.2 640 368C640 376.8 632.8 384 624 384H560C560 437 517 480 464 480C410.1 480 368 437 368 384H272C272 437 229 480 176 480C122.1 480 80 437 80 384H16C7.164 384 0 376.8 0 368C0 359.2 7.164 352 16 352H32V248C32 217.1 57.07 192 88 192H224V80C224 53.49 245.5 32 272 32H376.5C391.2 32 405.1 38.73 414.2 50.26L526.1 192zM256 192H485.3L389 70.09C386 66.24 381.4 64 376.5 64H272C263.2 64 256 71.16 256 80V192zM64 352H85.46C98.64 314.7 134.2 288 176 288C217.8 288 253.4 314.7 266.5 352H373.5C386.6 314.7 422.2 288 464 288C505.8 288 541.4 314.7 554.5 352H576V248C576 234.7 565.3 224 552 224H87.1C74.74 224 63.1 234.7 63.1 248L64 352zM176 320C140.7 320 112 348.7 112 384C112 419.3 140.7 448 176 448C211.3 448 240 419.3 240 384C240 348.7 211.3 320 176 320zM464 448C499.3 448 528 419.3 528 384C528 348.7 499.3 320 464 320C428.7 320 400 348.7 400 384C400 419.3 428.7 448 464 448z"/>
</>],
['regular',<>
	<path d="M412.6 53.62L507.7 176H552C582.9 176 608 201.1 608 232V320H616C629.3 320 640 330.7 640 344C640 357.3 629.3 368 616 368H558.7C559.5 373.2 560 378.5 560 384C560 437 517 480 464 480C410.1 480 368 437 368 384C368 378.5 368.5 373.2 369.3 368H270.7C271.5 373.2 272 378.5 272 384C272 437 229 480 176 480C122.1 480 80 437 80 384C80 378.5 80.45 373.2 81.33 368H24C10.75 368 0 357.3 0 344C0 330.7 10.75 320 24 320H32V232C32 201.1 57.07 176 88 176H224V88C224 57.07 249.1 32 280 32H368.3C385.6 32 401.9 39.98 412.6 53.62H412.6zM272 176H446.9L374.7 83.09C373.1 81.14 370.8 80 368.3 80H279.1C275.6 80 271.1 83.58 271.1 88L272 176zM104.4 320C122 300.4 147.6 288 176 288C204.4 288 229.1 300.4 247.6 320H392.4C410 300.4 435.6 288 464 288C492.4 288 517.1 300.4 535.6 320H560V232C560 227.6 556.4 224 552 224H88C83.58 224 80 227.6 80 232V320H104.4zM176 336C149.5 336 128 357.5 128 384C128 410.5 149.5 432 176 432C202.5 432 224 410.5 224 384C224 357.5 202.5 336 176 336zM464 432C490.5 432 512 410.5 512 384C512 357.5 490.5 336 464 336C437.5 336 416 357.5 416 384C416 410.5 437.5 432 464 432z"/>
</>],
['solid',<>
	<path d="M272 32H368.6C388.1 32 406.5 40.84 418.6 56.02L527.4 192H576C593.7 192 608 206.3 608 224V288C625.7 288 640 302.3 640 320C640 337.7 625.7 352 608 352H574.9C575.6 357.2 576 362.6 576 368C576 429.9 525.9 480 464 480C402.1 480 352 429.9 352 368C352 362.6 352.4 357.2 353.1 352H286.9C287.6 357.2 288 362.6 288 368C288 429.9 237.9 480 176 480C114.1 480 64 429.9 64 368C64 362.6 64.39 357.2 65.13 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288V224C32 206.3 46.33 192 64 192H224V80C224 53.49 245.5 32 272 32H272zM368.6 96H288V192H445.4L368.6 96zM176 416C202.5 416 224 394.5 224 368C224 341.5 202.5 320 176 320C149.5 320 128 341.5 128 368C128 394.5 149.5 416 176 416zM464 416C490.5 416 512 394.5 512 368C512 341.5 490.5 320 464 320C437.5 320 416 341.5 416 368C416 394.5 437.5 416 464 416z"/>
</>],
['thin',<>
	<path d="M514.2 192H552C582.9 192 608 217.1 608 248V368H632C636.4 368 640 371.6 640 376C640 380.4 636.4 384 632 384H560C560 437 517 480 464 480C410.1 480 368 437 368 384H272C272 437 229 480 176 480C122.1 480 80 437 80 384H8C3.582 384 0 380.4 0 376C0 371.6 3.582 368 8 368H32V248C32 217.1 57.07 192 88 192H224V72C224 49.91 241.9 32 264 32H368.5C380.7 32 392.3 37.61 399.9 47.21L514.2 192zM240 192H493.8L387.3 57.13C382.8 51.36 375.8 48 368.5 48H264C250.7 48 240 58.75 240 72V192zM48 368H81.33C88.94 322.6 128.4 288 176 288C223.6 288 263.1 322.6 270.7 368H369.3C376.9 322.6 416.4 288 464 288C511.6 288 551.1 322.6 558.7 368H592V248C592 225.9 574.1 208 552 208H88C65.91 208 48 225.9 48 248V368zM176 304C131.8 304 96 339.8 96 384C96 428.2 131.8 464 176 464C220.2 464 256 428.2 256 384C256 339.8 220.2 304 176 304zM464 464C508.2 464 544 428.2 544 384C544 339.8 508.2 304 464 304C419.8 304 384 339.8 384 384C384 428.2 419.8 464 464 464z"/>
</>],

]);

const TruckPickup: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TruckPickup.displayName = "TruckPickup";

export default TruckPickup;