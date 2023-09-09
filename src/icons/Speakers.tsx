
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M464 160C490.5 160 512 138.5 512 112S490.5 64 464 64S416 85.5 416 112S437.5 160 464 160zM464 224C402.2 224 352 274.2 352 336s50.19 112 112 112s112-50.17 112-112S525.8 224 464 224zM464 400c-35.31 0-64-28.67-64-64s28.69-64 64-64s64 28.67 64 64S499.3 400 464 400zM176 160C202.5 160 224 138.5 224 112S202.5 64 176 64S128 85.5 128 112S149.5 160 176 160zM63.92 336c0 61.83 50.2 112 112 112C207.3 448 235.7 435 256 414.2V257.8C235.7 236.1 207.3 224 175.9 224C114.1 224 63.92 274.2 63.92 336zM240 336c0 35.33-28.69 64-64 64s-64-28.67-64-64s28.69-64 64-64S240 300.7 240 336z"/><path className="fa-secondary" d="M175.9 224C201.1 224 237.8 239.1 256 257.8V48C256.1 33.22 263.4 11.72 272.4 0H48C21.5 0 0 21.5 0 48v416C0 490.5 21.5 512 48 512h224.4C263.4 500.3 256.1 478.8 256 464v-49.79C237.8 432.9 201.1 448 175.9 448c-61.84 0-112-50.17-112-112S114.1 224 175.9 224zM176 64C202.5 64 224 85.5 224 112S202.5 160 176 160S128 138.5 128 112S149.5 64 176 64zM592 0h-256C309.5 0 288 21.5 288 48v416c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48v-416C640 21.5 618.5 0 592 0zM464 64C490.5 64 512 85.5 512 112S490.5 160 464 160S416 138.5 416 112S437.5 64 464 64zM464 448c-61.81 0-112-50.17-112-112S402.2 224 464 224S576 274.2 576 336S525.8 448 464 448z"/>
</>],
['light',<>
	<path d="M464 192c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S428.6 192 464 192zM464 96c17.62 0 32 14.38 32 32s-14.38 32-32 32s-32-14.38-32-32S446.4 96 464 96zM464 312c-13.22 0-24 10.78-24 24s10.78 24 24 24s24-10.78 24-24S477.2 312 464 312zM576 0h-224C316.7 0 288 28.65 288 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C640 28.65 611.3 0 576 0zM608 448c0 17.67-14.33 32-32 32h-224c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h224c17.67 0 32 14.33 32 32V448zM464 224C402.1 224 352 274.1 352 336s50.13 112 112 112s112-50.13 112-112S525.9 224 464 224zM464 416c-44.13 0-80-35.88-80-80S419.9 256 464 256S544 291.9 544 336S508.1 416 464 416zM152 336c0 13.22 10.78 24 24 24s24-10.78 24-24S189.2 312 176 312S152 322.8 152 336zM240 128c0-35.38-28.62-64-64-64s-64 28.62-64 64s28.62 64 64 64S240 163.4 240 128zM144 128c0-17.62 14.38-32 32-32s32 14.38 32 32s-14.38 32-32 32S144 145.6 144 128zM256 16C256 7.162 248.8 0 240 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h176C248.8 512 256 504.8 256 496C256 487.2 248.8 480 240 480H64c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h176C248.8 32 256 24.84 256 16zM242.4 264.9c4.906-7.344 2.906-17.28-4.438-22.17C219.6 230.5 198.1 224 175.9 224c-61.75 0-112 50.25-112 112S114.2 448 175.9 448c22.16 0 43.63-6.453 62-18.69c7.344-4.891 9.344-14.83 4.438-22.17c-4.906-7.406-14.84-9.359-22.19-4.453C207.1 411.4 191.8 416 176 416C131.9 416 96 380.1 96 336S131.9 256 176 256c15.81 0 31.09 4.609 44.19 13.31C227.6 274.2 237.5 272.3 242.4 264.9z"/>
</>],
['regular',<>
	<path d="M456 160c22.09 0 40-17.91 40-40S478.1 80 456 80S416 97.91 416 120S433.9 160 456 160zM576 0h-240c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64H576c35.35 0 64-28.65 64-64V64C640 28.65 611.3 0 576 0zM592 448c0 8.822-7.178 16-16 16h-240c-8.822 0-16-7.178-16-16V64c0-8.822 7.178-16 16-16H576c8.822 0 16 7.178 16 16V448zM456 224C398.6 224 352 270.6 352 328s46.56 104 104 104s104-46.56 104-104S513.4 224 456 224zM456 384c-30.88 0-56-25.12-56-56c0-30.88 25.12-56 56-56S512 297.1 512 328C512 358.9 486.9 384 456 384zM184 80C161.9 80 144 97.91 144 120S161.9 160 184 160S224 142.1 224 120S206.1 80 184 80zM184 272C199.7 272 213.8 278.5 224 288.9V232.3C211.7 227.1 198.2 224 184 224C126.6 224 80 270.6 80 328s46.56 104 104 104c14.24 0 27.67-3.115 40-8.346v-56.58C213.8 377.5 199.7 384 184 384C153.1 384 128 358.9 128 328C128 297.1 153.1 272 184 272zM264.1 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h200.1c-11.94-13.24-20.25-29.67-23.35-48H64c-8.822 0-16-7.178-16-16V64c0-8.822 7.178-16 16-16h177.6C244.7 29.67 253 13.24 264.1 0z"/>
</>],
['solid',<>
	<path d="M112 336c0 35.33 28.69 64 64 64s64-28.67 64-64s-28.69-64-64-64S112 300.7 112 336zM256 48C256.1 33.22 263.4 11.72 272.4 0H48C21.5 0 0 21.5 0 48v416C0 490.5 21.5 512 48 512h224.4C263.4 500.3 256.1 478.8 256 464v-49.79C237.8 432.9 201.1 448 175.9 448c-61.84 0-112-50.17-112-112s50.16-112 112-112C201.1 224 237.8 239.1 256 257.8V48zM176 160C149.5 160 128 138.5 128 112S149.5 64 176 64S224 85.5 224 112S202.5 160 176 160zM592 0h-256C309.5 0 288 21.5 288 48v416c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48v-416C640 21.5 618.5 0 592 0zM464 64C490.5 64 512 85.5 512 112S490.5 160 464 160S416 138.5 416 112S437.5 64 464 64zM464 448c-61.81 0-112-50.17-112-112S402.2 224 464 224S576 274.2 576 336S525.8 448 464 448zM464 272c-35.31 0-64 28.67-64 64s28.69 64 64 64s64-28.67 64-64S499.3 272 464 272z"/>
</>],
['thin',<>
	<path d="M592 0h-288C277.5 0 256 21.5 256 48v416C256 490.5 277.5 512 304 512h288c26.5 0 48-21.5 48-48v-416C640 21.5 618.5 0 592 0zM624 464c0 17.64-14.36 32-32 32h-288c-17.64 0-32-14.36-32-32v-416c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32V464zM448 160c26.5 0 48-21.5 48-48S474.5 64 448 64s-48 21.5-48 48S421.5 160 448 160zM448 80c17.64 0 32 14.36 32 32s-14.36 32-32 32s-32-14.36-32-32S430.4 80 448 80zM448 224c-61.81 0-112 50.17-112 112S386.2 448 448 448s112-50.17 112-112S509.8 224 448 224zM448 432c-52.94 0-96-43.07-96-96c0-52.94 43.06-96 96-96s96 43.06 96 96C544 388.9 500.9 432 448 432zM448 288c-26.48 0-48 21.5-48 48S421.5 384 448 384s48-21.5 48-48S474.5 288 448 288zM448 368c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S465.6 368 448 368zM176 288C149.5 288 128 309.5 128 336S149.5 384 176 384S224 362.5 224 336S202.5 288 176 288zM176 368c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S193.6 368 176 368zM176 64C149.5 64 128 85.5 128 112S149.5 160 176 160S224 138.5 224 112S202.5 64 176 64zM176 144c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S193.6 144 176 144zM216 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h168C220.4 512 224 508.4 224 504S220.4 496 216 496H48c-17.67 0-32-14.33-32-32v-416c0-17.67 14.33-32 32-32h168C220.4 16 224 12.42 224 8S220.4 0 216 0zM219.4 233.1C199.8 224.7 177.5 221.3 153.6 226.4c-48.44 10.25-85.6 51.66-89.29 101C59.41 393.1 111.3 448 175.9 448c15.47 0 30.11-3.4 43.49-9.133C222.2 437.7 224 434.8 224 431.8v-.5605c0-5.654-5.805-9.24-10.99-6.994c-13.68 5.918-28.9 8.859-45.08 7.43c-48.63-4.297-87.38-45.75-87.92-94.56C79.42 283.7 122.7 240 176 240c13.17 0 25.61 2.861 36.99 7.779C218.2 250 224 246.4 224 240.8v-.5547C224 237.2 222.2 234.3 219.4 233.1z"/>
</>],

]);

const Speakers: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Speakers.displayName = "Speakers";

export default Speakers;
