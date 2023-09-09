
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 280C0 266.7 10.75 256 24 256C152.1 256 256 359.9 256 488C256 501.3 245.3 512 232 512C218.7 512 208 501.3 208 488C208 386.4 125.6 304 24 304C10.75 304 0 293.3 0 280zM64 480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448C49.67 448 64 462.3 64 480zM160 488C160 501.3 149.3 512 136 512C122.7 512 112 501.3 112 488C112 439.4 72.6 400 24 400C10.75 400 0 389.3 0 376C0 362.7 10.75 352 24 352C99.11 352 160 412.9 160 488z"/><path className="fa-secondary" d="M565.7 200.5C575.4 209.4 578.6 223.4 573.8 235.7C569 247.9 557.2 256 544 256H512V368C512 394.5 490.5 416 464 416H296.4C272.7 317.5 195.4 239.1 97.06 215.8C98.58 210.1 101.7 204.7 106.3 200.5L314.3 8.486C326.6-2.829 345.4-2.829 357.7 8.486L565.7 200.5zM288 272C288 280.8 295.2 288 304 288H368C376.8 288 384 280.8 384 272V208C384 199.2 376.8 192 368 192H304C295.2 192 288 199.2 288 208V272z"/>
</>],
['light',<>
	<path d="M325.6 3.852C331.6-1.284 340.4-1.284 346.4 3.852L570.4 195.9C577.1 201.6 577.9 211.7 572.1 218.4C566.4 225.1 556.3 225.9 549.6 220.1L512 187.9V352C512 387.3 483.3 416 448 416H296.4C293.8 405.1 290.5 394.4 286.6 384H448C465.7 384 480 369.7 480 352V160.5L336 37.07L192 160.5V260C181.8 252.6 171.2 245.9 160 239.9V187.9L122.4 220.1C121.4 221 120.3 221.7 119.2 222.3C112.3 219.1 105.3 217.9 98.21 216.1C94.34 209.6 95.61 200.1 101.6 195.9L325.6 3.852zM368 176C385.7 176 400 190.3 400 208V272C400 289.7 385.7 304 368 304H304C286.3 304 272 289.7 272 272V208C272 190.3 286.3 176 304 176H368zM304 272H368V208H304V272zM256 496C256 504.8 248.8 512 240 512C231.2 512 224 504.8 224 496C224 381.1 130.9 288 16 288C7.164 288 0 280.8 0 272C0 263.2 7.164 256 16 256C148.5 256 256 363.5 256 496zM0 480C0 462.3 14.33 448 32 448C49.67 448 64 462.3 64 480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480zM0 368C0 359.2 7.164 352 16 352C95.53 352 160 416.5 160 496C160 504.8 152.8 512 144 512C135.2 512 128 504.8 128 496C128 434.1 77.86 384 16 384C7.164 384 0 376.8 0 368z"/>
</>],
['regular',<>
	<path d="M320.8 5.394C329.7-1.798 342.3-1.798 351.2 5.394L567.2 181.4C577.4 189.8 578.1 204.9 570.6 215.2C562.2 225.4 547.1 226.1 536.8 218.6L512 198.4V360C512 390.9 486.9 416 456 416H296.4C292.4 399.4 286.9 383.3 279.9 368H456C460.4 368 464 364.4 464 360V159.3L336 54.96L208 159.3V272.6C193.3 260.1 177.2 249.1 160 239.9V198.4L135.2 218.6C131.7 221.5 127.6 223.2 123.4 223.8C116.9 221.4 110.3 219.4 103.6 217.5C102.8 216.8 102.1 216 101.4 215.2C93.02 204.9 94.57 189.8 104.8 181.4L320.8 5.394zM360 192C373.3 192 384 202.7 384 216V264C384 277.3 373.3 288 360 288H312C298.7 288 288 277.3 288 264V216C288 202.7 298.7 192 312 192H360zM256 488C256 501.3 245.3 512 232 512C218.7 512 208 501.3 208 488C208 386.4 125.6 304 24 304C10.75 304 0 293.3 0 280C0 266.7 10.75 256 24 256C152.1 256 256 359.9 256 488zM0 480C0 462.3 14.33 448 32 448C49.67 448 64 462.3 64 480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480zM0 376C0 362.7 10.75 352 24 352C99.11 352 160 412.9 160 488C160 501.3 149.3 512 136 512C122.7 512 112 501.3 112 488C112 439.4 72.6 400 24 400C10.75 400 0 389.3 0 376z"/>
</>],
['solid',<>
	<path d="M314.3 8.486C326.6-2.829 345.4-2.829 357.7 8.486L565.7 200.5C575.4 209.4 578.6 223.4 573.8 235.7C569 247.9 557.2 256 544 256H512V368C512 394.5 490.5 416 464 416H296.4C272.7 317.5 195.4 239.1 97.06 215.8C98.58 210.1 101.7 204.7 106.3 200.5L314.3 8.486zM304 192C295.2 192 287.1 199.2 287.1 208V272C287.1 280.8 295.2 288 304 288H368C376.8 288 384 280.8 384 272V208C384 199.2 376.8 192 368 192H304zM256 488C256 501.3 245.3 512 232 512C218.7 512 208 501.3 208 488C208 386.4 125.6 304 24 304C10.75 304 0 293.3 0 280C0 266.7 10.75 256 24 256C152.1 256 256 359.9 256 488zM0 480C0 462.3 14.33 448 32 448C49.67 448 64 462.3 64 480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480zM0 376C0 362.7 10.75 352 24 352C99.11 352 160 412.9 160 488C160 501.3 149.3 512 136 512C122.7 512 112 501.3 112 488C112 439.4 72.6 400 24 400C10.75 400 0 389.3 0 376z"/>
</>],
['thin',<>
	<path d="M330.8 1.941C333.8-.6469 338.2-.6469 341.2 1.941L573.2 201.9C576.6 204.8 576.9 209.9 574.1 213.2C571.2 216.6 566.1 216.9 562.8 214.1L512 170.3V360C512 390.9 486.9 416 456 416H296.4C295.1 410.6 293.7 405.3 292 400H456C478.1 400 496 382.1 496 360V156.5L336 18.56L176 156.5V249.2C170.8 245.9 165.4 242.8 160 239.9V170.3L109.2 214.1C105.9 216.9 100.8 216.6 97.94 213.2C95.06 209.9 95.43 204.8 98.78 201.9L330.8 1.941zM376 176C389.3 176 400 186.7 400 200V280C400 293.3 389.3 304 376 304H296C282.7 304 271.1 293.3 271.1 280V200C271.1 186.7 282.7 176 296 176H376zM287.1 280C287.1 284.4 291.6 288 296 288H376C380.4 288 384 284.4 384 280V200C384 195.6 380.4 192 376 192H296C291.6 192 287.1 195.6 287.1 200V280zM256 504C256 508.4 252.4 512 248 512C243.6 512 240 508.4 240 504C240 375.9 136.1 272 8 272C3.582 272 0 268.4 0 264C0 259.6 3.582 256 8 256C144.1 256 256 367 256 504zM64 480C64 497.7 49.67 512 32 512C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448C49.67 448 64 462.3 64 480zM32 464C23.16 464 16 471.2 16 480C16 488.8 23.16 496 32 496C40.84 496 48 488.8 48 480C48 471.2 40.84 464 32 464zM0 360C0 355.6 3.582 352 8 352C91.95 352 160 420.1 160 504C160 508.4 156.4 512 152 512C147.6 512 144 508.4 144 504C144 428.9 83.11 368 8 368C3.582 368 0 364.4 0 360z"/>
</>],

]);

const HouseSignal: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HouseSignal.displayName = "HouseSignal";

export default HouseSignal;