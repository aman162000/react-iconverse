
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M368.2 256L252.8 493.8C250.3 499.2 246.2 503.8 241.1 507C236.1 510.3 230.2 511.1 224.2 511.1C218.1 511.1 212.3 510.3 207.2 507C202.1 503.8 198.1 499.2 195.5 493.8L79.81 256H368.2z"/><path className="fa-secondary" d="M386.4 164.2C392.2 166.6 397.5 170.1 401.1 174.6C406.4 179 409.1 184.3 412.4 190.1C414.8 195.9 416.1 202.2 416.1 208.5C416.1 214.8 414.9 221 412.5 226.9C410.1 232.7 406.6 237.1 402.1 242.4C397.7 246.9 392.4 250.5 386.6 252.9C380.7 255.3 374.5 256.6 368.2 256.6H79.81C67.08 256.6 54.88 251.5 45.89 242.4C36.91 233.4 31.88 221.2 31.9 208.5C31.93 195.7 37.01 183.6 46.03 174.6C55.05 165.6 67.27 160.6 79.1 160.6H80.99C80.33 155.1 79.99 149.5 79.97 144C79.97 105.8 95.14 69.18 122.1 42.18C149.1 15.17 185.8 0 223.1 0C262.2 0 298.8 15.17 325.8 42.18C352.8 69.18 367.1 105.8 367.1 144C367.1 149.5 367.6 155.1 367 160.6H368C374.3 160.6 380.5 161.8 386.4 164.2z"/>
</>],
['light',<>
	<path d="M424.6 264.6C409.6 279.6 389.2 288 368 288H80C60.03 287.9 40.83 280.2 26.18 266.7C11.53 253.1 2.499 234.5 .8538 214.6C-.791 194.7 5.073 174.9 17.29 159.1C29.51 143.3 47.2 132.6 66.88 129.2C74.07 92.84 93.65 60.12 122.3 36.6C150.9 13.08 186.8 .2266 223.8 .2266C260.9 .2266 296.8 13.08 325.4 36.6C354 60.12 373.6 92.84 380.8 129.2C399.5 132.2 416.6 141.8 428.9 156.3C441.2 170.7 447.1 189 448 208C448 229.2 439.6 249.6 424.6 264.6V264.6zM399.9 242.8C408.5 234.7 413.8 223.7 414.7 211.9C415.7 200.1 412.2 188.3 405 178.9C397.9 169.5 387.5 163.1 375.8 160.9L353.8 157.2L349.6 135.4C343.8 106.3 328.2 80.11 305.3 61.29C282.4 42.48 253.6 32.19 224 32.19C194.4 32.19 165.6 42.48 142.7 61.29C119.8 80.11 104.2 106.3 98.43 135.4L94.18 157.2L72.16 160.9C60.53 163.1 50.13 169.5 42.96 178.9C35.78 188.3 32.34 200.1 33.29 211.9C34.24 223.7 39.51 234.7 48.1 242.8C56.68 250.1 67.98 255.7 79.81 256H368.2C380 255.7 391.3 250.1 399.9 242.8zM336 336C335.1 338.5 335.4 340.9 334.3 343.1L264.1 483.9C261.5 491.1 255.8 498.9 248.6 503.9C241.3 508.9 232.8 511.7 224 512C215.2 511.7 206.7 508.8 199.4 503.9C192.2 498.9 186.5 491.9 183 483.8L113.7 343C111.8 339.2 111.5 334.8 112.9 330.8C114.3 326.7 117.2 323.4 120.1 321.5C124.8 319.7 129.2 319.4 133.2 320.8C137.3 322.1 140.6 325 142.5 328.9L211.8 469.7C212.8 472.3 214.4 474.5 216.6 476.2C218.8 477.9 221.4 478.1 224.1 479.3C226.9 478.1 229.5 477.9 231.6 476.2C233.8 474.5 235.5 472.3 236.4 469.7L305.8 328.9C307.4 325.6 310 323 313.3 321.5C316.6 319.1 320.2 319.6 323.8 320.4C327.3 321.2 330.4 323.2 332.7 326C334.9 328.8 336.1 332.3 336.1 335.9L336 336z"/>
</>],
['regular',<>
	<path d="M380.8 129.2C400.4 132.7 417.1 143.4 430.1 159.1C442.3 174.9 448.1 194.6 446.5 214.4C444.9 234.3 435.1 252.8 421.5 266.4C406.1 279.1 387.9 287.7 368 287.1H352L252.6 493.8C250.1 499.2 246 503.8 240.1 507C235.9 510.3 230 511.1 223.1 511.1C217.1 511.1 212.1 510.3 207 507C201.1 503.8 197.9 499.2 195.4 493.8L95.1 287.1H79.1C60.1 287.7 41.01 280.1 26.46 266.5C11.92 252.9 2.959 234.4 1.34 214.5C-.2799 194.7 5.555 174.9 17.7 159.2C29.85 143.4 47.44 132.7 67.04 129.2C74.23 92.9 93.8 60.18 122.4 36.66C151.1 13.15 186.1 .2891 223.1 .2891C261 .2891 296.9 13.15 325.6 36.66C354.2 60.18 373.8 92.9 380.1 129.2H380.8zM389 231.2C394.7 225.8 398.2 218.5 398.9 210.7C399.5 202.8 397.3 195 392.5 188.8C387.8 182.5 380.9 178.2 373.2 176.6L340.3 171.3L333.9 138.5C328.7 113.1 315 90.34 295 73.96C274.1 57.58 249.9 48.63 224.1 48.63C198.2 48.63 173.1 57.58 153.1 73.96C133.1 90.34 119.4 113.1 114.3 138.5L107.9 171.3L74.88 176.6C67.19 178.2 60.33 182.5 55.6 188.7C50.88 195 48.62 202.8 49.25 210.6C49.88 218.4 53.36 225.7 59.03 231.1C64.7 236.6 72.16 239.7 79.1 239.1H368C375.8 239.7 383.3 236.6 389 231.2H389z"/>
</>],
['solid',<>
	<path d="M96.06 288.3H351.9L252.6 493.8C250.1 499.2 246 503.8 240.1 507.1C235.9 510.3 230 512 224 512C217.1 512 212.1 510.3 207 507.1C201.1 503.8 197.9 499.2 195.4 493.8L96.06 288.3zM386.3 164C392.1 166.4 397.4 169.9 401.9 174.4C406.3 178.8 409.9 184.1 412.3 189.9C414.7 195.7 415.1 201.1 416 208.3C416 214.5 414.8 220.8 412.4 226.6C409.1 232.4 406.5 237.7 402 242.2C397.6 246.6 392.3 250.2 386.5 252.6C380.7 255 374.4 256.3 368.1 256.3H79.88C67.16 256.3 54.96 251.2 45.98 242.2C37 233.2 31.97 220.1 32 208.3C32.03 195.5 37.1 183.4 46.12 174.4C55.14 165.4 67.35 160.4 80.07 160.4H81.06C80.4 154.9 80.06 149.4 80.04 143.8C80.04 105.7 95.2 69.11 122.2 42.13C149.2 15.15 185.8 0 223.1 0C262.1 0 298.7 15.15 325.7 42.13C352.7 69.11 367.9 105.7 367.9 143.8C367.9 149.4 367.6 154.9 366.9 160.4H367.9C374.2 160.4 380.5 161.6 386.3 164z"/>
</>],
['thin',<>
	<path d="M347.8 289C348.1 289.7 349.1 290.6 350.7 291.7C351.4 292.9 351.8 294.1 351.9 295.5C351.1 296.8 351.7 298.1 351.2 299.3L258 490.4C254.1 496.9 250.1 502.3 244.1 506.1C238.1 509.9 231.1 511.1 223.1 511.1C216.8 511.1 209.9 509.9 203.8 506.1C197.8 502.3 192.1 496.9 189.9 490.4L96.8 299.5C95.87 297.5 95.74 295.3 96.43 293.3C97.12 291.3 98.59 289.7 100.5 288.8C102.4 287.8 104.6 287.7 106.6 288.4C108.6 289.1 110.3 290.5 111.2 292.4L204.4 483.7C206.1 487.5 208.9 490.6 212.4 492.8C215.8 494.1 219.9 496.1 223.1 496.1C228.1 496.1 232.1 494.1 235.6 492.8C239 490.6 241.8 487.5 243.6 483.7L336.8 292.5C337.5 291.2 338.5 290 339.8 289.2C341 288.4 342.5 288 344 288C345.4 288 346.7 288.4 347.8 289zM369.7 150.7C383.1 152.4 395.4 159.2 403.9 169.7C412.5 180.2 416.7 193.5 415.7 206.1C414.7 220.5 408.6 233.1 398.6 242.2C388.6 251.3 375.5 256.2 361.1 256H85.98C72.46 256.3 59.35 251.3 49.35 242.2C39.35 233.1 33.22 220.5 32.22 207C31.22 193.5 35.43 180.2 43.97 169.7C52.52 159.2 64.76 152.4 78.18 150.7C77.95 148 77.95 145.4 77.95 142.8C78.75 104.6 94.48 68.29 121.8 41.57C149 14.85 185.7-.1094 223.9-.1094C262.1-.1094 298.8 14.85 326 41.57C353.3 68.29 369.1 104.6 369.9 142.8C369.9 145.4 369.6 148 369.6 150.7H369.7zM361.1 239.9C366.9 240.1 371.8 239.2 376.4 237.4C381 235.7 385.2 232.1 388.8 229.5C392.3 226.1 395.2 221.9 397.1 217.4C399 212.8 400 207.9 400 202.1C400 198 399 193.2 397.1 188.6C395.2 184 392.3 179.9 388.8 176.5C385.2 173 381 170.3 376.4 168.5C371.8 166.8 366.9 165.9 361.1 166H352L353.1 157.1C353.7 152.3 353.9 147.5 353.1 142.8C353.8 125.9 350.2 109.2 343.6 93.74C336.1 78.23 327.3 64.2 315.3 52.42C303.2 40.65 288.9 31.37 273.3 25.12C257.6 18.87 240.9 15.77 223.1 16C207.1 15.77 190.4 18.87 174.7 25.12C159.1 31.37 144.8 40.65 132.7 52.42C120.6 64.2 111 78.25 104.4 93.75C97.74 109.3 94.23 125.9 94.05 142.8C94.06 147.6 94.33 152.4 94.88 157.1L95.1 166.1H86.94C81.94 165.8 76.93 166.5 72.21 168.2C67.49 169.9 63.16 172.5 59.49 175.9C55.81 179.3 52.87 183.4 50.83 188C48.8 192.6 47.72 197.5 47.65 202.6C47.59 207.6 48.54 212.5 50.46 217.2C52.37 221.8 55.21 225.1 58.79 229.5C62.38 232.1 66.63 235.7 71.31 237.5C75.98 239.3 80.98 240.2 85.98 240H361.1L361.1 239.9z"/>
</>],

]);

const IceCream: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

IceCream.displayName = "IceCream";

export default IceCream;
