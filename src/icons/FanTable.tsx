
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 448H128c-28.38 0-55 18.5-63.25 44.13C61.5 502 69.79 512 80.17 512h287.7c10.38 0 18.67-9.999 15.42-19.88C375 466.5 348.4 448 320 448zM119.6 334.8c45.25 26.12 103 10.62 129.1-34.5c11.12-19.38 14.88-42.13 10.62-64.13l104.8 17.5c5.375 .875 11-.625 15.25-4.25s6.625-8.875 6.625-14.38c.1255-36.88-21.25-70.38-54.62-85.88c-33.5-15.5-72.88-10.12-100.9 13.75l-37.13-99c-2.75-7.375-14-17.12-27-9.75c-21.75 12.5-37.63 33.13-44 57.38c-9.5 35.75 2.5 92.75 59.62 113l-67.5 82C105.1 318 112.6 330.8 119.6 334.8zM224 192c8.875 0 16 7.125 16 16S232.9 224 224 224S208 216.9 208 208S215.1 192 224 192z"/><path className="fa-secondary" d="M224 0C109.1 0 16 93.13 16 208c0 103.1 76.42 189.8 176 205.2V448h64v-34.8C355.6 397.8 432 311.1 432 208C432 93.13 338.9 0 224 0zM379.4 249.4C375.1 253 369.5 254.5 364.1 253.6l-104.8-17.5c4.25 22 .5 44.75-10.62 64.13c-26.12 45.13-83.88 60.63-129.1 34.5c-7-4-14.5-16.75-5.125-28.25l67.5-82c-57.12-20.25-69.12-77.25-59.62-113c6.375-24.25 22.25-44.88 44-57.38c13-7.375 24.25 2.375 27 9.75l37.13 99c28-23.88 67.38-29.25 100.9-13.75c33.38 15.5 54.75 49 54.62 85.88C385.1 240.5 383.6 245.8 379.4 249.4z"/>
</>],
['light',<>
	<path d="M448 224c0-123.8-100.3-224-224-224S0 100.3 0 224c0 118.3 91.75 215 208 223.3V480h-128C71.16 480 64 487.2 64 496C64 504.8 71.33 512 80.17 512h287.7C376.7 512 384 504.8 384 496c0-8.838-7.164-16-16-16h-128v-32.75C356.3 439 448 342.3 448 224zM224 413.5c-104.5 0-189.5-85-189.5-189.5S119.5 34.5 224 34.5S413.5 119.5 413.5 224S328.5 413.5 224 413.5zM224 209.4C216 209.4 209.4 216 209.4 224S216 238.6 224 238.6S238.6 232 238.6 224S232 209.4 224 209.4zM383.3 243.4c0-34-16.88-65.63-45-84.5c-28.25-19-64-22.62-95.38-9.75L221.1 93.25c-8-21.38-34.12-32.75-56-20.12c-48.62 28.12-65.37 90.38-37.25 139c6.625 11.38 15.38 21.5 26 29.5L116.6 287.9c-7.375 8.875-10.38 20.5-8.25 31.75c2 11.25 9 21.12 18.88 26.88C142.6 355.4 160.1 360 177.9 360c28.88 0 66.63-13.38 88.38-50.88c6.5-11.38 10.75-24 12.38-37.13c12.38 2 31.62 5.25 59.13 9.875C358.9 285.4 383.3 270 383.3 243.4zM343.5 250.3c-1.5 0-76.88-12.88-79-12.88c-.125 0 .125 0 0 0c-10 0-17.5 8.625-17.12 18.5c.625 13-2.5 26-9 37.25C218.9 326.9 184.4 328 178.6 328c-12.5 .125-24.75-3.125-35.5-9.375c-3.352-1.916-4.938-6.881-1.875-10.5l49-59.5c7.75-9.5 2.75-21.62-5.875-26c-11.62-6-21.38-15.25-28-26.5c-19.25-33.38-7.75-76 25.5-95.38C184.4 99.38 189.1 99.1 192 104.5l27 72c1.875 4.75 5.75 8.5 10.62 10c5 1.5 10.25 .75 14.62-2c21.38-13.62 48.63-14.5 70.88-2.25s36.13 35.63 36.13 61.13C351.3 247 348.6 250.3 343.5 250.3z"/>
</>],
['regular',<>
	<path d="M353.1 266.3c5.125 .875 10.25-.5 14.25-3.875c3.875-3.25 6.125-8.125 6.125-13.38c.125-34.13-19.75-65.13-50.75-79.5S256.1 160 229.1 182.1L195.6 90.25c-2.625-6.875-13-15.88-25.12-9C150.4 92.88 135.6 112 129.6 134.5C120.8 167.6 132 220.5 185 239.4L122.4 315.5c-8.75 10.62-1.75 22.5 4.75 26.25c42 24.25 95.63 9.875 119.8-32.13c10.38-18 13.88-39.13 10-59.5L353.1 266.3zM224 240C215.1 240 208 232.9 208 224S215.1 208 224 208s16 7.125 16 16S232.9 240 224 240zM360 464h-112v-17.38C360.4 434.8 448 339.6 448 224c0-123.8-100.3-224-224-224S0 100.3 0 224c0 115.6 87.63 210.8 200 222.6V464h-112C74.75 464 64 474.7 64 488C64 501.3 74.75 512 88 512h272c13.25 0 24-10.75 24-24C384 474.7 373.3 464 360 464zM48 224c0-97 79-176 176-176s176 79 176 176s-79 176-176 176S48 321 48 224z"/>
</>],
['solid',<>
	<path d="M224 192C215.1 192 208 199.1 208 208S215.1 224 224 224s16-7.125 16-16S232.9 192 224 192zM320 448h-64v-34.8C355.6 397.8 432 311.1 432 208C432 93.13 338.9 0 224 0S16 93.13 16 208c0 103.1 76.42 189.8 176 205.2V448H128c-28.38 0-55 18.5-63.25 44.13C61.5 502 69.79 512 80.17 512h287.7c10.38 0 18.67-9.999 15.42-19.88C375 466.5 348.4 448 320 448zM119.6 334.8c-7-4-14.5-16.75-5.125-28.25l67.5-82c-57.12-20.25-69.12-77.25-59.62-113c6.375-24.25 22.25-44.88 44-57.38c13-7.375 24.25 2.375 27 9.75l37.13 99c28-23.88 67.38-29.25 100.9-13.75c33.38 15.5 54.75 49 54.62 85.88c0 5.5-2.375 10.75-6.625 14.38S369.5 254.5 364.1 253.6l-104.8-17.5c4.25 22 .5 44.75-10.62 64.13C222.6 345.4 164.9 360.9 119.6 334.8z"/>
</>],
['thin',<>
	<path d="M224 212C217.3 212 212 217.3 212 224S217.3 236 224 236S236 230.7 236 224S230.7 212 224 212zM381 270.1c5.891-5.031 9.266-12.34 9.266-20.06c.1406-38.81-22.55-74.47-57.8-90.84c-31.91-14.78-69.17-11.53-97.81 7.781L202.3 80.75C199.8 73.81 193.4 67.63 186.1 64.97C179 62.41 171.6 63.16 164.6 67.09c-22.91 13.16-39.89 35.31-46.56 60.72C107.3 168.1 122.6 220.2 170.7 243.1l-58.84 71.5c-6.406 7.875-6.609 15.75-5.641 20.94c1.406 7.625 6.453 14.91 12.86 18.56c15.7 9.062 32.86 13.38 49.81 13.34c34.58 0 68.25-17.91 86.77-49.88c9.875-17.22 14.28-37 12.77-56.72l91.25 15.22C367.4 277.4 375.1 275.2 381 270.1zM249 241.4l2.172 11.28c3.766 19.56 .4219 39.75-9.406 56.88c-23.19 40.03-74.67 53.81-114.7 30.66c-2-1.156-4.484-4.188-5.109-7.594c-.5156-2.781 .2344-5.375 2.281-7.875l72.95-88.63L186.4 232.3C133.4 213.5 125.8 160.8 133.5 131.9C139.1 110.6 153.3 92 172.5 81C174.3 79.97 176 79.47 177.7 79.47c1.016 0 2 .1875 2.984 .5313c3.266 1.188 5.875 4.156 6.703 6.344l40.13 106.1l8.672-7.375c24.78-21.09 59.94-25.88 89.61-12.22c29.59 13.75 48.64 43.72 48.53 76.31c0 3.062-1.328 5.938-3.656 7.938c-2.25 1.938-5.359 2.781-8.312 2.281L249 241.4zM448 224c0-123.5-100.5-224-224-224S0 100.5 0 224c0 120.8 96.21 219.3 216 223.6V496h-144C67.58 496 64 499.6 64 504S67.58 512 72 512h304c4.422 0 8-3.594 8-8s-3.578-8-8-8h-144v-48.4C351.8 443.3 448 344.8 448 224zM224 432c-114.9 0-208-93.13-208-208S109.1 16 224 16s208 93.13 208 208S338.9 432 224 432z"/>
</>],

]);

const FanTable: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FanTable.displayName = "FanTable";

export default FanTable;
