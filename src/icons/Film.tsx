
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM111.1 408c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 408zM111.1 280c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM111.1 152c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 152zM351.1 400c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.836 7.164-16 16-16h160c8.836 0 16 7.164 16 16V400zM351.1 208c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.836 7.164-16 16-16h160c8.836 0 16 7.164 16 16V208zM463.1 408c0 4.418-3.582 8-8 8h-47.1c-4.418 0-7.1-3.582-7.1-8l0-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V408zM463.1 280c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM463.1 152c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8l0-48c0-4.418 3.582-8 7.1-8h47.1c4.418 0 8 3.582 8 8V152z"/><path className="fa-secondary" d="M335.1 288H175.1c-8.836 0-16 7.164-16 16v96c0 8.836 7.164 16 16 16h160c8.836 0 16-7.164 16-16v-96C351.1 295.2 344.8 288 335.1 288zM335.1 96H175.1c-8.836 0-16 7.164-16 16v96c0 8.836 7.164 16 16 16h160c8.836 0 16-7.164 16-16v-96C351.1 103.2 344.8 96 335.1 96z"/>
</>],
['light',<>
	<path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96C512 60.65 483.3 32 448 32zM384 64v176H128V64H384zM32 96c0-17.64 14.36-32 32-32h32v80H32V96zM32 176h64v64H32V176zM32 272h64v64H32V272zM64 448c-17.64 0-32-14.36-32-32v-48h64V448H64zM128 448V272h256V448H128zM480 416c0 17.64-14.36 32-32 32h-32v-80h64V416zM480 336h-64v-64h64V336zM480 240h-64v-64h64V240zM480 144h-64V64h32c17.64 0 32 14.36 32 32V144z"/>
</>],
['regular',<>
	<path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96C512 60.65 483.3 32 448 32zM112 432H64c-8.822 0-16-7.178-16-16v-72h64V432zM112 296h-64v-80h64V296zM112 168h-64V96c0-8.822 7.178-16 16-16h48V168zM352 432H160V280h192V432zM352 232H160V80h192V232zM464 416c0 8.822-7.178 16-16 16h-48v-88h64V416zM464 296h-64v-80h64V296zM464 168h-64V80H448c8.822 0 16 7.178 16 16V168z"/>
</>],
['solid',<>
	<path d="M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM111.1 408c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 408zM111.1 280c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM111.1 152c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 152zM351.1 400c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V400zM351.1 208c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V208zM463.1 408c0 4.418-3.582 8-8 8h-47.1c-4.418 0-7.1-3.582-7.1-8l0-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V408zM463.1 280c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM463.1 152c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8l0-48c0-4.418 3.582-8 7.1-8h47.1c4.418 0 8 3.582 8 8V152z"/>
</>],
['thin',<>
	<path d="M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM112 464h-64c-17.64 0-32-14.36-32-32v-24h95.1L112 464zM112 392h-96v-80h96V392zM112 296h-96v-80h96V296zM112 200h-96v-80h96V200zM111.1 104H16V80c0-17.64 14.36-32 32-32h64L111.1 104zM384 464H128V264h256V464zM384 248H128V48h256V248zM496 432c0 17.64-14.36 32-32 32h-64l-.0001-56H496V432zM496 392h-96v-80h96V392zM496 296h-96v-80h96V296zM496 200h-96v-80h96V200zM496 104h-96L400 48h64c17.64 0 32 14.36 32 32V104z"/>
</>],

]);

const Film: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Film.displayName = "Film";

export default Film;
