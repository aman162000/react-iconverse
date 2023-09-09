
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 0c-91.04 0-128 83.22-128 133.5l.0036 58.5h256l-.0038-64C384 57.31 326.7 0 256 0zM224 128c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C256 113.7 241.7 128 224 128zM304 128c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16c8.836 0 16 7.162 16 16C320 120.8 312.8 128 304 128zM304 224H207.1c-8.836 0-16 7.162-16 16c0 8.836 7.164 15.1 16 15.1h96c8.836 0 16-7.164 16-15.1C320 231.2 312.8 224 304 224zM304 288H207.1c-8.836 0-16 7.162-16 16c0 8.836 7.164 15.1 16 15.1h96c8.836 0 16-7.164 16-15.1C320 295.2 312.8 288 304 288z"/><path className="fa-secondary" d="M496 496c0-2.226-.4633-4.46-1.402-6.548l-30.59-68.14V240c0-26.47-21.53-48-48-48H95.1c-26.47 0-48 21.53-48 48v181.3l-30.59 68.14C16.46 491.5 16 493.8 16 496c0 12.89 11.99 15.1 15.1 15.1l80 .0001c8.844 0 15.1-7.156 15.1-16l-.0026-111.1l54.63 54.63c6.002 6 14.14 9.373 22.63 9.373h101.5c8.487 0 16.63-3.373 22.63-9.373l54.63-54.63l.0018 111.1c0 8.844 7.156 16 16 16l79.1-.0001C484 512 496 508.8 496 496zM304 320H207.1c-8.836 0-16-7.164-16-15.1c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C320 312.8 312.8 320 304 320zM304 256H207.1c-8.836 0-16-7.164-16-15.1c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C320 248.8 312.8 256 304 256z"/>
</>],
['light',<>
	<path d="M207.1 256h96c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16h-96c-8.836 0-16 7.162-16 16C191.1 248.8 199.2 256 207.1 256zM207.1 320h96c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16h-96c-8.836 0-16 7.162-16 16C191.1 312.8 199.2 320 207.1 320zM223.1 64c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C255.1 78.33 241.7 64 223.1 64zM511 490.5L479.1 405.9V219.6C479.1 186.7 453.3 160 420.4 160H399.1L400 150.3C400 94.25 357.9 0 256 0C176.6 0 112 64.59 112 144L112 160H91.64C58.7 160 32 186.7 32 219.6v186.3l-31.03 84.59C.3203 492.3 0 494.2 0 496C0 504.8 7.17 512 16 512H112c17.67 0 32-14.33 32-32v-73.38l36.69 36.69C183.7 446.3 187.8 448 192 448h128c4.242 0 8.311-1.686 11.31-4.686l36.69-36.69V480c0 17.67 14.33 32 32 32h96C504.8 512 512 504.8 512 496C512 494.2 511.7 492.3 511 490.5zM112 480H38.91l24.12-65.75c.625-1.766 .9687-3.641 .9687-5.516V219.6C64 204.4 76.41 192 91.63 192h20.38L112 480zM367.1 361.4L313.4 416H198.6L144 361.4V192h223.1V361.4zM367.1 160H144V144C144 82.25 194.3 32 256 32s111.1 50.25 111.1 112V160zM399.1 480L400 192h20.37c15.22 0 27.62 12.41 27.62 27.64v189.1c0 1.875 .3438 3.75 .9687 5.516L473.1 480H399.1zM303.1 96c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16s16-7.164 16-16C319.1 103.2 312.8 96 303.1 96z"/>
</>],
['regular',<>
	<path d="M510.3 479L480 404.1V227.6C480 187.2 456 160 420.4 160H384V128c0-70.69-57.3-128-127.1-128C164.1 0 127.1 83.22 127.1 133.5V160H99.63C62.34 160 32 190.3 32 227.6v176.4l-30.25 74.94C.5762 481.9 0 484.1 0 487.1C0 501.4 10.92 512 24 512H128c13.25 0 24-10.75 24-24v-75.89l31.66 29.46C188.1 445.7 193.9 448 200 448h112c6.062 0 11.91-2.297 16.34-6.438L360 412.1V488c0 13.25 10.75 24 24 24h104c13.08 0 24-10.56 24-24.01C512 484.1 511.4 481.9 510.3 479zM104 464H59.56l18.69-46.28C79.41 414.9 80 411.8 80 408.7V227.6C80 216.8 88.81 208 99.63 208H104V464zM304 96c8.836 0 16 7.162 16 16c0 8.836-7.164 16-16 16c-8.84 0-16-7.164-16-16C288 103.2 295.2 96 304 96zM224 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32C206.3 128 192 113.7 192 96C192 78.33 206.3 64 224 64zM360 346.5L302.6 400H209.4L152 346.5V192h208V346.5zM408 464v-256h12.38C423.3 208 432 208 432 227.6v181.1c0 3.078 .5938 6.125 1.75 8.984L452.4 464H408zM208 256h96c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16H208C199.2 224 192 231.2 192 240C192 248.8 199.2 256 208 256zM208 320h96c8.836 0 16-7.164 16-16c0-8.838-7.166-16-16-16h-96C199.2 288 192 295.2 192 304C192 312.8 199.2 320 208 320z"/>
</>],
['solid',<>
	<path d="M494.6 489.5l-30.59-68.14V240c0-26.47-21.53-48-48-48H95.1c-26.47 0-48 21.53-48 48v181.3l-30.59 68.14C16.46 491.5 16 493.8 16 496c0 12.88 11.99 16 15.1 16H112C120.8 512 128 504.8 128 496L127.1 384l54.63 54.63C188.6 444.6 196.8 448 205.3 448h101.5c8.486 0 16.62-3.371 22.63-9.373L384 384l.002 112c0 8.844 7.156 16 16 16h80C484 512 496 508.8 496 496C496 493.8 495.5 491.5 494.6 489.5zM304 351.1h-96c-8.836 0-16-7.164-16-16C192 327.2 199.2 320 208 320h96C312.8 320 320 327.2 320 335.1C320 344.8 312.8 351.1 304 351.1zM304 288H208C199.2 288 192 280.8 192 271.1C192 263.2 199.2 256 208 256h96C312.8 256 320 263.2 320 271.1C320 280.8 312.8 288 304 288zM384 128c0-70.69-57.31-128-128-128C164.1 0 127.1 83.22 127.1 133.5V160h256V128zM224 128C206.3 128 192 113.7 192 96c0-17.67 14.33-32 32-32s32 14.33 32 32C256 113.7 241.7 128 224 128zM304 128c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16s16 7.162 16 16C320 120.8 312.8 128 304 128z"/>
</>],
['thin',<>
	<path d="M303.1 96c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16s16-7.164 16-16C319.1 103.2 312.8 96 303.1 96zM312 304H199.1c-4.406 0-8 3.578-8 8s3.594 8 8 8h112c4.406 0 8-3.578 8-8S316.4 304 312 304zM312 240H199.1c-4.406 0-8 3.578-8 8S195.6 256 199.1 256h112c4.406 0 8-3.578 8-8S316.4 240 312 240zM511 500.1l-47-85.47V227.6C464 199.1 440.9 176 412.4 176h-12.36l-.002-25.71C400 94.64 358.1 0 255.1 0c-79.53 0-144 64.47-144 144l.002 32H99.62c-28.51 0-51.63 23.11-51.63 51.63v187l-47 85.47C.3281 501.3 0 502.7 0 503.1C0 508.1 3.316 512 7.994 512h103.1c8.836 0 16-7.164 16-16l.0039-104L183.1 448h144l56-56L384 496c0 8.836 7.164 16 16 16h104C508.7 512 512 508.2 512 503.1C512 502.7 511.7 501.3 511 500.1zM21.53 496l41.47-75.41c.6562-1.188 1-2.516 1-3.859V227.6C63.99 207.1 79.96 192 99.62 192h12.37l.002 304H21.53zM321.4 432H190.6l-62.63-62.63L127.1 192h256l.002 177.4L321.4 432zM384 176H127.1v-32c0-70.58 57.42-128 128-128s128 57.42 128 128V176zM400 496L400 192h12.38c19.66 0 35.63 15.98 35.63 35.64v189.1c0 1.344 .3438 2.672 1 3.859L490.5 496H400zM224 56C201.9 56 183.1 73.94 183.1 96S201.9 136 224 136c22.06 0 40-17.94 40-40S246.1 56 224 56zM224 120C210.8 120 199.1 109.2 199.1 96S210.8 72 224 72c13.22 0 24 10.77 24 24S237.2 120 224 120z"/>
</>],

]);

const RobotAstromech: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RobotAstromech.displayName = "RobotAstromech";

export default RobotAstromech;
