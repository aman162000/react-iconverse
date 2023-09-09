
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M412.6 119.4c-38.13-43.69-94.09-71.41-156.6-71.41c-114.9 0-207.1 93.1-207.1 207.1c0 62.54 27.71 118.5 71.4 156.6c39.04-18.52 100.8-66.4 163.8-129.4C346.2 220.2 394.1 158.5 412.6 119.4zM448.1 176.3c-31.97 46.03-74.53 96.85-124.8 147.1s-101.1 92.81-147.1 124.8c24.56 10.21 51.47 15.83 79.73 15.83c114.9 0 207.1-93.1 207.1-207.1C463.1 227.7 458.3 200.8 448.1 176.3z"/><path className="fa-secondary" d="M323.4 323.4c-136.4 136.4-277.2 216.7-314.3 179.5c-23.5-23.47-.01-88.2 54.84-167.1c6.229 14.92 14.7 28.43 24.05 41.37c-9.807 19.82-12.64 34.3-6.399 40.54c18.56 18.56 108.9-41.63 201.7-134.5c92.82-92.82 153-183.1 134.5-201.7c-6.24-6.24-20.72-3.406-40.54 6.401c-12.94-9.348-26.45-17.82-41.37-24.05c78.95-54.85 143.7-78.34 167.1-54.84C540.1 46.19 459.7 186.1 323.4 323.4z"/>
</>],
['light',<>
	<path d="M498.5 13.44c-21.9-21.9-62.97-17.05-122.1 14.62c-7.777 4.154-10.71 13.84-6.528 21.65c4.154 7.809 13.9 10.75 21.65 6.528c47.01-25.18 76.34-28.3 84.4-20.18c6.591 6.622 8.714 33.73-25.27 93.58c-4.332 7.631-9.136 15.47-14.21 23.43c-35.86-62.63-103.2-105.1-180.4-105.1c-114.6 0-207.1 93.34-207.1 207.1c0 77.19 42.44 144.5 105.1 180.4c-7.951 5.076-15.79 9.88-23.42 14.21c-59.75 33.98-86.99 31.86-93.58 25.27c-8.121-8.09-5.029-37.33 20.18-84.4c4.185-7.809 1.249-17.49-6.528-21.65c-7.715-4.248-17.46-1.249-21.65 6.528c-31.67 59.13-36.58 100.2-14.62 122.1C22.5 507.5 34.68 512 49.98 512c24.18 0 56.1-11.21 95.45-33.58c13.53-7.69 27.61-16.59 41.1-26.41c21.5 7.542 44.52 11.96 68.56 11.96c114.6 0 207.1-93.34 207.1-207.1c0-24.04-4.406-47.08-11.95-68.58c9.825-14.39 18.72-28.46 26.41-41.1C514.1 81.07 521.7 36.68 498.5 13.44zM80.06 255.1c0-96.99 78.93-175.9 175.9-175.9c70.99 0 132.2 42.38 159.9 103.1c-29.04 40.51-65.76 83.48-107.5 125.2c-41.76 41.76-84.73 78.48-125.2 107.5C122.4 388.1 80.06 326.1 80.06 255.1zM431.9 255.1c0 96.99-78.93 175.9-175.9 175.9c-12.23 0-24.17-1.269-35.7-3.657c36.38-27.64 74.08-60.58 110.7-97.24s69.59-74.35 97.23-110.7C430.6 231.8 431.9 243.7 431.9 255.1z"/>
</>],
['regular',<>
	<path d="M502.9 9.049c-23.38-23.38-88.39 .0808-167.1 54.84c-25.38-10.5-52.39-15.88-79.77-15.88c-114.9 0-207.1 93.09-207.1 207.1c0 27.38 5.368 54.4 15.87 79.77c-54.76 78.76-78.21 143.8-54.84 167.1c23.5 23.5 88.33-.0166 167.2-54.77c25.25 10.5 52.35 15.83 79.73 15.83c114.9 0 207.1-93.09 207.1-207.1c0-27.38-5.329-54.47-15.83-79.72C502.9 97.38 526.4 32.55 502.9 9.049zM64.01 448c-8.001-8.001 2.375-32.88 25.75-67.38c11.88 15.75 25.88 29.88 41.63 41.63C96.89 445.7 72.01 456 64.01 448zM172.6 391.9c-45.75-28.13-76.63-78.26-76.63-135.9c0-88.26 71.76-160 160-160c57.63 0 107.8 30.88 135.9 76.63c-27.5 34.63-63.13 74.63-103.9 115.4C247.1 328.8 207.3 364.4 172.6 391.9zM256 416c-10.88 0-21.75-1.125-32.38-3.25c34.88-28 68.09-57.8 99.71-89.43c31.63-31.63 61.43-64.84 89.43-99.71c2.125 10.63 3.25 21.5 3.25 32.38C416 344.3 344.3 416 256 416zM380.7 89.76c34.5-23.38 59.38-33.75 67.38-25.75c8.001 8.001-2.375 32.88-25.75 67.38C410.5 115.6 396.4 101.6 380.7 89.76z"/>
</>],
['solid',<>
	<path d="M502.9 9.049c-23.5-23.5-88.26 .0789-167.1 54.84c-75.51-31.25-165.5-16.3-226.9 44.95c-61.26 61.38-76.21 151.4-44.95 226.9c-54.76 78.89-78.34 143.6-54.84 167.1c37.13 37.25 177.9-43.15 314.3-179.5S540.2 46.18 502.9 9.049zM346.5 346.5c-38.13 38.13-84.14 78.89-130.8 113.6c68.13 13.38 138.4-8.001 187.4-57.13c49.01-49.01 70.38-119.4 56.88-187.4C423.9 264.2 382.1 310.9 346.5 346.5z"/>
</>],
['thin',<>
	<path d="M500.9 11.09c-19.87-19.87-61.62-12.95-120.8 20.01c-3.859 2.14-5.249 7.015-3.093 10.87c2.14 3.875 7.046 5.25 10.87 3.093c50.03-27.87 88.04-36.32 101.7-22.67c14.17 14.17 4.687 53.96-25.34 106.4c-6.486 11.33-13.98 23.11-22.01 35.09c-34.04-68.58-104.6-115.9-186.2-115.9c-114.7 0-207.1 93.3-207.1 207.1c0 81.61 47.35 152.2 115.9 186.2c-11.98 8.019-23.76 15.52-35.09 22.01c-52.46 30.04-92.27 39.53-106.4 25.34c-13.67-13.67-5.187-51.68 22.67-101.7c2.156-3.859 .7655-8.734-3.093-10.87C38.11 374.8 33.23 376.2 31.11 380.1c-32.97 59.15-39.89 100.9-20.01 120.8C18.98 508.8 29.76 512 42.17 512c28.18 0 64.71-16.8 94.63-33.92c14.33-8.198 29.23-17.67 44.51-28.22c23.21 8.974 48.34 14.1 74.68 14.1c114.7 0 207.1-93.3 207.1-207.1c0-26.34-5.134-51.47-14.11-74.68c10.55-15.28 20.02-30.18 28.22-44.51C502.7 93.73 526.7 36.93 500.9 11.09zM63.99 255.1c0-105.9 86.12-191.1 191.1-191.1c78.53 0 146.1 47.44 175.8 115.1c-31.03 43.89-70.92 90.78-116.4 136.3s-92.37 85.38-136.3 116.4C111.4 402.1 63.99 334.5 63.99 255.1zM447.1 255.1c0 105.9-86.12 191.1-191.1 191.1c-20.58 0-40.36-3.338-58.96-9.357c42.13-30.62 86.55-68.79 129.7-111.9s81.29-87.55 111.9-129.7C444.6 215.6 447.1 235.4 447.1 255.1z"/>
</>],

]);

const PlanetRinged: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PlanetRinged.displayName = "PlanetRinged";

export default PlanetRinged;