
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 0C273.7 0 288 14.33 288 32V128C288 145.7 273.7 160 256 160C238.3 160 224 145.7 224 128V32C224 14.33 238.3 0 256 0zM288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM384 288C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H384zM256 352C273.7 352 288 366.3 288 384V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V384C224 366.3 238.3 352 256 352zM32 288C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H128C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288H32z"/><path className="fa-secondary" d="M42.35 224C56.27 130.3 130.3 56.27 224 42.36V107.4C165.7 119.9 119.9 165.7 107.4 224H42.35zM107.4 288C119.9 346.3 165.7 392.1 224 404.6V469.6C130.3 455.7 56.27 381.7 42.35 288H107.4zM288 469.6V404.6C346.3 392.1 392.1 346.3 404.6 288H469.6C455.7 381.7 381.7 455.7 288 469.6V469.6zM404.6 224C392.1 165.7 346.3 119.9 288 107.4V42.36C381.7 56.27 455.7 130.3 469.6 224H404.6z"/>
</>],
['light',<>
	<path d="M232 256C232 242.7 242.7 232 256 232C269.3 232 280 242.7 280 256C280 269.3 269.3 280 256 280C242.7 280 232 269.3 232 256zM256 0C264.8 0 272 7.164 272 16V48.61C374.1 56.37 455.6 137.9 463.4 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H463.4C455.6 374.1 374.1 455.6 272 463.4V496C272 504.8 264.8 512 256 512C247.2 512 240 504.8 240 496V463.4C137.9 455.6 56.37 374.1 48.61 272H16C7.164 272 0 264.8 0 256C0 247.2 7.164 240 16 240H48.61C56.37 137.9 137.9 56.37 240 48.61V16C240 7.164 247.2 0 256 0V0zM240 431.3V384C240 375.2 247.2 368 256 368C264.8 368 272 375.2 272 384V431.3C356.4 423.7 423.7 356.4 431.3 272H384C375.2 272 368 264.8 368 256C368 247.2 375.2 240 384 240H431.3C423.7 155.6 356.4 88.33 272 80.72V128C272 136.8 264.8 144 256 144C247.2 144 240 136.8 240 128V80.72C155.6 88.33 88.33 155.6 80.72 240H128C136.8 240 144 247.2 144 256C144 264.8 136.8 272 128 272H80.72C88.33 356.4 155.6 423.7 240 431.3z"/>
</>],
['regular',<>
	<path d="M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM256 0C269.3 0 280 10.75 280 24V41.32C380.1 52.39 459.6 131.9 470.7 232H488C501.3 232 512 242.7 512 256C512 269.3 501.3 280 488 280H470.7C459.6 380.1 380.1 459.6 280 470.7V488C280 501.3 269.3 512 256 512C242.7 512 232 501.3 232 488V470.7C131.9 459.6 52.39 380.1 41.32 280H24C10.75 280 0 269.3 0 256C0 242.7 10.75 232 24 232H41.32C52.39 131.9 131.9 52.39 232 41.32V24C232 10.75 242.7 0 256 0V0zM232 422.3V392C232 378.7 242.7 368 256 368C269.3 368 280 378.7 280 392V422.3C353.6 411.8 411.8 353.6 422.3 280H392C378.7 280 368 269.3 368 256C368 242.7 378.7 232 392 232H422.3C411.8 158.4 353.6 100.2 280 89.7V120C280 133.3 269.3 144 256 144C242.7 144 232 133.3 232 120V89.7C158.4 100.2 100.2 158.4 89.7 232H120C133.3 232 144 242.7 144 256C144 269.3 133.3 280 120 280H89.7C100.2 353.6 158.4 411.8 232 422.3z"/>
</>],
['solid',<>
	<path d="M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM256 0C273.7 0 288 14.33 288 32V42.35C381.7 56.27 455.7 130.3 469.6 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H469.6C455.7 381.7 381.7 455.7 288 469.6V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V469.6C130.3 455.7 56.27 381.7 42.35 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H42.35C56.27 130.3 130.3 56.27 224 42.35V32C224 14.33 238.3 0 256 0V0zM224 404.6V384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384V404.6C346.3 392.1 392.1 346.3 404.6 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H404.6C392.1 165.7 346.3 119.9 288 107.4V128C288 145.7 273.7 160 256 160C238.3 160 224 145.7 224 128V107.4C165.7 119.9 119.9 165.7 107.4 224H128C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288H107.4C119.9 346.3 165.7 392.1 224 404.6z"/>
</>],
['thin',<>
	<path d="M296 256C296 278.1 278.1 296 256 296C233.9 296 216 278.1 216 256C216 233.9 233.9 216 256 216C278.1 216 296 233.9 296 256zM256 232C242.7 232 232 242.7 232 256C232 269.3 242.7 280 256 280C269.3 280 280 269.3 280 256C280 242.7 269.3 232 256 232zM264 48.15C372.5 52.25 459.7 139.5 463.8 248H504C508.4 248 512 251.6 512 256C512 260.4 508.4 264 504 264H463.8C459.7 372.5 372.5 459.7 264 463.8V504C264 508.4 260.4 512 256 512C251.6 512 248 508.4 248 504V463.8C139.5 459.7 52.25 372.5 48.15 264H8C3.582 264 0 260.4 0 256C0 251.6 3.582 248 8 248H48.15C52.25 139.5 139.5 52.25 248 48.15V8C248 3.582 251.6 0 256 0C260.4 0 264 3.582 264 8V48.15zM120 264H64.16C68.25 363.7 148.3 443.8 248 447.8V392C248 387.6 251.6 384 256 384C260.4 384 264 387.6 264 392V447.8C363.7 443.8 443.8 363.7 447.8 264H392C387.6 264 384 260.4 384 256C384 251.6 387.6 248 392 248H447.8C443.8 148.3 363.7 68.25 264 64.16V120C264 124.4 260.4 128 256 128C251.6 128 248 124.4 248 120V64.16C148.3 68.25 68.25 148.3 64.16 248H120C124.4 248 128 251.6 128 256C128 260.4 124.4 264 120 264z"/>
</>],

]);

const Crosshairs: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Crosshairs.displayName = "Crosshairs";

export default Crosshairs;
