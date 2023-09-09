
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 320h-96c-17.69 0-32 14.31-32 32v96c0 17.69 14.31 32 32 32s32-14.31 32-32v-64h64c17.69 0 32-14.31 32-32S433.7 320 416 320zM128 32C110.3 32 96 46.31 96 64v64H32C14.31 128 0 142.3 0 160s14.31 32 32 32h96c17.69 0 32-14.31 32-32V64C160 46.31 145.7 32 128 32z"/><path className="fa-secondary" d="M128 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32v-96C160 334.3 145.7 320 128 320zM416 128h-64V64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S433.7 128 416 128z"/>
</>],
['light',<>
	<path d="M144 320h-128C7.156 320 0 327.2 0 336S7.156 352 16 352H128v112C128 472.8 135.2 480 144 480S160 472.8 160 464v-128C160 327.2 152.8 320 144 320zM304 192h128C440.8 192 448 184.8 448 176S440.8 160 432 160H320V48C320 39.16 312.8 32 304 32S288 39.16 288 48v128C288 184.8 295.2 192 304 192zM432 320h-128c-8.844 0-16 7.156-16 16v128c0 8.844 7.156 16 16 16s16-7.156 16-16V352h112c8.844 0 16-7.156 16-16S440.8 320 432 320zM144 32C135.2 32 128 39.16 128 48V160H16C7.156 160 0 167.2 0 176S7.156 192 16 192h128C152.8 192 160 184.8 160 176v-128C160 39.16 152.8 32 144 32z"/>
</>],
['regular',<>
	<path d="M136 320h-112C10.75 320 0 330.7 0 344c0 13.25 10.75 24 24 24H112v88C112 469.3 122.7 480 136 480S160 469.3 160 456v-112C160 330.7 149.3 320 136 320zM312 192h112C437.3 192 448 181.3 448 168c0-13.26-10.75-24-24-24H336V56C336 42.74 325.3 32 312 32S288 42.74 288 56v112C288 181.3 298.7 192 312 192zM136 32C122.7 32 112 42.74 112 56V144H24C10.75 144 0 154.7 0 168C0 181.3 10.75 192 24 192h112C149.3 192 160 181.3 160 168v-112C160 42.74 149.3 32 136 32zM424 320h-112C298.7 320 288 330.7 288 344v112c0 13.25 10.75 24 24 24s24-10.75 24-24V368h88c13.25 0 24-10.75 24-24C448 330.7 437.3 320 424 320z"/>
</>],
['solid',<>
	<path d="M128 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32v-96C160 334.3 145.7 320 128 320zM416 320h-96c-17.69 0-32 14.31-32 32v96c0 17.69 14.31 32 32 32s32-14.31 32-32v-64h64c17.69 0 32-14.31 32-32S433.7 320 416 320zM320 192h96c17.69 0 32-14.31 32-32s-14.31-32-32-32h-64V64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96C288 177.7 302.3 192 320 192zM128 32C110.3 32 96 46.31 96 64v64H32C14.31 128 0 142.3 0 160s14.31 32 32 32h96c17.69 0 32-14.31 32-32V64C160 46.31 145.7 32 128 32z"/>
</>],
['thin',<>
	<path d="M151.1 31.1c-4.406 0-8 3.578-8 8v136h-136c-4.406 0-8 3.578-8 8s3.594 8 8 8h144c4.406 0 8-3.578 8-8v-144C159.1 35.58 156.4 31.1 151.1 31.1zM295.1 191.1h144c4.406 0 8-3.578 8-8s-3.594-8-8-8h-136v-136c0-4.422-3.594-8-8-8s-8 3.578-8 8v144C287.1 188.4 291.6 191.1 295.1 191.1zM439.1 319.1h-144c-4.406 0-8 3.578-8 8v144c0 4.422 3.594 8 8 8s8-3.578 8-8v-136h136c4.406 0 8-3.578 8-8S444.4 319.1 439.1 319.1zM151.1 319.1h-144c-4.406 0-8 3.578-8 8s3.594 8 8 8h136v136c0 4.422 3.594 8 8 8s8-3.578 8-8v-144C159.1 323.6 156.4 319.1 151.1 319.1z"/>
</>],

]);

const Compress: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Compress.displayName = "Compress";

export default Compress;
