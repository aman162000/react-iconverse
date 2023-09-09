
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 224c26.53 0 48-21.47 48-48S282.5 128 256 128S208 149.5 208 176S229.5 224 256 224zM288 256H224C197.5 256 176 277.5 176 304V352c0 17.67 14.33 32 32 32v96c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32V304C336 277.5 314.5 256 288 256z"/><path className="fa-secondary" d="M384 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S348.6 128 384 128zM128 128c35.38 0 64-28.62 64-64S163.4 0 128 0S64 28.62 64 64S92.63 128 128 128zM196.1 229C183.6 214.9 176 196.3 176 176c0-4.447 .6133-8.734 1.314-12.99C172.2 161.1 166.7 160 160.1 160H95C73.57 160 54.74 174.2 48.85 194.8l-48.22 168.8C-2.295 373.8 5.379 384 16.01 384H64v96c0 17.67 14.33 32 32 32h64c8.014 0 15.12-3.229 20.73-8.096C177.7 496.5 176 488.5 176 480v-72.59C156.9 396.3 144 375.6 144 352V304C144 269.7 165.7 240.3 196.1 229zM511.4 363.6l-48.22-168.8C457.3 174.2 438.4 160 416.1 160h-65.99c-5.713 0-11.17 1.143-16.32 3.014C335.4 167.3 336 171.6 336 176c0 20.31-7.609 38.88-20.13 53.01C346.3 240.3 368 269.7 368 304V352c0 23.64-12.88 44.33-32 55.41V480c0 8.461-1.736 16.5-4.732 23.9C336.9 508.8 343.1 512 352 512h64c17.67 0 32-14.33 32-32v-96h47.99C506.6 384 514.3 373.8 511.4 363.6z"/>
</>],
['light',<>
	<path d="M256 240c30.95 0 56-25.05 56-56S286.1 128 256 128S200 153 200 184S225 240 256 240zM256 160c13.23 0 24 10.77 24 24c0 13.23-10.77 24-24 24S232 197.2 232 184C232 170.8 242.8 160 256 160zM288 272H224c-26.51 0-48 21.49-48 48v64c0 17.67 14.33 32 32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c17.67 0 32-14.33 32-32v-64C336 293.5 314.5 272 288 272zM304 384h-32v96h-32v-96h-32v-64c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16V384zM505.5 343.2l-39.08-136.8C458.6 178.9 433.5 160 404.9 160h-70.55C335.4 165.2 336 170.5 336 176S335.4 186.8 334.4 192h70.55c14.29 0 26.84 9.471 30.77 23.21L474.8 352H368v32H416v112c0 8.844 7.156 16 16 16s16-7.156 16-16V384h26.78C496 384 511.4 363.7 505.5 343.2zM384 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S348.6 128 384 128zM384 32c17.64 0 32 14.36 32 32s-14.36 32-32 32s-32-14.36-32-32S366.4 32 384 32zM76.31 215.2C80.23 201.5 92.79 192 107.1 192h70.55C176.6 186.8 176 181.5 176 176S176.6 165.2 177.6 160H107.1c-28.57 0-53.69 18.94-61.54 46.42l-39.08 136.8C.6117 363.7 15.96 384 37.22 384H64v112C64 504.8 71.16 512 80 512S96 504.8 96 496V384h48v-32H37.22L76.31 215.2zM128 128c35.38 0 64-28.62 64-64S163.4 0 128 0S64 28.62 64 64S92.63 128 128 128zM128 32c17.64 0 32 14.36 32 32S145.6 96 128 96S96 81.64 96 64S110.4 32 128 32z"/>
</>],
['regular',<>
	<path d="M256 224c26.53 0 48-21.47 48-48S282.5 128 256 128S208 149.5 208 176S229.5 224 256 224zM288 256H224C197.5 256 176 277.5 176 304V384c0 17.67 14.33 32 32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c17.67 0 32-14.33 32-32V304C336 277.5 314.5 256 288 256zM288 368H224v-64h64V368zM384 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S348.6 128 384 128zM505.5 343.2l-39.08-136.8C458.6 178.9 433.5 160 404.9 160h-41.86c-10.08 0-19.34 3.043-27.95 7.299C335.4 170.2 336 173 336 176c0 11.46-2.699 22.19-7.121 32h76.05c7.145 0 13.42 4.734 15.38 11.6L453.6 336H368V384h32v104c0 13.25 10.75 24 24 24S448 501.3 448 488V384h26.78C496 384 511.4 363.7 505.5 343.2zM128 128c35.38 0 64-28.62 64-64S163.4 0 128 0S64 28.62 64 64S92.63 128 128 128zM91.69 219.6C93.65 212.7 99.93 208 107.1 208h76.05C178.7 198.2 176 187.5 176 176c0-2.98 .5605-5.805 .8789-8.701C168.3 163 159 160 148.9 160H107.1C78.5 160 53.39 178.9 45.54 206.4l-39.08 136.8C.6105 363.7 15.96 384 37.22 384H64v104C64 501.3 74.75 512 88 512s24-10.75 24-24V384h32v-48H58.43L91.69 219.6z"/>
</>],
['solid',<>
	<path d="M384 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S348.6 128 384 128zM128 128c35.38 0 64-28.62 64-64S163.4 0 128 0S64 28.62 64 64S92.63 128 128 128zM176 407.4C156.9 396.3 144 375.6 144 352V304c0-34.31 21.72-63.65 52.13-74.99C183.6 214.9 176 196.3 176 176c0-4.447 .6133-8.734 1.314-12.99C172.2 161.1 166.7 160 160.1 160H95C73.57 160 54.74 174.2 48.85 194.8l-42.4 148.4C.6119 363.7 15.96 384 37.22 384H64v96c0 17.67 14.33 32 32 32h64c8.014 0 15.12-3.229 20.73-8.096C177.7 496.5 176 488.5 176 480V407.4zM505.5 343.2l-42.4-148.4C457.3 174.2 438.4 160 416.1 160h-65.99c-5.713 0-11.17 1.143-16.32 3.014C335.4 167.3 336 171.6 336 176c0 20.31-7.609 38.88-20.13 53.01C346.3 240.3 368 269.7 368 304V352c0 23.64-12.88 44.33-32 55.41V480c0 8.461-1.736 16.5-4.732 23.9C336.9 508.8 343.1 512 352 512h64c17.67 0 32-14.33 32-32v-96h26.78C496 384 511.4 363.7 505.5 343.2zM336 304C336 277.5 314.5 256 288 256H224C197.5 256 176 277.5 176 304V352c0 17.67 14.33 32 32 32v96c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32V304zM256 224c26.53 0 48-21.47 48-48S282.5 128 256 128S208 149.5 208 176S229.5 224 256 224z"/>
</>],
['thin',<>
	<path d="M384 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S348.6 128 384 128zM384 16c26.47 0 48 21.53 48 48S410.5 112 384 112S336 90.47 336 64S357.5 16 384 16zM256 240c30.95 0 56-25.05 56-56S286.1 128 256 128S200 153 200 184S225 240 256 240zM256 144c22.06 0 40 17.94 40 40S278.1 224 256 224S216 206.1 216 184S233.9 144 256 144zM168 496c-8.812 0-16-7.172-16-16v-112H16.01l51.54-180.4C69.5 180.8 75.83 176 82.94 176h90.13c1.625 0 2.902 1.016 4.402 1.482C178.5 171.9 180 166.6 182.1 161.5C179.2 160.6 176.2 160 173.1 160H82.94C68.65 160 56.09 169.5 52.17 183.2l-51.54 180.4C-2.297 373.8 5.379 384 16.01 384H56v96c0 17.64 14.34 32 32 32s32-14.36 32-32v-96h16v96c0 17.64 14.34 32 32 32c6.746 0 12.64-2.609 17.77-6.234l-11.23-11.23C172.5 495.4 170.3 496 168 496zM104 480c0 8.828-7.188 16-16 16s-16-7.172-16-16v-96h32V480zM128 128c35.38 0 64-28.62 64-64S163.4 0 128 0S64 28.62 64 64S92.63 128 128 128zM128 16c26.47 0 48 21.53 48 48S154.5 112 128 112S80 90.47 80 64S101.5 16 128 16zM511.4 363.6L459.8 183.2C455.9 169.5 443.4 160 429.1 160h-90.13c-3.141 0-6.143 .6289-9.043 1.49c2.105 5.084 3.617 10.45 4.641 15.99C336 177 337.3 176 338.9 176h90.13c7.105 0 13.43 4.771 15.38 11.6L495.1 368H360V480c0 8.828-7.188 16-16 16c-2.34 0-4.525-.5625-6.531-1.469l-11.23 11.23C331.4 509.4 337.3 512 344 512c17.66 0 32-14.36 32-32v-96h16v96c0 17.64 14.34 32 32 32s32-14.36 32-32v-96h39.99C506.6 384 514.3 373.8 511.4 363.6zM440 480c0 8.828-7.188 16-16 16s-16-7.172-16-16v-96h32V480zM336 384v-64c0-26.51-21.49-48-48-48H224c-26.51 0-48 21.49-48 48v64c0 17.67 14.33 32 32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64C321.7 416 336 401.7 336 384zM288 480c0 8.822-7.178 16-16 16h-32C231.2 496 224 488.8 224 480v-64h64V480zM320 384c0 8.822-7.178 16-16 16h-96C199.2 400 192 392.8 192 384v-64c0-17.64 14.36-32 32-32h64c17.64 0 32 14.36 32 32V384z"/>
</>],

]);

const FamilyDress: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FamilyDress.displayName = "FamilyDress";

export default FamilyDress;