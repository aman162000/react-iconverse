
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M336 160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128C328.8 128 336 135.2 336 144V160zM80 208C80 199.2 87.16 192 96 192H128C136.8 192 144 199.2 144 208V272C144 280.8 136.8 288 128 288H96C87.16 288 80 280.8 80 272V208zM496 208C496 199.2 503.2 192 512 192H544C552.8 192 560 199.2 560 208V272C560 280.8 552.8 288 544 288H512C503.2 288 496 280.8 496 272V208zM128 320C136.8 320 144 327.2 144 336V400C144 408.8 136.8 416 128 416H96C87.16 416 80 408.8 80 400V336C80 327.2 87.16 320 96 320H128zM496 336C496 327.2 503.2 320 512 320H544C552.8 320 560 327.2 560 336V400C560 408.8 552.8 416 544 416H512C503.2 416 496 408.8 496 400V336z"/><path className="fa-secondary" d="M476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM256 512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM496 272C496 280.8 503.2 288 512 288H544C552.8 288 560 280.8 560 272V208C560 199.2 552.8 192 544 192H512C503.2 192 496 199.2 496 208V272zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM496 400C496 408.8 503.2 416 512 416H544C552.8 416 560 408.8 560 400V336C560 327.2 552.8 320 544 320H512C503.2 320 496 327.2 496 336V400zM320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264z"/>
</>],
['light',<>
	<path d="M96 223.1C96 206.3 110.3 191.1 128 191.1H160C177.7 191.1 192 206.3 192 223.1V255.1C192 273.7 177.7 287.1 160 287.1H128C110.3 287.1 96 273.7 96 255.1V223.1zM160 223.1H128V255.1H160V223.1zM512 191.1C529.7 191.1 544 206.3 544 223.1V255.1C544 273.7 529.7 287.1 512 287.1H480C462.3 287.1 448 273.7 448 255.1V223.1C448 206.3 462.3 191.1 480 191.1H512zM480 255.1H512V223.1H480V255.1zM96 352C96 334.3 110.3 319.1 128 319.1H160C177.7 319.1 192 334.3 192 352V416C192 433.7 177.7 448 160 448H128C110.3 448 96 433.7 96 416V352zM160 352H128V416H160V352zM512 319.1C529.7 319.1 544 334.3 544 352V416C544 433.7 529.7 448 512 448H480C462.3 448 448 433.7 448 416V352C448 334.3 462.3 319.1 480 319.1H512zM480 416H512V352H480V416zM336 175.1H344C352.8 175.1 360 183.2 360 191.1C360 200.8 352.8 207.1 344 207.1H320C311.2 207.1 304 200.8 304 191.1V159.1C304 151.2 311.2 143.1 320 143.1C328.8 143.1 336 151.2 336 159.1V175.1zM224 191.1C224 138.1 266.1 95.1 320 95.1C373 95.1 416 138.1 416 191.1C416 245 373 287.1 320 287.1C266.1 287.1 224 245 224 191.1zM320 255.1C355.3 255.1 384 227.3 384 191.1C384 156.7 355.3 127.1 320 127.1C284.7 127.1 256 156.7 256 191.1C256 227.3 284.7 255.1 320 255.1zM470.8 113.1L588.6 136.6C618.5 142.6 640 168.8 640 199.4V448C640 483.3 611.3 512 576 512H64C28.65 512 0 483.3 0 448V199.4C0 168.8 21.53 142.6 51.45 136.6L169.2 113.1L310.2 3.37C315.1-1.123 324-1.123 329.8 3.37L470.8 113.1zM384 384V480H576C593.7 480 608 465.7 608 448V199.4C608 184.1 597.2 170.1 582.3 167.1L460.9 143.7C458.4 143.2 456.1 142.2 454.2 140.6L320 36.27L185.8 140.6C183.9 142.2 181.6 143.2 179.1 143.7L57.72 167.1C42.77 170.1 32 184.1 32 199.4V448C32 465.7 46.33 480 64 480H256V384C256 348.7 284.7 319.1 320 319.1C355.3 319.1 384 348.7 384 384H384zM352 480V384C352 366.3 337.7 352 320 352C302.3 352 288 366.3 288 384V480H352z"/>
</>],
['regular',<>
	<path d="M144 224C152.8 224 160 231.2 160 240V272C160 280.8 152.8 288 144 288H112C103.2 288 96 280.8 96 272V240C96 231.2 103.2 224 112 224H144zM480 240C480 231.2 487.2 224 496 224H528C536.8 224 544 231.2 544 240V272C544 280.8 536.8 288 528 288H496C487.2 288 480 280.8 480 272V240zM144 320C152.8 320 160 327.2 160 336V400C160 408.8 152.8 416 144 416H112C103.2 416 96 408.8 96 400V336C96 327.2 103.2 320 112 320H144zM480 336C480 327.2 487.2 320 496 320H528C536.8 320 544 327.2 544 336V400C544 408.8 536.8 416 528 416H496C487.2 416 480 408.8 480 400V336zM400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192zM304 160V192C304 200.8 311.2 208 320 208H344C352.8 208 360 200.8 360 192C360 183.2 352.8 176 344 176H336V160C336 151.2 328.8 144 320 144C311.2 144 304 151.2 304 160zM305.3 5.056C313.9-1.685 326.1-1.685 334.7 5.056L473.9 113.3L579.2 129.9C614.2 135.4 640 165.6 640 201V440C640 479.8 607.8 512 568 512H72C32.24 512 0 479.8 0 440V201C0 165.6 25.78 135.4 60.77 129.9L166.1 113.3L305.3 5.056zM592 440V201C592 189.2 583.4 179.2 571.7 177.3L460.3 159.7C456.2 159.1 452.5 157.4 449.3 154.9L320 54.4L190.7 154.9C187.5 157.4 183.8 159.1 179.7 159.7L68.26 177.3C56.59 179.2 48 189.2 48 201V440C48 453.3 58.75 464 72 464H256V384C256 348.7 284.7 320 320 320C355.3 320 384 348.7 384 384V464H568C581.3 464 592 453.3 592 440H592z"/>
</>],
['solid',<>
	<path d="M320 128C328.8 128 336 135.2 336 144V160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128zM476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM256 512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM496 272C496 280.8 503.2 288 512 288H544C552.8 288 560 280.8 560 272V208C560 199.2 552.8 192 544 192H512C503.2 192 496 199.2 496 208V272zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM496 400C496 408.8 503.2 416 512 416H544C552.8 416 560 408.8 560 400V336C560 327.2 552.8 320 544 320H512C503.2 320 496 327.2 496 336V400zM320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88z"/>
</>],
['thin',<>
	<path d="M552 192C565.3 192 576 202.7 576 216V264C576 277.3 565.3 288 552 288H536C522.7 288 512 277.3 512 264V216C512 202.7 522.7 192 536 192H552zM528 264C528 268.4 531.6 272 536 272H552C556.4 272 560 268.4 560 264V216C560 211.6 556.4 208 552 208H536C531.6 208 528 211.6 528 216V264zM552 320C565.3 320 576 330.7 576 344V392C576 405.3 565.3 416 552 416H536C522.7 416 512 405.3 512 392V344C512 330.7 522.7 320 536 320H552zM528 392C528 396.4 531.6 400 536 400H552C556.4 400 560 396.4 560 392V344C560 339.6 556.4 336 552 336H536C531.6 336 528 339.6 528 344V392zM328 168H344C348.4 168 352 171.6 352 176C352 180.4 348.4 184 344 184H320C315.6 184 312 180.4 312 176V144C312 139.6 315.6 136 320 136C324.4 136 328 139.6 328 144V168zM240 176C240 131.8 275.8 95.1 320 95.1C364.2 95.1 400 131.8 400 176C400 220.2 364.2 256 320 256C275.8 256 240 220.2 240 176zM320 240C355.3 240 384 211.3 384 176C384 140.7 355.3 111.1 320 111.1C284.7 111.1 256 140.7 256 176C256 211.3 284.7 240 320 240zM64 216C64 202.7 74.75 192 88 192H104C117.3 192 128 202.7 128 216V264C128 277.3 117.3 288 104 288H88C74.75 288 64 277.3 64 264V216zM88 208C83.58 208 80 211.6 80 216V264C80 268.4 83.58 272 88 272H104C108.4 272 112 268.4 112 264V216C112 211.6 108.4 208 104 208H88zM64 344C64 330.7 74.75 320 88 320H104C117.3 320 128 330.7 128 344V392C128 405.3 117.3 416 104 416H88C74.75 416 64 405.3 64 392V344zM88 336C83.58 336 80 339.6 80 344V392C80 396.4 83.58 400 88 400H104C108.4 400 112 396.4 112 392V344C112 339.6 108.4 336 104 336H88zM459.6 112.6L596.4 143.7C621.9 149.5 640 172.2 640 198.3V456C640 486.9 614.9 512 584 512H56C25.07 512 0 486.9 0 456V198.3C0 172.2 18.09 149.5 43.59 143.7L180.4 112.6L314.9 1.824C317.9-.6082 322.1-.6082 325.1 1.824L459.6 112.6zM464 496H584C606.1 496 624 478.1 624 456V198.3C624 179.6 611.1 163.4 592.9 159.3L464 130V496zM448 496V123.8L320 18.36L192 123.8V496H256V384C256 348.7 284.7 320 320 320C355.3 320 384 348.7 384 384V496H448zM16 198.3V456C16 478.1 33.91 496 56 496H176V130L47.14 159.3C28.92 163.4 16 179.6 16 198.3V198.3zM368 496V384C368 357.5 346.5 336 320 336C293.5 336 272 357.5 272 384V496H368z"/>
</>],

]);

const School: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

School.displayName = "School";

export default School;
