
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M220.7 7.468C247.3-7.906 281.4 1.218 296.8 27.85L463.8 317.1C479.1 343.8 470 377.8 443.4 393.2L250.5 504.5C223.9 519.9 189.9 510.8 174.5 484.2L7.468 194.9C-7.906 168.2 1.218 134.2 27.85 118.8L220.7 7.468zM143.8 277.3C136.9 303.2 152.3 329.1 178.3 336.9C204.3 343.9 230.1 328.5 237.9 302.5L240.3 293.6C240.4 293.3 240.5 292.9 240.6 292.5L258.4 323.2L246.3 330.2C239.6 334 237.4 342.5 241.2 349.2C245.1 355.9 253.6 358.1 260.2 354.3L308.4 326.5C315.1 322.6 317.4 314.1 313.5 307.4C309.7 300.8 301.2 298.5 294.5 302.3L282.5 309.3L264.7 278.6C265.1 278.7 265.5 278.8 265.9 278.9L274.7 281.2C300.7 288.2 327.4 272.8 334.4 246.8C341.3 220.8 325.9 194.1 299.9 187.1L196.1 159.6C185.8 156.6 174.4 163.2 171.4 174.3L143.8 277.3z"/><path className="fa-secondary" d="M324.1 499L459.4 420.9C501.3 396.7 515.7 343.1 491.5 301.1L354.7 64.25C356.5 64.08 358.2 64 360 64H584C614.9 64 640 89.07 640 120V456C640 486.9 614.9 512 584 512H360C346.4 512 333.8 507.1 324.1 499V499zM579.8 135.7C565.8 123.9 545.3 126.2 532.9 138.9L528.1 144.2L523.1 138.9C510.6 126.2 489.9 123.9 476.4 135.7C460.7 149.2 459.9 173.1 473.9 187.6L522.4 237.6C525.4 240.8 530.6 240.8 533.9 237.6L582 187.6C596 173.1 595.3 149.2 579.8 135.7H579.8z"/>
</>],
['light',<>
	<path d="M300.4 312.6C308.1 308.2 317.9 310.8 322.3 318.5C326.7 326.1 324.1 335.9 316.4 340.3L268.2 368.2C260.6 372.6 250.8 369.1 246.4 362.3C241.1 354.7 244.6 344.9 252.2 340.4L300.4 312.6zM174.5 169.3C176.5 162.1 183.9 157.8 190.8 159.9L299.9 190.1C331.5 200 349.1 234.5 338.8 266.4C330.9 289.4 307.1 302.7 284.3 302C279.6 301.9 274.8 301.2 270.1 299.9L258.8 296.6L256.4 307.8C255.4 311.9 253.9 315.8 252.1 319.4C241.3 341.2 217.8 355.1 192.7 350.7C159.9 344.3 139.3 311 147.2 279.2L174.5 169.3zM178.2 286.9C174.7 301.1 184.1 316.2 198.6 319.2C209.4 320.1 221.6 313.8 225.3 300.4L234.8 256.1L278.9 269.1C292.1 272.9 305.3 265.2 308.5 255.1L308.6 255.8C313.6 241.5 305.2 225.8 291.1 221.7L200.8 196.1L178.2 286.9zM174.8 484.7C174.7 484.5 174.5 484.2 174.3 483.9L7.629 195.2C7.464 194.9 7.302 194.6 7.142 194.3C-7.774 167.8 1.408 134.1 27.85 118.8L220.7 7.468C247.3-7.906 281.4 1.218 296.8 27.85L463.8 317.1C479.1 343.6 470.1 377.5 443.8 392.1C443.6 393.1 443.3 393.2 443.1 393.4L250.8 504.4C250.6 504.5 250.4 504.6 250.1 504.8C223.8 519.7 190.3 510.8 174.8 484.7V484.7zM234.4 476.9C234.5 476.9 234.5 476.8 234.5 476.8L427.4 365.5C427.4 365.5 427.5 365.4 427.5 365.4C438.7 358.7 442.5 344.2 435.9 332.9L269.2 44.13C262.6 32.66 247.9 28.72 236.4 35.35L44.13 146.4C32.8 152.9 28.82 167.3 35.09 178.7C35.12 178.8 35.15 178.8 35.18 178.9L202.2 468.2C202.2 468.2 202.3 468.3 202.3 468.3C208.1 479.3 223.2 483.1 234.4 476.9V476.9zM360 512C346.4 512 333.8 507.1 324.1 498.1L357.3 479.8C358.2 479.9 359.1 480 360 480H584C597.3 480 608 469.3 608 456V119.1C608 106.7 597.3 95.1 584 95.1H373L354.7 64.25C356.5 64.08 358.2 63.1 360 63.1H584C614.9 63.1 640 89.07 640 119.1V456C640 486.9 614.9 512 584 512L360 512zM448.4 138.6C464.9 124.3 487.8 125.3 503.1 136.4C520.2 125.3 542.9 124.4 559.6 138.5L559.8 138.6C580.4 156.5 581.3 188.1 562.8 207.3L520.4 251.2C511.7 259.1 496.7 260.7 487.5 250.9L445.2 207.3C426.7 188.1 427.6 156.5 448.4 138.6L448.4 138.6zM469.3 162.9C462.6 168.6 462.3 178.9 468.2 185.1L504.1 222.1L539.8 185.1C545.7 178.9 545.4 168.6 538.9 162.9C533.9 158.7 525.6 158.9 519.9 164.6L504.4 181.7L488.2 164.7C482.4 158.8 473.9 158.9 469.4 162.8L469.3 162.9z"/>
</>],
['regular',<>
	<path d="M171.4 174.3C174.4 163.2 185.8 156.6 196.1 159.6L299.9 187.1C325.9 194.1 341.3 220.8 334.4 246.8C327.4 272.8 300.7 288.2 274.7 281.2L265.9 278.9C265.5 278.8 265.1 278.7 264.7 278.6L282.5 309.3L294.5 302.4C301.2 298.5 309.7 300.8 313.5 307.4C317.4 314.1 315.1 322.6 308.4 326.5L260.2 354.3C253.6 358.1 245.1 355.9 241.2 349.2C237.4 342.5 239.6 334 246.3 330.2L258.4 323.2L240.6 292.5C240.5 292.9 240.4 293.3 240.3 293.6L237.9 302.5C230.1 328.5 204.3 343.9 178.3 336.9C152.3 329.1 136.9 303.2 143.8 277.3L171.4 174.3zM220.7 7.468C247.3-7.906 281.4 1.218 296.8 27.85L463.8 317.1C479.1 343.8 470 377.8 443.4 393.2L250.5 504.5C223.9 519.9 189.9 510.8 174.5 484.2L7.468 194.9C-7.906 168.2 1.218 134.2 27.85 118.8L220.7 7.468zM244.7 49.04L51.85 160.4C48.18 162.5 46.92 167.2 49.04 170.9L216.1 460.2C218.2 463.8 222.9 465.1 226.5 462.1L419.4 351.6C423.1 349.5 424.3 344.8 422.2 341.1L255.2 51.85C253.1 48.18 248.4 46.92 244.7 49.04H244.7zM324.1 499L459.4 420.9C501.3 396.7 515.7 343.1 491.5 301.1L354.7 64.25C356.5 64.08 358.2 63.1 360 63.1H584C614.9 63.1 640 89.07 640 119.1V456C640 486.9 614.9 512 584 512H360C346.4 512 333.8 507.1 324.1 498.1L324.1 499zM579.8 135.7C565.8 123.9 545.3 126.2 532.9 138.9L528.1 144.2L523.1 138.9C510.6 126.2 489.9 123.9 476.4 135.7C460.7 149.2 459.9 173.1 473.9 187.6L522.4 237.6C525.4 240.8 530.6 240.8 533.9 237.6L582 187.6C596 173.1 595.3 149.2 579.8 135.7H579.8z"/>
</>],
['solid',<>
	<path d="M7.468 194.9C-7.906 168.2 1.218 134.2 27.85 118.8L220.7 7.468C247.3-7.906 281.4 1.218 296.8 27.85L463.8 317.1C479.1 343.8 470 377.8 443.4 393.2L250.5 504.5C223.9 519.9 189.9 510.8 174.5 484.2L7.468 194.9zM196.1 159.6C185.8 156.6 174.4 163.2 171.4 174.3L143.8 277.3C136.9 303.2 152.3 329.1 178.3 336.9C204.3 343.9 230.1 328.5 237.9 302.5L240.3 293.6C240.4 293.3 240.5 292.9 240.6 292.5L258.4 323.2L246.3 330.2C239.6 334 237.4 342.5 241.2 349.2C245.1 355.9 253.6 358.1 260.2 354.3L308.4 326.5C315.1 322.6 317.4 314.1 313.5 307.4C309.7 300.8 301.2 298.5 294.5 302.3L282.5 309.3L264.7 278.6C265.1 278.7 265.5 278.8 265.9 278.9L274.7 281.2C300.7 288.2 327.4 272.8 334.4 246.8C341.3 220.8 325.9 194.1 299.9 187.1L196.1 159.6zM491.5 301.1L354.7 64.25C356.5 64.08 358.2 63.1 360 63.1H584C614.9 63.1 640 89.07 640 119.1V456C640 486.9 614.9 512 584 512H360C346.4 512 333.8 507.1 324.1 498.1L459.4 420.9C501.3 396.7 515.7 343.1 491.5 301.1L491.5 301.1zM533.9 237.6L582 187.6C596 173.1 595.3 149.2 579.8 135.7C565.8 123.9 545.3 126.2 532.9 138.9L528.1 144.2L523.1 138.9C510.6 126.2 489.9 123.9 476.4 135.7C460.7 149.2 459.9 173.1 473.9 187.6L522.4 237.6C525.4 240.8 530.6 240.8 533.9 237.6H533.9z"/>
</>],
['thin',<>
	<path d="M253.3 358.3C251.1 354.5 252.4 349.6 256.2 347.4L274.2 336.1L256.3 308.2C255.9 309.5 255.6 310.8 255.1 312.1C246.3 337.1 220.5 355.6 192.7 350.7C159.9 344.3 139.3 311 147.2 279.2L174.5 169.3C176.5 162.1 183.9 157.8 190.8 159.9L299.9 190.1C331.5 200 349.1 234.5 338.8 266.4C329.7 292.6 301.1 306.3 274.3 300.9C272.9 300.6 271.5 300.3 270.2 299.9L269.9 299.8L288.1 328.1L304.4 319.5C308.3 317.3 313.2 318.6 315.4 322.5C317.6 326.3 316.3 331.2 312.4 333.4L264.2 361.2C260.4 363.4 255.5 362.1 253.3 358.3L253.3 358.3zM162.7 283C156.1 306.1 171.1 330.3 195.7 334.1C215.7 338.4 235.3 324.9 240.8 304.1L246.8 276.3L274.5 284.5C295.6 290.3 317.3 279.6 323.6 261.2L323.7 261.1C331.8 238 318.4 212.9 295.5 206.4L189.3 176.2L162.7 283zM220.4 7.637C247.2-7.827 281.5 1.35 296.9 28.13L463.6 316.9C479.1 343.6 469.9 377.9 443.1 393.4L250.8 504.4C224 519.8 189.8 510.7 174.3 483.9L7.629 195.2C-7.835 168.4 1.342 134.1 28.13 118.7L220.4 7.637zM228.4 21.49L36.13 132.5C16.99 143.6 10.44 168 21.49 187.2L188.2 475.9C199.2 495 223.7 501.6 242.8 490.5L435.1 379.5C454.2 368.5 460.8 343.1 449.8 324.9L283.1 36.13C272 17 247.6 10.45 228.4 21.49V21.49zM339.3 490.2C345.3 493.9 352.4 496 360 496H584C606.1 496 624 478.1 624 456V120C624 97.91 606.1 80 584 80H363.8L354.7 64.25C356.5 64.08 358.2 64 360 64H584C614.9 64 640 89.07 640 120V456C640 486.9 614.9 512 584 512H360C346.4 512 333.8 507.1 324.1 499L339.3 490.2zM562.5 136.6L562.6 136.7C579.6 151.5 580.4 177.8 565 193.7L522.9 237.4L522.8 237.5C516.1 243.3 507.2 243.7 501.3 237.4L458.9 193.7C443.6 177.8 444.4 151.5 461.6 136.7C476.5 123.7 498.4 126 511.1 138.5C525.6 125.1 547.2 123.8 562.5 136.6V136.6zM501.1 151.1C493.6 142.6 480.3 141.7 472.1 148.7L472.1 148.8C461.9 157.5 461.4 173.2 470.4 182.6L512.1 225.6L553.5 182.6C562.6 173.2 562.1 157.6 552.1 148.8C543.5 141.6 530.4 142.7 522.1 151L512.2 161.9L501.1 151.1z"/>
</>],

]);

const Cards: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Cards.displayName = "Cards";

export default Cards;