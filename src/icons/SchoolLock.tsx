
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M448 320V272C448 227.8 483.8 192 528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320zM496 320H560V272C560 254.3 545.7 240 528 240C510.3 240 496 254.3 496 272V320z"/><path className="fa-secondary" d="M320 128C328.8 128 336 135.2 336 144V160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128zM476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V271.1C640 210.1 589.9 159.1 528 159.1C466.1 159.1 416 210.1 416 271.1V296.6C396.9 307.6 384 328.3 384 352H320.3L320 352C284.7 352 256 380.7 256 416V512L320 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88z"/>
</>],
['light',<>
	<path d="M470.8 113.1L588.6 136.6C618.5 142.6 640 168.8 640 199.4V272C640 241.2 627.5 213.2 607.4 192.1C604.8 180.6 595.1 170.5 582.3 167.1L460.9 143.7C458.4 143.2 456.1 142.2 454.2 140.6L319.1 36.27L185.8 140.6C183.9 142.2 181.6 143.2 179.1 143.7L57.72 167.1C42.77 170.1 32 184.1 32 199.4V448C32 465.7 46.33 480 64 480H256V384C256 348.7 284.7 319.1 320 319.1C355.3 319.1 384 348.7 384 384V480C384 491.7 387.1 502.6 392.6 512H64C28.65 512 0 483.3 0 448V199.4C0 168.8 21.53 142.6 51.45 136.6L169.2 113.1L310.2 3.37C315.1-1.123 324-1.123 329.8 3.37L470.8 113.1zM352 480V384C352 366.3 337.7 352 319.1 352C302.3 352 287.1 366.3 287.1 384V480H352zM95.1 224C95.1 206.3 110.3 192 127.1 192H159.1C177.7 192 191.1 206.3 191.1 224V256C191.1 273.7 177.7 288 159.1 288H127.1C110.3 288 95.1 273.7 95.1 256V224zM159.1 224H127.1V256H159.1V224zM95.1 352C95.1 334.3 110.3 320 127.1 320H159.1C177.7 320 191.1 334.3 191.1 352V416C191.1 433.7 177.7 448 159.1 448H127.1C110.3 448 95.1 433.7 95.1 416V352zM159.1 352H127.1V416H159.1V352zM336 176H344C352.8 176 360 183.2 360 192C360 200.8 352.8 208 344 208H319.1C311.2 208 303.1 200.8 303.1 192V160C303.1 151.2 311.2 144 319.1 144C328.8 144 336 151.2 336 160V176zM223.1 192C223.1 138.1 266.1 96 319.1 96C373 96 416 138.1 416 192C416 245 373 288 319.1 288C266.1 288 223.1 245 223.1 192zM319.1 256C355.3 256 384 227.3 384 192C384 156.7 355.3 128 319.1 128C284.7 128 255.1 156.7 255.1 192C255.1 227.3 284.7 256 319.1 256zM528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320V272C448 227.8 483.8 192 528 192zM528 224C501.5 224 480 245.5 480 272V320H576V272C576 245.5 554.5 224 528 224zM608 352H448V480H608V352z"/>
</>],
['regular',<>
	<path d="M305.3 5.056C313.9-1.685 326.1-1.685 334.7 5.056L473.9 113.3L579.2 129.9C614.2 135.4 640 165.6 640 201V272C640 210.1 589.9 160 528 160C516.3 160 505.1 161.8 494.5 165.1L460.3 159.7C456.2 159.1 452.5 157.4 449.3 154.9L319.1 54.41L190.7 154.9C187.5 157.4 183.8 159.1 179.7 159.7L68.26 177.3C56.59 179.2 48 189.2 48 201V440C48 453.3 58.75 464 72 464H256V384C256 348.7 284.7 320 320 320C355.3 320 384 348.7 384 384V480C384 491.7 387.1 502.6 392.6 512H72C32.24 512 0 479.8 0 440V201C0 165.6 25.78 135.4 60.77 129.9L166.1 113.3L305.3 5.056zM143.1 224C152.8 224 159.1 231.2 159.1 240V272C159.1 280.8 152.8 288 143.1 288H111.1C103.2 288 95.1 280.8 95.1 272V240C95.1 231.2 103.2 224 111.1 224H143.1zM143.1 320C152.8 320 159.1 327.2 159.1 336V400C159.1 408.8 152.8 416 143.1 416H111.1C103.2 416 95.1 408.8 95.1 400V336C95.1 327.2 103.2 320 111.1 320H143.1zM400 192C400 236.2 364.2 272 319.1 272C275.8 272 239.1 236.2 239.1 192C239.1 147.8 275.8 112 319.1 112C364.2 112 400 147.8 400 192zM303.1 160V192C303.1 200.8 311.2 208 319.1 208H344C352.8 208 360 200.8 360 192C360 183.2 352.8 176 344 176H336V160C336 151.2 328.8 144 319.1 144C311.2 144 303.1 151.2 303.1 160zM528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320V272C448 227.8 483.8 192 528 192zM528 240C510.3 240 496 254.3 496 272V320H560V272C560 254.3 545.7 240 528 240z"/>
</>],
['solid',<>
	<path d="M336 160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128C328.8 128 336 135.2 336 144V160zM302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V271.1C640 210.1 589.9 159.1 528 159.1C466.1 159.1 416 210.1 416 271.1V296.6C396.9 307.6 384 328.3 384 352H320.3L320 352C284.7 352 256 380.7 256 416V512H320L48 512C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374zM80 272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96C87.16 192 80 199.2 80 208V272zM80 400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96C87.16 320 80 327.2 80 336V400zM320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264zM528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320V272C448 227.8 483.8 192 528 192zM528 240C510.3 240 496 254.3 496 272V320H560V272C560 254.3 545.7 240 528 240z"/>
</>],
['thin',<>
	<path d="M63.1 216C63.1 202.7 74.74 192 87.1 192H103.1C117.3 192 127.1 202.7 127.1 216V264C127.1 277.3 117.3 288 103.1 288H87.1C74.74 288 63.1 277.3 63.1 264V216zM87.1 208C83.58 208 79.1 211.6 79.1 216V264C79.1 268.4 83.58 272 87.1 272H103.1C108.4 272 111.1 268.4 111.1 264V216C111.1 211.6 108.4 208 103.1 208H87.1zM63.1 344C63.1 330.7 74.74 320 87.1 320H103.1C117.3 320 127.1 330.7 127.1 344V392C127.1 405.3 117.3 416 103.1 416H87.1C74.74 416 63.1 405.3 63.1 392V344zM87.1 336C83.58 336 79.1 339.6 79.1 344V392C79.1 396.4 83.58 400 87.1 400H103.1C108.4 400 111.1 396.4 111.1 392V344C111.1 339.6 108.4 336 103.1 336H87.1zM459.6 112.6L596.4 143.7C621.9 149.5 640 172.2 640 198.3V272C640 250.9 634.2 231.1 624 214.3V198.3C624 179.6 611.1 163.4 592.9 159.3L464 130V180.1C458.2 184.1 452.9 188.6 448 193.6V123.8L319.1 18.36L191.1 123.8V496H255.1V384C255.1 348.7 284.7 320 319.1 320C355.3 320 384 348.7 384 384V496H386C387.5 501.7 389.7 507 392.6 512H56C25.07 512 0 486.9 0 456V198.3C0 172.2 18.09 149.5 43.59 143.7L180.4 112.6L314.9 1.824C317.9-.6082 322.1-.6082 325.1 1.824L459.6 112.6zM15.1 198.3V456C15.1 478.1 33.91 496 55.1 496H175.1V130L47.13 159.3C28.92 163.4 15.1 179.6 15.1 198.3V198.3zM368 496V384C368 357.5 346.5 336 319.1 336C293.5 336 271.1 357.5 271.1 384V496H368zM328 168H344C348.4 168 352 171.6 352 176C352 180.4 348.4 184 344 184H319.1C315.6 184 311.1 180.4 311.1 176V144C311.1 139.6 315.6 136 319.1 136C324.4 136 328 139.6 328 144V168zM239.1 176C239.1 131.8 275.8 95.1 319.1 95.1C364.2 95.1 400 131.8 400 176C400 220.2 364.2 256 319.1 256C275.8 256 239.1 220.2 239.1 176zM319.1 240C355.3 240 384 211.3 384 176C384 140.7 355.3 111.1 319.1 111.1C284.7 111.1 255.1 140.7 255.1 176C255.1 211.3 284.7 240 319.1 240zM528 192C563.3 192 592 220.7 592 256V320H608C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320H464V256C464 220.7 492.7 192 528 192zM528 208C501.5 208 480 229.5 480 256V320H576V256C576 229.5 554.5 208 528 208zM432 352V480C432 488.8 439.2 496 448 496H608C616.8 496 624 488.8 624 480V352C624 343.2 616.8 336 608 336H448C439.2 336 432 343.2 432 352z"/>
</>],

]);

const SchoolLock: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SchoolLock.displayName = "SchoolLock";

export default SchoolLock;
