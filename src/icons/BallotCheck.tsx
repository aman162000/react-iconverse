
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M80 160h32C120.8 160 128 152.8 128 144v-32C128 103.3 120.8 96 112 96h-32C71.25 96 64 103.3 64 112v32C64 152.8 71.25 160 80 160zM112 352h-32C71.25 352 64 359.3 64 368v32C64 408.8 71.25 416 80 416h32C120.8 416 128 408.8 128 400v-32C128 359.3 120.8 352 112 352zM163.3 204.7c-6.25-6.25-16.38-6.25-22.62 0L96 249.4L83.31 236.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l24 24C87.81 286.4 91.91 288 96 288s8.188-1.562 11.31-4.688l56-56C169.6 221.1 169.6 210.9 163.3 204.7z"/><path className="fa-secondary" d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM64 112C64 103.3 71.25 96 80 96h32C120.8 96 128 103.3 128 112v32C128 152.8 120.8 160 112 160h-32C71.25 160 64 152.8 64 144V112zM128 400C128 408.8 120.8 416 112 416h-32C71.25 416 64 408.8 64 400v-32C64 359.3 71.25 352 80 352h32C120.8 352 128 359.3 128 368V400zM163.3 227.3l-56 56C104.2 286.4 100.1 288 96 288S87.81 286.4 84.69 283.3l-24-24c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L96 249.4l44.69-44.69c6.25-6.25 16.38-6.25 22.62 0S169.6 221.1 163.3 227.3zM368 400h-160C199.2 400 192 392.8 192 384s7.164-16 16-16h160c8.836 0 16 7.164 16 16S376.8 400 368 400zM368 272h-160C199.2 272 192 264.8 192 256s7.164-16 16-16h160C376.8 240 384 247.2 384 256S376.8 272 368 272zM368 144h-160C199.2 144 192 136.8 192 128s7.164-16 16-16h160C376.8 112 384 119.2 384 128S376.8 144 368 144z"/>
</>],
['light',<>
	<path d="M96 360c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24c13.26 0 24-10.75 24-24C120 370.7 109.3 360 96 360zM352 368H176C167.2 368 160 375.2 160 384s7.156 16 16 16H352c8.844 0 16-7.156 16-16S360.8 368 352 368zM101.3 288c4.094 0 8.188-1.562 11.31-4.688l58.67-58.67c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L101.3 249.4L83.31 231.4c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l29.33 29.33C93.14 286.4 97.23 288 101.3 288zM96 152c13.26 0 24-10.75 24-24c0-13.26-10.74-24-24-24C82.75 104 72 114.7 72 128C72 141.3 82.75 152 96 152zM352 240H208C199.2 240 192 247.2 192 256s7.156 16 16 16H352c8.844 0 16-7.156 16-16S360.8 240 352 240zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM416 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V448zM352 112H176C167.2 112 160 119.2 160 128s7.156 16 16 16H352c8.844 0 16-7.156 16-16S360.8 112 352 112z"/>
</>],
['regular',<>
	<path d="M128 352H96c-8.836 0-16 7.164-16 16v32C80 408.8 87.16 416 96 416h32c8.836 0 16-7.164 16-16v-32C144 359.2 136.8 352 128 352zM96 160h32c8.836 0 16-7.164 16-16v-32C144 103.2 136.8 96 128 96H96C87.16 96 80 103.2 80 112v32C80 152.8 87.16 160 96 160zM344 360h-144c-13.25 0-24 10.75-24 24s10.75 24 24 24h144c13.25 0 24-10.75 24-24S357.3 360 344 360zM171.3 220.7c-6.25-6.25-16.38-6.25-22.62 0L112 257.4L99.31 244.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l24 24C103.8 294.4 107.9 296 112 296s8.188-1.562 11.31-4.688l48-48C177.6 237.1 177.6 226.9 171.3 220.7zM344 232h-112C218.8 232 208 242.8 208 256s10.75 24 24 24h112c13.25 0 24-10.75 24-24S357.3 232 344 232zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM400 448c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V64c0-8.824 7.178-16 16-16h320c8.822 0 16 7.176 16 16V448zM344 104h-144C186.8 104 176 114.8 176 128s10.75 24 24 24h144c13.25 0 24-10.75 24-24S357.3 104 344 104z"/>
</>],
['solid',<>
	<path d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM64 112C64 103.3 71.25 96 80 96h32C120.8 96 128 103.3 128 112v32C128 152.8 120.8 160 112 160h-32C71.25 160 64 152.8 64 144V112zM128 400C128 408.8 120.8 416 112 416h-32C71.25 416 64 408.8 64 400v-32C64 359.3 71.25 352 80 352h32C120.8 352 128 359.3 128 368V400zM163.3 227.3l-56 56C104.2 286.4 100.1 288 96 288S87.81 286.4 84.69 283.3l-24-24c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L96 249.4l44.69-44.69c6.25-6.25 16.38-6.25 22.62 0S169.6 221.1 163.3 227.3zM368 400h-160C199.2 400 192 392.8 192 384s7.164-16 16-16h160c8.836 0 16 7.164 16 16S376.8 400 368 400zM368 272h-160C199.2 272 192 264.8 192 256s7.164-16 16-16h160C376.8 240 384 247.2 384 256S376.8 272 368 272zM368 144h-160C199.2 144 192 136.8 192 128s7.164-16 16-16h160C376.8 112 384 119.2 384 128S376.8 144 368 144z"/>
</>],
['thin',<>
	<path d="M384 0H64C28.66 0 0 28.66 0 64v384c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V64C448 28.66 419.3 0 384 0zM432 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V448zM376 120h-176C195.6 120 192 123.6 192 128s3.594 8 8 8h176C380.4 136 384 132.4 384 128S380.4 120 376 120zM376 248h-176C195.6 248 192 251.6 192 256s3.594 8 8 8h176C380.4 264 384 260.4 384 256S380.4 248 376 248zM376 376h-176C195.6 376 192 379.6 192 384s3.594 8 8 8h176c4.406 0 8-3.578 8-8S380.4 376 376 376zM88 168h16c17.67 0 32-14.33 32-32v-16c0-17.67-14.33-32-32-32h-16c-17.67 0-32 14.33-32 32v16C56 153.7 70.33 168 88 168zM72 120c0-8.822 7.176-16 16-16h16c8.824 0 16 7.178 16 16v16c0 8.822-7.176 16-16 16h-16c-8.824 0-16-7.178-16-16V120zM104 344h-16c-17.67 0-32 14.33-32 32v16c0 17.67 14.33 32 32 32h16c17.67 0 32-14.33 32-32v-16C136 358.3 121.7 344 104 344zM120 392c0 8.822-7.176 16-16 16h-16c-8.824 0-16-7.178-16-16v-16c0-8.822 7.176-16 16-16h16c8.824 0 16 7.178 16 16V392zM154.3 210.3L96 268.7L69.66 242.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l32 32C91.91 287.2 93.94 288 96 288s4.094-.7813 5.656-2.344l64-64c3.125-3.125 3.125-8.188 0-11.31S157.5 207.2 154.3 210.3z"/>
</>],

]);

const BallotCheck: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BallotCheck.displayName = "BallotCheck";

export default BallotCheck;
