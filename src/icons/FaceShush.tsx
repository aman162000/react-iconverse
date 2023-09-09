
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 224C269.3 224 280 234.7 280 248V320H232V248C232 234.7 242.7 224 256 224zM232 400C227.6 400 224 403.6 224 408V419.5L287.6 464H297.5C304.6 464 311.4 460.8 315.1 455.4L341.6 424.6C350 414.5 365.2 413.1 375.4 421.6C385.5 430 386.9 445.2 378.4 455.4L352.8 486.1C339.1 502.5 318.9 512 297.5 512H232C201.1 512 176 486.9 176 456V408C176 377.1 201.1 352 232 352H264C294.9 352 320 377.1 320 408V416C320 429.3 309.3 440 296 440C282.7 440 272 429.3 272 416V408C272 403.6 268.4 400 264 400H232z"/><path className="fa-secondary" d="M256 0C397.4 0 512 114.6 512 256C512 338.2 473.2 411.4 412.1 458.3C420.3 436.9 414.2 412.3 395.8 396.1C382.3 385.7 365 381.9 348.1 385.1C343.3 363.9 329.9 345.9 312 334.2V275.9C326.8 269 338.6 260.1 347.3 251.3C353.6 245.1 353.6 234.9 347.3 228.7C341.1 222.4 330.9 222.4 324.7 228.7C321 232.4 316.6 236.1 311.4 239.6C307.3 212.7 284.1 192 256 192C227.9 192 204.7 212.7 200.6 239.6C195.4 236.1 190.1 232.4 187.3 228.7C181.1 222.4 170.9 222.4 164.7 228.7C158.4 234.9 158.4 245.1 164.7 251.3C173.4 260.1 185.2 269 200 275.9V326C167.2 338.8 144 370.7 144 408V456C144 467.8 146.3 479.1 150.5 489.3C61.76 449.1 0 359.8 0 256C0 114.6 114.6 .0003 256 .0003L256 0zM176.4 160C194 160 208.4 145.7 208.4 128C208.4 110.3 194 96 176.4 96C158.7 96 144.4 110.3 144.4 128C144.4 145.7 158.7 160 176.4 160zM336.4 96C318.7 96 304.4 110.3 304.4 128C304.4 145.7 318.7 160 336.4 160C354 160 368.4 145.7 368.4 128C368.4 110.3 354 96 336.4 96z"/>
</>],
['light',<>
	<path d="M121.6 435.2C128.7 440.5 130.1 450.5 124.8 457.6C119.5 464.7 109.4 466.1 102.4 460.8C40.24 414.1 0 339.8 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 308.3 496.3 357 469.3 397.6C464.4 404.9 454.5 406.9 447.1 402C439.8 397.1 437.8 387.2 442.7 379.9C466.3 344.4 480 301.8 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 329.3 67.16 394.3 121.6 435.2L121.6 435.2zM200.4 144C200.4 157.3 189.6 168 176.4 168C163.1 168 152.4 157.3 152.4 144C152.4 130.7 163.1 120 176.4 120C189.6 120 200.4 130.7 200.4 144zM360.4 144C360.4 157.3 349.6 168 336.4 168C323.1 168 312.4 157.3 312.4 144C312.4 130.7 323.1 120 336.4 120C349.6 120 360.4 130.7 360.4 144zM164.7 228.7C170.9 222.4 181.1 222.4 187.3 228.7C192.6 233.1 199.5 239.5 208 244.1V240C208 213.5 229.5 192 256 192C282.5 192 304 213.5 304 240V244.1C312.5 239.5 319.4 233.1 324.7 228.7C330.9 222.4 341.1 222.4 347.3 228.7C353.6 234.9 353.6 245.1 347.3 251.3C337.1 261.6 322.6 272.2 304 279.3V314.7C323.8 326.1 338.2 345.8 342.6 368.9C356.3 366.2 371.1 369.5 382.7 379.1C403.1 396.1 405.8 426.4 388.9 446.7L363.3 477.5C345 499.3 318 512 289.5 512H232C187.8 512 152 476.2 152 432V384C152 348.2 175.5 317.9 208 307.7V279.3C189.4 272.2 174.9 261.6 164.7 251.3C158.4 245.1 158.4 234.9 164.7 228.7L164.7 228.7zM239.1 240V304H272V240C272 231.2 264.8 224 255.1 224C247.2 224 239.1 231.2 239.1 240zM217.2 377.1C219.5 372.1 225.3 368 231.1 368H264C272.8 368 280 375.2 280 384V392C280 400.8 287.2 408 296 408C304.8 408 312 400.8 312 392V384C312 357.5 290.5 336 264 336H231.1C205.5 336 183.1 357.5 183.1 384V432C183.1 458.5 205.5 480 231.1 480H289.5C308.5 480 326.5 471.6 338.7 456.1L364.3 426.2C369.9 419.5 369 409.4 362.2 403.7C355.5 398.1 345.4 398.1 339.7 405.8L314.1 436.5C308.1 442.7 301.7 446.6 293.9 447.7L217.2 377.1z"/>
</>],
['regular',<>
	<path d="M48 256C48 329.6 86.27 394.3 144 431.3V456C144 467.8 146.3 479.1 150.5 489.3C61.76 449.1 0 359.8 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 338.2 473.2 411.4 412.1 458.3C419.3 439.8 415.6 418.8 402.6 403.6C440.5 365.9 464 313.7 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256V256zM347.3 251.3C338.6 260.1 326.8 269 312 275.9V248C312 245.2 311.8 242.4 311.4 239.6C316.6 236.1 321 232.4 324.7 228.7C330.9 222.4 341.1 222.4 347.3 228.7C353.6 234.9 353.6 245.1 347.3 251.3H347.3zM200 275.9C185.2 269 173.4 260.1 164.7 251.3C158.4 245.1 158.4 234.9 164.7 228.7C170.9 222.4 181.1 222.4 187.3 228.7C190.1 232.4 195.4 236.1 200.6 239.6C200.2 242.4 200 245.2 200 248L200 275.9zM144.4 144C144.4 126.3 158.7 112 176.4 112C194 112 208.4 126.3 208.4 144C208.4 161.7 194 176 176.4 176C158.7 176 144.4 161.7 144.4 144zM304.4 144C304.4 126.3 318.7 112 336.4 112C354 112 368.4 126.3 368.4 144C368.4 161.7 354 176 336.4 176C318.7 176 304.4 161.7 304.4 144zM280 320H232V248C232 234.7 242.7 224 256 224C269.3 224 280 234.7 280 248V320zM224 419.5L287.6 464H297.5C304.6 464 311.4 460.8 315.1 455.4L341.6 424.6C350 414.5 365.2 413.1 375.4 421.6C385.5 430 386.9 445.2 378.4 455.4L352.8 486.1C339.1 502.5 318.9 512 297.5 512H232C201.1 512 176 486.9 176 456V408C176 377.1 201.1 352 232 352H264C294.9 352 320 377.1 320 408V416C320 429.3 309.3 440 296 440C282.7 440 272 429.3 272 416V408C272 403.6 268.4 400 264 400H232C227.6 400 224 403.6 224 408V419.5z"/>
</>],
['solid',<>
	<path d="M256 0C397.4 0 512 114.6 512 256C512 338.2 473.2 411.4 412.1 458.3C420.3 436.9 414.2 412.3 395.8 396.1C382.3 385.7 365 381.9 348.1 385.1C343.3 363.9 329.9 345.9 312 334.2V275.9C326.8 269 338.6 260.1 347.3 251.3C353.6 245.1 353.6 234.9 347.3 228.7C341.1 222.4 330.9 222.4 324.7 228.7C321 232.4 316.6 236.1 311.4 239.6C307.3 212.7 284.1 192 256 192C227.9 192 204.7 212.7 200.6 239.6C195.4 236.1 190.1 232.4 187.3 228.7C181.1 222.4 170.9 222.4 164.7 228.7C158.4 234.9 158.4 245.1 164.7 251.3C173.4 260.1 185.2 269 200 275.9V326C167.2 338.8 144 370.7 144 408V456C144 467.8 146.3 479.1 150.5 489.3C61.76 449.1 0 359.8 0 256C0 114.6 114.6 .0003 256 .0003L256 0zM176.4 160C194 160 208.4 145.7 208.4 128C208.4 110.3 194 96 176.4 96C158.7 96 144.4 110.3 144.4 128C144.4 145.7 158.7 160 176.4 160zM336.4 96C318.7 96 304.4 110.3 304.4 128C304.4 145.7 318.7 160 336.4 160C354 160 368.4 145.7 368.4 128C368.4 110.3 354 96 336.4 96zM280 320H232V248C232 234.7 242.7 224 256 224C269.3 224 280 234.7 280 248V320zM224 419.5L287.6 464H297.5C304.6 464 311.4 460.8 315.1 455.4L341.6 424.6C350 414.5 365.2 413.1 375.4 421.6C385.5 430 386.9 445.2 378.4 455.4L352.8 486.1C339.2 502.5 318.9 512 297.5 512H232C201.1 512 176 486.9 176 456V408C176 377.1 201.1 352 232 352H264C294.9 352 320 377.1 320 408V416C320 429.3 309.3 440 296 440C282.7 440 272 429.3 272 416V408C272 403.6 268.4 400 264 400H232C227.6 400 224 403.6 224 408V419.5z"/>
</>],
['thin',<>
	<path d="M255.1 16C123.5 16 15.1 123.5 15.1 256C15.1 343.2 62.52 419.6 132.1 461.6C135.9 463.9 137.1 468.8 134.8 472.6C132.6 476.4 127.6 477.6 123.9 475.3C49.65 430.5 0 349 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 334.4 476.7 404.7 421.2 451.6C417.8 454.5 412.7 454 409.9 450.7C407 447.3 407.5 442.2 410.8 439.4C462.9 395.3 496 329.5 496 256C496 123.5 388.5 16 255.1 16V16zM192.4 144C192.4 152.8 185.2 160 176.4 160C167.5 160 160.4 152.8 160.4 144C160.4 135.2 167.5 128 176.4 128C185.2 128 192.4 135.2 192.4 144zM352.4 144C352.4 152.8 345.2 160 336.4 160C327.5 160 320.4 152.8 320.4 144C320.4 135.2 327.5 128 336.4 128C345.2 128 352.4 135.2 352.4 144zM223.1 246.1V240C223.1 222.3 238.3 208 255.1 208C273.7 208 288 222.3 288 240V246.1C314.5 241.3 334 229.3 346.7 218C349.1 215.1 355 215.4 357.1 218.7C360.9 221.1 360.6 227 357.3 229.1C342.3 243.4 319.2 257.4 288 263.3V324.7C311.5 334.1 328 357.1 328 384V392C328 409.7 313.7 424 296 424C278.3 424 264 409.7 264 392V384H231.1V399.7L296.3 446.5C298.4 445.5 300.3 444.1 301.8 442.2L327.4 411.5C338.7 397.9 358.9 396.1 372.5 407.4C386.1 418.7 387.9 438.9 376.6 452.5L350.1 483.2C335.8 501.5 313.3 512 289.5 512H231.1C196.7 512 167.1 483.3 167.1 448V384C167.1 351.4 192.4 324.4 223.1 320.5V263.3C192.8 257.4 169.7 243.4 154.7 229.1C151.4 227 151.1 221.1 154 218.7C156.1 215.4 162 215.1 165.3 218C177.1 229.3 197.5 241.3 223.1 246.1L223.1 246.1zM239.1 240V320H272V240C272 231.2 264.8 224 255.1 224C247.2 224 239.1 231.2 239.1 240zM264 368C272.8 368 280 375.2 280 384V392C280 400.8 287.2 408 296 408C304.8 408 312 400.8 312 392V384C312 357.5 290.5 336 264 336H231.1C205.5 336 183.1 357.5 183.1 384V448C183.1 474.5 205.5 496 231.1 496H289.5C308.5 496 326.5 487.6 338.7 472.1L364.3 442.2C369.9 435.5 369 425.4 362.2 419.7C355.5 414.1 345.4 414.1 339.7 421.8L314.1 452.5C308.8 458.9 301.2 462.9 292.1 463.8L215.1 407.9V384C215.1 375.2 223.2 368 231.1 368L264 368z"/>
</>],

]);

const FaceShush: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceShush.displayName = "FaceShush";

export default FaceShush;
