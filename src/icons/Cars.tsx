
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M260.1 294.4L286.7 214.7C297.6 182 328.2 160 362.6 160H501.4C535.8 160 566.4 182 577.3 214.7L603.9 294.4C625.2 304.7 640 326.6 640 352L640 480C640 497.7 625.7 512 608 512H592C574.3 512 560 497.7 560 480V448H304V480C304 497.7 289.7 512 272 512H256C238.3 512 224 497.7 224 480L224 352C224 326.6 238.8 304.7 260.1 294.4V294.4zM329.7 288H534.3L516.6 234.9C514.4 228.4 508.3 224 501.4 224H362.6C355.7 224 349.6 228.4 347.4 234.9L329.7 288zM304 344C290.7 344 280 354.7 280 368C280 381.3 290.7 392 304 392C317.3 392 328 381.3 328 368C328 354.7 317.3 344 304 344zM560 392C573.3 392 584 381.3 584 368C584 354.7 573.3 344 560 344C546.7 344 536 354.7 536 368C536 381.3 546.7 392 560 392z"/><path className="fa-secondary" d="M138.6 .0003H277.4C311.8 .0003 342.4 22.03 353.3 54.7L377.7 128H362.6C314.4 128 271.6 158.8 256.3 204.6L233.6 272.9C227.3 277.3 221.5 282.3 216.5 288H80V320C80 337.7 65.67 352 48 352H32C14.33 352 .0003 337.7 .0003 320L0 192C0 166.6 14.75 144.7 36.15 134.4L62.7 54.7C73.59 22.03 104.2 0 138.6 0V.0003zM138.6 64C131.7 64 125.6 68.41 123.4 74.94L105.7 128H310.3L292.6 74.94C290.4 68.41 284.3 64 277.4 64H138.6zM80 232C93.25 232 104 221.3 104 208C104 194.7 93.25 184 80 184C66.75 184 56 194.7 56 208C56 221.3 66.75 232 80 232z"/>
</>],
['light',<>
	<path d="M124.2 0H259.8C288.4 0 313.5 18.94 321.3 46.42L342.1 122.1C353 127.7 361.7 135.5 368.5 144.7C356.6 146.2 345.3 149.8 334.1 155.3C326.6 148.3 315.8 144 304 144H80C53.49 144 32 165.5 32 192V256H275.8L269.6 277.8C265.3 280.9 261.4 284.3 257.6 288H32V320C32 328.8 24.84 336 16 336C7.164 336 0 328.8 0 320V192C0 161.1 16.56 135.8 41.04 122.1L62.67 46.42C70.52 18.94 95.63 0 124.2 0V0zM124.2 32C109.9 32 97.36 41.47 93.44 55.21L77.2 112C78.13 112 79.06 112 80 112H304C304.9 112 305.9 112 306.8 112L290.6 55.21C286.6 41.47 274.1 32 259.8 32H124.2zM56 200C56 186.7 66.75 176 80 176C93.25 176 104 186.7 104 200C104 213.3 93.25 224 80 224C66.75 224 56 213.3 56 200zM312 376C312 362.7 322.7 352 336 352C349.3 352 360 362.7 360 376C360 389.3 349.3 400 336 400C322.7 400 312 389.3 312 376zM584 376C584 389.3 573.3 400 560 400C546.7 400 536 389.3 536 376C536 362.7 546.7 352 560 352C573.3 352 584 362.7 584 376zM380.2 176H515.8C544.4 176 569.5 194.9 577.3 222.4L598.1 298.1C623.4 311.8 640 337.1 640 368V496C640 504.8 632.8 512 624 512C615.2 512 608 504.8 608 496V464H287.1V496C287.1 504.8 280.8 512 271.1 512C263.2 512 255.1 504.8 255.1 496V368C255.1 337.1 272.6 311.8 297 298.1L318.7 222.4C326.5 194.9 351.6 176 380.2 176H380.2zM380.2 208C365.9 208 353.4 217.5 349.4 231.2L333.2 288C334.1 288 335.1 288 336 288H560C560.9 288 561.9 288 562.8 288L546.6 231.2C542.6 217.5 530.1 208 515.8 208H380.2zM608 368C608 341.5 586.5 320 560 320H336C309.5 320 288 341.5 288 368V432H608V368z"/>
</>],
['regular',<>
	<path d="M70.02 47.78C80.26 19.13 107.4 0 137.8 0H278.2C308.6 0 335.7 19.13 345.1 47.78L374.6 127.9L374.6 127.1H361.8C332.9 127.1 305.1 139.1 286.8 159.1H96C69.49 159.1 48 181.5 48 207.1V239.1H248.5L237.9 269.8C231.4 275.3 225.4 281.4 220.1 287.1H48V328C48 341.3 37.25 352 24 352C10.75 352 0 341.3 0 328V207.1C0 175.5 16.18 146.7 40.94 129.3C41.08 128.9 41.23 128.4 41.4 127.9L70.02 47.78zM137.8 48C127.7 48 118.6 54.38 115.2 63.93L98.06 112H317.9L300.8 63.93C297.4 54.38 288.3 48 278.2 48H137.8zM88 200C88 186.7 98.75 176 112 176C125.3 176 136 186.7 136 200C136 213.3 125.3 224 112 224C98.75 224 88 213.3 88 200zM312 360C312 346.7 322.7 336 336 336C349.3 336 360 346.7 360 360C360 373.3 349.3 384 336 384C322.7 384 312 373.3 312 360zM552 360C552 373.3 541.3 384 528 384C514.7 384 504 373.3 504 360C504 346.7 514.7 336 528 336C541.3 336 552 346.7 552 360zM294 207.8C304.3 179.1 331.4 160 361.8 160H502.2C532.6 160 559.7 179.1 569.1 207.8L598.6 287.9C598.8 288.4 598.9 288.9 599.1 289.3C623.8 306.7 640 335.5 640 368V488C640 501.3 629.3 512 616 512C602.7 512 592 501.3 592 488V448H272V488C272 501.3 261.3 512 248 512C234.7 512 224 501.3 224 488V368C224 335.5 240.2 306.7 264.9 289.3C265.1 288.9 265.2 288.4 265.4 287.9L294 207.8zM361.8 208C351.7 208 342.6 214.4 339.2 223.9L322.1 272H541.9L524.8 223.9C521.4 214.4 512.3 208 502.2 208H361.8zM544 320H320C293.5 320 272 341.5 272 368V400H592V368C592 341.5 570.5 320 544 320z"/>
</>],
['solid',<>
	<path d="M36.15 134.4L62.7 54.7C73.59 22.03 104.2 0 138.6 0H277.4C311.8 0 342.4 22.03 353.3 54.7L377.7 128H362.6C314.4 128 271.6 158.8 256.3 204.6L233.6 272.9C227.3 277.3 221.5 282.3 216.5 288H80V320C80 337.7 65.67 352 48 352H32C14.33 352 .0003 337.7 .0003 320L0 192C0 166.6 14.75 144.7 36.15 134.4V134.4zM105.7 128H310.3L292.6 74.94C290.4 68.41 284.3 64 277.4 64H138.6C131.7 64 125.6 68.41 123.4 74.94L105.7 128zM80 184C66.75 184 56 194.7 56 208C56 221.3 66.75 232 80 232C93.25 232 104 221.3 104 208C104 194.7 93.25 184 80 184zM362.6 160H501.4C535.8 160 566.4 182 577.3 214.7L603.9 294.4C625.2 304.7 640 326.6 640 352L640 480C640 497.7 625.7 512 608 512H592C574.3 512 560 497.7 560 480V448H304V480C304 497.7 289.7 512 272 512H256C238.3 512 224 497.7 224 480L224 352C224 326.6 238.8 304.7 260.1 294.4L286.7 214.7C297.6 182 328.2 160 362.6 160V160zM362.6 224C355.7 224 349.6 228.4 347.4 234.9L329.7 288H534.3L516.6 234.9C514.4 228.4 508.3 224 501.4 224H362.6zM304 392C317.3 392 328 381.3 328 368C328 354.7 317.3 344 304 344C290.7 344 280 354.7 280 368C280 381.3 290.7 392 304 392zM560 344C546.7 344 536 354.7 536 368C536 381.3 546.7 392 560 392C573.3 392 584 381.3 584 368C584 354.7 573.3 344 560 344z"/>
</>],
['thin',<>
	<path d="M49.32 118.1L48.31 117.8L70.36 40.62C77.23 16.57 99.2 0 124.2 0H259.8C284.8 0 306.8 16.57 313.6 40.62L335.7 117.8L334.7 118.1C348.3 123.7 359.9 133 368.5 144.7C362.5 145.4 356.6 146.7 350.1 148.5C339.3 135.9 322.6 128 304 128H80C44.65 128 16 156.7 16 192V256H275.8L271.2 272H16V328C16 332.4 12.42 336 8 336C3.582 336 0 332.4 0 328V192C0 158.7 20.36 130.1 49.32 118.1L49.32 118.1zM66.27 113.2C70.73 112.4 75.32 112 79.1 112H303.1C308.7 112 313.3 112.4 317.7 113.2L298.3 45.01C293.3 27.84 277.7 15.1 259.8 15.1H124.2C106.3 15.1 90.65 27.84 85.74 45.01L66.27 113.2zM47.1 192C47.1 174.3 62.33 160 79.1 160C97.67 160 111.1 174.3 111.1 192C111.1 209.7 97.67 224 79.1 224C62.33 224 47.1 209.7 47.1 192zM79.1 176C71.16 176 63.1 183.2 63.1 192C63.1 200.8 71.16 208 79.1 208C88.84 208 95.1 200.8 95.1 192C95.1 183.2 88.84 176 79.1 176zM303.1 368C303.1 350.3 318.3 336 336 336C353.7 336 368 350.3 368 368C368 385.7 353.7 400 336 400C318.3 400 303.1 385.7 303.1 368zM336 352C327.2 352 319.1 359.2 319.1 368C319.1 376.8 327.2 384 336 384C344.8 384 352 376.8 352 368C352 359.2 344.8 352 336 352zM592 368C592 385.7 577.7 400 560 400C542.3 400 528 385.7 528 368C528 350.3 542.3 336 560 336C577.7 336 592 350.3 592 368zM560 384C568.8 384 576 376.8 576 368C576 359.2 568.8 352 560 352C551.2 352 544 359.2 544 368C544 376.8 551.2 384 560 384zM305.3 294.1L304.3 293.8L326.4 216.6C333.2 192.6 355.2 176 380.2 176H515.8C540.8 176 562.8 192.6 569.6 216.6L591.7 293.8L590.7 294.1C619.6 306.1 640 334.7 640 368V504C640 508.4 636.4 512 632 512C627.6 512 624 508.4 624 504V448H271.1V504C271.1 508.4 268.4 512 263.1 512C259.6 512 255.1 508.4 255.1 504V368C255.1 334.7 276.4 306.1 305.3 294.1H305.3zM322.3 289.2C326.7 288.4 331.3 288 336 288H560C564.7 288 569.3 288.4 573.7 289.2L554.3 221C549.3 203.8 533.7 191.1 515.8 191.1H380.2C362.3 191.1 346.7 203.8 341.7 221L322.3 289.2zM624 432V368C624 332.7 595.3 304 560 304H336C300.7 304 271.1 332.7 271.1 368V432H624z"/>
</>],

]);

const Cars: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Cars.displayName = "Cars";

export default Cars;
