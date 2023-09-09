
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M200 240c0-22.06 17.94-40 40-40s40 17.94 40 40c0 13.25 10.75 24 24 24s24-10.75 24-24c0-48.53-39.47-88-88-88S152 191.5 152 240c0 13.25 10.75 24 24 24S200 253.3 200 240zM415.1 241.6c0-57.78-42.91-177.6-175.1-177.6c-153.6 0-175.2 150.8-175.2 160.4c0 17.32 14.99 31.58 32.75 31.58c16.61 0 29.25-13.07 31.24-29.55c6.711-55.39 54.02-98.45 111.2-98.45c80.45 0 111.2 75.56 111.2 119.6c0 57.94-38.22 98.14-46.37 106.3L288 370.7v13.25c0 31.4-22.71 57.58-52.58 62.98C220.4 449.7 208 463.3 208 478.6c0 17.95 14.72 32.09 32.03 32.09c4.805 0 100.5-14.34 111.2-112.7C412.6 335.8 415.1 263.4 415.1 241.6z"/><path className="fa-secondary" d="M192 319.1C185.8 313.7 177.6 310.6 169.4 310.6S153 313.7 146.8 319.1l-137.4 137.4C3.124 463.6 0 471.8 0 480c0 18.3 14.96 31.1 31.1 31.1c8.188 0 16.38-3.124 22.62-9.371l137.4-137.4c6.247-6.247 9.371-14.44 9.371-22.62S198.3 326.2 192 319.1zM511.1 31.1c0-8.188-3.124-16.38-9.371-22.62s-14.44-9.372-22.63-9.372s-16.38 3.124-22.62 9.372L416 50.75c-6.248 6.248-9.372 14.44-9.372 22.63c0 8.188 3.123 16.38 9.37 22.62c6.247 6.248 14.44 9.372 22.63 9.372s16.38-3.124 22.63-9.372l41.38-41.38C508.9 48.37 511.1 40.18 511.1 31.1z"/>
</>],
['light',<>
	<path d="M240 63.1C141.3 63.1 64 141.3 64 240C64 248.8 71.16 256 80 256S96 248.8 96 240C96 159.3 159.3 96 240 96C319.4 96 384 162.1 384 243.4c0 49.19-17.8 91.53-54.39 129.4l-3.812 3.969l-.5781 5.469C319.5 436.2 274 480 224 480c-8.844 0-16 7.156-16 16S215.2 512 224 512c64.16 0 122.4-53.69 132.3-120.8C396.5 348 416 299.6 416 243.4C416 144.5 337 63.1 240 63.1zM160 240C160 195.9 195.9 160 240 160S320 195.9 320 240C320 248.8 327.2 256 336 256S352 248.8 352 240c0-61.75-50.25-112-111.1-112S128 178.3 128 240C128 248.8 135.2 256 144 256S160 248.8 160 240zM176 320c-4.094 0-8.188 1.562-11.31 4.688l-160 160C1.563 487.8 0 491.9 0 496C0 504.5 6.865 512 16 512c4.094 0 8.188-1.562 11.31-4.688l160-160C190.4 344.2 192 340.1 192 336C192 327.5 185.1 320 176 320zM512 16C512 7.473 505.1 0 496 0c-4.094 0-8.188 1.562-11.31 4.688l-64 64C417.6 71.81 416 75.91 416 80C416 88.53 422.9 96 432 96c4.094 0 8.188-1.562 11.31-4.688l64-64C510.4 24.19 512 20.09 512 16z"/>
</>],
['regular',<>
	<path d="M240 63.1C142.1 63.1 64 145.3 64 245.1c0 13.25 10.75 24 24 24s24-10.75 24-24C112 171.7 169.4 112 240 112s128 59.72 128 133.1c0 46.97-17.52 91.19-49.31 124.5l-5.625 5.906l-.8594 8.125C307.4 429.5 270.4 464 226.2 464c-13.25 0-24 10.75-24 24s10.75 24 24 24c66.11 0 121.8-48.91 132.6-115.1C395.8 355.4 416 301.8 416 245.1C416 145.3 337 63.1 240 63.1zM168 320c-6.141 0-12.28 2.344-16.97 7.031l-144 144C2.344 475.7 0 481.9 0 488C0 501.7 11.21 512 24 512c6.141 0 12.28-2.344 16.97-7.031l144-144C189.7 356.3 192 350.1 192 344C192 330.3 180.8 320 168 320zM512 24C512 10.29 500.8 0 488 0c-6.141 0-12.28 2.344-16.97 7.031l-64 64C402.3 75.72 400 81.86 400 88c0 13.71 11.21 24 24 24c6.141 0 12.28-2.344 16.97-7.031l64-64C509.7 36.28 512 30.14 512 24zM240 200c22.06 0 40 17.94 40 40c0 13.25 10.75 24 24 24s24-10.75 24-24c0-48.53-39.47-88-88-88S152 191.5 152 240c0 13.25 10.75 24 24 24S200 253.3 200 240C200 217.9 217.9 200 240 200z"/>
</>],
['solid',<>
	<path d="M192 319.1C185.8 313.7 177.6 310.6 169.4 310.6S153 313.7 146.8 319.1l-137.4 137.4C3.124 463.6 0 471.8 0 480c0 18.3 14.96 31.1 31.1 31.1c8.188 0 16.38-3.124 22.62-9.371l137.4-137.4c6.247-6.247 9.371-14.44 9.371-22.62S198.3 326.2 192 319.1zM200 240c0-22.06 17.94-40 40-40s40 17.94 40 40c0 13.25 10.75 24 24 24s24-10.75 24-24c0-48.53-39.47-88-88-88S152 191.5 152 240c0 13.25 10.75 24 24 24S200 253.3 200 240zM511.1 31.1c0-8.188-3.124-16.38-9.371-22.62s-14.44-9.372-22.63-9.372s-16.38 3.124-22.62 9.372L416 50.75c-6.248 6.248-9.372 14.44-9.372 22.63c0 8.188 3.123 16.38 9.37 22.62c6.247 6.248 14.44 9.372 22.63 9.372s16.38-3.124 22.63-9.372l41.38-41.38C508.9 48.37 511.1 40.18 511.1 31.1zM415.1 241.6c0-57.78-42.91-177.6-175.1-177.6c-153.6 0-175.2 150.8-175.2 160.4c0 17.32 14.99 31.58 32.75 31.58c16.61 0 29.25-13.07 31.24-29.55c6.711-55.39 54.02-98.45 111.2-98.45c80.45 0 111.2 75.56 111.2 119.6c0 57.94-38.22 98.14-46.37 106.3L288 370.7v13.25c0 31.4-22.71 57.58-52.58 62.98C220.4 449.7 208 463.3 208 478.6c0 17.95 14.72 32.09 32.03 32.09c4.805 0 100.5-14.34 111.2-112.7C412.6 335.8 415.1 263.4 415.1 241.6z"/>
</>],
['thin',<>
	<path d="M359.1 255.1c4.422 0 8-3.578 8-8v-16c0-66.17-53.83-120-120-120s-120 53.83-120 120v16c0 4.422 3.578 8 8 8s8-3.578 8-8v-16c0-57.34 46.66-104 104-104s104 46.66 104 104v16C351.1 252.4 355.6 255.1 359.1 255.1zM247.1 47.1c-101.5 0-184 82.55-184 184v16c0 4.422 3.578 8 8 8s8-3.578 8-8v-16c0-92.64 75.36-168 168-168s168 75.36 168 168c0 57.42-22.19 111.5-62.47 152.4l-1.953 1.969l-.2969 2.766c-6.656 60.94-57.94 106.9-119.3 106.9c-4.422 0-8 3.578-8 8s3.578 8 8 8c68.58 0 126.1-50.69 134.9-118.4c42.03-43.63 65.14-100.9 65.14-161.6C431.1 130.5 349.5 47.1 247.1 47.1zM183.1 320c-2.047 0-4.094 .7813-5.656 2.344l-176 176C.7812 499.9-.0001 501.1-.0001 504c0 2.906 2.281 8 8 8c2.062 0 4.094-.7813 5.656-2.344l176-176C191.2 332.1 191.1 330 191.1 328C191.1 323.7 188.6 320 183.1 320zM511.1 8c0-4.263-3.433-8-8-8c-2.047 0-4.094 .7813-5.656 2.344l-80 80C416.8 83.91 415.1 85.95 415.1 88c0 2.906 2.281 8 8 8c2.062 0 4.094-.7813 5.656-2.344l80-80C511.2 12.09 511.1 10.05 511.1 8z"/>
</>],

]);

const EarDeaf: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

EarDeaf.displayName = "EarDeaf";

export default EarDeaf;
