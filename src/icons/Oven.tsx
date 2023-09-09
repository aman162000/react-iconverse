
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 480c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32V192H0V480zM64 256h320v192H64V256zM336 288h-224C103.2 288 96 295.2 96 304S103.2 320 112 320h224c8.838 0 16-7.164 16-16S344.8 288 336 288zM384 0H64C28.63 0 0 28.62 0 64v96h448V64C448 28.62 419.4 0 384 0zM80 104c-13.25 0-24-10.75-24-24S66.75 56 80 56S104 66.75 104 80S93.25 104 80 104zM176 104c-13.25 0-24-10.75-24-24S162.8 56 176 56S200 66.75 200 80S189.3 104 176 104zM272 104c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S285.3 104 272 104zM368 104c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S381.3 104 368 104z"/><path className="fa-secondary" d="M64 448h320V256H64V448zM112 288h224C344.8 288 352 295.2 352 304S344.8 320 336 320h-224C103.2 320 96 312.8 96 304S103.2 288 112 288zM0 160v32h448V160H0z"/>
</>],
['light',<>
	<path d="M352 0H96C42.98 0 0 42.98 0 96v352c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 42.98 405 0 352 0zM416 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V192h384V448zM416 160H32V96c0-35.29 28.71-64 64-64h256c35.29 0 64 28.71 64 64V160zM96 448h256c17.67 0 32-14.33 32-32V256c0-17.67-14.33-32-32-32H96C78.33 224 64 238.3 64 256v160C64 433.7 78.33 448 96 448zM96 256h256v160H96V256zM304 288h-160C135.2 288 128 295.2 128 304C128 312.8 135.2 320 144 320h160c8.836 0 16-7.164 16-16C320 295.2 312.8 288 304 288zM80 96C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128S96 120.8 96 112C96 103.2 88.84 96 80 96zM176 96C167.2 96 160 103.2 160 112C160 120.8 167.2 128 176 128S192 120.8 192 112C192 103.2 184.8 96 176 96zM272 96C263.2 96 256 103.2 256 112C256 120.8 263.2 128 272 128S288 120.8 288 112C288 103.2 280.8 96 272 96zM368 96C359.2 96 352 103.2 352 112C352 120.8 359.2 128 368 128S384 120.8 384 112C384 103.2 376.8 96 368 96z"/>
</>],
['regular',<>
	<path d="M112 432h224c17.67 0 32-14.33 32-32v-128c0-17.67-14.33-32-32-32h-224c-17.67 0-32 14.33-32 32v128C80 417.7 94.33 432 112 432zM160 280h128c8.844 0 16 7.156 16 16s-7.156 16-16 16H160c-8.844 0-16-7.156-16-16S151.2 280 160 280zM104 80C90.75 80 80 90.74 80 104C80 117.3 90.75 128 104 128S128 117.3 128 104C128 90.74 117.3 80 104 80zM352 0H96C42.98 0 0 42.98 0 96v352c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 42.98 405 0 352 0zM400 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V208h352V448zM400 160h-352V96c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48V160zM344 80C330.7 80 320 90.74 320 104C320 117.3 330.7 128 344 128s24-10.75 24-24C368 90.74 357.3 80 344 80zM184 80C170.7 80 160 90.74 160 104C160 117.3 170.7 128 184 128S208 117.3 208 104C208 90.74 197.3 80 184 80zM264 80c-13.25 0-24 10.74-24 24C240 117.3 250.7 128 264 128S288 117.3 288 104C288 90.74 277.3 80 264 80z"/>
</>],
['solid',<>
	<path d="M0 480c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32V192H0V480zM64 256h320v192H64V256zM384 0H64C28.63 0 0 28.62 0 64v96h448V64C448 28.62 419.4 0 384 0zM80 104c-13.25 0-24-10.75-24-24S66.75 56 80 56S104 66.75 104 80S93.25 104 80 104zM176 104c-13.25 0-24-10.75-24-24S162.8 56 176 56S200 66.75 200 80S189.3 104 176 104zM272 104c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S285.3 104 272 104zM368 104c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S381.3 104 368 104zM336 288h-224C103.2 288 96 295.2 96 304S103.2 320 112 320h224c8.838 0 16-7.164 16-16S344.8 288 336 288z"/>
</>],
['thin',<>
	<path d="M80 80C71.17 80 64 87.17 64 96s7.166 16 16 16S96 104.8 96 96S88.83 80 80 80zM96 448h256c17.67 0 32-14.33 32-32V256c0-17.67-14.33-32-32-32H96C78.33 224 64 238.3 64 256v160C64 433.7 78.33 448 96 448zM80 256c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16v160c0 8.822-7.178 16-16 16H96c-8.822 0-16-7.178-16-16V256zM368 80C359.2 80 352 87.17 352 96s7.166 16 16 16S384 104.8 384 96S376.8 80 368 80zM176 80C167.2 80 160 87.17 160 96s7.166 16 16 16S192 104.8 192 96S184.8 80 176 80zM384 0H64C28.63 0 0 28.62 0 64v384c0 35.2 28.8 64 64 64h320c35.2 0 64-28.8 64-64V64C448 28.62 419.4 0 384 0zM432 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V176h416V448zM432 160h-416V64c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V160zM272 80C263.2 80 256 87.17 256 96s7.166 16 16 16S288 104.8 288 96S280.8 80 272 80zM120 304h208c4.406 0 8-3.578 8-8S332.4 288 328 288h-208C115.6 288 112 291.6 112 296S115.6 304 120 304z"/>
</>],

]);

const Oven: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Oven.displayName = "Oven";

export default Oven;