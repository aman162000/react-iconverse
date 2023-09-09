
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 80V192c0 17.6-14.4 32-32 32h-128c-17.67 0-32-14.33-32-32L96 80c0-8.837 7.163-16 16-16h159.1C280.8 64 288 71.16 288 80z"/><path className="fa-secondary" d="M336 0h-288c-26.4 0-48 21.6-48 48L.0001 416c0 52.8 43.2 96 96 96h192c53.02 0 95.1-42.98 96-96l.0001-368C384 21.6 362.4 0 336 0zM160 336c0 8.8-7.2 16-16 16h-16v16c0 8.8-7.2 16-15.1 16c-8.8 0-16-7.2-16-15.1L96 352H80c-8.8 0-15.1-7.2-15.1-16S71.2 320 80 320h15.1l0-16C96 295.2 103.2 288 112 288c8.8 0 15.1 7.2 15.1 16V320h16C152.8 320 160 327.2 160 336zM232 384c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S245.3 384 232 384zM128 224c-17.67 0-32-14.33-32-32L96 80c0-8.837 7.163-16 16-16h159.1c8.837 0 16 7.163 16 16V192c0 17.6-14.4 32-32 32H128zM296 336c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S309.3 336 296 336z"/>
</>],
['light',<>
	<path d="M232 384c13.25 0 24-10.75 24-24s-10.75-24-24-24s-24 10.75-24 24S218.8 384 232 384zM296 336c13.25 0 24-10.75 24-24s-10.75-24-24-24s-24 10.75-24 24S282.8 336 296 336zM320 0H64C28.8 0 0 28.8 0 64l.0001 352c0 52.8 43.2 96 96 96h192c53.02 0 96-42.98 96-96L384 63.1C384 28.8 355.2 0 320 0zM352 416c0 35.35-28.65 64-64 64H96c-35.35 0-64-28.65-64-64V224h320V416zM352 192H32V64c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32V192zM80 352h15.1l0 16C96 376.8 103.2 384 112 384s15.1-7.201 15.1-16V352h16c8.801 0 16-7.201 16-16c0-8.801-7.199-16-16-16h-16V304c0-8.801-7.199-16-15.1-16S96 295.2 96 303.1L96 320H80c-8.801 0-15.1 7.199-15.1 16C64 344.8 71.2 352 80 352z"/>
</>],
['regular',<>
	<path d="M320 0H64C28.8 0 0 28.8 0 64l.0001 352c0 52.8 43.2 96 96 96h192c53.02 0 96-42.98 96-96L384 63.1C384 28.8 355.2 0 320 0zM336 416c0 26.51-21.49 48-48 48H96c-26.51 0-48-21.49-48-48V64c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16V416zM128 240h127.1C273.6 240 288 225.6 288 208V112C288 103.2 280.8 96 272 96h-160C103.2 96 95.1 103.2 96 112l.0001 96C96 225.7 110.3 240 128 240zM160 320H144L144 304C144 295.2 136.8 288 128 288S112 295.2 112 304V320H96C87.2 320 80 327.2 80 336c0 8.799 7.199 16 16 16H112v16C112 376.8 119.2 384 128 384s16-7.201 16-16L144 352H160c8.801 0 16-7.201 16-16C176 327.2 168.8 320 160 320zM232 336c-13.25 0-24 10.75-24 24s10.75 24 24 24s24-10.75 24-24S245.3 336 232 336zM280 288C266.8 288 256 298.8 256 312s10.75 24 24 24s24-10.75 24-24S293.3 288 280 288z"/>
</>],
['solid',<>
	<path d="M336 0h-288c-26.4 0-48 21.6-48 48L.0001 416c0 52.8 43.2 96 96 96h192c53.02 0 95.1-42.98 96-96l.0001-368C384 21.6 362.4 0 336 0zM160 336c0 8.8-7.2 16-16 16h-16v16c0 8.8-7.2 16-15.1 16c-8.8 0-16-7.2-16-15.1L96 352H80c-8.8 0-15.1-7.2-15.1-16S71.2 320 80 320h15.1l0-16C96 295.2 103.2 288 112 288c8.8 0 15.1 7.2 15.1 16V320h16C152.8 320 160 327.2 160 336zM232 384c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S245.3 384 232 384zM128 224c-17.67 0-32-14.33-32-32L96 80c0-8.837 7.163-16 16-16h159.1c8.837 0 16 7.163 16 16V192c0 17.6-14.4 32-32 32H128zM296 336c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S309.3 336 296 336z"/>
</>],
['thin',<>
	<path d="M304 272c-17.64 0-32 14.36-32 32s14.36 32 32 32s32-14.36 32-32S321.6 272 304 272zM304 320c-8.834 0-16-7.168-16-16s7.166-16 16-16s16 7.168 16 16S312.8 320 304 320zM336 0h-288c-26.4 0-48 21.6-48 48L.0001 416c0 52.8 43.2 96 96 96h192c53.02 0 96-42.98 96-96l.0001-368C384 21.6 362.4 0 336 0zM368 416c0 44.18-35.82 80-80 80h-192c-44.18 0-80-35.82-80-80V48c0-17.67 14.33-32 32-32h288c17.67 0 32 14.33 32 32V416zM240 336c-17.64 0-32 14.36-32 32s14.36 32 32 32s32-14.36 32-32S257.6 336 240 336zM240 384c-8.834 0-16-7.168-16-16s7.166-16 16-16s16 7.168 16 16S248.8 384 240 384zM128 240h127.1c26.4 0 48-21.6 48-48V80c0-8.837-7.163-16-16-16h-192c-8.837 0-16 7.163-16 16V192C80 218.5 101.5 240 128 240zM96 80l192 0V192c0 17.67-14.33 32-32 32h-128c-17.67 0-32-14.33-32-32L96 80zM152 328h-32v-32c0-4.406-3.594-8-8-8S104 291.6 104 296v32h-32c-4.406 0-8 3.594-8 8s3.594 8 8 8h32v32c0 4.406 3.594 8 7.1 8s8-3.594 8-8v-32h32c4.406 0 7.1-3.594 7.1-8S156.4 328 152 328z"/>
</>],

]);

const GameConsoleHandheld: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GameConsoleHandheld.displayName = "GameConsoleHandheld";

export default GameConsoleHandheld;