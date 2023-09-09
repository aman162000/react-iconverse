
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 0H64c-35.38 0-64 28.62-64 64v384c0 35.38 28.62 64 64 64h256c35.38 0 64-28.62 64-64v-384C384 28.62 355.4 0 320 0zM192 32c8.875 0 16 7.125 16 16S200.9 64 192 64S176 56.88 176 48S183.1 32 192 32zM192 480c-8.875 0-16-7.125-16-16S183.1 448 192 448s16 7.125 16 16S200.9 480 192 480zM288 240v127.1c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V143.1c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V240z"/><path className="fa-secondary" d="M240 95.1h-96c-26.4 0-48 21.6-48 48V256h192V143.1C288 117.6 266.4 95.1 240 95.1z"/>
</>],
['light',<>
	<path d="M64 511.1h256c35.38 0 64-28.62 64-64v-384c0-35.38-28.62-64-64-64H64c-35.38 0-64 28.62-64 64v384C0 483.4 28.63 511.1 64 511.1zM32 64c0-17.62 14.38-32 32-32h112v16C176 56.84 183.2 64 192 64s16-7.156 16-16V32H320c17.62 0 32 14.38 32 32v384c0 17.62-14.38 32-32 32h-112v-16c0-8.844-7.156-16-16-16s-16 7.156-16 16V480H64c-17.62 0-32-14.38-32-32V64zM144 415.1h96c26.4 0 48-21.6 48-48V143.1c0-26.4-21.6-48-48-48h-96c-26.4 0-48 21.6-48 48v223.1C96 394.4 117.6 415.1 144 415.1zM128 144C128 135.2 135.2 128 144 128h96C248.8 128 256 135.2 256 144v96H128V144zM128 272h128v96c0 8.836-7.164 16-16 16h-96C135.2 384 128 376.8 128 368V272zM208 160h-32C167.2 160 160 167.2 160 176S167.2 192 176 192h32C216.8 192 224 184.8 224 176S216.8 160 208 160z"/>
</>],
['regular',<>
	<path d="M320 0H64c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64v-384C384 28.65 355.3 0 320 0zM336 448c0 8.837-7.163 16-16 16h-105.6C211.1 454.4 202.1 448 192 448s-19.12 6.375-22.38 16H64c-8.837 0-16-7.163-16-16V64c0-8.837 7.163-16 16-16h105.6C172.9 57.62 181.9 64 192 64s19.12-6.375 22.38-16H320c8.837 0 16 7.163 16 16V448zM240 95.1h-96c-26.4 0-48 21.6-48 48v223.1c0 26.4 21.6 48 48 48h96c26.4 0 48-21.6 48-48V143.1C288 117.6 266.4 95.1 240 95.1zM240 368h-96v-96h96V368z"/>
</>],
['solid',<>
	<path d="M320 0H64c-35.38 0-64 28.62-64 64v384c0 35.38 28.62 64 64 64h256c35.38 0 64-28.62 64-64v-384C384 28.62 355.4 0 320 0zM192 32c8.875 0 16 7.125 16 16S200.9 64 192 64S176 56.88 176 48S183.1 32 192 32zM192 480c-8.875 0-16-7.125-16-16S183.1 448 192 448s16 7.125 16 16S200.9 480 192 480zM288 240v127.1c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V143.1c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V240zM224 128H160C142.4 128 128 142.4 128 160v96h128V160C256 142.4 241.6 128 224 128z"/>
</>],
['thin',<>
	<path d="M192 71.1c8.875 0 16-7.125 16-16s-7.125-16-16-16s-16 7.125-16 16S183.1 71.1 192 71.1zM192 439.1c-8.875 0-16 7.125-16 16s7.125 16 16 16s16-7.125 16-16S200.9 439.1 192 439.1zM144 415.1h96c26.5 0 48-21.5 48-48V143.1c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v223.1C96 394.5 117.5 415.1 144 415.1zM112 143.1c0-17.64 14.36-32 32-32h96c17.64 0 32 14.36 32 32v104h-160V143.1zM112 263.1h160v104c0 17.64-14.36 32-32 32h-96c-17.64 0-32-14.36-32-32V263.1zM64 511.1h256c35.38 0 64-28.62 64-64v-384c0-35.38-28.62-64-64-64H64c-35.38 0-64 28.62-64 64v384C0 483.4 28.63 511.1 64 511.1zM16 63.1c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48v384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V63.1zM232 143.1h-80c-8.828 0-16 7.188-16 16v48c0 8.812 7.172 16 16 16h80c8.828 0 16-7.188 16-16v-48C248 151.2 240.8 143.1 232 143.1zM232 207.1h-80v-48h80V207.1z"/>
</>],

]);

const LightSwitchOn: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LightSwitchOn.displayName = "LightSwitchOn";

export default LightSwitchOn;