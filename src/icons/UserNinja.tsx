
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z"/><path className="fa-secondary" d="M208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96z"/>
</>],
['light',<>
	<path d="M208 128h96C312.8 128 320 120.8 320 112s-7.156-15.1-16-15.1H208C199.2 96 192 103.2 192 112S199.2 128 208 128zM68.69 187.3C71.81 190.4 75.91 192 80 192s8.188-1.562 11.31-4.688L130.1 148.6C139.1 209.4 192.3 256 256 256c70.69 0 127.1-57.31 127.1-128c0-70.69-57.31-128-127.1-128c-54.5 0-100.7 34.2-119.2 82.19l-45.5-45.5c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L121.4 112L68.69 164.7C62.44 170.9 62.44 181.1 68.69 187.3zM256 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S160 180.9 160 128C160 75.06 203.1 32 256 32zM381.4 291.3c-1.039-.498-20.82-10.16-37.11 6.129L256 385.7L167.7 297.4c-16.29-16.29-36.07-6.627-37.11-6.129c-58.6 27.99-99.11 87.31-98.63 156.7v31.1c0 17.67 14.33 31.1 32 31.1h383.1c17.67 0 32-14.33 32-31.1v-31.1C480.5 378.6 439.1 319.3 381.4 291.3zM240 480h-175.1v-32.22c-.3828-54.83 30.43-103.7 80.42-127.6c.1719-.082 95.57 94.76 95.57 94.76V480zM447.1 480h-175.1v-65.08c0 0 95.4-94.84 95.57-94.76c49.99 23.88 80.81 72.79 80.42 127.6V480z"/>
</>],
['regular',<>
	<path d="M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM480 464c2.742-87.55-59.6-160.1-142.2-176L256 397.1L174.2 288c-82.6 15-144.6 88.45-141.9 176c0 26.51 21.18 48 47.69 48h352C458.5 512 480 490.5 480 464zM80.34 464l-.0469-1.504c-1.656-52.91 28.88-99.34 75.41-119.2L246.2 464H80.34zM431.7 464h-165.9l90.51-120.7c46.53 19.83 77.06 66.26 75.41 119.2L431.7 464z"/>
</>],
['solid',<>
	<path d="M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z"/>
</>],
['thin',<>
	<path d="M359.6 313.9c-15.86-5.094-33.36 .2187-43.42 12.97l-61.09 77.44l-59.28-77.44C185.8 314.1 168.3 308.9 152.4 313.9c-72.62 22.75-120.1 86.94-120.4 159.8C32.19 494.8 50.79 512 73.43 512h365.1c22.64 0 41.23-17.22 41.42-38.38C480.6 400.8 432.2 336.6 359.6 313.9zM73.43 496c-13.67 0-25.31-10.31-25.42-22.5c-.5625-65.72 43.3-123.8 109.2-144.4c15.12-4.594 24.38 5.496 26.01 7.562L305.2 496H73.43zM438.6 496h-113.2l-60.2-78.63l63.62-80.59c5.1-7.594 16.47-10.56 26.08-7.656c65.86 20.62 109.7 78.66 109.2 144.4C463.9 485.7 452.2 496 438.6 496zM65.6 180.8C67.18 182.9 69.58 184 72 184c1.672 0 3.359-.5313 4.797-1.594l52.7-39.53C136.1 206.5 190.4 256 256 256c70.69 0 127.1-57.31 127.1-128c0-70.69-57.31-128-127.1-128c-65.59 0-119 49.53-126.5 113.1L76.8 73.59C73.3 71.03 68.27 71.66 65.6 75.19c-2.641 3.562-1.922 8.562 1.609 11.22L122.7 128L67.21 169.6C63.68 172.3 62.96 177.3 65.6 180.8zM256 16c59.02 0 107 46.03 111.2 104h-23.19c0-22.06-17.94-40-39.1-40H208c-22.06 0-39.1 17.94-39.1 40H144.8C148.1 62.03 196.1 16 256 16zM327.1 120H184c0-13.22 10.76-23.1 23.1-23.1h95.1C317.2 96 327.1 106.8 327.1 120zM367.2 136C363 193.1 315 240 256 240c-59.01 0-107-46.03-111.2-104H367.2z"/>
</>],

]);

const UserNinja: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UserNinja.displayName = "UserNinja";

export default UserNinja;
