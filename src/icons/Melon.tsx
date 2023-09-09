
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M74.1 437C75 437 74.1 437 74.1 437C74.1 437 75 437 74.1 437C75 437 74.1 437 74.1 437zM74.1 437C75.01 437.1 74.99 437 74.1 437C74.98 437 75.02 437.1 74.1 437C75 437 74.1 437 74.1 437zM438.2 76.76c21.11 22.63 25.1 61.1 10.69 109.1c-16.09 53.67-52.46 110.7-102.4 160.6c-70.04 70-153.4 111.1-213.3 111.1c-23.98 0-44.21-6.632-58.25-20.64c21.31 21.3 46.49 38.65 74.2 51.4c68.39-6.119 150.9-50.33 219.9-119.3c53.63-53.63 92.83-115.5 110.4-174.1c4.785-15.95 7.732-31.14 9.066-45.52C476.1 122.3 458.9 97.81 438.2 76.76zM63.11 326.1c16.09-53.67 52.46-110.7 102.4-160.6c70.03-70.02 153.4-111.2 213.2-111.2c20.81 0 38.51 5.326 52.08 15.8c-20.03-18.84-42.71-34.91-68.03-46.57c-68.39 6.119-150.1 50.34-219.9 119.3C89.25 196.5 50.04 258.3 32.46 316.9c-4.791 15.97-7.705 31.17-9.037 45.56c12.77 27.83 30.21 53.15 51.58 74.53C52.64 414.6 48.38 375.2 63.11 326.1z"/><path className="fa-secondary" d="M362.8 23.56C330.3 8.584 294.2 0 256 0C114.6 0 0 114.6 0 256c0 38.05 8.527 74.04 23.42 106.5c1.332-14.39 4.246-29.59 9.037-45.56c17.58-58.63 56.79-120.4 110.4-174.1C211.8 73.9 294.4 29.68 362.8 23.56zM448.9 185.9c14.73-49.1 10.5-88.49-11.87-110.9c-.0098-.0215 .0156 .0215 0 0c-14.05-14.02-34.29-20.67-58.28-20.67c-59.84 0-143.2 41.14-213.2 111.2C115.6 215.4 79.2 272.5 63.11 326.1c-14.73 49.1-10.49 88.5 11.89 110.9c.0137 .0195-.0137-.0156 0 0c.002 .002-.002-.002 0 0c14.05 14.01 34.27 20.64 58.25 20.64c59.84 0 143.2-41.14 213.3-111.1C396.4 296.6 432.8 239.6 448.9 185.9zM488.6 149.6c-1.334 14.38-4.281 29.57-9.066 45.52c-17.58 58.63-56.79 120.4-110.4 174.1c-68.98 68.95-151.5 113.2-219.9 119.3C181.7 503.4 217.8 512 256 512c141.4 0 256-114.6 256-256C512 217.1 503.5 182 488.6 149.6z"/>
</>],
['light',<>
	<path d="M256 0C114.6 0 0 114.6 0 256c0 70.71 28.66 134.7 74.1 181c.002 .002-.002-.002 0 0s-.002-.002 0 0C121.3 483.3 185.3 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0zM418.2 176.7c-14.59 48.66-48.1 100.9-94.35 147.2c-70.34 70.31-146.4 101.8-190.6 101.8c-10.72 0-25.18-1.934-34.58-10.46C98.23 414.8 97.78 414.4 97.34 413.9c-12.96-13.44-14.36-42.71-3.58-78.62c14.59-48.66 48.1-100.9 94.36-147.2c70.33-70.32 146.4-101.8 190.6-101.8c10.36 0 24.19 1.832 32.84 8.861c.998 .9668 2.07 1.85 3.051 2.834C427.6 111.4 429 140.7 418.2 176.7zM256 32c36.19 0 70.28 8.822 100.6 24.12c-57.22 8.416-129.3 47.61-191.1 109.4C115.6 215.4 79.2 272.5 63.11 326.1c-3.279 10.93-5.273 21.17-6.686 31.05C40.93 326.8 32 292.4 32 256C32 132.5 132.5 32 256 32zM256 480c-36.19 0-70.28-8.822-100.6-24.12c57.22-8.42 129.3-47.61 191.1-109.3c49.93-49.94 86.29-106.1 102.4-160.6c3.281-10.93 5.277-21.18 6.688-31.07C471.1 185.3 480 219.6 480 256C480 379.5 379.5 480 256 480z"/>
</>],
['regular',<>
	<path d="M256 0C114.6 0 0 114.6 0 256c0 70.71 28.66 134.7 74.1 181c.002 .002-.002-.002 0 0s-.002-.002 0 0C121.3 483.3 185.3 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0zM402.9 172.1c-13.84 46.17-45.93 96.06-90.34 140.5c-67.1 67.07-138.4 97.09-179.3 97.09c-6.387 0-17.67-.8691-23.64-6.092c-.2891-.2871-.5918-.5605-.8789-.8477c-7.023-7.428-9.643-29.52 .3496-62.81c13.84-46.17 45.93-96.06 90.34-140.5c67.09-67.08 138.4-97.11 179.3-97.11c6.357 0 17.58 .8555 23.58 6.037c.3008 .2988 .6191 .5781 .918 .8789C410.3 116.6 412.9 138.8 402.9 172.1zM256 48c26.09 0 50.98 5.039 74.01 13.85c-51.97 14.85-112 51.13-164.5 103.6C115.6 215.4 79.2 272.5 63.11 326.1c-.4863 1.621-.5469 3.008-.9922 4.607C53.13 307.5 48 282.4 48 256C48 141.3 141.3 48 256 48zM256 464c-26.1 0-50.98-5.039-74.02-13.85c51.98-14.85 112-51.12 164.5-103.6c49.93-49.94 86.29-106.1 102.4-160.6c.4883-1.625 .5488-3.014 .9941-4.617C458.9 204.5 464 229.6 464 256C464 370.7 370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M362.8 23.56C330.3 8.584 294.2 0 256 0C114.6 0 0 114.6 0 256c0 38.05 8.527 74.04 23.42 106.5c1.332-14.39 4.246-29.59 9.037-45.56c17.58-58.63 56.79-120.4 110.4-174.1C211.8 73.9 294.4 29.68 362.8 23.56zM448.9 185.9c14.73-49.1 10.5-88.49-11.87-110.9c-.0098-.0215 .0156 .0215 0 0c-14.05-14.02-34.29-20.67-58.28-20.67c-59.84 0-143.2 41.14-213.2 111.2C115.6 215.4 79.2 272.5 63.11 326.1c-14.73 49.1-10.49 88.5 11.89 110.9c.0137 .0195-.0137-.0156 0 0c.002 .002-.002-.002 0 0c14.05 14.01 34.27 20.64 58.25 20.64c59.84 0 143.2-41.14 213.3-111.1C396.4 296.6 432.8 239.6 448.9 185.9zM488.6 149.6c-1.334 14.38-4.281 29.57-9.066 45.52c-17.58 58.63-56.79 120.4-110.4 174.1c-68.98 68.95-151.5 113.2-219.9 119.3C181.7 503.4 217.8 512 256 512c141.4 0 256-114.6 256-256C512 217.1 503.5 182 488.6 149.6z"/>
</>],
['thin',<>
	<path d="M256 0C114.6 0 0 114.6 0 256c0 70.71 28.66 134.7 74.1 181c.002 .002-.002-.002 0 0s-.002-.002 0 0C121.3 483.3 185.3 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0zM433.6 181.3c-15.34 51.15-50.27 105.8-98.37 153.9c-64.71 64.67-143.1 106.5-201.9 106.5c-19.59 0-34.76-5-45.33-14.64c-.6621-.6504-1.359-1.262-2.014-1.92c-17.6-18.15-20.32-51.56-7.471-94.38c15.34-51.15 50.27-105.8 98.37-153.9c64.69-64.68 143.1-106.5 201.9-106.5c19.14 0 34.03 4.785 44.21 13.61c1.014 .9844 2.098 1.893 3.094 2.893C443.7 104.1 446.4 138.4 433.6 181.3zM256 16c48.15 0 92.94 14.39 130.6 38.89c-2.619-.1719-5.102-.5684-7.822-.5684c-59.84 0-143.2 41.14-213.2 111.2C115.6 215.4 79.2 272.5 63.11 326.1c-6.82 22.73-9.139 43.07-7.918 60.91C30.49 349.3 16 304.4 16 256C16 123.7 123.7 16 256 16zM256 496c-48.15 0-92.94-14.39-130.6-38.89c2.615 .1699 5.096 .5664 7.811 .5664c59.84 0 143.2-41.14 213.3-111.1c49.93-49.94 86.29-106.1 102.4-160.6c6.822-22.74 9.145-43.09 7.92-60.93C481.5 162.7 496 207.6 496 256C496 388.3 388.3 496 256 496z"/>
</>],

]);

const Melon: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Melon.displayName = "Melon";

export default Melon;
