
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M176 160C78.8 160 0 238.8 0 336C0 433.2 78.8 512 176 512s176-78.8 176-176C352 238.8 273.2 160 176 160zM224 288H192v32c0 8.844-7.156 16-16 16S160 328.8 160 320V288H128C119.2 288 112 280.8 112 272S119.2 256 128 256h32V224c0-8.844 7.156-16 16-16S192 215.2 192 224v32h32c8.844 0 16 7.156 16 16S232.8 288 224 288zM416 96h-32V64c0-8.844-7.156-16-16-16S352 55.16 352 64v32h-32c-8.844 0-16 7.156-16 16S311.2 128 320 128h32v32c0 8.844 7.156 16 16 16S384 168.8 384 160V128h32c8.844 0 16-7.156 16-16S424.8 96 416 96z"/><path className="fa-secondary" d="M336 0C255.3 0 187.4 54.39 166.7 128.5C169.8 128.3 172.9 128 176 128c114.9 0 208 93.13 208 208c0 3.148-.333 6.211-.4717 9.324C457.6 324.6 512 256.7 512 176C512 78.8 433.2 0 336 0zM416 128h-32v32c0 8.844-7.156 16-16 16S352 168.8 352 160V128h-32c-8.844 0-16-7.156-16-16S311.2 96 320 96h32V64c0-8.844 7.156-16 16-16S384 55.16 384 64v32h32c8.844 0 16 7.156 16 16S424.8 128 416 128zM224 256H192V224c0-8.844-7.156-16-16-16S160 215.2 160 224v32H128C119.2 256 112 263.2 112 272S119.2 288 128 288h32v32c0 8.844 7.156 16 16 16S192 328.8 192 320V288h32c8.844 0 16-7.156 16-16S232.8 256 224 256z"/>
</>],
['light',<>
	<path d="M176 160C78.8 160 0 238.8 0 336C0 433.2 78.8 512 176 512s176-78.8 176-176C352 238.8 273.2 160 176 160zM176 480C96.6 480 32 415.4 32 336S96.6 192 176 192S320 256.6 320 336S255.4 480 176 480zM336 0c-67.97 0-128.7 38.02-158.4 99.2C173.8 107.1 177.1 116.7 185 120.6c7.969 3.844 17.53 .5469 21.41-7.406C230.7 63.11 280.4 32 336 32C415.4 32 480 96.59 480 176c0 54.78-31.88 105.7-81.19 129.6c-7.938 3.859-11.25 13.44-7.406 21.38C394.2 332.7 399.9 336 405.8 336c2.344 0 4.75-.5156 7-1.609C473.1 305.1 512 242.1 512 176C512 78.95 433 0 336 0zM208 272h-32v-32C176 231.2 168.8 224 160 224S144 231.2 144 240v32h-32C103.2 272 96 279.2 96 288s7.156 16 16 16h32v32C144 344.8 151.2 352 160 352s16-7.156 16-16v-32h32C216.8 304 224 296.8 224 288S216.8 272 208 272zM416 128c0-8.844-7.156-16-16-16h-32v-32C368 71.16 360.8 64 352 64s-16 7.156-16 16v32h-32C295.2 112 288 119.2 288 128s7.156 16 16 16h32v32C336 184.8 343.2 192 352 192s16-7.156 16-16v-32h32C408.8 144 416 136.8 416 128z"/>
</>],
['regular',<>
	<path d="M208 284H180V256c0-11.05-8.969-20-20-20S140 244.1 140 256v28H112c-11.03 0-20 8.953-20 20s8.969 20 20 20h28V352c0 11.05 8.969 20 20 20S180 363 180 352v-28H208c11.03 0 20-8.953 20-20S219 284 208 284zM336 0C244 0 169.2 70.78 161.4 160.7C71.05 168.2 0 243.7 0 336C0 433.2 78.8 512 176 512c92.28 0 167.8-71.05 175.3-161.4C441.2 342.8 512 267.1 512 176C512 78.8 433.2 0 336 0zM176 464c-70.58 0-128-57.42-128-128s57.42-128 128-128s128 57.42 128 128S246.6 464 176 464zM416 128h-32v32c0 8.844-7.156 16-16 16S352 168.8 352 160V128h-32c-8.844 0-16-7.156-16-16S311.2 96 320 96h32V64c0-8.844 7.156-16 16-16S384 55.16 384 64v32h32c8.844 0 16 7.156 16 16S424.8 128 416 128z"/>
</>],
['solid',<>
	<path d="M336 0C255.3 0 187.4 54.39 166.7 128.5C169.8 128.3 172.9 128 176 128c114.7 0 208 93.31 208 208c0 3.146-.333 6.211-.4717 9.324C457.6 324.6 512 256.7 512 176C512 78.8 433.2 0 336 0zM416 128h-32v32c0 8.844-7.156 16-16 16S352 168.8 352 160V128h-32c-8.844 0-16-7.156-16-16S311.2 96 320 96h32V64c0-8.844 7.156-16 16-16S384 55.16 384 64v32h32c8.844 0 16 7.156 16 16S424.8 128 416 128zM176 160C78.8 160 0 238.8 0 336C0 433.2 78.8 512 176 512s176-78.8 176-176C352 238.8 273.2 160 176 160zM224 288H192v32c0 8.844-7.156 16-16 16S160 328.8 160 320V288H128C119.2 288 112 280.8 112 272S119.2 256 128 256h32V224c0-8.844 7.156-16 16-16S192 215.2 192 224v32h32c8.844 0 16 7.156 16 16S232.8 288 224 288z"/>
</>],
['thin',<>
	<path d="M400 96h-32V64c0-4.422-3.594-8-8-8S352 59.58 352 64v32h-32c-4.406 0-8 3.578-8 8S315.6 112 320 112h32v32c0 4.422 3.594 8 8 8S368 148.4 368 144v-32h32c4.406 0 8-3.578 8-8S404.4 96 400 96zM192 272H160v-32c0-4.422-3.594-8-8-8S144 235.6 144 240v32h-32c-4.406 0-8 3.578-8 8S107.6 288 112 288h32v32c0 4.422 3.594 8 8 8S160 324.4 160 320V288h32c4.406 0 8-3.578 8-8S196.4 272 192 272zM176 160C78.8 160 0 238.8 0 336C0 433.2 78.8 512 176 512s176-78.8 176-176C352 238.8 273.2 160 176 160zM176 496c-88.22 0-160-71.78-160-160s71.78-160 160-160s160 71.78 160 160S264.2 496 176 496zM336 0c-64.63 0-123.1 35.33-154.8 92.19C179.1 96.06 180.5 100.9 184.4 103c3.938 2.141 8.75 .6406 10.84-3.219C223.3 48.11 277.3 16 336 16c88.22 0 160 71.78 160 160c0 58.75-32.13 112.7-83.81 140.7c-3.875 2.109-5.312 6.969-3.219 10.84C410.4 330.3 413.2 331.8 416 331.8c1.281 0 2.594-.3125 3.812-.9687C476.7 299.9 512 240.6 512 176C512 78.95 433 0 336 0z"/>
</>],

]);

const Blueberries: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Blueberries.displayName = "Blueberries";

export default Blueberries;
