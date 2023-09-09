
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M336.5 32c-34.87 0-65.63 13.87-86.25 35.13C235.7 28.25 193.7 0 143.5 0C86.99 0 40.29 35.37 32.17 81.62C31.67 85.25 32.62 89 34.99 91.75C37.37 94.5 40.87 96 44.62 96h35.38L95.1 64l15.99 32h30.12c-34.12 35-39.62 86.87-14.5 122.6C131.1 224.7 140.7 225.9 146.1 220.5L240 128h128l15.97-32l16 32h35.37c3.752 0 7.251-1.5 9.626-4.25s3.375-6.5 2.875-10.13C439.7 67.37 393 32 336.5 32zM383.6 474.8C386.5 494.3 371.7 512 351.1 512H32.08c-19.75 0-34.59-17.75-31.72-37.25C10.86 404.3 71.49 352 142.7 352h98.52C312.5 352 373.1 404.3 383.6 474.8z"/><path className="fa-secondary" d="M196.1 352c9.957-42.69 24.84-122.2 21.02-201.5L240 128h26.23c11.22 48.01 28.64 142.7 18.54 231.2C270.9 354.8 256.4 352 241.3 352H196.1z"/>
</>],
['light',<>
	<path d="M258.1 352.5c33.82-47.02 39.45-101.8 13.49-151.9c-4.125-7.844-13.75-10.91-21.59-6.844c-7.844 4.094-10.91 13.75-6.844 21.59C266.9 261.2 257.1 310.6 217 352H131.3c-72.49 0-131.4 59.05-131.3 131.6C.041 499.3 13.02 512 28.76 512h326.5c15.74 0 28.71-12.69 28.75-28.43C384.2 412.9 328 355.4 258.1 352.5zM32.01 480c1.875-53.5 45.63-96 99.26-96h121.5c53.63 0 97.38 42.5 99.26 96H32.01zM299.4 32c-15.38 0-30 2.5-43.88 6.25C228.3 14.62 190.5 0 148.6 0c-75.26 0-137.5 47.25-148.4 108.9C-.498 113.6 .877 118.6 4.002 122.3C7.252 126 11.88 128.1 16.75 128h73.51C58.01 177.9 55.13 238.5 85.01 281.1C92.14 291.4 104.6 288.6 110.3 283L233.3 160h198c4.877 .125 9.502-2 12.75-5.75c3.125-3.625 4.5-8.625 3.75-13.38C436.9 79.25 374.7 32 299.4 32zM220 128L102.3 245.8C84.77 200 106.8 133.1 162.7 101.6C169.7 97.51 172.7 89 169.6 81.55C165.9 72.75 155.3 68.89 147.1 73.73C136.4 80.02 126.4 87.46 117.3 96H37.38c16.38-37.5 60.76-64 111.3-64c32.75 0 63.26 10.75 85.88 30.38l12.75 11C258 70.63 278.8 64 299.4 64c50.51 0 94.88 26.5 111.3 64H220z"/>
</>],
['regular',<>
	<path d="M336.5 32c-22.87-.125-45.37 6.125-64.99 17.88C249.6 20.25 207.9 0 159.4 0C94.89 0 41.41 35.38 32.17 81.62C30.67 89.12 37.39 96 46.39 96h33.61L95.1 64l19.01 37.88C108.8 111.5 103.5 121.5 100.5 132C92.26 160 95.51 191.6 122.3 221.4C123.8 223 125.9 223.9 128 224c2.25 0 4.375-.75 5.1-2.25L200.6 153C194.9 229.8 168.3 306.2 149.6 352H128c-34.25 0-67.12 13.75-91.25 38.25c-23.1 24.5-37.25 57.5-36.75 91.88C.2636 498.9 15.2 512 32.08 512h319.9c16.87 0 31.79-13 32.04-29.88c.1-60.75-40.5-111.6-96.62-125.8C308.5 248 297.3 139.5 295.9 128h72.15l15.97-32l16 32h35.37c3.75 0 7.251-1.5 9.626-4.25c2.375-2.75 3.375-6.5 2.875-10.13C439.7 67.38 392.1 32 336.5 32zM249 150.1l.75 .125C252.4 186.1 255.5 270.8 238.9 352H201.1C220.8 301 244.4 225.8 249 150.1zM334.4 464H49.64c7.625-37.25 40.37-64 78.37-64h127.1C294 400 326.8 426.8 334.4 464z"/>
</>],
['solid',<>
	<path d="M447.9 113.6c.5001 3.625-.4998 7.375-2.875 10.13C442.6 126.5 439.1 128 435.4 128H399.1l-16-32l-15.97 32h-101.8c11.25 48.12 28.76 143.1 18.51 231.9c52 17.12 92 62.37 99 118.1C386.1 496.2 370.5 512 351.1 512H32.08c-19.75 0-34.59-17.75-31.72-37.25C10.86 404.2 71.48 352 142.7 352h53.38C206.1 309.1 221.1 229.1 217.1 149.5l-70.1 71C140.7 225.9 131.1 224.8 127.6 218.6C102.5 182.9 107.1 131 142.1 96H111.1L95.1 64L79.1 96H44.62C40.87 96 37.37 94.5 34.99 91.75C32.62 88.1 31.67 85.25 32.17 81.62C40.29 35.38 86.99 0 143.5 0c50.25 0 92.25 28.25 106.8 67.13C270.9 45.88 301.6 32 336.5 32C393 32 439.7 67.38 447.9 113.6z"/>
</>],
['thin',<>
	<path d="M328.6 32c-26.15 0-51.48 7.375-72.3 20.88C235.1 20.5 195.1 0 151.8 0c-60.07 0-110.2 37.13-119.2 88.53c-.8273 6 .9054 12 4.73 16.44C41.22 109.4 46.94 112 53.04 112h68.37C91.7 152.9 87.9 205.3 113.7 242.1c3.668 4.875 9.147 7.875 14.94 8.281c.5151 .0313 1.03 .0625 1.53 .0625c5.385 0 10.61-2.188 14.55-6.156l71.19-71.27c1.731 67.04-8.976 132.8-18.75 177.3C197 350.9 197.5 351.4 197.5 352H136.3c-67.53 0-125.1 50.44-135.9 117.3c-1.592 10.78 1.577 21.69 8.679 29.94C16.08 507.3 26.19 512 36.87 512h310.4c10.66 0 20.79-4.656 27.77-12.75c7.102-8.25 10.27-19.16 8.663-29.97c-7.139-48.08-39.56-87.31-82.23-105.8C310 280.4 295.6 194 284.5 144h142.9c6.103 0 11.82-2.562 15.67-7.031c3.824-4.438 5.557-10.44 4.683-16.72C438.8 69.13 388.7 32 328.6 32zM367.9 471.6c.921 6.219-.8897 12.47-4.948 17.16C358.9 493.4 353.3 496 347.2 496H36.87c-6.103 0-11.68-2.562-15.69-7.219c-4.059-4.688-5.869-10.97-4.964-17.12C25.02 412.6 76.66 368 136.3 368h111.4C307.4 368 359.1 412.6 367.9 471.6zM285.8 358C273.6 354.4 260.1 352 247.8 352h-34.61c10.49-48.22 22.05-120.1 18.42-192.4c-.0312-.625-.5639-.9766-.722-1.543L244.9 144h23.28C278.1 191.7 293.6 276.4 285.8 358zM430.1 126.5C430.2 127.5 428.9 128 427.4 128h-43.33V104c0-4.406-3.575-8-7.992-8s-7.992 3.594-7.992 8L368 128h-129.8L188.1 177.4L173.1 162.3c-3.122-3.125-8.179-3.125-11.3 0s-3.122 8.188 0 11.31L177.7 188.7L133.4 232.1C132.4 233.9 131.3 234.4 129.8 234.4C128.6 234.3 127.3 233.6 126.6 232.7C102.4 198 109.7 146.2 144.2 109.5L156.8 96H112.4V72c0-4.406-3.575-8-7.992-8C99.95 64 96.37 67.59 96.37 72V96H53.04C51.56 96 50.29 95.47 49.48 94.53C48.65 93.56 48.28 92.16 48.42 91C55.93 48.25 100.4 16 151.8 16c40.8 0 78.1 20.47 95 52.16l4.433 8.281l7.461-5.688C277.1 56.06 302.8 48 328.6 48c51.43 0 95.89 32.25 103.4 74.72C432.2 124.2 431.8 125.6 430.1 126.5z"/>
</>],

]);

const IslandTropical: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

IslandTropical.displayName = "IslandTropical";

export default IslandTropical;
