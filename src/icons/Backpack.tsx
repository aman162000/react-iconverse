
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 80H128c-70.75 0-128 57.25-128 128V448c0 35.38 28.62 64 64 64h32v-192c0-17.62 14.38-32 32-32h192c17.62 0 32 14.38 32 32v192h32c35.38 0 64-28.62 64-64V208C448 137.3 390.8 80 320 80zM320 200c0 4.375-3.625 8-8 8h-176C131.6 208 128 204.4 128 200v-16C128 179.6 131.6 176 136 176h176C316.4 176 320 179.6 320 184V200z"/><path className="fa-secondary" d="M96 384v128h256v-128H96zM176 56c0-4.375 3.625-8 8-8h80c4.375 0 8 3.625 8 8V80H320V56C320 25.12 294.9 0 264 0h-80C153.1 0 128 25.12 128 56V80h48V56z"/>
</>],
['light',<>
	<path d="M320 64h-16V48C304 21.5 282.5 0 256 0H192C165.5 0 144 21.5 144 48V64H128C57.25 64 0 121.2 0 192v256c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V192C448 121.2 390.8 64 320 64zM176 48C176 39.12 183.2 32 192 32h64c8.75 0 16 7.125 16 16V64h-96V48zM336 480h-224v-96h224V480zM336 352h-224v-32c0-17.62 14.38-32 32-32h160c17.62 0 32 14.38 32 32V352zM416 448c0 17.62-14.38 32-32 32h-16v-160c0-35.25-28.75-64-64-64h-160c-35.25 0-64 28.75-64 64v160H64c-17.62 0-32-14.38-32-32V192c0-53 43-96 96-96h192c53 0 96 43 96 96V448zM304 160H143.1C135.2 160 128 167.2 128 175.1C128 184.8 135.2 192 143.1 192h160C312.8 192 320 184.8 320 176C320 167.2 312.8 160 304 160z"/>
</>],
['regular',<>
	<path d="M320 80h-8V56C312 25.12 286.9 0 256 0H192C161.1 0 136 25.12 136 56V80H128c-70.75 0-128 57.25-128 128V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V208C448 137.2 390.8 80 320 80zM184 56C184 51.62 187.6 48 192 48h64c4.375 0 8 3.625 8 8V80h-80V56zM320 464H128v-64h192V464zM320 352H128v-32c0-17.62 14.38-32 32-32h128c17.62 0 32 14.38 32 32V352zM400 448c0 8.875-7.125 16-16 16h-16V320c0-44.13-35.88-80-80-80H160c-44.12 0-80 35.88-80 80v144H64c-8.875 0-16-7.125-16-16V208C48 163.9 83.88 128 128 128h192c44.13 0 80 35.88 80 80V448zM304 160H143.1C135.1 160 128 167.1 128 175.1V192c0 8.875 7.125 16 16 16h160C312.9 208 320 200.9 320 192V176C320 167.1 312.9 160 304 160z"/>
</>],
['solid',<>
	<path d="M320 320H128c-17.62 0-32 14.38-32 32v32h256v-32C352 334.4 337.6 320 320 320zM96 512h256v-96H96V512zM320 80h-8V56C312 25.12 286.9 0 256 0H192C161.1 0 136 25.12 136 56V80H128c-70.75 0-128 57.25-128 128V448c0 35.38 28.62 64 64 64v-160c0-35.25 28.75-64 64-64h192c35.25 0 64 28.75 64 64v160c35.38 0 64-28.62 64-64V208C448 137.2 390.8 80 320 80zM184 56C184 51.62 187.6 48 192 48h64c4.375 0 8 3.625 8 8V80h-80V56zM320 200c0 4.375-3.625 8-8 8h-176C131.6 208 128 204.4 128 200v-16C128 179.6 131.6 176 136 176h176C316.4 176 320 179.6 320 184V200z"/>
</>],
['thin',<>
	<path d="M320 80h-16V40C304 17.94 286.1 0 264 0h-80C161.9 0 144 17.94 144 40V80H128c-70.69 0-128 57.31-128 128V448c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V208C448 137.3 390.7 80 320 80zM160 40C160 26.77 170.8 16 184 16h80C277.2 16 288 26.77 288 40V80H160V40zM352 496H96v-104h256V496zM352 376H96V352c0-26.47 21.53-48 48-48h160c26.47 0 48 21.53 48 48V376zM432 448c0 26.47-21.53 48-48 48h-16V352c0-35.35-28.65-64-64-64h-160c-35.35 0-64 28.65-64 64v144H64c-26.47 0-48-21.53-48-48V208C16 146.2 66.24 96 128 96h192c61.76 0 112 50.24 112 112V448zM312 184h-176C131.6 184 128 187.6 128 192s3.578 8 8 8h176C316.4 200 320 196.4 320 192S316.4 184 312 184z"/>
</>],

]);

const Backpack: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Backpack.displayName = "Backpack";

export default Backpack;
