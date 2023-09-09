
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M368 160C376.8 160 384 167.2 384 176V208C384 216.8 376.8 224 368 224H16C7.164 224 0 216.8 0 208V176C0 167.2 7.164 160 16 160H368zM32 256H352V480C352 497.7 337.7 512 320 512H64C46.33 512 32 497.7 32 480V256zM144 352H240C248.8 352 256 344.8 256 336C256 327.2 248.8 320 240 320H144C135.2 320 128 327.2 128 336C128 344.8 135.2 352 144 352z"/><path className="fa-secondary" d="M592 0C618.5 0 640 21.49 640 48V464C640 490.5 618.5 512 592 512H381.3C383 506.1 384 501.6 384 496V253.3C402.6 246.7 416 228.9 416 208V176C416 149.5 394.5 128 368 128H256V48C256 21.49 277.5 0 304 0H592zM507.3 260.7C501.1 254.4 490.9 254.4 484.7 260.7L420.7 324.7C414.4 330.9 414.4 341.1 420.7 347.3C426.9 353.6 437.1 353.6 443.3 347.3L480 310.6V432C480 440.8 487.2 448 496 448C504.8 448 512 440.8 512 432V310.6L548.7 347.3C554.9 353.6 565.1 353.6 571.3 347.3C577.6 341.1 577.6 330.9 571.3 324.7L507.3 260.7z"/>
</>],
['light',<>
	<path d="M592 32H304C295.2 32 288 39.16 288 48V128H256V48C256 21.49 277.5 0 304 0H592C618.5 0 640 21.49 640 48V464C640 490.5 618.5 512 592 512H381.3C383 506.1 384 501.6 384 496V480H592C600.8 480 608 472.8 608 464V48C608 39.16 600.8 32 592 32zM555.3 316.7C561.6 322.9 561.6 333.1 555.3 339.3C549.1 345.6 538.9 345.6 532.7 339.3L496 302.6V432C496 440.8 488.8 448 480 448C471.2 448 464 440.8 464 432V302.6L427.3 339.3C421.1 345.6 410.9 345.6 404.7 339.3C398.4 333.1 398.4 322.9 404.7 316.7L468.7 252.7C474.9 246.4 485.1 246.4 491.3 252.7L555.3 316.7zM240 320C248.8 320 256 327.2 256 336C256 344.8 248.8 352 240 352H144C135.2 352 128 344.8 128 336C128 327.2 135.2 320 144 320H240zM0 192C0 174.3 14.33 160 32 160H352C369.7 160 384 174.3 384 192V256C384 273.7 369.7 288 352 288V480C352 497.7 337.7 512 320 512H64C46.33 512 32 497.7 32 480V288C14.33 288 0 273.7 0 256V192zM352 192H32V256H352V192zM64 480H320V288H64V480z"/>
</>],
['regular',<>
	<path d="M592 48H304V128H256V48C256 21.49 277.5 0 304 0H592C618.5 0 640 21.49 640 48V464C640 490.5 618.5 512 592 512H381.3C383 506.1 384 501.6 384 496V464H592V48zM560.1 311C570.3 320.4 570.3 335.6 560.1 344.1C551.6 354.3 536.4 354.3 527 344.1L504 321.9V392C504 405.3 493.3 416 480 416C466.7 416 456 405.3 456 392V321.9L432.1 344.1C423.6 354.3 408.4 354.3 399 344.1C389.7 335.6 389.7 320.4 399 311L463 247C472.4 237.7 487.6 237.7 496.1 247L560.1 311zM232 336C245.3 336 256 346.7 256 360C256 373.3 245.3 384 232 384H152C138.7 384 128 373.3 128 360C128 346.7 138.7 336 152 336H232zM0 192C0 174.3 14.33 160 32 160H352C369.7 160 384 174.3 384 192V272C384 289.7 369.7 304 352 304V480C352 497.7 337.7 512 320 512H64C46.33 512 32 497.7 32 480V304C14.33 304 0 289.7 0 272V192zM48 208V256H336V208H48zM80 464H304V304H80V464z"/>
</>],
['solid',<>
	<path d="M256 48C256 21.49 277.5 0 304 0H592C618.5 0 640 21.49 640 48V464C640 490.5 618.5 512 592 512H381.3C383 506.1 384 501.6 384 496V253.3C402.6 246.7 416 228.9 416 208V176C416 149.5 394.5 128 368 128H256V48zM571.3 347.3C577.6 341.1 577.6 330.9 571.3 324.7L507.3 260.7C501.1 254.4 490.9 254.4 484.7 260.7L420.7 324.7C414.4 330.9 414.4 341.1 420.7 347.3C426.9 353.6 437.1 353.6 443.3 347.3L480 310.6V432C480 440.8 487.2 448 496 448C504.8 448 512 440.8 512 432V310.6L548.7 347.3C554.9 353.6 565.1 353.6 571.3 347.3H571.3zM0 176C0 167.2 7.164 160 16 160H368C376.8 160 384 167.2 384 176V208C384 216.8 376.8 224 368 224H16C7.164 224 0 216.8 0 208V176zM352 480C352 497.7 337.7 512 320 512H64C46.33 512 32 497.7 32 480V256H352V480zM144 320C135.2 320 128 327.2 128 336C128 344.8 135.2 352 144 352H240C248.8 352 256 344.8 256 336C256 327.2 248.8 320 240 320H144z"/>
</>],
['thin',<>
	<path d="M592 16H304C286.3 16 272 30.33 272 48V128H256V48C256 21.49 277.5 0 304 0H592C618.5 0 640 21.49 640 48V464C640 490.5 618.5 512 592 512H381.3C383 506.1 384 501.6 384 496H592C609.7 496 624 481.7 624 464V48C624 30.33 609.7 16 592 16zM549.7 322.3C552.8 325.5 552.8 330.5 549.7 333.7C546.5 336.8 541.5 336.8 538.3 333.7L488 283.3V440C488 444.4 484.4 448 480 448C475.6 448 472 444.4 472 440V283.3L421.7 333.7C418.5 336.8 413.5 336.8 410.3 333.7C407.2 330.5 407.2 325.5 410.3 322.3L474.3 258.3C477.5 255.2 482.5 255.2 485.7 258.3L549.7 322.3zM32 288C14.33 288 0 273.7 0 256V192C0 174.3 14.33 160 32 160H352C369.7 160 384 174.3 384 192V256C384 273.7 369.7 288 352 288V480C352 497.7 337.7 512 320 512H64C46.33 512 32 497.7 32 480V288zM16 192V256C16 264.8 23.16 272 32 272H352C360.8 272 368 264.8 368 256V192C368 183.2 360.8 176 352 176H32C23.16 176 16 183.2 16 192zM336 288H272V312C272 325.3 261.3 336 248 336H136C122.7 336 112 325.3 112 312V288H48V480C48 488.8 55.16 496 64 496H320C328.8 496 336 488.8 336 480V288zM128 312C128 316.4 131.6 320 136 320H248C252.4 320 256 316.4 256 312V288H128V312z"/>
</>],

]);

const BoxesPacking: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BoxesPacking.displayName = "BoxesPacking";

export default BoxesPacking;