
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M269.2 139.7C284.8 124.1 310.1 124.1 325.8 139.7L340.1 154.1C355.8 169.7 355.8 195 340.1 210.7L318.7 232.1L247.8 161.1L269.2 139.7zM296.1 254.7L190.9 359.9C186.8 364 181.6 366.9 176 368.3L115.9 383.4C110.4 384.7 104.7 383.1 100.7 379.2C96.71 375.2 95.12 369.4 96.48 363.1L111.5 303.8C112.9 298.2 115.8 293.1 119.9 288.1L225.1 183.8L296.1 254.7z"/><path className="fa-secondary" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM325.8 139.7C310.1 124.1 284.8 124.1 269.2 139.7L247.8 161.1L318.7 232.1L340.1 210.7C355.8 195 355.8 169.7 340.1 154.1L325.8 139.7zM111.5 303.8L96.48 363.1C95.11 369.4 96.71 375.2 100.7 379.2C104.7 383.1 110.4 384.7 115.9 383.4L176 368.3C181.6 366.9 186.8 364 190.9 359.9L296.1 254.7L225.1 183.8L119.9 288.1C115.8 293.1 112.9 298.2 111.5 303.8z"/>
</>],
['light',<>
	<path d="M254.2 140.7C272.1 121.1 303.3 121.1 322.1 140.7L339.4 158.1C358.2 176.8 358.2 207.2 339.4 225.9L213.1 352.3C206.9 358.5 199.2 362.8 190.8 364.1L115.9 383.7C110.4 385 104.7 383.4 100.7 379.5C96.71 375.5 95.12 369.7 96.48 364.3L115.2 289.4C117.3 280.9 121.7 273.2 127.8 267.1L254.2 140.7zM299.5 163.3C293.2 157.1 283.1 157.1 276.8 163.3L255.4 184.8L295.4 224.8L316.8 203.3C323.1 197.1 323.1 186.9 316.8 180.7L299.5 163.3zM146.2 297.1L133.1 346.2L183 333.9C185.8 333.2 188.4 331.7 190.4 329.7L272.8 247.4L232.8 207.4L150.5 289.7C148.4 291.8 146.9 294.3 146.2 297.1V297.1zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64H64C46.33 64 32 78.33 32 96z"/>
</>],
['regular',<>
	<path d="M340.1 154.1C355.8 169.7 355.8 195 340.1 210.7L318.7 232.1L247.8 161.1L269.2 139.7C284.8 124.1 310.1 124.1 325.8 139.7L340.1 154.1zM119.9 288.1L225.1 183.8L296.1 254.7L190.9 359.9C186.8 364 181.6 366.9 176 368.3L115.9 383.4C110.4 384.7 104.7 383.1 100.7 379.2C96.71 375.2 95.12 369.4 96.48 363.1L111.5 303.8C112.9 298.2 115.8 293.1 119.9 288.1V288.1zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/>
</>],
['solid',<>
	<path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM325.8 139.7C310.1 124.1 284.8 124.1 269.2 139.7L247.8 161.1L318.7 232.1L340.1 210.7C355.8 195 355.8 169.7 340.1 154.1L325.8 139.7zM111.5 303.8L96.48 363.1C95.11 369.4 96.71 375.2 100.7 379.2C104.7 383.1 110.4 384.7 115.9 383.4L176 368.3C181.6 366.9 186.8 364 190.9 359.9L296.1 254.7L225.1 183.8L119.9 288.1C115.8 293.1 112.9 298.2 111.5 303.8z"/>
</>],
['thin',<>
	<path d="M100.7 379.2C96.71 375.2 95.12 369.4 96.48 363.1L111.5 303.8C112.9 298.2 115.8 293.1 119.9 288.1L275.4 133.5C291 117.9 316.3 117.9 331.1 133.5L346.3 147.9C361.1 163.5 361.1 188.8 346.3 204.5L190.9 359.9C186.8 364 181.6 366.9 176 368.3L172.1 352.8C174.9 352.1 177.5 350.7 179.6 348.6L298.4 229.7L250.1 181.4L131.2 300.3C129.2 302.3 127.7 304.9 127 307.7L112 367.9L172.1 352.8L176 368.3L115.9 383.4C110.4 384.7 104.7 383.1 100.7 379.2L100.7 379.2zM335 159.2L320.6 144.8C311.3 135.4 296.1 135.4 286.7 144.8L261.4 170.1L309.7 218.4L335 193.1C344.4 183.8 344.4 168.6 335 159.2V159.2zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM16 96V416C16 442.5 37.49 464 64 464H384C410.5 464 432 442.5 432 416V96C432 69.49 410.5 48 384 48H64C37.49 48 16 69.49 16 96z"/>
</>],

]);

const SquarePen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquarePen.displayName = "SquarePen";

export default SquarePen;
