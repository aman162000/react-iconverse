
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M229.2 252.5C226.1 242.6 224 232.3 224 221.3c0-16.14 17.59-57.53 52.69-103.5c4.426 5.537 8.656 11.08 12.67 16.6l61.05 84.02l43.5-53.32c3.369 6.129 6.32 12.08 8.951 17.72c10.19 21.82 12.95 46.62 7.281 69.31C384.1 234.3 352.1 224 320 224C286.7 224 255.4 234.4 229.2 252.5zM528 288c-37.13 0-69.75 18.25-90.13 46.13C418.4 288.3 373 255.1 320 255.1s-98.38 32.25-117.9 78.13C181.7 306.3 149.1 288 112 288C50.13 288 0 338.1 0 400S50.13 512 112 512h416c61.88 0 112-50.13 112-112S589.9 288 528 288z"/><path className="fa-secondary" d="M148.4 261.1C145.6 248.2 144 234.1 144 221.3C144 165 198.8 71.6 276 0c30.05 27.89 56.67 57.85 78.08 87.31c13.06-16.01 27.79-31.92 44.1-47.04C455.1 93.11 496 179.4 496 221.3c0 13.68-1.6 26.96-4.396 39.78c-17.06 4.465-33.14 11.62-47.4 21.99c-9.787-12.05-21.39-22.31-34.06-30.97c5.664-22.7 2.906-47.49-7.281-69.31c-2.631-5.635-5.582-11.59-8.951-17.72l-43.5 53.32c0 0-69.29-95.08-73.72-100.6C241.6 163.7 224 205.1 224 221.3c0 10.98 2.094 21.36 5.186 31.26c-12.4 8.572-23.77 18.79-33.39 30.63C181.5 272.8 165.5 265.5 148.4 261.1z"/>
</>],
['light',<>
	<path d="M166.6 255.9c1.594 0 3.266-.1367 4.875-.6367c8.422-2.656 13.08-11.66 10.41-20.09C177.1 222.9 176 210.5 176 198.2c0-34.22 36.38-100.1 104.1-161.1c21.78 19.25 41.77 40.06 58.3 60.72c2.938 3.656 7.344 5.844 12.03 6c4.75 .2813 9.219-1.781 12.36-5.281c8.75-9.719 18.22-19.16 28.25-28.22C435.9 112.8 464 172.5 464 197.1c0 12.28-1.938 24.78-5.781 37.22c-2.594 8.438 2.141 17.41 10.58 20c8.422 2.625 17.39-2.125 20.02-10.56C493.6 229.1 496 213.4 496 197.1c0-38.78-38.86-114.5-94.63-161.2c-5.938-4.938-14.62-4.969-20.56 .0313c-10.23 8.625-20.02 17.66-29.22 26.97c-18.02-20.75-38.94-41.25-61.27-60c-5.938-5-14.62-5-20.56 0C195.7 65.84 144 145.8 144 198.2c0 15.59 2.469 31.28 7.344 46.66C153.5 251.7 159.8 255.9 166.6 255.9zM396.2 239.8c8.625 1.562 16.94-4.531 18.34-13.25c3.594-22.38 .4062-45.81-9.016-66.13c-2.188-4.656-4.703-9.656-7.328-14.62c-2.531-4.812-7.328-8.031-12.73-8.5c-5.656-.4687-10.7 1.812-14.05 6.094l-23.39 30.03c-17.39-25-46.52-66.78-49.73-71.06C295.3 98.34 290.5 96 285.5 96C280.5 96.03 275.7 98.44 272.7 102.5C243.3 142.2 224 170.7 224 204.1c0 8.031 .7031 15.62 2.031 22.78C227.5 234.6 234.2 240 241.8 240c.9687 0 1.938-.0938 2.922-.2813C253.4 238.1 259.1 229.8 257.5 221.1C256.5 215.8 256 210.1 256 204.1c0-18.16 9.172-36.06 29.36-64.66c13.09 18.72 33.63 48.19 48.8 70.03c2.906 4.188 7.625 6.719 12.7 6.875c5.5 .375 9.938-2.156 13.06-6.156l20.45-26.25c3.672 11.97 4.594 24.94 2.578 37.5C381.5 230.2 387.5 238.4 396.2 239.8zM528 288c-32.8 0-63.56 14.62-84.53 38.88c-25.47-43.34-72-70.88-123.5-70.88s-98 27.53-123.5 70.88C175.6 302.6 144.8 288 112 288C50.25 288 0 338.3 0 400S50.25 512 112 512h416c61.75 0 112-50.25 112-112S589.8 288 528 288zM528 480h-416C67.89 480 32 444.1 32 400S67.89 320 112 320c30.95 0 59.41 18.31 72.48 46.66c2.766 6 9.094 10.03 15.42 9.281c6.562-.375 12.23-4.719 14.3-10.94C229.5 318.9 271.1 288 320 288s90.55 30.94 105.8 77c2.062 6.219 7.734 10.56 14.3 10.94c6.547 .75 12.67-3.281 15.42-9.281C468.6 338.3 497 320 528 320c44.11 0 80 35.88 80 80S572.1 480 528 480z"/>
</>],
['regular',<>
	<path d="M352 200c0 0-70.25-71.75-75.38-77.88C240.4 167 222.3 193.3 222.3 223.3c0 11.38 2 21.5 5 31.25C254.1 235 286.5 224 320 224c32.38 0 63.75 10.5 90.13 28.75C416 229.9 413.9 204.8 402.9 182.8c-2.5-5-5.488-10.01-8.613-15.38L352 200zM152 240c15.75 0 30.88 2.625 45.38 7.25C194.3 236.3 192 224.9 192 213c0-29.75 31.5-89.75 84.25-146.1C290.8 82 304.1 97.63 315.8 113l36 47.88c0 0 43-50.63 45.25-53.13C428.9 148.8 448 195.6 448 213c0 11.88-2.25 23.25-5.375 34.25C457.1 242.6 472.3 240 488 240c1.875 0 3.75 .5 5.625 .625c1.5-9 2.312-18.37 2.312-27.75c0-40.25-40.75-123.3-97.75-174.2c-16.38 14.62-31.12 29.94-44.25 45.44C332.6 55.63 306.1 26.88 276 0C198.8 68.88 144 158.8 144 213c0 9.375 1 18.62 2.375 27.62C148.3 240.5 150.1 240 152 240zM486.4 282c-24.36 0-47.94 8.125-67.25 22.62C395.5 274.3 359.3 255.1 320 255.1S244.5 274.3 220.8 304.6C201.5 290.1 177.1 282 153.6 282C90.95 282 40 333.6 40 397S90.95 512 153.6 512h332.8C549 512 600 460.4 600 397S549 282 486.4 282zM486.4 464H153.6C117.4 464 88 433.9 88 397s29.42-67 65.59-67c20.88 0 40.06 10.03 52.63 27.47c5.078 7.062 13.62 10.69 22.2 9.844c8.641-1 16.06-6.562 19.42-14.59C260.2 323.1 288.5 304 320 304s59.78 19.12 72.16 48.72c3.359 8.031 10.78 13.59 19.42 14.59c8.641 .9687 17.12-2.781 22.2-9.844c12.56-17.44 31.75-27.47 52.63-27.47c36.17 0 65.59 30.06 65.59 67S522.6 464 486.4 464z"/>
</>],
['solid',<>
	<path d="M528 288c-37.13 0-69.75 18.25-90.13 46.13C418.4 288.2 373 255.1 320 255.1s-98.38 32.25-117.9 78.13C181.8 306.2 149.1 288 112 288C50.12 288 0 338.1 0 400S50.12 512 112 512h416c61.88 0 112-50.13 112-112S589.9 288 528 288zM195.8 283.2c9.625-12 21.2-22.29 33.83-30.92C224.9 240.6 222.2 227.5 222.2 212.9c0-29.75 18.13-56.13 54.38-101.1c5.125 6.251 73.75 97 73.75 97l43.87-51.75c3 5.25 5.875 10.5 8.375 15.38C415 196.9 416.5 225.5 407.8 250.2c13.62 8.1 25.95 20.04 36.45 32.79c13.5-9.75 28.55-16.79 44.55-21.29c4.5-15.5 7.187-31.88 7.187-48.88c0-40.25-40.75-123.4-97.75-174.2c-16.37 14.62-31.13 29.94-44.25 45.44C332.7 55.88 306.1 26.88 276 0C198.8 68.88 144 158.8 144 213c0 17 2.625 33.38 7.25 48.88C167.1 266.5 182.3 273.4 195.8 283.2z"/>
</>],
['thin',<>
	<path d="M166.6 255.9C162.2 241.2 159.9 226.2 159.9 211.4c0-48.56 50.39-130.4 118-192.6c25.41 23.22 48.8 48.78 67.97 74.25c2.416 3.188 8.34 5.289 12.5 .3438c11.08-13.09 23.2-25.72 36.11-37.66c49.22 46.53 85.38 119.2 85.38 155.4c0 14.75-2.188 29.72-6.484 44.56C470.5 265.8 485.9 270.4 488.8 260.1c4.719-16.25 7.109-32.75 7.109-49c0-41.03-39.44-121.9-96.03-172.3c-3.031-2.688-7.609-2.688-10.64 0c-12.97 11.59-25.23 23.91-36.55 36.66c-19.98-25.44-43.81-50.72-69.41-73.53c-3.031-2.688-7.625-2.688-10.66 0c-74.58 66.5-128.7 154.6-128.7 209.4c0 16.38 2.438 32.84 7.25 48.97C154.3 270.5 169.6 266.1 166.6 255.9zM417.9 241.1c9.859-25.28 7.812-53.63-5.656-77.81c-2.562-4.563-5.531-9.438-8.609-14.34C401 144.8 394.8 143.6 391 147.7l-37.89 40.53c-16.83-20.16-64.17-76.85-68.55-81.66c-3.131-3.422-8.621-3.594-11.91 .0625C238.4 145.2 216 172.8 216 204.1c0 14.03 2.734 27.19 8.109 39.16c4.275 9.555 18.99 3.211 14.59-6.563C234.3 226.8 232 215.9 232 204.1c0-22.25 14.42-43.28 46.55-79.94c13.97 16.5 48.53 57.88 68.08 81.31c4.439 5.289 10.93 1.449 11.98 .3438l36.91-39.5c14.5 24.32 15.68 47.83 7.453 68.94C399.1 245.2 414.1 250.7 417.9 241.1zM522.8 285.1c-33.22 0-63.98 13.28-86.16 36.84C413.5 281.9 369 255.1 320 255.1s-93.52 25.87-116.6 66.84c-22.17-23.56-52.94-36.84-86.16-36.84C52.58 285.1 0 336.7 0 398.1S52.58 512 117.2 512h405.6C587.4 512 640 461.3 640 398.1S587.4 285.1 522.8 285.1zM522.8 495.1H117.2C61.41 495.1 16 452.5 16 398.1s45.41-97 101.2-97c32.44 0 62.14 14.62 81.5 40.09c3.295 4.352 11.03 4.422 13.69-1.625C230.8 298.9 273 271.1 320 271.1s89.23 26.88 107.6 68.47c2.729 6.203 10.49 5.809 13.69 1.625c19.36-25.47 49.06-40.09 81.5-40.09c55.8 0 101.2 43.5 101.2 97S578.6 495.1 522.8 495.1z"/>
</>],

]);

const FireSmoke: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FireSmoke.displayName = "FireSmoke";

export default FireSmoke;
