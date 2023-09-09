
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M498.7 96C515.7 96 531.1 102.7 544 114.7L621.3 192C633.3 204 640 220.3 640 237.3V376C640 395.8 625.6 412.2 606.8 415.4C598.8 361.4 552.2 320 496 320C439.6 320 392.9 361.7 385.1 416H286.9C279.1 361.7 232.4 320 176 320C119.6 320 72.9 361.7 65.13 416H48C21.49 416 0 394.5 0 368V304C0 277.5 21.49 256 48 256H384V128C384 110.3 398.3 96 416 96H498.7zM576 256V237.3L498.7 160H448V256H576z"/><path className="fa-secondary" d="M96 0H145.5C154.7 0 163.5 3.983 169.6 10.93L384 256H192L96 64V176C96 202.5 74.51 224 48 224C21.49 224 0 202.5 0 176V160C0 151.2 7.164 144 16 144C24.84 144 32 151.2 32 160V176C32 184.8 39.16 192 48 192C56.84 192 64 184.8 64 176V32C64 14.33 78.33 0 96 0zM256 432C256 476.2 220.2 512 176 512C131.8 512 96 476.2 96 432C96 387.8 131.8 352 176 352C220.2 352 256 387.8 256 432zM416 432C416 387.8 451.8 352 496 352C540.2 352 576 387.8 576 432C576 476.2 540.2 512 496 512C451.8 512 416 476.2 416 432z"/>
</>],
['light',<>
	<path d="M96 64V176C96 202.5 74.51 224 48 224C21.49 224 .0003 202.5 .0003 176V160C.0003 151.2 7.164 144 16 144C24.84 144 32 151.2 32 160V176C32 184.8 39.16 192 48 192C56.84 192 64 184.8 64 176V32C64 20.16 70.44 9.814 80 4.281C84.71 1.558 90.17 0 96 0H145.6C154.8 0 163.5 3.909 169.5 10.74L384 252V144C384 117.5 405.5 96 432 96H488.5C508.3 96 526.9 105.1 539 120.7L629.9 237.5C636.4 245.9 640 256.3 640 266.1V368C640 394.5 618.5 416 592 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V304C0 277.5 21.49 256 48 256H192L96 64zM250.5 384H389.5C402.6 346.7 438.2 320 480 320C521.8 320 557.4 346.7 570.5 384H592C600.8 384 608 376.8 608 368V288H48C39.16 288 32 295.2 32 304V368C32 376.8 39.16 384 48 384H69.46C82.64 346.7 118.2 320 160 320C201.8 320 237.4 346.7 250.5 384H250.5zM416 416C416 451.3 444.7 480 480 480C515.3 480 544 451.3 544 416C544 380.7 515.3 352 480 352C444.7 352 416 380.7 416 416zM488.5 128H432C423.2 128 416 135.2 416 144V256H603.7L513.8 140.4C507.7 132.6 498.4 128 488.5 128H488.5zM115.8 32L227.8 256H344.7L145.6 32H115.8zM160 352C124.7 352 96 380.7 96 416C96 451.3 124.7 480 160 480C195.3 480 224 451.3 224 416C224 380.7 195.3 352 160 352z"/>
</>],
['regular',<>
	<path d="M96 64V160C96 186.5 74.51 208 48 208C21.49 208 .0003 186.5 .0003 160V144C.0003 135.2 7.164 128 16 128C24.84 128 32 135.2 32 144V160C32 168.8 39.16 176 48 176C56.84 176 64 168.8 64 160V32C64 20.16 70.44 9.814 80 4.281C84.71 1.558 90.17 0 96 0H145.6C154.8 0 163.5 3.909 169.5 10.74L373.3 240H384V152C384 121.1 409.1 96 440 96H490.1C510.1 96 530.8 105.1 544.5 120.8L626.3 215.3C635.1 225.4 640 238.5 640 251.9V360C640 390.9 614.9 416 584 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H56C25.07 416 0 390.9 0 360V296C0 265.1 25.07 240 56 240H184L96 64zM243.2 368H396.8C413.4 339.3 444.5 320 480 320C515.5 320 546.6 339.3 563.2 368H584C588.4 368 592 364.4 592 360V288H56C51.58 288 48 291.6 48 296V360C48 364.4 51.58 368 56 368H76.84C93.44 339.3 124.5 320 160 320C195.5 320 226.6 339.3 243.2 368H243.2zM237.7 240H309.1L145.8 56.28L237.7 240zM508.2 152.3C503.7 147 497 144 490.1 144H440C435.6 144 432 147.6 432 152V240H584.2L508.2 152.3zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/>
</>],
['solid',<>
	<path d="M96 0H145.6C154.8 0 163.5 3.909 169.5 10.74L384 252V128C384 110.3 398.3 96 416 96H498.7C515.7 96 531.1 102.7 544 114.7L621.3 192C633.3 204 640 220.3 640 237.3V376C640 398.1 622.1 416 600 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V304C0 277.5 21.49 256 48 256H192L96 64V176C96 202.5 74.51 224 48 224C21.49 224 0 202.5 0 176V160C0 151.2 7.164 144 16 144C24.84 144 32 151.2 32 160V176C32 184.8 39.16 192 48 192C56.84 192 64 184.8 64 176V32C64 14.33 78.33 0 96 0zM576 256V237.3L498.7 160H448V256H576zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/>
</>],
['thin',<>
	<path d="M384 252V152C384 129.9 401.9 112 424 112H490.3C506.4 112 521.7 118.9 532.3 130.9L629.1 241.6C636.4 248.9 640 258.4 640 268.1V376C640 398.1 622.1 416 600 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H40C17.91 416 0 398.1 0 376V296C0 273.9 17.91 256 40 256H192L80 32V168C80 190.1 62.09 208 40 208C17.91 208 0 190.1 0 168V152C0 147.6 3.582 144 8 144C12.42 144 16 147.6 16 152V168C16 181.3 26.75 192 40 192C53.25 192 64 181.3 64 168V32C64 26.17 65.56 20.71 68.28 16C73.81 6.435 84.16 0 96 0H145.6C154.8 0 163.5 3.909 169.5 10.74L384 252zM209.9 256H366.1L157.6 21.37C154.6 17.95 150.2 16 145.6 16H96C94.03 16 92.14 16.36 90.39 17.01L209.9 256zM480 320C527.6 320 567.1 354.6 574.7 400H600C613.3 400 624 389.3 624 376V272H40C26.75 272 16 282.7 16 296V376C16 389.3 26.75 400 40 400H65.33C72.94 354.6 112.4 320 160 320C207.6 320 247.1 354.6 254.7 400H385.3C392.9 354.6 432.4 320 480 320zM620.7 256C619.9 254.7 619 253.4 617.1 252.2L520.3 141.5C512.7 132.9 501.8 128 490.3 128H424C410.7 128 400 138.7 400 152V256H620.7zM160 336C115.8 336 80 371.8 80 416C80 460.2 115.8 496 160 496C204.2 496 240 460.2 240 416C240 371.8 204.2 336 160 336zM480 496C524.2 496 560 460.2 560 416C560 371.8 524.2 336 480 336C435.8 336 400 371.8 400 416C400 460.2 435.8 496 480 496z"/>
</>],

]);

const TruckTow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TruckTow.displayName = "TruckTow";

export default TruckTow;