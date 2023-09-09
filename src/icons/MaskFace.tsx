
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M396.4 87.12L433.5 111.9C449.3 122.4 467.8 128 486.8 128H512C529.7 128 544 142.3 544 160V224C544 347.7 443.7 448 320 448C196.3 448 96 347.7 96 224V160C96 142.3 110.3 128 128 128H153.2C172.2 128 190.7 122.4 206.5 111.9L243.6 87.12C266.2 72.05 292.8 64 320 64C347.2 64 373.8 72.05 396.4 87.12zM208 224H432C440.8 224 448 216.8 448 208C448 199.2 440.8 192 432 192H208C199.2 192 192 199.2 192 208C192 216.8 199.2 224 208 224zM208 256C199.2 256 192 263.2 192 272C192 280.8 199.2 288 208 288H432C440.8 288 448 280.8 448 272C448 263.2 440.8 256 432 256H208zM240 352H400C408.8 352 416 344.8 416 336C416 327.2 408.8 320 400 320H240C231.2 320 224 327.2 224 336C224 344.8 231.2 352 240 352z"/><path className="fa-secondary" d="M96 160V176H56C51.58 176 48 179.6 48 184V269C48 302.1 70.49 330.9 102.5 338.9L132.3 346.3C149.6 372.8 172.3 395.4 198.9 412.5L90.9 385.5C37.48 372.1 0 324.1 0 269V184C0 153.1 25.07 128 56 128H128C110.3 128 96 142.3 96 160L96 160zM507.7 346.3L537.5 338.9C569.5 330.9 592 302.1 592 269V184C592 179.6 588.4 176 584 176H544V160C544 142.3 529.7 128 512 128H584C614.9 128 640 153.1 640 184V269C640 324.1 602.5 372.1 549.1 385.5L441.1 412.5C467.7 395.4 490.4 372.8 507.7 346.3V346.3z"/>
</>],
['light',<>
	<path d="M432 192C440.8 192 448 199.2 448 208C448 216.8 440.8 224 432 224H208C199.2 224 192 216.8 192 208C192 199.2 199.2 192 208 192H432zM192 272C192 263.2 199.2 256 208 256H432C440.8 256 448 263.2 448 272C448 280.8 440.8 288 432 288H208C199.2 288 192 280.8 192 272zM400 320C408.8 320 416 327.2 416 336C416 344.8 408.8 352 400 352H240C231.2 352 224 344.8 224 336C224 327.2 231.2 320 240 320H400zM206.5 111.9L243.6 87.12C266.2 72.05 292.8 64 320 64C347.2 64 373.8 72.05 396.4 87.12L433.5 111.9C449.3 122.4 467.8 128 486.8 128H592C618.5 128 640 149.5 640 176V261C640 312.4 605 357.2 555.2 369.7L469 391.2C429.4 426.5 377.2 448 320 448C262.8 448 210.6 426.5 170.1 391.2L84.84 369.7C34.98 357.2 0 312.4 0 261V176C0 149.5 21.49 128 48 128H153.2C172.2 128 190.7 122.4 206.5 111.9V111.9zM320 96C299.1 96 278.7 102.2 261.4 113.8L224.2 138.5C203.2 152.5 178.5 160 153.2 160H128V224C128 330 213.1 416 320 416C426 416 512 330 512 224V160H486.8C461.5 160 436.8 152.5 415.8 138.5L378.6 113.8C361.3 102.2 340.9 96 320 96zM32 176V261C32 297.8 56.98 329.8 92.6 338.7L134.1 349C110 313.3 96 270.3 96 224V160H48C39.16 160 32 167.2 32 176V176zM608 261V176C608 167.2 600.8 160 592 160H544V224C544 270.3 529.9 313.3 505.9 349L547.4 338.7C583 329.8 608 297.8 608 261V261z"/>
</>],
['regular',<>
	<path d="M432 192C440.8 192 448 199.2 448 208C448 216.8 440.8 224 432 224H208C199.2 224 192 216.8 192 208C192 199.2 199.2 192 208 192H432zM192 272C192 263.2 199.2 256 208 256H432C440.8 256 448 263.2 448 272C448 280.8 440.8 288 432 288H208C199.2 288 192 280.8 192 272zM400 320C408.8 320 416 327.2 416 336C416 344.8 408.8 352 400 352H240C231.2 352 224 344.8 224 336C224 327.2 231.2 320 240 320H400zM0 269V184C0 153.1 25.07 128 56 128H153.2C172.2 128 190.7 122.4 206.5 111.9L243.6 87.12C266.2 72.05 292.8 64 320 64C347.2 64 373.8 72.05 396.4 87.12L433.5 111.9C449.3 122.4 467.8 128 486.8 128H584C614.9 128 640 153.1 640 184V269C640 324.1 602.5 372.1 549.1 385.5L441.1 412.5C406.2 434.1 364.6 448 320 448C275.4 448 233.8 434.1 198.9 412.5L90.9 385.5C37.48 372.1 0 324.1 0 269zM320 112C302.3 112 284.1 117.2 270.2 127.1L233.1 151.8C209.5 167.6 181.7 176 153.2 176H144V224C144 283.5 173.5 336.1 218.7 367.9L221.8 368.7L221.5 369.9C249.6 388.9 283.5 400 320 400C356.5 400 390.4 388.9 418.5 369.9L418.2 368.7L421.3 367.9C466.5 336.1 496 283.5 496 224V176H486.8C458.3 176 430.5 167.6 406.9 151.8L369.8 127.1C355 117.2 337.7 112 320 112V112zM96 224V176H56C51.58 176 48 179.6 48 184V269C48 302.1 70.49 330.9 102.5 338.9L132.3 346.3C109.4 311.2 95.1 269.1 95.1 224H96zM592 269V184C592 179.6 588.4 176 584 176H544V224C544 269.1 530.6 311.2 507.7 346.3L537.5 338.9C569.5 330.9 592 302.1 592 269H592z"/>
</>],
['solid',<>
	<path d="M396.4 87.12L433.5 111.9C449.3 122.4 467.8 128 486.8 128H584C614.9 128 640 153.1 640 184V269C640 324.1 602.5 372.1 549.1 385.5L441.1 412.5C406.2 434.1 364.6 448 320 448C275.4 448 233.8 434.1 198.9 412.5L90.9 385.5C37.48 372.1 0 324.1 0 269V184C0 153.1 25.07 128 56 128H153.2C172.2 128 190.7 122.4 206.5 111.9L243.6 87.12C266.2 72.05 292.8 64 320 64C347.2 64 373.8 72.05 396.4 87.12zM132.3 346.3C109.4 311.2 96 269.1 96 224V176H56C51.58 176 48 179.6 48 184V269C48 302.1 70.49 330.9 102.5 338.9L132.3 346.3zM592 269V184C592 179.6 588.4 176 584 176H544V224C544 269.1 530.6 311.2 507.7 346.3L537.5 338.9C569.5 330.9 592 302.1 592 269H592zM208 224H432C440.8 224 448 216.8 448 208C448 199.2 440.8 192 432 192H208C199.2 192 192 199.2 192 208C192 216.8 199.2 224 208 224zM208 256C199.2 256 192 263.2 192 272C192 280.8 199.2 288 208 288H432C440.8 288 448 280.8 448 272C448 263.2 440.8 256 432 256H208zM240 352H400C408.8 352 416 344.8 416 336C416 327.2 408.8 320 400 320H240C231.2 320 224 327.2 224 336C224 344.8 231.2 352 240 352z"/>
</>],
['thin',<>
	<path d="M432 192C436.4 192 440 195.6 440 200C440 204.4 436.4 208 432 208H208C203.6 208 200 204.4 200 200C200 195.6 203.6 192 208 192H432zM200 264C200 259.6 203.6 256 208 256H432C436.4 256 440 259.6 440 264C440 268.4 436.4 272 432 272H208C203.6 272 200 268.4 200 264zM400 320C404.4 320 408 323.6 408 328C408 332.4 404.4 336 400 336H240C235.6 336 232 332.4 232 328C232 323.6 235.6 320 240 320H400zM206.5 111.9L243.6 87.12C266.2 72.05 292.8 64 320 64C347.2 64 373.8 72.05 396.4 87.12L433.5 111.9C449.3 122.4 467.8 128 486.8 128H600C622.1 128 640 145.9 640 168V253C640 300.8 607.5 342.4 561.2 353.9L487.9 372.3C446.9 418.7 386.9 448 320 448C253.1 448 193.1 418.7 152.1 372.3L78.78 353.9C32.48 342.4 0 300.8 0 253V168C0 145.9 17.91 128 40 128H153.2C172.2 128 190.7 122.4 206.5 111.9H206.5zM320 80C295.1 80 272.5 87.11 252.5 100.4L215.4 125.2C196.1 137.5 175.4 143.1 153.2 143.1H112V223.1C112 275 130.4 321.8 160.9 357.1L161.7 358.2L161.6 358.8C199.7 403.6 256.5 432 320 432C383.5 432 440.3 403.6 478.4 358.8L478.3 358.2L479.1 357.1C509.6 321.8 528 275 528 223.1V143.1H486.8C464.6 143.1 443 137.5 424.6 125.2L387.5 100.4C367.5 87.11 344 80 320 80V80zM16 168V253C16 293.4 43.48 328.6 82.66 338.4L135.1 351.7C110.8 315.5 96 271.5 96 224V144H40C26.75 144 16 154.7 16 168V168zM624 253V168C624 154.7 613.3 144 600 144H544V224C544 271.5 529.2 315.5 504 351.7L557.3 338.4C596.5 328.6 624 293.4 624 253V253z"/>
</>],

]);

const MaskFace: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MaskFace.displayName = "MaskFace";

export default MaskFace;
