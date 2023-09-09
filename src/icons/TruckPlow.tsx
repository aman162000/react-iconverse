
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M448 191.1C465.7 191.1 480 206.3 480 223.1V287.1H512V175.1C512 168.7 514.5 161.7 519 156L583 76.01C594.1 62.21 614.2 59.97 627.1 71.01C641.8 82.05 644 102.2 632.1 115.1L576 187.2V356.8L632.1 428C644 441.8 641.8 461.9 627.1 472.1C614.2 484 594.1 481.8 583 467.1L519 387.1C514.5 382.3 512 375.3 512 368V352H453.2C435.2 314.2 396.7 288 352 288C307.3 288 268.8 314.2 250.8 352H229.2C211.2 314.2 172.7 288 128 288C83.48 288 45.02 313.1 26.97 351.6C11.68 349.2 0 335.1 0 320V224C0 206.3 14.33 192 32 192H128V80C128 53.49 149.5 32 176 32H269.9C292.4 32 313.2 43.8 324.8 63.07L402.1 192L448 191.1zM269.9 95.1H191.1V191.1H327.5L269.9 95.1z"/><path className="fa-secondary" d="M48 400C48 355.8 83.82 320 128 320C172.2 320 208 355.8 208 400C208 444.2 172.2 480 128 480C83.82 480 48 444.2 48 400zM272 400C272 355.8 307.8 320 352 320C396.2 320 432 355.8 432 400C432 444.2 396.2 480 352 480C307.8 480 272 444.2 272 400z"/>
</>],
['light',<>
	<path d="M424 192C454.9 192 480 217.1 480 248V344C480 346.7 479.7 349.4 479.2 352H512V208C512 204.3 513.3 200.6 515.7 197.8L595.7 101.8C601.4 94.97 611.5 94.05 618.2 99.71C625 105.4 625.9 115.5 620.3 122.2L544 213.8V362.2L620.3 453.8C625.9 460.5 625 470.6 618.2 476.3C611.5 481.9 601.4 481 595.7 474.2L520.5 384H464C464 437 421 480 368 480C314.1 480 272 437 272 384H224C224 437 181 480 128 480C74.98 480 32 437 32 384L32 383.2C13.74 379.5 0 363.4 0 344V248C0 217.1 25.07 192 56 192H128V80C128 53.49 149.5 32 176 32H270.1C286.8 32 302.3 40.7 311 54.97L394.8 192L424 192zM176 64C167.2 64 160 71.16 160 80V192H357.2L283.7 71.66C280.8 66.9 275.6 64 270.1 64H176zM448 330.9V248C448 234.7 437.3 224 424 224H56C42.75 224 32 234.7 32 248V344C32 347.6 34.35 350.6 37.59 351.6C50.88 314.5 86.34 288 128 288C169.8 288 205.4 314.7 218.5 352H277.5C290.6 314.7 326.2 288 368 288C401.4 288 430.8 305 448 330.9H448zM128 320C92.65 320 64 348.7 64 384C64 419.3 92.65 448 128 448C163.3 448 192 419.3 192 384C192 348.7 163.3 320 128 320zM368 448C403.3 448 432 419.3 432 384C432 348.7 403.3 320 368 320C332.7 320 304 348.7 304 384C304 419.3 332.7 448 368 448z"/>
</>],
['regular',<>
	<path d="M424 191.1C454.9 191.1 480 217.1 480 247.1V336H512V207.1C512 202 514.2 196.3 518.2 191.9L598.2 103.9C607.2 94.05 622.3 93.33 632.1 102.2C641.1 111.2 642.7 126.3 633.8 136.1L560 217.3V358.7L633.8 439.9C642.7 449.7 641.1 464.8 632.1 473.8C622.3 482.7 607.2 481.1 598.2 472.1L518.2 384.1L518.1 384H464C464 437 421 480 368 480C314.1 480 272 437 272 384H224C224 437 181 480 128 480C74.98 480 32 437 32 384L32 383.2C13.74 379.5 0 363.4 0 344V248C0 217.1 25.07 192 56 192H128V88C128 57.07 153.1 32 184 32H270.1C289.6 32 307.7 42.15 317.8 58.8L396.5 187.5C397.4 188.9 398.1 190.5 398.6 192L424 191.1zM183.1 79.1C179.6 79.1 175.1 83.58 175.1 87.1V191.1H342.1L276.9 83.83C275.4 81.45 272.8 79.1 270.1 79.1H183.1zM432 312.4V247.1C432 243.6 428.4 239.1 424 239.1H55.1C51.58 239.1 47.1 243.6 47.1 247.1V330.9C65.2 305 94.61 287.1 127.1 287.1C163.5 287.1 194.6 307.3 211.2 336H284.8C301.4 307.3 332.5 287.1 368 287.1C392.6 287.1 415 297.2 432 312.4H432zM127.1 336C101.5 336 79.1 357.5 79.1 384C79.1 410.5 101.5 432 127.1 432C154.5 432 175.1 410.5 175.1 384C175.1 357.5 154.5 336 127.1 336zM368 432C394.5 432 416 410.5 416 384C416 357.5 394.5 336 368 336C341.5 336 319.1 357.5 319.1 384C319.1 410.5 341.5 432 368 432z"/>
</>],
['solid',<>
	<path d="M128 192V80C128 53.49 149.5 32 176 32H269.9C292.4 32 313.2 43.8 324.8 63.07L402.1 192H448C465.7 192 480 206.3 480 224V288H512V176C512 168.7 514.5 161.7 519 156L583 76.01C594.1 62.21 614.2 59.97 627.1 71.01C641.8 82.05 644 102.2 632.1 115.1L576 187.2V356.8L632.1 428C644 441.8 641.8 461.9 627.1 472.1C614.2 484 594.1 481.8 583 467.1L519 387.1C514.5 382.3 512 375.3 512 368V352H474.5C478.1 362 480 372.8 480 384C480 437 437 480 384 480C330.1 480 288 437 288 384C288 372.8 289.9 362 293.5 352H224C222.1 352 220.2 351.8 218.4 351.5C222 361.7 224 372.6 224 384C224 437 181 480 128 480C74.98 480 32 437 32 384C32 372.8 33.92 362 37.46 352H32C14.33 352 0 337.7 0 320V224C0 206.3 14.33 192 32 192L128 192zM192 192H327.5L269.9 96H192V192zM128 352C110.3 352 96 366.3 96 384C96 401.7 110.3 416 128 416C145.7 416 160 401.7 160 384C160 366.3 145.7 352 128 352zM384 352C366.3 352 352 366.3 352 384C352 401.7 366.3 416 384 416C401.7 416 416 401.7 416 384C416 366.3 401.7 352 384 352z"/>
</>],
['thin',<>
	<path d="M440 192C470.9 192 496 217.1 496 248V344C496 353 493 361.3 488 368H528V200C528 197.9 528.8 195.8 530.3 194.3L626.3 98.34C629.5 95.22 634.5 95.22 637.7 98.34C640.8 101.5 640.8 106.5 637.7 109.7L544 203.3V372.7L637.7 466.3C640.8 469.5 640.8 474.5 637.7 477.7C634.5 480.8 629.5 480.8 626.3 477.7L532.7 384H464C464 437 421 480 368 480C314.1 480 272 437 272 384H224C224 437 181 480 128 480C74.98 480 32 437 32 384L32 383.2C13.74 379.5 0 363.4 0 344V248C0 217.1 25.07 192 56 192H128V72C128 49.91 145.9 32 168 32H270.4C284.1 32 296.9 39.04 304.2 50.64L393.5 192L440 192zM168 48C154.7 48 144 58.75 144 72V192H374.5L290.7 59.18C286.3 52.22 278.6 48 270.4 48H168zM462.5 367.1C472.6 364.3 480 354.1 480 344V248C480 225.9 462.1 208 440 208H56C33.91 208 16 225.9 16 248V344C16 354.1 23.39 364.3 33.48 367.1C41.47 322.1 80.75 288 128 288C175.6 288 215.1 322.6 222.7 368H273.3C280.9 322.6 320.4 288 368 288C415.3 288 454.5 322.1 462.5 367.1V367.1zM128 304C83.82 304 48 339.8 48 384C48 428.2 83.82 464 128 464C172.2 464 208 428.2 208 384C208 339.8 172.2 304 128 304zM368 464C412.2 464 448 428.2 448 384C448 339.8 412.2 304 368 304C323.8 304 288 339.8 288 384C288 428.2 323.8 464 368 464z"/>
</>],

]);

const TruckPlow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TruckPlow.displayName = "TruckPlow";

export default TruckPlow;
