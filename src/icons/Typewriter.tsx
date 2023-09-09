
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M352 0v96h96L352 0zM480 192h-114.8c-8.5 0-16.62 3.375-22.62 9.375l-13.25 13.25C323.4 220.6 315.3 224 306.8 224h-101.5c-8.5 0-16.62-3.375-22.62-9.375L169.4 201.4C163.4 195.4 155.3 192 146.8 192H32C14.4 192 0 206.4 0 224v32c0 17.62 14.38 32 32 32v176C32 490.5 53.49 512 80 512h352c26.51 0 48-21.49 48-48V288c17.62 0 32-14.38 32-32V224C512 206.4 497.6 192 480 192zM336 296C336 291.6 339.6 288 344 288h16c4.375 0 8 3.625 8 8v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8V296zM312 352h16c4.375 0 8 3.625 8 8v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16C304 355.6 307.6 352 312 352zM272 296C272 291.6 275.6 288 280 288h16c4.375 0 8 3.625 8 8v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8V296zM248 352h16c4.375 0 8 3.625 8 8v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16C240 355.6 243.6 352 248 352zM208 296C208 291.6 211.6 288 216 288h16C236.4 288 240 291.6 240 296v16C240 316.4 236.4 320 232 320h-16C211.6 320 208 316.4 208 312V296zM184 352h16c4.375 0 8 3.625 8 8v16C208 380.4 204.4 384 200 384h-16c-4.375 0-8-3.625-8-8v-16C176 355.6 179.6 352 184 352zM144 296C144 291.6 147.6 288 152 288h16C172.4 288 176 291.6 176 296v16C176 316.4 172.4 320 168 320h-16C147.6 320 144 316.4 144 312V296zM104 320h-16C83.63 320 80 316.4 80 312v-16C80 291.6 83.63 288 88 288h16C108.4 288 112 291.6 112 296v16C112 316.4 108.4 320 104 320zM136 384h-16c-4.375 0-8-3.625-8-8v-16C112 355.6 115.6 352 120 352h16c4.375 0 8 3.625 8 8v16C144 380.4 140.4 384 136 384zM368 440c0 4.375-3.625 8-8 8h-208c-4.375 0-8-3.625-8-8v-16C144 419.6 147.6 416 152 416h208c4.375 0 8 3.625 8 8V440zM400 376c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16c0-4.375 3.625-8 8-8h16c4.375 0 8 3.625 8 8V376zM432 312c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16C400 291.6 403.6 288 408 288h16c4.375 0 8 3.625 8 8V312z"/><path className="fa-secondary" d="M64 192V48C64 21.49 85.49 0 112 0H352v96h96v96h-82.75c-8.5 0-16.62 3.375-22.62 9.375l-13.25 13.25C323.4 220.6 315.3 224 306.8 224h-101.5c-8.5 0-16.62-3.375-22.62-9.375L169.4 201.4C163.4 195.4 155.3 192 146.8 192H64z"/>
</>],
['light',<>
	<path d="M312 384h16c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-16c-4.375 0-8 3.625-8 8v16C304 380.4 307.6 384 312 384zM376 384h16c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-16c-4.375 0-8 3.625-8 8v16C368 380.4 371.6 384 376 384zM248 384h16c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-16c-4.375 0-8 3.625-8 8v16C240 380.4 243.6 384 248 384zM464 192h-98.75c-8.5 0-16.62 3.375-22.62 9.375l-13.25 13.25C323.4 220.6 315.3 224 306.8 224h-101.5c-8.5 0-16.62-3.375-22.62-9.375L169.4 201.4C163.4 195.4 155.3 192 146.8 192H48C21.53 192 0 213.5 0 240v32c0 20.83 13.42 38.43 32 45.05V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V317.1C498.6 310.4 512 292.8 512 272v-32C512 213.5 490.5 192 464 192zM448 448c0 17.62-14.38 32-32 32H96c-17.62 0-32-14.38-32-32v-128h384V448zM480 272C480 280.8 472.8 288 464 288h-416C39.17 288 32 280.8 32 272v-32C32 231.2 39.17 224 48 224h98.75L160 237.3C172 249.3 188.3 256 205.3 256h101.5C323.8 256 340 249.3 352 237.3L365.3 224H464C472.8 224 480 231.2 480 240V272zM120 384h16c4.375 0 8-3.625 8-8v-16C144 355.6 140.4 352 136 352h-16c-4.375 0-8 3.625-8 8v16C112 380.4 115.6 384 120 384zM184 384h16c4.375 0 8-3.625 8-8v-16C208 355.6 204.4 352 200 352h-16c-4.375 0-8 3.625-8 8v16C176 380.4 179.6 384 184 384zM160 448h192c8.801 0 16-7.201 16-16c0-8.801-7.199-16-16-16H160c-8.801 0-16 7.199-16 16C144 440.8 151.2 448 160 448zM80 160C88.84 160 96 152.8 96 144V64c0-17.67 14.33-32 32-32h249.4L416 70.63V144C416 152.8 423.2 160 432 160S448 152.8 448 144V70.63C448 62.14 444.6 54 438.6 48L400 9.375C393.1 3.371 385.9 0 377.4 0H127.1C92.65 0 64 28.65 64 64v80C64 152.8 71.16 160 80 160z"/>
</>],
['regular',<>
	<path d="M356 356h16c6.6 0 12-5.4 12-12v-16c0-6.6-5.4-12-12-12h-16c-6.6 0-12 5.4-12 12v16C344 350.6 349.4 356 356 356zM212 356h16c6.6 0 12-5.4 12-12v-16c0-6.6-5.4-12-12-12h-16c-6.6 0-12 5.4-12 12v16C200 350.6 205.4 356 212 356zM284 356h16c6.6 0 12-5.4 12-12v-16c0-6.6-5.4-12-12-12h-16c-6.6 0-12 5.4-12 12v16C272 350.6 277.4 356 284 356zM140 356h16c6.6 0 12-5.4 12-12v-16c0-6.6-5.4-12-12-12h-16C133.4 316 128 321.4 128 328v16C128 350.6 133.4 356 140 356zM144 432h224c8.875 0 16-7.125 16-16v-16c0-8.875-7.125-16-16-16h-224C135.1 384 128 391.1 128 400V416C128 424.9 135.1 432 144 432zM480 192h-114.8c-8.5 0-16.62 3.375-22.62 9.375l-13.25 13.25C323.4 220.6 315.3 224 306.8 224h-101.5c-8.5 0-16.62-3.375-22.62-9.375L169.4 201.4C163.4 195.4 155.3 192 146.8 192H32C14.38 192 0 206.4 0 224v32c0 17.62 14.38 32 32 32v160c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V288c17.62 0 32-14.38 32-32V224C512 206.4 497.6 192 480 192zM432 448c0 8.875-7.125 16-16 16H96c-8.875 0-16-7.125-16-16V288h352V448zM127.1 48h222.1L384 81.94V160h48V81.94c0-12.73-5.057-24.94-14.06-33.94l-33.94-33.94C375 5.057 362.8 0 350.1 0H127.1C101.5 0 80.01 21.48 80 47.98l.0039 82.28C80 130.3 80 160 80 160h48.01L127.1 48z"/>
</>],
['solid',<>
	<path d="M480 192h-32V77.26c0-8.488-3.373-16.63-9.375-22.63l-45.26-45.26C387.4 3.369 379.2 0 370.8 0H96C78.4 0 64 14.4 64 32v160H32C14.4 192 0 206.4 0 224v32c0 17.62 14.38 32 32 32v176C32 490.5 53.49 512 80 512h352c26.51 0 48-21.49 48-48V288c17.62 0 32-14.38 32-32V224C512 206.4 497.6 192 480 192zM128 64h192v48C320 120.9 327.1 128 336 128H384v64h-18.75c-8.5 0-16.62 3.375-22.62 9.375l-13.25 13.25C323.4 220.6 315.3 224 306.8 224h-101.5c-8.5 0-16.62-3.375-22.62-9.375L169.4 201.4C163.4 195.4 155.3 192 146.8 192H128V64zM368 296v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16C336 291.6 339.6 288 344 288h16C364.4 288 368 291.6 368 296zM304 360c0-4.375 3.625-8 8-8h16c4.375 0 8 3.625 8 8v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8V360zM296 320h-16c-4.375 0-8-3.625-8-8v-16C272 291.6 275.6 288 280 288h16c4.375 0 8 3.625 8 8v16C304 316.4 300.4 320 296 320zM240 360C240 355.6 243.6 352 248 352h16c4.375 0 8 3.625 8 8v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8V360zM232 320h-16C211.6 320 208 316.4 208 312v-16C208 291.6 211.6 288 216 288h16C236.4 288 240 291.6 240 296v16C240 316.4 236.4 320 232 320zM176 360C176 355.6 179.6 352 184 352h16c4.375 0 8 3.625 8 8v16C208 380.4 204.4 384 200 384h-16c-4.375 0-8-3.625-8-8V360zM168 320h-16C147.6 320 144 316.4 144 312v-16C144 291.6 147.6 288 152 288h16C172.4 288 176 291.6 176 296v16C176 316.4 172.4 320 168 320zM104 320h-16C83.63 320 80 316.4 80 312v-16C80 291.6 83.63 288 88 288h16C108.4 288 112 291.6 112 296v16C112 316.4 108.4 320 104 320zM136 384h-16c-4.375 0-8-3.625-8-8v-16C112 355.6 115.6 352 120 352h16c4.375 0 8 3.625 8 8v16C144 380.4 140.4 384 136 384zM368 440c0 4.375-3.625 8-8 8h-208c-4.375 0-8-3.625-8-8v-16C144 419.6 147.6 416 152 416h208c4.375 0 8 3.625 8 8V440zM400 376c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16c0-4.375 3.625-8 8-8h16c4.375 0 8 3.625 8 8V376zM432 312c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16C400 291.6 403.6 288 408 288h16c4.375 0 8 3.625 8 8V312z"/>
</>],
['thin',<>
	<path d="M72 160C76.41 160 80 156.4 80 152v-112c0-13.23 10.78-24 24-24h258.8c6.312 0 12.5 2.562 16.97 7.031l45.25 45.25C429.4 72.75 432 78.94 432 85.25V152C432 156.4 435.6 160 440 160S448 156.4 448 152V85.25c0-10.69-4.156-20.72-11.72-28.28l-45.25-45.25C383.6 4.266 373.3 0 362.8 0H104C81.94 0 64 17.94 64 40v112C64 156.4 67.59 160 72 160zM480 192h-112.9c-9.936 0-19.74 2.312-28.62 6.756l-36.97 18.49C292.6 221.7 282.8 224 272.9 224H239.1C229.2 224 219.4 221.7 210.5 217.2L173.5 198.8C164.6 194.3 154.8 192 144.9 192H32C14.33 192 0 206.3 0 224v32c0 17.67 14.33 32 32 32v168C32 486.9 57.13 512 88 512h336c30.88 0 56-25.12 56-56V288c17.67 0 32-14.33 32-32V224C512 206.3 497.7 192 480 192zM464 456c0 22.06-17.94 40-40 40H88c-22.06 0-40-17.94-40-40V288h416V456zM496 256c0 8.822-7.178 16-16 16H32C23.18 272 16 264.8 16 256V224c0-8.822 7.178-16 16-16h112.9c7.412 0 14.84 1.752 21.47 5.066L203.3 231.6C214.4 237.1 226.8 240 239.1 240h33.78c12.35 0 24.72-2.922 35.78-8.447l36.97-18.49C352.3 209.8 359.7 208 367.1 208H480c8.822 0 16 7.178 16 16V256zM352 448H160c-4.422 0-8 3.594-8 8S155.6 464 160 464h192c4.422 0 8-3.594 8-8S356.4 448 352 448zM160 416c8.836 0 16-7.164 16-16C176 391.2 168.8 384 160 384s-16 7.162-16 16C144 408.8 151.2 416 160 416zM224 416c8.836 0 16-7.164 16-16C240 391.2 232.8 384 224 384s-16 7.162-16 16C208 408.8 215.2 416 224 416zM288 416c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16s-16 7.162-16 16C272 408.8 279.2 416 288 416zM352 416c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16s-16 7.162-16 16C336 408.8 343.2 416 352 416zM128 352c8.836 0 16-7.164 16-16C144 327.2 136.8 320 128 320s-16 7.162-16 16C112 344.8 119.2 352 128 352zM192 352c8.836 0 16-7.164 16-16C208 327.2 200.8 320 192 320s-16 7.162-16 16C176 344.8 183.2 352 192 352zM256 352c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16s-16 7.162-16 16C240 344.8 247.2 352 256 352zM320 352c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16s-16 7.162-16 16C304 344.8 311.2 352 320 352zM384 352c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16s-16 7.162-16 16C368 344.8 375.2 352 384 352z"/>
</>],

]);

const Typewriter: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Typewriter.displayName = "Typewriter";

export default Typewriter;