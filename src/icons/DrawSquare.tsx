
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M128 96C128 131.3 99.35 160 64 160C28.65 160 0 131.3 0 96C0 60.65 28.65 32 64 32C99.35 32 128 60.65 128 96zM0 416C0 380.7 28.65 352 64 352C99.35 352 128 380.7 128 416C128 451.3 99.35 480 64 480C28.65 480 0 451.3 0 416zM320 416C320 380.7 348.7 352 384 352C419.3 352 448 380.7 448 416C448 451.3 419.3 480 384 480C348.7 480 320 451.3 320 416zM320 96C320 60.65 348.7 32 384 32C419.3 32 448 60.65 448 96C448 131.3 419.3 160 384 160C348.7 160 320 131.3 320 96z"/><path className="fa-secondary" d="M320 96C320 107.7 323.1 118.6 328.6 128H119.4C124.9 118.6 127.1 107.7 127.1 96C127.1 84.34 124.9 73.41 119.4 64H328.6C323.1 73.41 320 84.34 320 96zM384 160C395.7 160 406.6 156.9 416 151.4V360.6C406.6 355.1 395.7 352 384 352C372.3 352 361.4 355.1 352 360.6V151.4C361.4 156.9 372.3 160 384 160zM96 151.4V360.6C86.59 355.1 75.66 352 64 352C52.34 352 41.41 355.1 32 360.6V151.4C41.41 156.9 52.34 160 64 160C75.66 160 86.59 156.9 96 151.4zM328.6 448H119.4C124.9 438.6 127.1 427.7 127.1 416C127.1 404.3 124.9 393.4 119.4 384H328.6C323.1 393.4 320 404.3 320 416C320 427.7 323.1 438.6 328.6 448z"/>
</>],
['light',<>
	<path d="M64 32C93.82 32 118.9 52.4 125.1 80H322C329.1 52.4 354.2 32 384 32C419.3 32 448 60.65 448 96C448 125.8 427.6 150.9 400 157.1V354C427.6 361.1 448 386.2 448 416C448 451.3 419.3 480 384 480C354.2 480 329.1 459.6 322 432H125.1C118.9 459.6 93.82 480 64 480C28.65 480 0 451.3 0 416C0 386.2 20.4 361.1 48 354V157.1C20.4 150.9 0 125.8 0 96C0 60.65 28.65 32 64 32V32zM64 128C81.67 128 96 113.7 96 96C96 78.33 81.67 64 64 64C46.33 64 32 78.33 32 96C32 113.7 46.33 128 64 128zM125.1 400H322C327.8 377.5 345.5 359.8 368 354V157.1C345.5 152.2 327.8 134.5 322 112H125.1C120.2 134.5 102.5 152.2 80 157.1V354C102.5 359.8 120.2 377.5 125.1 400V400zM64 384C46.33 384 32 398.3 32 416C32 433.7 46.33 448 64 448C81.67 448 96 433.7 96 416C96 398.3 81.67 384 64 384zM352 416C352 433.7 366.3 448 384 448C401.7 448 416 433.7 416 416C416 398.3 401.7 384 384 384C366.3 384 352 398.3 352 416zM416 96C416 78.33 401.7 64 384 64C366.3 64 352 78.33 352 96C352 113.7 366.3 128 384 128C401.7 128 416 113.7 416 96z"/>
</>],
['regular',<>
	<path d="M123.3 440C113.9 463.5 90.86 480 64 480C28.65 480 0 451.3 0 416C0 389.1 16.55 366.1 40 356.7V155.3C16.55 145.9 0 122.9 0 96C0 60.65 28.65 32 64 32C90.86 32 113.9 48.55 123.3 72H324.7C334.1 48.55 357.1 32 384 32C419.3 32 448 60.65 448 96C448 122.9 431.5 145.9 408 155.3V356.7C431.5 366.1 448 389.1 448 416C448 451.3 419.3 480 384 480C357.1 480 334.1 463.5 324.7 440H123.3zM64 112C72.84 112 80 104.8 80 96C80 87.16 72.84 80 64 80C55.16 80 48 87.16 48 96C48 104.8 55.16 112 64 112zM88 356.7C104 363.1 116.9 375.1 123.3 392H324.7C331.1 375.1 343.1 363.1 360 356.7V155.3C343.1 148.9 331.1 136 324.7 120H123.3C116.9 136 104 148.9 88 155.3V356.7zM64 400C55.16 400 48 407.2 48 416C48 424.8 55.16 432 64 432C72.84 432 80 424.8 80 416C80 407.2 72.84 400 64 400zM384 400C375.2 400 368 407.2 368 416C368 424.8 375.2 432 384 432C392.8 432 400 424.8 400 416C400 407.2 392.8 400 384 400zM384 80C375.2 80 368 87.16 368 96C368 104.8 375.2 112 384 112C392.8 112 400 104.8 400 96C400 87.16 392.8 80 384 80z"/>
</>],
['solid',<>
	<path d="M119.4 448C108.4 467.1 87.69 480 64 480C28.65 480 0 451.3 0 416C0 392.3 12.87 371.6 32 360.6V151.4C12.87 140.4 0 119.7 0 96C0 60.65 28.65 32 64 32C87.69 32 108.4 44.87 119.4 64H328.6C339.6 44.87 360.3 32 384 32C419.3 32 448 60.65 448 96C448 119.7 435.1 140.4 416 151.4V360.6C435.1 371.6 448 392.3 448 416C448 451.3 419.3 480 384 480C360.3 480 339.6 467.1 328.6 448H119.4zM96 360.6C105.7 366.2 113.8 374.3 119.4 384H328.6C334.2 374.3 342.3 366.2 352 360.6V151.4C342.3 145.8 334.2 137.7 328.6 128H119.4C113.8 137.7 105.7 145.8 96 151.4V360.6z"/>
</>],
['thin',<>
	<path d="M95.34 440C91.53 462.7 71.78 480 48 480C21.49 480 0 458.5 0 432C0 408.2 17.3 388.5 40 384.7V127.3C17.3 123.5 0 103.8 0 80C0 53.49 21.49 32 48 32C71.78 32 91.53 49.3 95.34 72H352.7C356.5 49.3 376.2 32 400 32C426.5 32 448 53.49 448 80C448 103.8 430.7 123.5 408 127.3V384.7C430.7 388.5 448 408.2 448 432C448 458.5 426.5 480 400 480C376.2 480 356.5 462.7 352.7 440H95.34zM48 112C65.67 112 80 97.67 80 80C80 62.33 65.67 48 48 48C30.33 48 16 62.33 16 80C16 97.67 30.33 112 48 112zM56 384.7C76.1 388 91.96 403.9 95.34 424H352.7C356 403.9 371.9 388 392 384.7V127.3C371.9 123.1 356 108.1 352.7 88H95.34C91.96 108.1 76.1 123.1 56 127.3V384.7zM48 400C30.33 400 16 414.3 16 432C16 449.7 30.33 464 48 464C65.67 464 80 449.7 80 432C80 414.3 65.67 400 48 400zM400 400C382.3 400 368 414.3 368 432C368 449.7 382.3 464 400 464C417.7 464 432 449.7 432 432C432 414.3 417.7 400 400 400zM400 48C382.3 48 368 62.33 368 80C368 97.67 382.3 112 400 112C417.7 112 432 97.67 432 80C432 62.33 417.7 48 400 48z"/>
</>],

]);

const DrawSquare: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DrawSquare.displayName = "DrawSquare";

export default DrawSquare;