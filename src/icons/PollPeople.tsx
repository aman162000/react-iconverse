
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32 48C32 21.49 53.49 0 80 0C106.5 0 128 21.49 128 48C128 74.51 106.5 96 80 96C53.49 96 32 74.51 32 48zM96 128C131.3 128 160 156.7 160 192C160 209.7 145.7 224 128 224H32C14.33 224 0 209.7 0 192C0 156.7 28.65 128 64 128H96zM128 336C128 362.5 106.5 384 80 384C53.49 384 32 362.5 32 336C32 309.5 53.49 288 80 288C106.5 288 128 309.5 128 336zM96 416C131.3 416 160 444.7 160 480C160 497.7 145.7 512 128 512H32C14.33 512 0 497.7 0 480C0 444.7 28.65 416 64 416H96zM224 80C224 53.49 245.5 32 272 32H480V192H272C245.5 192 224 170.5 224 144V80zM224 368C224 341.5 245.5 320 272 320H384V480H272C245.5 480 224 458.5 224 432V368z"/><path className="fa-secondary" d="M480 128H576V96H480V32H592C618.5 32 640 53.49 640 80V144C640 170.5 618.5 192 592 192H480V128zM384 416H576V384H384V320H592C618.5 320 640 341.5 640 368V432C640 458.5 618.5 480 592 480H384V416z"/>
</>],
['light',<>
	<path d="M144 48C144 74.51 122.5 96 96 96C69.49 96 48 74.51 48 48C48 21.49 69.49 0 96 0C122.5 0 144 21.49 144 48zM96 32C87.17 32 80 39.16 80 48C80 56.84 87.17 64 96 64C104.8 64 112 56.84 112 48C112 39.16 104.8 32 96 32zM592 32C618.5 32 640 53.49 640 80V144C640 170.5 618.5 192 592 192H272C245.5 192 224 170.5 224 144V80C224 53.49 245.5 32 272 32H592zM592 64H512V160H592C600.8 160 608 152.8 608 144V80C608 71.16 600.8 64 592 64zM256 80V144C256 152.8 263.2 160 272 160H480V64H272C263.2 64 256 71.16 256 80zM592 320C618.5 320 640 341.5 640 368V432C640 458.5 618.5 480 592 480H272C245.5 480 224 458.5 224 432V368C224 341.5 245.5 320 272 320H592zM592 352H384V448H592C600.8 448 608 440.8 608 432V368C608 359.2 600.8 352 592 352zM256 368V432C256 440.8 263.2 448 272 448H352V352H272C263.2 352 256 359.2 256 368zM1.118 486.1C6.122 446 40.15 416 80.5 416H111.5C151.8 416 185.9 446 190.9 486.1L191.9 494C192.1 502.8 186.8 510.8 177.1 511.9C169.2 512.1 161.2 506.8 160.1 497.1L159.1 490C156.1 466 135.7 448 111.5 448H80.5C56.29 448 35.87 466 32.87 490L31.88 497.1C30.78 506.8 22.79 512.1 14.02 511.9C5.249 510.8-.9708 502.8 .1252 494L1.118 486.1zM1.118 198.1C6.122 158 40.15 128 80.5 128H111.5C151.8 128 185.9 158 190.9 198.1L191.9 206C192.1 214.8 186.8 222.8 177.1 223.9C169.2 224.1 161.2 218.8 160.1 209.1L159.1 202C156.1 178 135.7 160 111.5 160H80.5C56.29 160 35.87 178 32.87 202L31.88 209.1C30.78 218.8 22.79 224.1 14.02 223.9C5.249 222.8-.9708 214.8 .1252 206L1.118 198.1zM144 336C144 362.5 122.5 384 96 384C69.49 384 48 362.5 48 336C48 309.5 69.49 288 96 288C122.5 288 144 309.5 144 336zM96 320C87.17 320 80 327.2 80 336C80 344.8 87.17 352 96 352C104.8 352 112 344.8 112 336C112 327.2 104.8 320 96 320z"/>
</>],
['regular',<>
	<path d="M128 48C128 74.51 106.5 96 80 96C53.49 96 32 74.51 32 48C32 21.49 53.49 0 80 0C106.5 0 128 21.49 128 48zM592 32C618.5 32 640 53.49 640 80V144C640 170.5 618.5 192 592 192H272C245.5 192 224 170.5 224 144V80C224 53.49 245.5 32 272 32H592zM592 80H480V144H592V80zM592 320C618.5 320 640 341.5 640 368V432C640 458.5 618.5 480 592 480H272C245.5 480 224 458.5 224 432V368C224 341.5 245.5 320 272 320H592zM592 368H352V432H592V368zM96 128C131.3 128 160 156.7 160 192C160 209.7 145.7 224 128 224H32C14.33 224 0 209.7 0 192C0 156.7 28.65 128 64 128H96zM128 336C128 362.5 106.5 384 80 384C53.49 384 32 362.5 32 336C32 309.5 53.49 288 80 288C106.5 288 128 309.5 128 336zM96 416C131.3 416 160 444.7 160 480C160 497.7 145.7 512 128 512H32C14.33 512 0 497.7 0 480C0 444.7 28.65 416 64 416H96z"/>
</>],
['solid',<>
	<path d="M128 48C128 74.51 106.5 96 80 96C53.49 96 32 74.51 32 48C32 21.49 53.49 0 80 0C106.5 0 128 21.49 128 48zM592 32C618.5 32 640 53.49 640 80V144C640 170.5 618.5 192 592 192H272C245.5 192 224 170.5 224 144V80C224 53.49 245.5 32 272 32H592zM576 96H480V128H576V96zM592 320C618.5 320 640 341.5 640 368V432C640 458.5 618.5 480 592 480H272C245.5 480 224 458.5 224 432V368C224 341.5 245.5 320 272 320H592zM576 384H352V416H576V384zM96 128C131.3 128 160 156.7 160 192C160 209.7 145.7 224 128 224H32C14.33 224 0 209.7 0 192C0 156.7 28.65 128 64 128H96zM128 336C128 362.5 106.5 384 80 384C53.49 384 32 362.5 32 336C32 309.5 53.49 288 80 288C106.5 288 128 309.5 128 336zM96 416C131.3 416 160 444.7 160 480C160 497.7 145.7 512 128 512H32C14.33 512 0 497.7 0 480C0 444.7 28.65 416 64 416H96z"/>
</>],
['thin',<>
	<path d="M128 48C128 74.51 106.5 96 80 96C53.49 96 32 74.51 32 48C32 21.49 53.49 0 80 0C106.5 0 128 21.49 128 48zM80 16C62.33 16 48 30.33 48 48C48 65.67 62.33 80 80 80C97.67 80 112 65.67 112 48C112 30.33 97.67 16 80 16zM224 80C224 53.49 245.5 32 272 32H592C618.5 32 640 53.49 640 80V144C640 170.5 618.5 192 592 192H272C245.5 192 224 170.5 224 144V80zM512 176H592C609.7 176 624 161.7 624 144V80C624 62.33 609.7 48 592 48H512V176zM496 48H272C254.3 48 240 62.33 240 80V144C240 161.7 254.3 176 272 176H496V48zM224 368C224 341.5 245.5 320 272 320H592C618.5 320 640 341.5 640 368V432C640 458.5 618.5 480 592 480H272C245.5 480 224 458.5 224 432V368zM384 464H592C609.7 464 624 449.7 624 432V368C624 350.3 609.7 336 592 336H384V464zM368 336H272C254.3 336 240 350.3 240 368V432C240 449.7 254.3 464 272 464H368V336zM128 336C128 362.5 106.5 384 80 384C53.49 384 32 362.5 32 336C32 309.5 53.49 288 80 288C106.5 288 128 309.5 128 336zM80 304C62.33 304 48 318.3 48 336C48 353.7 62.33 368 80 368C97.67 368 112 353.7 112 336C112 318.3 97.67 304 80 304zM96 128C131.3 128 160 156.7 160 192C160 209.7 145.7 224 128 224H32C14.33 224 0 209.7 0 192C0 156.7 28.65 128 64 128H96zM64 144C37.49 144 16 165.5 16 192C16 200.8 23.16 208 32 208H128C136.8 208 144 200.8 144 192C144 165.5 122.5 144 96 144H64zM0 480C0 444.7 28.65 416 64 416H96C131.3 416 160 444.7 160 480C160 497.7 145.7 512 128 512H32C14.33 512 0 497.7 0 480zM32 496H128C136.8 496 144 488.8 144 480C144 453.5 122.5 432 96 432H64C37.49 432 16 453.5 16 480C16 488.8 23.16 496 32 496z"/>
</>],

]);

const PollPeople: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PollPeople.displayName = "PollPeople";

export default PollPeople;