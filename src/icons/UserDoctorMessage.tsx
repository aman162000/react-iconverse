
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 48C384 21.49 405.5 0 432 0H592C618.5 0 640 21.49 640 48V176C640 202.5 618.5 224 592 224H544L460.8 286.4C458.4 288.2 455.1 288.5 452.4 287.2C449.7 285.8 448 283 448 280V224H432C405.5 224 384 202.5 384 176V48z"/><path className="fa-secondary" d="M352 128C352 198.7 294.7 256 223.1 256C153.3 256 95.1 198.7 95.1 128C95.1 57.31 153.3 0 223.1 0C294.7 0 352 57.31 352 128zM287.1 362C260.4 369.1 239.1 394.2 239.1 424V448C239.1 452.2 241.7 456.3 244.7 459.3L260.7 475.3C266.9 481.6 277.1 481.6 283.3 475.3C289.6 469.1 289.6 458.9 283.3 452.7L271.1 441.4V424C271.1 406.3 286.3 392 303.1 392C321.7 392 336 406.3 336 424V441.4L324.7 452.7C318.4 458.9 318.4 469.1 324.7 475.3C330.9 481.6 341.1 481.6 347.3 475.3L363.3 459.3C366.3 456.3 368 452.2 368 448V424C368 394.2 347.6 369.1 320 362V308.8C393.5 326.7 448 392.1 448 472V480C448 497.7 433.7 512 416 512H32C14.33 512 0 497.7 0 480V472C0 393 54.53 326.7 128 308.8V370.3C104.9 377.2 88 398.6 88 424C88 454.9 113.1 480 144 480C174.9 480 200 454.9 200 424C200 398.6 183.1 377.2 160 370.3V304.2C162.7 304.1 165.3 304 168 304H280C282.7 304 285.3 304.1 288 304.2L287.1 362zM167.1 424C167.1 437.3 157.3 448 143.1 448C130.7 448 119.1 437.3 119.1 424C119.1 410.7 130.7 400 143.1 400C157.3 400 167.1 410.7 167.1 424z"/>
</>],
['light',<>
	<path d="M352 128C352 198.7 294.7 256 223.1 256C153.3 256 95.1 198.7 95.1 128C95.1 57.31 153.3 0 223.1 0C294.7 0 352 57.31 352 128zM127.1 128C127.1 181 170.1 224 223.1 224C277 224 319.1 181 319.1 128C319.1 74.98 277 32 223.1 32C170.1 32 127.1 74.98 127.1 128zM270.8 304C368.7 304 448 383.3 448 481.2C448 498.2 434.2 512 417.2 512H30.81C13.8 512 0 498.2 0 481.2C0 383.3 79.33 304 177.2 304H270.8zM159.1 432C168.8 432 175.1 424.8 175.1 416C175.1 407.2 168.8 400 159.1 400C151.2 400 143.1 407.2 143.1 416C143.1 424.8 151.2 432 159.1 432zM207.1 416C207.1 442.5 186.5 464 159.1 464C133.5 464 111.1 442.5 111.1 416C111.1 395.1 125.4 377.3 143.1 370.7V339.8C80.18 354.7 32.55 411.8 32 480H415.1C415.5 417.6 375.6 364.6 319.1 344.5V370.7C338.6 377.3 352 395.1 352 416V448C352 456.8 344.8 464 336 464C327.2 464 319.1 456.8 319.1 448V416C319.1 407.2 312.8 400 303.1 400C295.2 400 287.1 407.2 287.1 416V448C287.1 456.8 280.8 464 271.1 464C263.2 464 255.1 456.8 255.1 448V416C255.1 395.1 269.4 377.3 287.1 370.7V337C282.4 336.3 276.6 336 270.8 336H177.2L175.1 336V370.7C194.6 377.3 207.1 395.1 207.1 416L207.1 416zM460.8 286.4C458.4 288.2 455.1 288.5 452.4 287.2C449.7 285.8 448 283 448 280V224H432C405.5 224 384 202.5 384 176V48C384 21.49 405.5 0 432 0H592C618.5 0 640 21.49 640 48V176C640 202.5 618.5 224 592 224H544L460.8 286.4zM592 192C600.8 192 608 184.8 608 176V48C608 39.16 600.8 32 592 32H432C423.2 32 416 39.16 416 48V176C416 184.8 423.2 192 432 192H480V232L533.3 192H592z"/>
</>],
['regular',<>
	<path d="M352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128zM144 128C144 172.2 179.8 208 224 208C268.2 208 304 172.2 304 128C304 83.82 268.2 48 224 48C179.8 48 144 83.82 144 128zM176 352C170.6 352 165.2 352.3 160 352.1V402.3C183.1 409.2 200 430.6 200 456C200 486.9 174.9 512 144 512C113.1 512 88 486.9 88 456C88 430.6 104.9 409.2 128 402.3V361.3C81.09 380.3 48 426.3 48 480V488C48 501.3 37.25 512 24 512C10.75 512 0 501.3 0 488V480C0 382.8 78.8 304 176 304H272C369.2 304 448 382.8 448 480V488C448 501.3 437.3 512 424 512C410.7 512 400 501.3 400 488V480C400 426.3 366.9 380.3 320 361.3V402.3C343.1 409.2 360 430.6 360 456V488C360 496.8 352.8 504 344 504C335.2 504 328 496.8 328 488V456C328 442.7 317.3 432 304 432C290.7 432 280 442.7 280 456V488C280 496.8 272.8 504 264 504C255.2 504 248 496.8 248 488V456C248 430.6 264.9 409.2 288 402.3V352.1C282.8 352.3 277.4 352 272 352H176zM144 432C130.7 432 120 442.7 120 456C120 469.3 130.7 480 144 480C157.3 480 168 469.3 168 456C168 442.7 157.3 432 144 432zM592 0C618.5 0 640 21.49 640 48V176C640 202.5 618.5 224 592 224H544L460.8 286.4C458.4 288.2 455.1 288.5 452.4 287.2C449.7 285.8 448 283 448 280V224H432C405.5 224 384 202.5 384 176V48C384 21.49 405.5 0 432 0L592 0z"/>
</>],
['solid',<>
	<path d="M95.1 128C95.1 57.31 153.3 0 223.1 0C294.7 0 352 57.31 352 128C352 198.7 294.7 256 223.1 256C153.3 256 95.1 198.7 95.1 128zM279.1 304C282.7 304 285.3 304.1 287.1 304.2V362C260.4 369.1 239.1 394.2 239.1 424V448C239.1 452.2 241.7 456.3 244.7 459.3L260.7 475.3C266.9 481.6 277.1 481.6 283.3 475.3C289.6 469.1 289.6 458.9 283.3 452.7L271.1 441.4V424C271.1 406.3 286.3 392 303.1 392C321.7 392 336 406.3 336 424V441.4L324.7 452.7C318.4 458.9 318.4 469.1 324.7 475.3C330.9 481.6 341.1 481.6 347.3 475.3L363.3 459.3C366.3 456.3 368 452.2 368 448V424C368 394.2 347.6 369.1 320 362V308.8C393.5 326.7 448 392.1 448 472V480C448 497.7 433.7 512 416 512H32C14.33 512 0 497.7 0 480V472C0 393 54.53 326.7 128 308.8V370.3C104.9 377.2 88 398.6 88 424C88 454.9 113.1 480 144 480C174.9 480 200 454.9 200 424C200 398.6 183.1 377.2 160 370.3V304.2C162.7 304.1 165.3 304 168 304H279.1zM119.1 424C119.1 410.7 130.7 400 143.1 400C157.3 400 167.1 410.7 167.1 424C167.1 437.3 157.3 448 143.1 448C130.7 448 119.1 437.3 119.1 424zM592 0C618.5 0 640 21.49 640 48V176C640 202.5 618.5 224 592 224H544L460.8 286.4C458.4 288.2 455.1 288.5 452.4 287.2C449.7 285.8 448 283 448 280V224H432C405.5 224 384 202.5 384 176V48C384 21.49 405.5 0 432 0L592 0z"/>
</>],
['thin',<>
	<path d="M96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128zM224 240C285.9 240 336 189.9 336 128C336 66.14 285.9 16 224 16C162.1 16 112 66.14 112 128C112 189.9 162.1 240 224 240zM0 481.2C0 383.3 79.33 304 177.2 304H270.8C368.7 304 448 383.3 448 481.2C448 498.2 434.2 512 417.2 512H30.82C13.8 512 .0006 498.2 .0006 481.2H0zM177.2 320C168.6 320 160.2 320.7 152 321.1V368.7C174.7 372.5 192 392.2 192 416C192 442.5 170.5 464 144 464C117.5 464 96 442.5 96 416C96 392.2 113.3 372.5 136 368.7V325.3C66.93 343.5 16 406.4 16 481.2C16 489.4 22.63 496 30.81 496H417.2C425.4 496 432 489.4 432 481.2C432 406.4 381.1 343.5 311.1 325.3V368.7C334.7 372.5 352 392.2 352 416V440C352 442.1 351.2 444.2 349.7 445.7L333.7 461.7C330.5 464.8 325.5 464.8 322.3 461.7C319.2 458.5 319.2 453.5 322.3 450.3L336 436.7V416C336 398.3 321.7 384 304 384C286.3 384 272 398.3 272 416V436.7L285.7 450.3C288.8 453.5 288.8 458.5 285.7 461.7C282.5 464.8 277.5 464.8 274.3 461.7L258.3 445.7C256.8 444.2 256 442.1 256 440V416C256 392.2 273.3 372.5 296 368.7V321.1C287.8 320.7 279.4 320 270.8 320H177.2zM144 448C161.7 448 176 433.7 176 416C176 398.3 161.7 384 144 384C126.3 384 112 398.3 112 416C112 433.7 126.3 448 144 448zM384 48C384 21.49 405.5 0 432 0H592C618.5 0 640 21.49 640 48V176C640 202.5 618.5 224 592 224H544L474.2 282.1C463.8 290.8 448 283.4 448 269.8V224H432C405.5 224 384 202.5 384 176V48zM464 269.8L538.2 208H592C609.7 208 624 193.7 624 176V48C624 30.33 609.7 16 592 16H432C414.3 16 400 30.33 400 48V176C400 193.7 414.3 208 432 208H464V269.8z"/>
</>],

]);

const UserDoctorMessage: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UserDoctorMessage.displayName = "UserDoctorMessage";

export default UserDoctorMessage;
