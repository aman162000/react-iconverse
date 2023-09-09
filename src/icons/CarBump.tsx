
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M47.76 234.2L57.96 141.1C62.27 101.7 90.3 69.06 128.5 58.81L275.8 19.36C314 9.113 354.6 23.39 378.1 55.32L433.4 130.9C458.7 133.8 480.8 151.8 487.8 177.9L533.4 347.9C537.9 364.1 527.8 382.5 510.7 387.1L479.8 395.4C462.8 399.9 445.2 389.8 440.6 372.7L428.2 326.4L150 400.9L162.5 447.3C167 464.3 156.9 481.9 139.8 486.5L108.9 494.7C91.85 499.3 74.3 489.2 69.73 472.1L24.18 302.1C17.19 276 27.36 249.4 47.76 234.2V234.2zM114.6 211.6L364.3 144.7L326.4 93.17C318.6 82.52 305.1 77.76 292.4 81.18L145.1 120.6C132.4 124 123 134.9 121.6 148.1L114.6 211.6zM116.9 277.3C99.84 281.8 89.7 299.4 94.28 316.5C98.85 333.5 116.4 343.7 133.5 339.1C150.5 334.5 160.7 316.1 156.1 299.9C151.5 282.8 133.1 272.7 116.9 277.3H116.9zM411.7 264.5C428.7 259.1 438.9 242.4 434.3 225.4C429.7 208.3 412.2 198.2 395.1 202.7C378 207.3 367.9 224.9 372.5 241.9C377 258.1 394.6 269.1 411.7 264.5H411.7z"/><path className="fa-secondary" d="M589.1 512H402.9C393 512 385.5 503.1 388.8 493.8C400.6 460.4 432 416 496 416C560 416 591.4 460.4 603.2 493.8C606.5 503.1 598.1 512 589.1 512z"/>
</>],
['light',<>
	<path d="M157.3 308.9C160.6 321.1 153.4 333.6 141.2 336.9C129 340.1 116.5 332.9 113.2 320.7C109.1 308.5 117.2 296 129.4 292.8C141.5 289.5 154.1 296.7 157.3 308.9zM392.5 245.9C389.2 233.7 396.5 221.2 408.6 217.9C420.8 214.7 433.3 221.9 436.6 234.1C439.8 246.2 432.6 258.8 420.4 262C408.3 265.3 395.8 258.1 392.5 245.9V245.9zM64.17 132.1C65.22 96.83 89.3 66.39 123.4 57.24L296 10.1C330.1 1.856 366.2 16.18 384.8 46.24L445.7 144.9C475.8 154.5 500.5 178.8 509.3 211.6L551.4 368.7C553.6 376.8 548.8 385.2 540.7 387.3C532.6 389.5 524.2 384.7 522 376.6L510.2 332.5L98.66 442.8L110.5 486.9C112.7 494.1 107.8 503.3 99.72 505.5C91.6 507.7 83.26 502.9 81.08 494.7L38.98 337.6C30.2 304.8 39.48 271.5 60.73 248.1L64.17 132.1zM131.7 88.15C111.2 93.64 96.78 111.9 96.15 133.1L93.44 224.7C97.73 222.8 102.2 221.3 106.9 220L391.7 143.7C396.4 142.4 401.1 141.6 405.7 141L357.5 63.05C346.4 45.02 324.8 36.42 304.3 41.91L131.7 88.15zM69.89 329.3L91.9 411.5L500.4 301.1L478.4 219.9C469.3 185.7 434.2 165.4 400 174.6L115.1 250.9C81 260.1 60.74 295.2 69.89 329.3H69.89zM445.7 511.8C436.1 510.6 430.9 502.5 432.2 493.7C438.4 449.8 476.2 416 521.9 416C567.6 416 605.4 449.8 611.7 493.7C612.9 502.5 606.8 510.6 598.1 511.8C589.3 513.1 581.2 507 579.1 498.3C575.9 469.8 551.5 448 521.9 448C492.4 448 467.9 469.8 463.8 498.3C462.6 507 454.5 513.1 445.7 511.8H445.7z"/>
</>],
['regular',<>
	<path d="M172.2 299.9C176.6 316.3 166.9 333.2 150.4 337.6C133.1 341.1 117.1 332.2 112.7 315.8C108.3 299.4 118.1 282.5 134.5 278.1C150.9 273.7 167.8 283.4 172.2 299.9V299.9zM380.4 244.1C376 227.6 385.8 210.8 402.2 206.4C418.6 201.1 435.5 211.7 439.9 228.1C444.3 244.6 434.6 261.4 418.1 265.8C401.7 270.2 384.8 260.5 380.4 244.1H380.4zM129.8 55.25L294.9 11C330.1 1.326 369.3 15.53 390.4 46.43L447.4 130.1C477.6 139.7 502.4 163.1 511.2 196.8L556.1 364.4C559.4 376.7 552.1 389.4 539.8 392.7C527.5 395.1 514.8 388.6 511.5 376.3L497.6 324.3L110.9 427.9L124.8 479.9C128.1 492.3 120.8 504.9 108.5 508.2C96.16 511.5 83.49 504.2 80.19 491.9L35.29 324.3C26.49 291.5 35.84 258.1 57.2 234.7L64.78 133.7C67.57 96.38 93.63 64.93 129.8 55.25V55.25zM142.2 101.6C125.8 106 113.9 120.3 112.6 137.3L107.5 205.6L389.3 130.1L350.7 73.47C341.1 59.43 323.7 52.97 307.3 57.37L142.2 101.6zM81.66 311.9L100.2 381.1L483.4 278.4L464.9 209.2C458 183.6 431.7 168.4 406.1 175.3L115.6 253.1C89.99 260 74.8 286.3 81.66 311.9V311.9zM436.9 512C417.4 512 402.2 494.3 411.1 476.1C429.7 440.8 467.4 416 510.9 416C554.3 416 592 440.8 610.6 476.1C619.5 494.3 604.3 512 584.8 512H436.9z"/>
</>],
['solid',<>
	<path d="M128.5 58.81L275.8 19.36C314 9.113 354.6 23.39 378.1 55.32L433.4 130.9C458.7 133.8 480.8 151.8 487.8 177.9L533.4 347.9C537.9 364.1 527.8 382.5 510.7 387.1L479.8 395.4C462.8 399.9 445.2 389.8 440.6 372.7L428.2 326.4L150 400.9L162.5 447.3C167 464.3 156.9 481.9 139.8 486.5L108.9 494.7C91.85 499.3 74.3 489.2 69.73 472.1L24.18 302.1C17.19 276 27.36 249.4 47.76 234.2L57.96 141.1C62.27 101.7 90.3 69.06 128.5 58.81V58.81zM145.1 120.6C132.4 124 123 134.9 121.6 148.1L114.6 211.6L364.3 144.7L326.4 93.17C318.6 82.52 305.1 77.76 292.4 81.18L145.1 120.6zM133.5 339.1C150.5 334.5 160.7 316.1 156.1 299.9C151.5 282.8 133.1 272.7 116.9 277.3C99.84 281.8 89.7 299.4 94.28 316.5C98.85 333.5 116.4 343.7 133.5 339.1zM395.1 202.7C378 207.3 367.9 224.9 372.5 241.9C377 258.1 394.6 269.1 411.7 264.5C428.7 259.1 438.9 242.4 434.3 225.4C429.7 208.3 412.2 198.2 395.1 202.7V202.7zM436.9 512C417.4 512 402.2 494.3 411.1 476.1C429.7 440.8 467.4 416 510.9 416C554.3 416 592 440.8 610.6 476.1C619.5 494.3 604.3 512 584.8 512H436.9z"/>
</>],
['thin',<>
	<path d="M101.1 318.7C97.72 302.8 107.1 286.5 123 282.3C138.9 277.1 155.2 287.4 159.5 303.3C163.7 319.2 154.3 335.5 138.4 339.8C122.6 344 106.2 334.6 101.1 318.7V318.7zM134.3 324.3C141.6 322.3 145.1 314.8 144 307.4C142.1 300.1 134.5 295.7 127.2 297.7C119.8 299.7 115.5 307.2 117.4 314.6C119.4 321.9 126.9 326.3 134.3 324.3V324.3zM446.1 226.3C451.3 242.1 441.8 258.5 425.9 262.7C410.1 266.1 393.7 257.5 389.5 241.7C385.2 225.8 394.7 209.5 410.5 205.2C426.4 200.1 442.7 210.4 446.1 226.3V226.3zM414.7 220.7C407.3 222.6 402.1 230.2 404.9 237.5C406.9 244.9 414.5 249.2 421.8 247.3C429.2 245.3 433.5 237.7 431.5 230.4C429.6 223.1 422 218.7 414.7 220.7zM129.1 64.11L295.5 19.76C326.5 11.44 359.3 24.71 375.8 52.28L433.4 148.2C467.6 155.5 496.6 181.2 506.2 217.3L548.8 376.2C549.9 380.1 547.5 384.2 543.5 385.3C539.6 386.4 535.5 383.1 534.4 380L517.1 315.3L85.81 430.9L103.1 495.6C104.2 499.6 101.9 503.6 97.89 504.7C93.92 505.8 89.84 503.4 88.77 499.4L46.21 340.6C36.54 304.5 48.77 267.7 74.76 244.3L76.6 132.5C77.13 100.3 98.91 72.43 129.1 64.11V64.11zM134.1 79.56C109.9 86.03 93.01 107.7 92.6 132.7L90.95 232.6C98.06 228.5 105.8 225.2 114.1 223L388.7 149.4C396.9 147.2 405.3 146.2 413.5 146.2L362.1 60.51C349.3 39.07 323.8 28.74 299.6 35.22L134.1 79.56zM61.66 336.5L82.75 415.2L511.9 300.2L490.8 221.5C479.3 178.8 435.5 153.5 392.8 164.9L118.2 238.5C75.56 249.9 50.23 293.8 61.66 336.4V336.5zM414.9 511.9C410.5 511.3 407.5 507.2 408.1 502.9C415.1 453.8 457.3 416 508.4 416C559.4 416 601.7 453.8 608.7 502.9C609.3 507.2 606.3 511.3 601.9 511.9C597.5 512.5 593.5 509.5 592.9 505.1C586.9 463.8 551.4 432 508.4 432C465.4 432 429.8 463.8 423.9 505.1C423.3 509.5 419.2 512.5 414.9 511.9V511.9z"/>
</>],

]);

const CarBump: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CarBump.displayName = "CarBump";

export default CarBump;