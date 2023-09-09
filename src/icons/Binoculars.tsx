
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M63.88 160.1C61.34 253.9 3.5 274.3 0 404V448c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32V288h32V128H95.88C78.26 128 64.35 142.5 63.88 160.1zM448.1 160.1C447.6 142.5 433.7 128 416.1 128H288v160h32v160c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32v-44C508.5 274.3 450.7 253.9 448.1 160.1z"/><path className="fa-secondary" d="M400 32h-64C327.1 32 320 39.13 320 48V96h96.04L416 48C416 39.13 408.9 32 400 32zM224 288h64V128H224V288zM176 32h-64C103.1 32 96 39.13 96 48L95.96 96H192V48C192 39.13 184.9 32 176 32z"/>
</>],
['light',<>
	<path d="M112 64h96C216.8 64 224 56.84 224 48S216.8 32 208 32h-96C103.2 32 96 39.16 96 48S103.2 64 112 64zM304 64h96C408.8 64 416 56.84 416 48S408.8 32 400 32h-96C295.2 32 288 39.16 288 48S295.2 64 304 64zM511.6 404c-3.375-129.8-61-182.1-63.5-276c-.5-17.62-14.46-32-32.08-32H95.96c-17.62 0-31.58 14.38-32.08 32c-2.5 93.88-60.13 146.3-63.5 276L0 432C0 458.5 21.5 480 48 480h128C202.5 480 224 458.5 224 432V288h64v144c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48L511.6 404zM192 432C192 440.8 184.8 448 176 448h-128c-8.822 0-16-7.178-16-15.57l.3672-27.6c1.686-64.81 17.99-108.7 33.76-151C80.11 216.2 94.57 177.3 95.88 128H192V432zM288 256H224V128h64V256zM464 448h-128c-8.822 0-16-7.178-16-16V128h96.13l.0098 .6924c1.291 48.45 15.76 87.49 29.74 125.1c15.77 42.39 32.07 86.23 33.75 150.6L480 432C480 440.8 472.8 448 464 448z"/>
</>],
['regular',<>
	<path d="M416 80h-96v-32C320 39.2 327.2 32 336 32h64C408.8 32 416 39.2 416 48V80zM192 48C192 39.2 184.8 32 176 32h-64C103.2 32 96 39.2 96 48v32h96V48zM512 432c.2253 26.44-21.15 48-47.59 48H336c-26.51 0-48-21.49-48-48V288H224v144C224 458.5 202.5 480 176 480H47.59C21.15 480-.2254 458.4 0 432l.375-44c3.374-129.7 60.96-150.1 63.5-243.9c.4767-17.61 14.38-32.1 32-32.1L191.1 112C209.7 112 224 126.3 224 144V160h64V144c0-17.67 14.33-32 32-32l96.12 .0001c17.62 0 31.53 14.49 32 32.1C450.7 237.9 508.3 258.3 511.6 388L512 432zM176 160H111.1C107.4 205 92.75 236.6 79.75 264.8c-15.38 33-29.88 64.25-31.5 124.5L48 432.4L176 432V160zM464 432l-.375-43.63c-1.5-59.38-16-90.63-31.38-123.6C419.3 236.6 404.6 205 400.9 160H336v272H464z"/>
</>],
['solid',<>
	<path d="M416 48C416 39.13 408.9 32 400 32h-64C327.1 32 320 39.13 320 48V96h96.04L416 48zM63.88 160.1C61.34 253.9 3.5 274.3 0 404V448c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32V128H95.88C78.26 128 64.35 142.5 63.88 160.1zM448.1 160.1C447.6 142.5 433.7 128 416.1 128H320v320c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32v-44C508.5 274.3 450.7 253.9 448.1 160.1zM224 288h64V128H224V288zM176 32h-64C103.1 32 96 39.13 96 48L95.96 96H192V48C192 39.13 184.9 32 176 32z"/>
</>],
['thin',<>
	<path d="M432.1 128.1C431.6 110.5 417.7 96 400.1 96L400 64c0-17.67-14.33-32-32-32H320c-17.67 0-32 14.33-32 32v32H224V64c0-17.67-14.33-32-32-32H144c-17.67 0-32 14.33-32 32v32C94.38 96 80.35 110.5 79.88 128.1C77.34 221.9 19.5 242.3 16 372V448c0 17.6 14.4 32 32 32H192c17.6 0 32-14.4 32-32V288h64v160c0 17.6 14.4 32 32 32h144c17.6 0 32-14.4 32-32v-76C492.5 242.3 434.7 221.9 432.1 128.1zM208 448c0 8.822-7.176 16-16 16H48C39.18 464 32 456.8 32 448l-.0039-75.57C33.8 305.6 50.41 269.9 66.49 235.4C80.95 204.3 94.61 174.9 95.87 128.5C96.12 119.3 103.2 112 112 112h96V448zM208 96H128V64c0-8.838 7.164-16 16-16H192c8.836 0 16 7.162 16 16V96zM288 272H224v-160h64V272zM304 64c0-8.838 7.164-16 16-16h48C376.8 48 384 55.16 384 64v32h-80V64zM480 448c0 8.822-7.176 16-16 16H320c-8.824 0-16-7.178-16-16V112h96.13c8.723 0 15.76 7.421 16.01 16.69c1.254 46.41 14.91 75.61 29.38 106.7C461.6 269.9 478.2 305.6 480 372V448z"/>
</>],

]);

const Binoculars: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Binoculars.displayName = "Binoculars";

export default Binoculars;