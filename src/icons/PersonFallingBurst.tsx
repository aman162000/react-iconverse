
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 0C241.7 0 256 14.33 256 32V41.84C256 96.45 228.1 146.5 183.5 175.4L183.7 175.8L240.5 255.1H311.1C327.1 255.1 341.3 263.1 350.4 275.2L393.6 332.8C404.2 346.9 401.3 366.1 387.2 377.6C373.1 388.2 353 385.3 342.4 371.2L303.1 319.1H222.6L314.9 462.6C324.5 477.5 320.2 497.3 305.4 506.9C290.5 516.5 270.7 512.2 261.1 497.4L100.5 249.2C97.57 258.4 95.1 268.1 95.1 278.2V351.1C95.1 369.7 81.67 383.1 63.1 383.1C46.33 383.1 31.1 369.7 31.1 351.1V278.2C31.1 213 71.65 154.5 132.1 130.3C168.3 115.8 191.1 80.79 191.1 41.84V32C191.1 14.33 206.3 .0003 223.1 .0003L224 0zM0 80C0 53.49 21.49 32 48 32C74.51 32 96 53.49 96 80C96 106.5 74.51 128 48 128C21.49 128 0 106.5 0 80z"/><path className="fa-secondary" d="M419.2 313.6L382.1 265.3L384.2 247.6L365.8 244.8C351.2 231.5 332.1 223.1 312 223.1H292.6C292.6 223.7 292.5 223.4 292.4 223.2C290.1 216.8 293.5 210.1 298.9 206.4L364.5 161.3L325 92.18C321.8 86.49 322.3 79.39 326.4 74.27C330.5 69.14 337.3 67.03 343.6 68.93L419.7 92.05L449.1 18.09C451.6 11.1 457.4 8 464 8C470.6 8 476.5 11.1 478.9 18.09L508.3 92.05L584.5 68.93C590.7 67.03 597.5 69.14 601.6 74.27C605.7 79.39 606.2 86.49 602.1 92.18L563.5 161.3L629.1 206.4C634.5 210.1 637 216.8 635.6 223.2C634.1 229.6 628.9 234.4 622.4 235.4L543.8 247.6L549.4 327C549.8 333.6 546.3 339.7 540.4 342.6C534.5 345.4 527.4 344.4 522.6 339.9L464 286.1L424.7 322.2C423.1 319.3 421.3 316.4 419.2 313.6L419.2 313.6z"/>
</>],
['light',<>
	<path d="M240 0C248.8 0 256 7.164 256 16V26.81C256 82.25 226.8 132.6 180.8 160.5L248.1 263.1L307.4 257.2C320.6 255.9 333.3 262.8 339.2 274.7L382.3 360.8C386.3 368.7 383.1 378.4 375.2 382.3C367.3 386.3 357.6 383.1 353.7 375.2L310.6 289L246.2 295.5L188.7 340.1L285.4 487.2C290.2 494.6 288.2 504.5 280.8 509.4C273.4 514.2 263.5 512.2 258.6 504.8L79.76 232.6C69.65 250.7 63.1 271.5 63.1 293.2V367.1C63.1 376.8 56.84 383.1 47.1 383.1C39.16 383.1 31.1 376.8 31.1 367.1V293.2C31.1 225.9 75.08 166.1 138.9 144.8C142.1 143.8 145.2 142.6 148.2 141.3C148.4 141.2 148.6 141 148.8 140.9C150.5 139.8 152.2 139.1 154 138.7C196.4 118.1 223.1 74.86 223.1 26.81V16C223.1 7.164 231.2 0 239.1 0L240 0zM171.1 313.3L218.5 276.4L151.6 174.3C150.7 174.6 149.9 174.9 149.1 175.2C130.1 181.5 113.5 192 100.1 205.5C100.6 206.1 100.1 206.6 101.4 207.2L171.1 313.3zM0 88C0 57.07 25.07 32 56 32C86.93 32 112 57.07 112 88C112 118.9 86.93 144 56 144C25.07 144 0 118.9 0 88zM56 112C69.25 112 80 101.3 80 88C80 74.75 69.25 64 56 64C42.75 64 32 74.75 32 88C32 101.3 42.75 112 56 112zM464 291.5L406.1 338.7L379.4 283.4L379.1 251L358.6 246.5C345.4 231.6 325.7 223.4 305.2 225.1L293.4 226.1C292.1 225.1 292.6 224.2 292.4 223.2C291 217.1 293.3 210.7 298.3 206.9L359.2 160.1L324.6 91.44C321.8 85.86 322.5 79.15 326.4 74.27C330.3 69.38 336.7 67.21 342.7 68.71L417.4 87.16L449.5 17.32C452.1 11.64 457.8 7.1 464 7.1C470.3 7.1 475.9 11.64 478.5 17.32L510.6 87.16L585.3 68.71C591.3 67.21 597.7 69.38 601.6 74.27C605.5 79.15 606.2 85.86 603.4 91.44L568.8 160.1L629.7 206.9C634.7 210.7 636.1 217.1 635.6 223.2C634.2 229.3 629.4 233.1 623.3 235.3L548 251L549.4 327.9C549.5 334.1 545.1 339.9 540.4 342.6C534.7 345.3 528 344.5 523.2 340.5L464 291.5zM464 62.31L440.9 112.5C437.7 119.5 429.1 123.2 422.5 121.4L368.9 108.1L393.7 157.5C397.2 164.4 395.3 172.7 389.2 177.4L345.4 211.1L399.5 222.4C406.1 223.1 412.3 230.7 412.2 238.4L411.2 293.6L453.8 258.4C459.7 253.5 468.3 253.5 474.2 258.4L516.8 293.6L515.8 238.4C515.7 230.7 521 223.1 528.5 222.4L582.6 211.1L538.8 177.4C532.7 172.7 530.8 164.4 534.3 157.5L559.1 108.1L505.5 121.4C498 123.2 490.3 119.5 487.1 112.5L464 62.31z"/>
</>],
['regular',<>
	<path d="M232 0C245.3 0 256 10.75 256 24V34.36C256 90.83 225.9 142.2 178.5 170.1L236.7 255.1H311.7C324.7 255.1 336.1 262.4 344.4 273.1L395.7 346.2C403.3 357.1 400.6 372.1 389.8 379.7C378.9 387.3 363.9 384.6 356.3 373.8L307.5 303.1H257.9C256.6 305.5 255 306.8 253.3 307.1L199.4 343.9L284.1 474.1C291.4 486.1 288.2 500.1 277 508.2C265.9 515.4 251.1 512.2 243.8 501L84.45 254.7C81.54 264.6 79.1 274.1 79.1 285.6V359.1C79.1 373.3 69.25 383.1 55.1 383.1C42.74 383.1 31.1 373.3 31.1 359.1V285.6C31.1 219.3 73.48 160.1 135.8 137.4C179.1 121.7 207.1 80.49 207.1 34.36V24C207.1 10.75 218.7 0 231.1 0L232 0zM173.3 303.6L199.3 286.3L134.5 190.8C126.1 195.7 118.4 201.7 111.7 208.5L173.3 303.6zM96 80C96 106.5 74.51 128 48 128C21.49 128 0 106.5 0 80C0 53.49 21.49 32 48 32C74.51 32 96 53.49 96 80zM464 302.3L430.7 326.7C429.1 325.6 429.2 324.4 428.4 323.3L377.2 250.1C362.2 228.7 337.8 215.1 311.7 215.1H291.9C292.4 209.8 295.3 203.9 300.1 199.7L348.7 157.7L323.1 98.79C319.6 90.64 320.9 81.21 326.4 74.27C331.9 67.32 340.9 64 349.6 65.64L412.7 77.46L442.8 20.75C446.1 12.9 455.1 7.1 464 7.1C472.9 7.1 481 12.9 485.2 20.75L515.3 77.46L578.4 65.64C587.1 64 596.1 67.32 601.6 74.27C607.1 81.21 608.4 90.64 604.9 98.79L579.3 157.7L627.9 199.7C634.6 205.5 637.6 214.5 635.6 223.2C633.6 231.8 627 238.7 618.4 240.1L556.5 257.7L553.9 321.9C553.6 330.8 548.4 338.7 540.4 342.6C532.4 346.4 522.9 345.5 515.7 340.3L464 302.3zM464 83.18L446.8 115.6C441.9 124.8 431.5 129.8 421.2 127.9L385.2 121.1L399.8 154.8C403.9 164.4 401.4 175.6 393.4 182.5L365.7 206.4L401.1 215.1C411.2 218.7 418.4 227.7 418.8 238.2L420.3 274.8L449.8 253.1C458.2 246.9 469.8 246.9 478.2 253.1L507.7 274.8L509.2 238.2C509.6 227.7 516.8 218.7 526.9 215.1L562.3 206.4L534.6 182.5C526.6 175.6 524.1 164.4 528.2 154.8L542.8 121.1L506.8 127.9C496.5 129.8 486.1 124.8 481.2 115.6L464 83.18z"/>
</>],
['solid',<>
	<path d="M256 41.84C256 96.45 228.1 146.5 183.5 175.4L183.7 175.8L240.5 255.1H311.1C327.1 255.1 341.3 263.1 350.4 275.2L393.6 332.8C404.2 346.9 401.3 366.1 387.2 377.6C373.1 388.2 353 385.3 342.4 371.2L303.1 319.1H222.6L314.9 462.6C324.5 477.5 320.2 497.3 305.4 506.9C290.5 516.5 270.7 512.2 261.1 497.4L100.5 249.2C97.57 258.4 95.1 268.1 95.1 278.2V351.1C95.1 369.7 81.67 383.1 63.1 383.1C46.33 383.1 31.1 369.7 31.1 351.1V278.2C31.1 213 71.65 154.5 132.1 130.3C168.3 115.8 191.1 80.79 191.1 41.84V32C191.1 14.33 206.3 0 223.1 0C241.7 0 255.1 14.33 255.1 32L256 41.84zM96 79.1C96 106.5 74.51 127.1 48 127.1C21.49 127.1 0 106.5 0 79.1C0 53.49 21.49 31.1 48 31.1C74.51 31.1 96 53.49 96 79.1zM464 286.1L424.7 322.2C423.1 319.3 421.3 316.4 419.2 313.6L382.1 265.3L384.2 247.6L365.8 244.8C351.2 231.5 332.1 223.1 311.1 223.1H292.6C292.5 223.7 292.5 223.4 292.4 223.2C290.1 216.8 293.5 210.1 298.9 206.4L364.5 161.3L325 92.18C321.8 86.49 322.3 79.39 326.4 74.27C330.5 69.14 337.3 67.03 343.6 68.93L419.7 92.05L449.1 18.09C451.6 11.1 457.4 8 464 8C470.6 8 476.4 11.1 478.9 18.09L508.3 92.05L584.4 68.93C590.7 67.03 597.5 69.14 601.6 74.27C605.7 79.39 606.2 86.49 602.1 92.18L563.5 161.3L629.1 206.4C634.5 210.1 637 216.8 635.6 223.2C634.1 229.6 628.9 234.4 622.4 235.4L543.8 247.6L549.4 327C549.8 333.6 546.3 339.7 540.4 342.6C534.5 345.4 527.4 344.4 522.6 339.9L464 286.1z"/>
</>],
['thin',<>
	<path d="M311.1 255.1C327.1 255.1 341.3 263.1 350.4 275.2L393.6 332.8C404.2 346.9 401.3 366.1 387.2 377.6C373.1 388.2 353 385.3 342.4 371.2L303.1 319.1H222.6L314.9 462.6C324.5 477.5 320.2 497.3 305.4 506.9C290.5 516.5 270.7 512.2 261.1 497.4L100.5 249.2C98.18 256.5 96.71 264.1 96.2 271.9C96.07 274 95.1 276.1 95.1 278.2V351.1C95.1 369.7 81.67 383.1 63.1 383.1C46.33 383.1 31.1 369.7 31.1 351.1V278.2C31.1 213 71.65 154.5 132.1 130.3C168.3 115.8 191.1 80.79 191.1 41.84V32C191.1 14.33 206.3 0 223.1 0C241.7 0 255.1 14.33 255.1 32V41.84C255.1 91.28 233.1 136.9 195.7 166.6C191.8 169.8 187.7 172.7 183.5 175.4L183.7 175.8L240.5 255.1L311.1 255.1zM240 41.84V31.1C240 23.16 232.8 15.1 224 15.1C215.2 15.1 208 23.16 208 31.1V41.84C208 87.33 180.3 128.2 138.1 145.1C83.67 166.9 48 219.6 48 278.2V351.1C48 360.8 55.16 367.1 64 367.1C72.84 367.1 80 360.8 80 351.1V278.2C80 266.5 81.83 255.1 85.28 244.3C87.16 238.4 92.27 234.1 98.4 233.3C104.5 232.5 110.6 235.3 113.1 240.5L274.6 488.7C279.4 496.1 289.3 498.2 296.7 493.4C304.1 488.6 306.2 478.7 301.4 471.3L209.2 328.7C205.1 323.8 205.7 317.5 208.5 312.4C211.3 307.2 216.7 303.1 222.6 303.1H303.1C309 303.1 313.8 306.4 316.8 310.4L355.2 361.6C360.5 368.7 370.5 370.1 377.6 364.8C384.7 359.5 386.1 349.5 380.8 342.4L337.6 284.8C331.6 276.7 322.1 271.1 311.1 271.1H240.5C235.4 271.1 230.5 269.5 227.5 265.2L170.7 185.1L170.5 184.8C167.9 181.2 166.9 176.8 167.7 172.5C168.5 168.2 171.1 164.4 174.7 162C214.9 135.9 240 90.96 240 41.84V41.84zM0 87.1C0 57.07 25.07 31.1 56 31.1C86.93 31.1 112 57.07 112 87.1C112 118.9 86.93 143.1 56 143.1C25.07 143.1 0 118.9 0 87.1zM56 47.1C33.91 47.1 16 65.91 16 87.1C16 110.1 33.91 127.1 56 127.1C78.09 127.1 96 110.1 96 87.1C96 65.91 78.09 47.1 56 47.1zM449.5 20.48C455.2 8.051 472.8 8.051 478.5 20.48L509.9 88.7L582.8 70.68C596.1 67.4 607.1 81.2 600.9 93.41L566.1 160.8L620.7 206.7C630.7 215.3 626.7 231.6 613.9 234.5L546.7 249.8L548.1 325C548.3 338.7 532.4 346.4 521.9 337.6L464 289.8L418.4 327.5C417 324.7 415.4 322 413.6 319.4L409.7 313.1L458.9 273.2C461.9 270.8 466.1 270.8 469.1 273.2L532.1 325.3L530.6 243.6C530.5 239.8 533.1 236.5 536.8 235.7L610.3 218.9L551.8 168.9C549 166.5 548.2 162.5 549.9 159.2L586.6 86.21L507.3 105.8C503.6 106.7 499.7 104.9 498.1 101.4L464 27.16L429.9 101.4C428.3 104.9 424.4 106.7 420.7 105.8L341.4 86.21L378.1 159.2C379.8 162.5 379 166.5 376.2 168.9L317.7 218.9L391.2 235.7C394.9 236.5 397.5 239.8 397.4 243.6L396.5 295.5L380.9 273.7L381.3 249.8L314.1 234.5C301.3 231.6 297.3 215.3 307.3 206.7L361 160.8L327.1 93.41C320.9 81.2 331.9 67.39 345.2 70.68L418.1 88.7L449.5 20.48z"/>
</>],

]);

const PersonFallingBurst: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PersonFallingBurst.displayName = "PersonFallingBurst";

export default PersonFallingBurst;