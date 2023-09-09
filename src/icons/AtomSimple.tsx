
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M255.1 255.1c0 17.63-14.38 32-32 32s-32-14.37-32-32c0-17.62 14.38-32.03 32-32.03S255.1 238.3 255.1 255.1z"/><path className="fa-secondary" d="M423.1 56.87C379.1 12.86 300.3 31.62 224 79.12C147.6 31.62 68.87 12.86 24.87 56.87C-19.14 100.9-.3849 179.6 47.12 256c-47.5 76.38-66.25 155.1-22.25 199.1C66.12 496.4 140.4 484.5 224 432.5c83.25 51.88 157.8 64 199.1 22.63c44-44 25.25-122.8-22.25-199.1C448.4 179.6 467.1 100.9 423.1 56.87zM70.12 102.1c9.316-9.316 39.67-12.54 97.26 17.88c-29 23.75-55.5 50.25-79.13 79.13C63.37 151.9 57.74 114.5 70.12 102.1zM70.12 409.9c-12.38-12.38-6.751-49.75 18.13-97.01c28.75 34.88 53 57.38 79.13 78.88C119.1 416.6 82.49 422.3 70.12 409.9zM224 355c-44.88-34.25-73-65-98.88-99.01C153.4 218.5 186.6 184.1 224 156.6c37.38 28.38 70.63 61.88 99 99.38C288.8 300.9 258 329 224 355zM377.9 409.9c-12.38 12.38-49.88 6.75-97.26-18.13c26-21.5 50.25-43.88 79.13-78.88C384.6 360.1 390.3 397.5 377.9 409.9zM359.8 199.1c-23.62-28.88-50.13-55.38-79.13-79.13c57.33-30.29 87.89-27.24 97.26-17.88C390.3 114.5 384.6 151.9 359.8 199.1z"/>
</>],
['light',<>
	<path d="M426.9 53.49c-26.75-26.63-73.37-28.63-131.4-5.377c-23.25 9.252-47.37 22.63-71.5 38.5c-24.12-15.88-48.25-29.25-71.37-38.5C94.51 24.87 47.88 26.87 21.13 53.49c-38.37 38.25-22.75 118 32.75 202.5c-55.5 84.5-71.12 164.3-32.75 202.5C35.51 472.9 55.63 480 80.13 480c21.12 0 45.62-5.375 72.5-16c23.12-9.25 47.25-22.75 71.37-38.63C248.1 441.3 272.3 454.8 295.5 464c26.75 10.62 51.13 16 72.37 16c24.5 0 44.62-7.125 58.1-21.5c38.38-38.25 22.75-118-32.87-202.5C449.6 171.5 465.2 91.74 426.9 53.49zM307.4 77.74c44.75-17.75 79.1-18.38 96.87-1.625c22.87 22.88 12.87 82.38-30 151.6c-17.38-23-36.37-44.63-56.87-65c-20.38-20.12-42.12-38.88-65.12-56C271 95.12 289.5 84.87 307.4 77.74zM43.76 76.12c8.25-8.125 20.62-12.12 36.5-12.12c16.75 0 37.37 4.625 60.37 13.75c17.88 7.125 36.5 17.38 55.12 29c-46.25 34.38-87.25 75.13-121.1 121C30.88 158.5 20.88 99.12 43.76 76.12zM140.6 434.3c-44.62 17.88-79.87 18.38-96.87 1.625c-22.88-22.88-12.88-82.38 29.1-151.6c17.38 23 36.38 44.63 56.87 65c20.38 20.12 42.13 38.88 65.12 56.13C177.1 416.9 158.5 427.1 140.6 434.3zM153.3 326.6c-22-21.88-42.25-45.5-60.37-70.63c18.12-25.12 38.37-48.75 60.37-70.63c21.88-21.88 45.62-42 70.75-60.13c25.12 18.12 48.75 38.25 70.75 60.13c22 21.88 42.25 45.5 60.37 70.63c-18.12 25.12-38.37 48.75-60.37 70.63c-21.1 21.88-45.62 42-70.75 60.13C198.9 368.6 175.3 348.5 153.3 326.6zM404.2 435.9c-16.88 16.75-52.25 16.25-96.87-1.625c-17.87-7.125-36.5-17.38-55.12-28.88c23-17.25 44.75-36 65.12-56.13c20.5-20.38 39.5-42 56.87-65C417.1 353.5 427.1 412.1 404.2 435.9zM224 232c-13.25 0-24 10.72-24 24.06C199.9 269.3 210.8 280 224 280c6.375 0 12.5-2.494 17-6.982S248 262.4 248 256.1C248 242.8 237.3 232 224 232z"/>
</>],
['regular',<>
	<path d="M397.9 255.9c53.63 83.37 66.75 161.2 27.13 200.7c-61.13 60.1-182.8-15.25-201-26.1c-18.12 11.62-140 87.99-201 26.1c-39.5-39.5-26.5-117.4 27.12-200.7C-3.52 172.4-16.52 94.66 22.98 55.03c39.63-39.5 117.5-26.5 201 27.12c83.5-53.62 161.4-66.75 201-27.12S451.5 172.4 397.9 255.9zM80.73 213.3c29.5-37.25 63.37-70.99 100.7-100.6C139.6 88.66 79.36 66.78 56.98 89.03C40.23 105.8 46.36 153.7 80.73 213.3zM181.5 398.9c-37.38-29.37-71.25-63.12-100.7-100.5c-34.38 59.62-40.5 107.6-23.75 124.2C73.73 439.4 121.7 433.3 181.5 398.9zM338.1 255.9c-32.5-43.1-71.25-82.87-115-115.4c-43.88 32.5-82.62 71.37-115 115.4c34 45.62 70 81.37 115 114.7C269.4 337 305.2 301.1 338.1 255.9zM255.1 255.1c0 17.62-14.25 32-32 32c-17.75 0-32-14.38-32-32c0-17.75 14.25-32.03 32-32.03C241.7 223.9 255.1 238.2 255.1 255.1zM367.2 298.4c-29.5 37.37-63.37 71.12-100.7 100.5c59.75 34.37 107.7 40.5 124.5 23.75C407.7 406 401.6 358 367.2 298.4zM266.5 112.7c37.38 29.5 71.25 63.37 100.7 100.6c34.38-59.62 40.5-107.5 23.75-124.2C368.7 66.78 308.6 88.53 266.5 112.7z"/>
</>],
['solid',<>
	<path d="M400.9 256c47.5 76.38 66.25 155.1 22.25 199.1C381.8 496.5 307.3 484.4 224 432.5c-83.63 52-157.9 63.88-199.1 22.63c-44-44-25.25-122.8 22.25-199.1c-47.5-76.38-66.25-155.1-22.25-199.1S147.6 31.61 224 79.12c76.25-47.5 155.1-66.25 199.1-22.25S448.4 179.6 400.9 256zM167.4 391.8c-26.13-21.5-50.38-44-79.13-78.88c-24.88 47.25-30.5 84.63-18.13 97.01C82.49 422.3 119.1 416.6 167.4 391.8zM88.24 199.1c23.63-28.88 50.13-55.38 79.13-79.13c-57.58-30.42-87.94-27.19-97.26-17.88C57.74 114.5 63.37 151.9 88.24 199.1zM323 256C294.6 218.5 261.4 184.1 224 156.6C186.6 184.1 153.4 218.5 125.1 256C150.1 290 179.1 320.8 224 355C258 329 288.8 300.9 323 256zM255.1 255.1c0 17.63-14.38 32-32 32s-32-14.37-32-32c0-17.63 14.38-32.03 32-32.03S255.1 238.3 255.1 255.1zM377.9 102.1c-9.361-9.361-39.92-12.41-97.26 17.88c29 23.75 55.5 50.25 79.13 79.13C384.6 151.9 390.3 114.5 377.9 102.1zM359.8 312.9c-28.88 35-53.13 57.38-79.13 78.88c47.38 24.88 84.88 30.5 97.26 18.13C390.3 397.5 384.6 360.1 359.8 312.9z"/>
</>],
['thin',<>
	<path d="M224 208C197.5 208 175.1 229.5 175.1 256S197.5 304 224 304s48.02-21.53 48.02-48S250.5 208 224 208zM223.1 287.1c-17.68 0-32-14.33-32-32s14.32-32.03 32-32.03c17.68 0 32 14.36 32 32.03S241.7 287.1 223.1 287.1zM424.4 55.69C408.3 39.62 385.5 32 358.6 32c-38.75 .002-86.15 16.13-134.6 45.14C175.6 48.13 128.2 31.1 89.42 32c-26.93 .002-49.71 7.619-65.79 23.69C-15.59 94.9-4.277 173.9 44.93 256c-49.21 82.08-60.53 161.1-21.31 200.3C39.71 472.4 62.48 480 89.42 480c38.75 0 86.15-16.13 134.6-45.14C272.4 463.9 319.8 480 358.6 480c26.93 0 49.71-7.619 65.79-23.69C463.6 417.1 452.3 338.1 403.1 256C452.3 173.9 463.6 94.9 424.4 55.69zM358.6 48c23.53 0 41.85 6.395 54.47 19.01c32.49 32.48 22.06 100.1-19.54 173.5c-18.77-28.65-42.03-57.4-69.33-84.7c-27.31-27.3-56.07-50.29-84.73-69.06C282.1 62.33 324 48 358.6 48zM34.94 67.01C47.56 54.4 65.89 48 89.43 48c34.58 0 76.46 14.33 119.1 38.78C179.9 105.6 151.1 128.5 123.8 155.8C96.51 183.1 73.26 211.9 54.48 240.5C12.88 167.1 2.45 99.49 34.94 67.01zM89.42 464c-23.53 0-41.86-6.395-54.47-19.01c-32.49-32.48-22.06-100.1 19.54-173.5c18.77 28.65 42.03 57.4 69.33 84.7c27.31 27.3 56.07 50.29 84.73 69.06C165.9 449.7 124 464 89.42 464zM135.1 344.8C106.7 316.4 82.78 286 63.85 256C82.78 225.1 106.7 195.6 135.1 167.2c28.1-28.09 58.49-52.16 88.87-71.3c30.38 19.14 60.77 43.22 88.87 71.3C341.3 195.6 365.2 225.1 384.1 256c-18.93 30.04-42.82 60.39-71.28 88.84C284.8 372.9 254.4 397 224 416.1C193.6 397 163.2 372.9 135.1 344.8zM413.1 444.1C400.4 457.6 382.1 464 358.6 464c-34.59 0-76.47-14.33-119.1-38.78c28.67-18.77 57.43-41.77 84.73-69.06c27.3-27.29 50.56-56.04 69.33-84.7C435.1 344 445.6 412.5 413.1 444.1z"/>
</>],

]);

const AtomSimple: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

AtomSimple.displayName = "AtomSimple";

export default AtomSimple;