
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M406.1 16.02C424.8-2.736 455.2-2.742 473.9 16.01L495.8 37.88C514.7 56.77 514.5 87.43 495.5 106.1L455.7 145.1L366.4 55.74L406.1 16.02zM432.8 167.5L287.6 309.6C280.7 316.4 272.3 321.5 263.1 324.6L191.6 348.5C182.1 351.4 173.5 349.1 167 342.7C160.6 336.3 158.4 326.8 161.2 318.1L185 246.8C188.1 237.4 193.4 228.8 200.5 221.8L343.7 78.37L432.8 167.5z"/><path className="fa-secondary" d="M256 8C286.1 8 314.1 13.37 341.7 23.19L303.6 61.7C288.3 57.97 272.4 56 256 56C145.5 56 56 145.5 56 256C56 366.5 145.5 456 256 456C269.3 456 280 466.7 280 480C280 493.3 269.3 504 256 504C119 504 8 392.1 8 256C8 119 119 8 256 8H256zM456 256C456 239.1 454.1 224.3 450.5 209.4L489 170.9C498.7 197.4 504 226.1 504 256C504 339.9 435.9 408 352 408C338.9 408 326.2 406.3 314 403.2C301.2 399.9 293.5 386.8 296.8 373.1C300.1 361.1 313.1 353.4 325.1 356.7C334.3 358.9 342.1 360 352 360C409.4 360 456 313.4 456 256L456 256z"/>
</>],
['light',<>
	<path d="M386.7 23.11C411.6-2.142 452.4-2.267 477.5 22.83L489.4 34.75C514.4 59.74 514.4 100.3 489.4 125.3L296.9 317.8C288.1 326.6 276.9 332.7 264.8 335.2L179.3 353.2C173.1 354.3 168.5 352.6 164.7 348.8C160.9 344.1 159.2 339.5 160.3 334.2L178.3 248.6C180.8 236.5 186.8 225.5 195.4 216.7L386.7 23.11zM454.8 45.46C442.3 32.91 421.9 32.97 409.4 45.6L382.1 72.37L440 129.4L466.8 102.6C479.3 90.13 479.2 69.87 466.8 57.38L454.8 45.46zM209.6 255.1L196.7 316.8L258.2 303.9C264.3 302.6 269.9 299.6 274.3 295.2L417.4 152L360.5 95.14L218.2 239.2C213.9 243.6 210.9 249.1 209.6 255.1L209.6 255.1zM301.1 52.89C286.5 49.69 271.5 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C264.8 464 272 471.2 272 480C272 488.8 264.8 496 256 496C123.5 496 16 388.5 16 256C16 123.5 123.5 16 256 16C280.7 16 304.5 19.73 326.1 26.67L301.1 52.89zM496 256C496 335.5 431.5 400 352 400C339.6 400 327.5 398.4 316 395.5C307.5 393.3 302.3 384.5 304.5 375.1C306.7 367.4 315.4 362.3 323.1 364.5C332.9 366.8 342.3 368 352 368C413.9 368 464 317.9 464 256C464 240.9 462.4 226.1 459.3 211.9L485.5 185.7C492.3 207.9 496 231.5 496 256V256z"/>
</>],
['regular',<>
	<path d="M372.1 25.53C401-2.904 446.9-3.055 475.1 25.19L487 37.1C515.2 65.21 515.2 110.8 487.1 138.9L310.6 315.5C300.7 325.4 288.1 332.2 274.4 335.1L188.9 352.1C180.1 354.7 172.8 352.2 167 346.5C161.3 340.7 158.8 332.5 160.5 324.6L178.5 238.9C181.3 225.4 187.1 212.1 197.7 203.1L372.1 25.53zM441.2 59.14C431.8 49.72 416.5 49.77 407.1 59.25L386.3 80.36L432 126.1L453.1 104.1C462.5 95.6 462.5 80.41 453.1 71.04L441.2 59.14zM225.5 248.8L215 298.5L264.6 288.1C269.1 287.1 273.3 284.9 276.6 281.6L398.1 160L352.6 114.5L231.9 236.8C228.6 240.1 226.4 244.3 225.5 248.8L225.5 248.8zM284.7 58.05C275.3 56.7 265.8 56 256 56C145.5 56 56 145.5 56 256C56 366.5 145.5 456 256 456C269.3 456 280 466.7 280 480C280 493.3 269.3 504 256 504C119 504 8 392.1 8 256C8 119 119 8 256 8C279.8 8 302.9 11.36 324.7 17.63L284.7 58.05zM494.6 187.1C500.7 209.6 504 232.4 504 256C504 339.9 435.9 408 352 408C338.7 408 328 397.3 328 384C328 370.7 338.7 360 352 360C409.4 360 456 313.4 456 256C456 246.7 455.4 237.5 454.1 228.4L494.6 187.1z"/>
</>],
['solid',<>
	<path d="M296.1 68.38C283.8 65.51 270.1 64 256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C273.7 448 288 462.3 288 480C288 497.7 273.7 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C288.4 0 319.3 6.005 347.8 16.96L296.1 68.38zM310.6 349.4C316.1 347.7 322 347.4 327.1 348.1C335.6 350.9 343.7 352 352 352C405 352 448 309 448 255.1C448 242.3 446.6 228.1 443.8 216.1L495.2 164.7C506.1 193 512 223.8 512 255.1C512 344.4 440.4 416 352 416C338.2 416 324.8 414.3 312 410.1C294.9 406.6 284.6 389.1 289 371.1C289.8 368.7 291.2 365.7 292.8 363C299.2 359.2 305.2 354.6 310.6 349.4L310.6 349.4zM495.8 37.88C514.7 56.77 514.5 87.43 495.5 106.1L455.7 145.1L366.4 55.74L406.1 16.02C424.8-2.736 455.2-2.742 473.9 16.01L495.8 37.88zM200.5 221.8L343.7 78.37L432.8 167.5L287.6 309.6C280.7 316.4 272.3 321.5 263.1 324.6L191.6 348.5C182.1 351.4 173.5 349.1 167 342.7C160.6 336.3 158.4 326.8 161.2 318.1L185 246.8C188.1 237.4 193.4 228.8 200.5 221.8V221.8z"/>
</>],
['thin',<>
	<path d="M400.4 20.71C422.2-1.376 457.8-1.478 479.8 20.48L491.7 32.41C513.6 54.28 513.6 89.73 491.7 111.6L283.2 320.2C275.5 327.9 265.8 333.2 255.1 335.4L169.6 353.3C166.1 353.9 164.3 353.1 162.3 351.2C160.4 349.3 159.6 346.5 160.2 343.9L178.1 258.2C180.3 247.7 185.6 238 193.1 230.3L400.4 20.71zM468.5 31.79C452.8 16.11 427.3 16.18 411.8 31.96L371.7 72.43L440 140.7L480.4 100.3C496 84.66 496 59.34 480.4 43.72L468.5 31.79zM193.8 261.5L178.3 335.2L251.8 319.7C259.5 318.1 266.4 314.4 271.9 308.9L428.7 152L360.5 83.8L204.5 241.6C199.1 247.1 195.4 253.1 193.8 261.5V261.5zM256 40C136.7 40 40 136.7 40 256C40 375.3 136.7 472 256 472C260.4 472 264 475.6 264 480C264 484.4 260.4 488 256 488C127.9 488 24 384.1 24 256C24 127.9 127.9 23.1 256 23.1C284.7 23.1 312.2 29.21 337.5 38.74L325.1 51.3C303.4 43.97 280.2 39.1 256 39.1V40zM460.1 187.6L473.5 175.1C482.9 200.3 488 227.5 488 256C488 331.1 427.1 392 352 392C333.1 392 316.8 388.5 300.1 382.1C296.9 380.5 294.9 375.8 296.6 371.7C298.2 367.6 302.9 365.6 307 367.3C320.9 372.9 336.1 376 352 376C418.3 376 472 322.3 472 256C472 232.1 468.1 209.1 460.1 187.6H460.1z"/>
</>],

]);

const PenSwirl: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PenSwirl.displayName = "PenSwirl";

export default PenSwirl;
