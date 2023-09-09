
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M592 416h-544C39.25 416 32 423.3 32 432l0 32c0 8.75 7.25 16 16 16h544c8.75 0 16-7.25 16-16v-32C608 423.3 600.8 416 592 416zM592 32h-544C39.25 32 31.1 39.25 31.1 48L32 80C32 88.75 39.25 96 48 96h544C600.8 96 608 88.75 608 80v-32C608 39.25 600.8 32 592 32z"/><path className="fa-secondary" d="M48 96v320h544V96H48zM112 368v-224h32v224H112zM208 368v-224h32v224H208zM304 368v-224h32v224H304zM400 368v-224h32v224H400zM496 368v-224h32v224H496z"/>
</>],
['light',<>
	<path d="M368 416c8.844 0 16-7.156 16-16v-288C384 103.2 376.8 96 368 96S352 103.2 352 112v288C352 408.8 359.2 416 368 416zM464 416c8.844 0 16-7.156 16-16v-288C480 103.2 472.8 96 464 96S448 103.2 448 112v288C448 408.8 455.2 416 464 416zM272 416C280.8 416 288 408.8 288 400v-288C288 103.2 280.8 96 272 96S256 103.2 256 112v288C256 408.8 263.2 416 272 416zM624 448H608V64h16C632.8 64 640 56.84 640 48S632.8 32 624 32h-608C7.156 32 0 39.16 0 48S7.156 64 16 64H32v384H16C7.156 448 0 455.2 0 464S7.156 480 16 480h608c8.844 0 16-7.156 16-16S632.8 448 624 448zM576 448H64V64h512V448zM176 416C184.8 416 192 408.8 192 400v-288C192 103.2 184.8 96 176 96S160 103.2 160 112v288C160 408.8 167.2 416 176 416z"/>
</>],
['regular',<>
	<path d="M616 432H608v-352h8C629.3 80 640 69.25 640 56S629.3 32 616 32H24C10.75 32 0 42.75 0 56S10.75 80 24 80H32v352H24C10.75 432 0 442.8 0 456S10.75 480 24 480h592c13.25 0 24-10.75 24-24S629.3 432 616 432zM560 432h-480v-352h480V432zM192 400c13.25 0 24-10.75 24-24v-240C216 122.8 205.3 112 192 112S168 122.8 168 136v240C168 389.3 178.8 400 192 400zM320 400c13.25 0 24-10.75 24-24v-240c0-13.25-10.75-24-24-24S296 122.8 296 136v240C296 389.3 306.8 400 320 400zM448 400c13.25 0 24-10.75 24-24v-240c0-13.25-10.75-24-24-24s-24 10.75-24 24v240C424 389.3 434.8 400 448 400z"/>
</>],
['solid',<>
	<path d="M608 80v-32C608 39.25 600.8 32 592 32h-544C39.25 32 31.1 39.25 31.1 48L32 80C32 88.75 39.25 96 48 96v320C39.25 416 32 423.3 32 432l0 32c0 8.75 7.25 16 16 16h544c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16V96C600.8 96 608 88.75 608 80zM144 416h-32V96h32V416zM240 416h-32V96h32V416zM336 416h-32V96h32V416zM432 416h-32V96h32V416zM528 416h-32V96h32V416z"/>
</>],
['thin',<>
	<path d="M415.1 416c4.422 0 8-3.578 8-8v-304c0-4.422-3.578-8-8-8s-8 3.578-8 8v304C407.1 412.4 411.6 416 415.1 416zM511.1 416c4.422 0 8-3.578 8-8v-304c0-4.422-3.578-8-8-8s-8 3.578-8 8v304C503.1 412.4 507.6 416 511.1 416zM319.1 416c4.422 0 8-3.578 8-8v-304c0-4.422-3.578-8-8-8s-8 3.578-8 8v304C311.1 412.4 315.6 416 319.1 416zM127.1 416c4.422 0 8-3.578 8-8v-304c0-4.422-3.578-8-8-8s-8 3.578-8 8v304C119.1 412.4 123.6 416 127.1 416zM223.1 416c4.422 0 8-3.578 8-8v-304c0-4.422-3.578-8-8-8s-8 3.578-8 8v304C215.1 412.4 219.6 416 223.1 416zM631.1 464h-8v-416h8c4.422 0 8-3.578 8-8s-3.578-8-8-8h-624c-4.422 0-8 3.578-8 8s3.578 8 8 8h8v416h-8c-4.422 0-8 3.578-8 8s3.578 8 8 8h624c4.422 0 8-3.578 8-8S636.4 464 631.1 464zM608 464h-576v-416h576V464z"/>
</>],

]);

const ContainerStorage: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ContainerStorage.displayName = "ContainerStorage";

export default ContainerStorage;
