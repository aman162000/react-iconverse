
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M480 32C480 14.33 494.3 0 512 0H608C625.7 0 640 14.33 640 32V120C640 137.7 625.7 152 608 152C590.3 152 576 137.7 576 120V109.3L539.6 145.7C552.6 168.8 560 195.6 560 224C560 301.4 505 365.1 432 380.8V400H448C465.7 400 480 414.3 480 432C480 449.7 465.7 464 448 464H432V480C432 497.7 417.7 512 400 512C382.3 512 368 497.7 368 480V464H352C334.3 464 320 449.7 320 432C320 414.3 334.3 400 352 400H368V380.8C294.1 365.1 240 301.4 240 224C240 135.6 311.6 64 400 64C436.7 64 470.6 76.37 497.6 97.18L530.7 64H512C494.3 64 480 49.67 480 32V32zM400 320C453 320 496 277 496 224C496 170.1 453 128 400 128C346.1 128 304 170.1 304 224C304 277 346.1 320 400 320z"/><path className="fa-secondary" d="M176 8C182.6 8 188.5 11.1 190.9 18.09L220.3 92.05L280.4 73.81C236.3 108.1 208 163.2 208 224C208 269.2 223.6 310.8 249.8 343.6C244.5 345 238.7 343.7 234.6 339.9L176 286.1L117.4 339.9C112.6 344.4 105.5 345.4 99.64 342.6C93.74 339.7 90.16 333.6 90.62 327L96.21 247.6L17.56 235.4C11.08 234.4 5.876 229.6 4.418 223.2C2.959 216.8 5.545 210.1 10.94 206.4L76.51 161.3L37.02 92.18C33.77 86.49 34.32 79.39 38.4 74.27C42.49 69.14 49.29 67.03 55.56 68.93L131.7 92.05L161.1 18.09C163.6 11.1 169.5 8 176 8V8z"/>
</>],
['light',<>
	<path d="M623.1 0C632.8 0 639.1 7.164 639.1 16V104C639.1 112.8 632.8 120 623.1 120C615.2 120 607.1 112.8 607.1 104V54.63L530.8 131.8C549.2 157.9 559.1 189.7 559.1 224C559.1 306.1 496.9 375.2 415.1 383.2V416H455.1C464.8 416 471.1 423.2 471.1 432C471.1 440.8 464.8 448 455.1 448H415.1V496C415.1 504.8 408.8 512 399.1 512C391.2 512 383.1 504.8 383.1 496V448H343.1C335.2 448 327.1 440.8 327.1 432C327.1 423.2 335.2 416 343.1 416H383.1V383.2C303.1 375.2 239.1 306.1 239.1 224C239.1 135.6 311.6 64 399.1 64C442.5 64 481.1 80.57 509.8 107.6L585.4 32H527.1C519.2 32 511.1 24.84 511.1 16C511.1 7.164 519.2 0 527.1 0H623.1zM399.1 96C329.3 96 271.1 153.3 271.1 224C271.1 294.7 329.3 352 399.1 352C470.7 352 527.1 294.7 527.1 224C527.1 153.3 470.7 96 399.1 96V96zM175.1 8C182.2 8 187.9 11.64 190.5 17.32L222.6 87.16L282.1 72.46C266.5 84.61 252.8 99.11 241.6 115.4L217.5 121.4C210 123.2 202.3 119.5 199.1 112.5L175.1 62.31L152.9 112.5C149.7 119.5 141.1 123.2 134.5 121.4L80.86 108.1L105.7 157.5C109.2 164.4 107.3 172.7 101.2 177.4L57.36 211.1L111.5 222.4C118.1 223.1 124.3 230.7 124.2 238.4L123.2 293.6L165.8 258.4C171.7 253.5 180.3 253.5 186.2 258.4L217.7 284.5C224.9 306.1 235.8 326.1 249.8 343.6C244.8 344.1 239.3 343.9 235.2 340.5L175.1 291.5L116.8 340.5C111.1 344.5 105.3 345.3 99.63 342.6C94 339.9 90.47 334.1 90.58 327.9L91.96 251L16.73 235.3C10.61 233.1 5.8 229.3 4.41 223.2C3.019 217.1 5.303 210.7 10.26 206.9L71.21 160.1L36.62 91.44C33.8 85.86 34.5 79.15 38.39 74.27C42.29 69.38 48.68 67.21 54.74 68.71L129.4 87.16L161.5 17.32C164.1 11.64 169.7 7.999 175.1 7.999L175.1 8z"/>
</>],
['regular',<>
	<path d="M616 0C629.3 0 640 10.75 640 24V112C640 125.3 629.3 136 616 136C602.7 136 592 125.3 592 112V81.94L535.3 138.6C550.1 163.3 560 192.6 560 224C560 304.2 500.1 370.6 424 382.2V416H456C469.3 416 480 426.7 480 440C480 453.3 469.3 464 456 464H424V488C424 501.3 413.3 512 400 512C386.7 512 376 501.3 376 488V464H344C330.7 464 320 453.3 320 440C320 426.7 330.7 416 344 416H376V382.2C299 370.6 240 304.2 240 224C240 135.6 311.6 64 400 64C439.6 64 475.9 78.4 503.8 102.2L558.1 48H520C506.7 48 496 37.25 496 24C496 10.75 506.7 0 520 0L616 0zM400 112C338.1 112 288 162.1 288 224C288 285.9 338.1 336 400 336C461.9 336 512 285.9 512 224C512 162.1 461.9 112 400 112zM176 8C184.9 8 193 12.9 197.2 20.75L227.3 77.46L290.4 65.64C290.9 65.56 291.3 65.49 291.7 65.43C269 80.94 249.9 101.2 235.6 124.7L218.8 127.9C208.5 129.8 198.1 124.8 193.2 115.6L176 83.18L158.8 115.6C153.9 124.8 143.5 129.8 133.2 127.9L97.18 121.1L111.8 154.8C115.1 164.4 113.4 175.6 105.4 182.5L77.71 206.4L113.1 215.1C123.2 218.7 130.4 227.7 130.8 238.2L132.3 274.8L161.8 253.1C170.2 246.9 181.8 246.9 190.2 253.1L213.6 270.3C220.4 297.5 232.9 322.4 249.8 343.6C242.4 346.2 234.1 344.1 227.7 340.3L176 302.3L124.3 340.3C117.1 345.5 107.6 346.4 99.64 342.6C91.64 338.7 86.42 330.8 86.07 321.9L83.55 257.7L21.56 240.1C12.99 238.7 6.391 231.8 4.415 223.2C2.439 214.5 5.405 205.5 12.12 199.7L60.72 157.7L35.15 98.79C31.61 90.64 32.86 81.21 38.4 74.27C43.94 67.32 52.85 64.01 61.58 65.64L124.7 77.46L154.8 20.75C158.1 12.9 167.1 8.001 176 8.001L176 8z"/>
</>],
['solid',<>
	<path d="M607.1 0C625.7 0 639.1 14.33 639.1 32V120C639.1 137.7 625.7 152 607.1 152C590.3 152 575.1 137.7 575.1 120V109.3L539.6 145.7C552.6 168.8 559.1 195.6 559.1 224C559.1 301.4 505 365.1 431.1 380.8V400H447.1C465.7 400 479.1 414.3 479.1 432C479.1 449.7 465.7 464 447.1 464H431.1V480C431.1 497.7 417.7 512 399.1 512C382.3 512 367.1 497.7 367.1 480V464H351.1C334.3 464 319.1 449.7 319.1 432C319.1 414.3 334.3 400 351.1 400H367.1V380.8C294.1 365.1 239.1 301.4 239.1 224C239.1 135.6 311.6 64 399.1 64C436.7 64 470.6 76.37 497.6 97.18L530.7 64H511.1C494.3 64 479.1 49.67 479.1 32C479.1 14.33 494.3 0 511.1 0L607.1 0zM399.1 128C346.1 128 303.1 170.1 303.1 224C303.1 277 346.1 320 399.1 320C453 320 495.1 277 495.1 224C495.1 170.1 453 128 399.1 128zM220.3 92.05L280.4 73.81C236.3 108.1 207.1 163.2 207.1 224C207.1 269.2 223.6 310.8 249.8 343.6C244.5 345 238.7 343.7 234.6 339.9L175.1 286.1L117.4 339.9C112.6 344.4 105.5 345.4 99.63 342.6C93.73 339.7 90.15 333.6 90.62 327L96.21 247.6L17.55 235.4C11.08 234.4 5.868 229.6 4.41 223.2C2.951 216.8 5.538 210.1 10.94 206.4L76.5 161.3L37.01 92.18C33.76 86.49 34.31 79.39 38.39 74.27C42.48 69.14 49.28 67.03 55.55 68.93L131.7 92.05L161.1 18.09C163.6 11.1 169.4 7.1 175.1 7.1C182.6 7.1 188.4 11.1 190.9 18.09L220.3 92.05z"/>
</>],
['thin',<>
	<path d="M520 0H632C636.4 0 640 3.582 640 8V120C640 124.4 636.4 128 632 128C627.6 128 624 124.4 624 120V27.31L525.1 125.3C547.3 152.5 560 186.8 560 224C560 309.7 492.6 379.6 407.1 383.8L408 384V432H456C460.4 432 464 435.6 464 440C464 444.4 460.4 448 456 448H408V504C408 508.4 404.4 512 400 512C395.6 512 392 508.4 392 504V448H344C339.6 448 336 444.4 336 440C336 435.6 339.6 432 344 432H392V384L392 383.8C307.4 379.6 239.1 309.7 239.1 224C239.1 135.6 311.6 64 400 64C445.4 64 486.3 82.89 515.5 113.2L612.7 16H520C515.6 16 512 12.42 512 8C512 3.582 515.6 0 520 0H520zM400 80C320.5 80 255.1 144.5 255.1 224C255.1 303.5 320.5 368 400 368C479.5 368 544 303.5 544 224C544 144.5 479.5 80 400 80zM161.5 20.48C167.2 8.051 184.8 8.051 190.5 20.48L221.9 88.7L279.6 74.43C271.2 81.19 263.4 88.63 256.3 96.68L219.3 105.8C215.6 106.7 211.7 104.9 210.1 101.4L175.1 27.16L141.9 101.4C140.3 104.9 136.4 106.7 132.7 105.8L53.37 86.21L90.14 159.2C91.8 162.5 90.1 166.5 88.2 168.9L29.7 218.9L103.2 235.7C106.9 236.5 109.5 239.8 109.4 243.6L107.9 325.3L170.9 273.2C173.9 270.8 178.1 270.8 181.1 273.2L230.3 313.1C235.4 323.4 241.2 332.5 247.7 340.9C243.1 341.1 238.1 341.1 233.9 337.6L175.1 289.8L118.1 337.6C107.6 346.4 91.7 338.7 91.95 325L93.3 249.8L26.14 234.5C13.32 231.6 9.305 215.3 19.3 206.7L73.03 160.8L39.09 93.41C32.93 81.2 43.94 67.4 57.22 70.68L130.1 88.7L161.5 20.48z"/>
</>],

]);

const MarsAndVenusBurst: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MarsAndVenusBurst.displayName = "MarsAndVenusBurst";

export default MarsAndVenusBurst;
