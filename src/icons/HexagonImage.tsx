
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M175.7 271.1C182.4 271.9 188.7 274.6 193.3 279.4L232.2 320L303.8 233.8C308.4 228.3 315.2 225.1 322.3 225.1C329.4 225.1 336.2 228.3 340.7 233.8L413.4 321.2L358.1 416.9C355.3 421.9 350 424.9 344.3 424.9H167.7C161.1 424.9 156.7 421.9 153.9 416.9L107.1 335.9L158.3 279.8C162.8 274.9 169.1 272.1 175.7 271.1V271.1z"/><path className="fa-secondary" d="M105.4 67.08C118.2 44.8 141.1 31.08 167.7 31.08H344.3C370 31.08 393.8 44.8 406.6 67.08L494.9 219.1C507.8 242.3 507.8 269.7 494.9 291.1L406.6 444.9C393.8 467.2 370 480.9 344.3 480.9H167.7C141.1 480.9 118.2 467.2 105.4 444.9L17.07 291.1C4.206 269.7 4.206 242.3 17.07 219.1L105.4 67.08zM158.3 279.8L107.1 335.9L153.9 416.9C156.7 421.9 161.1 424.9 167.7 424.9H344.3C350 424.9 355.3 421.9 358.1 416.9L413.4 321.2L340.7 233.8C336.2 228.3 329.4 225.1 322.3 225.1C315.2 225.1 308.4 228.3 303.8 233.8L232.2 320L193.3 279.4C188.7 274.6 182.4 271.9 175.7 271.1C169.1 272.1 162.8 274.9 158.3 279.8V279.8zM192 199.1C214.1 199.1 232 182.1 232 159.1C232 137.9 214.1 119.1 192 119.1C169.9 119.1 152 137.9 152 159.1C152 182.1 169.9 199.1 192 199.1z"/>
</>],
['light',<>
	<path d="M240 160C240 186.5 218.5 208 192 208C165.5 208 144 186.5 144 160C144 133.5 165.5 112 192 112C218.5 112 240 133.5 240 160zM192 144C183.2 144 176 151.2 176 160C176 168.8 183.2 176 192 176C200.8 176 208 168.8 208 160C208 151.2 200.8 144 192 144zM15.1 287.1C4.565 268.2 4.565 243.8 15.1 223.1L108.3 64.15C119.7 44.35 140.8 32.15 163.7 32.15H348.3C371.1 32.15 392.3 44.35 403.7 64.15L495.1 223.1C507.4 243.8 507.4 268.2 495.1 287.1L403.7 447.8C392.3 467.6 371.1 479.8 348.3 479.8H163.7C140.8 479.8 119.7 467.6 108.3 447.8L15.1 287.1zM43.71 239.1C37.99 249.9 37.99 262.1 43.71 271.1L73.31 323.3L116 280.6C131.4 265.1 156.4 264.9 172.1 280.1L227.4 333.5L322.8 231.7C338.6 214.9 365.4 214.9 381.2 231.7L449.5 304.6L468.3 271.1C474 262.1 474 249.9 468.3 239.1L375.1 80.15C370.3 70.25 359.7 64.15 348.3 64.15H163.7C152.3 64.15 141.7 70.25 135.1 80.15L43.71 239.1zM205.5 356.9L149.8 303.1C146.7 300.1 141.7 300.1 138.6 303.2L89.87 351.1L135.7 431.3L205.5 356.9zM432.8 333.5L357.8 253.6C354.7 250.2 349.3 250.2 346.2 253.6L164.1 447.8H348.3C359.7 447.8 370.3 441.7 375.1 431.8L432.8 333.5z"/>
</>],
['regular',<>
	<path d="M232 159.1C232 182.1 214.1 199.1 192 199.1C169.9 199.1 152 182.1 152 159.1C152 137.9 169.9 119.1 192 119.1C214.1 119.1 232 137.9 232 159.1zM105.4 67.08C118.2 44.81 141.1 31.08 167.7 31.08H344.3C370 31.08 393.8 44.81 406.6 67.08L494.9 219.1C507.8 242.3 507.8 269.7 494.9 291.1L406.6 444.9C393.8 467.2 370 480.9 344.3 480.9H167.7C141.1 480.9 118.2 467.2 105.4 444.9L17.07 291.1C4.206 269.7 4.206 242.3 17.07 219.1L105.4 67.08zM101.4 342.1L158.3 279.8C162.8 274.9 169.1 272.1 175.7 272C182.4 271.9 188.7 274.6 193.3 279.4L232.2 320L303.8 233.8C308.4 228.3 315.2 225.1 322.3 225.1C329.4 225.1 336.2 228.3 340.7 233.8L418.8 327.8L453.4 267.1C457.6 260.6 457.6 251.4 453.4 243.1L365.1 91.08C360.8 83.66 352.9 79.08 344.3 79.08H167.7C159.1 79.08 151.2 83.66 146.9 91.08L58.64 243.1C54.35 251.4 54.35 260.6 58.64 267.1L101.4 342.1z"/>
</>],
['solid',<>
	<path d="M105.4 67.08C118.2 44.81 141.1 31.08 167.7 31.08H344.3C370 31.08 393.8 44.81 406.6 67.08L494.9 219.1C507.8 242.3 507.8 269.7 494.9 291.1L406.6 444.9C393.8 467.2 370 480.9 344.3 480.9H167.7C141.1 480.9 118.2 467.2 105.4 444.9L17.07 291.1C4.206 269.7 4.206 242.3 17.07 219.1L105.4 67.08zM158.3 279.8L107.1 335.9L153.9 416.9C156.7 421.9 161.1 424.9 167.7 424.9H344.3C350 424.9 355.3 421.9 358.1 416.9L413.4 321.2L340.7 233.8C336.2 228.3 329.4 225.1 322.3 225.1C315.2 225.1 308.4 228.3 303.8 233.8L232.2 320L193.3 279.4C188.7 274.6 182.4 271.9 175.7 272C169.1 272.1 162.8 274.9 158.3 279.8V279.8zM192 199.1C214.1 199.1 232 182.1 232 159.1C232 137.9 214.1 119.1 192 119.1C169.9 119.1 152 137.9 152 159.1C152 182.1 169.9 199.1 192 199.1z"/>
</>],
['thin',<>
	<path d="M144 160C144 133.5 165.5 112 192 112C218.5 112 240 133.5 240 160C240 186.5 218.5 208 192 208C165.5 208 144 186.5 144 160zM192 128C174.3 128 160 142.3 160 160C160 177.7 174.3 192 192 192C209.7 192 224 177.7 224 160C224 142.3 209.7 128 192 128zM352.3 478.8H159.7C139.7 478.8 121.2 468.1 111.2 450.8L14.93 284C8.812 273.4 6.435 261.3 7.797 249.6C8.662 242.1 11.04 234.7 14.93 228L111.2 61.23C121.2 43.9 139.7 33.23 159.7 33.23H352.3C372.3 33.23 390.8 43.9 400.8 61.23L497.1 228C500.5 233.9 502.7 240.3 503.8 246.8C505.1 254.6 504.7 262.7 502.7 270.4C501.4 275.1 499.6 279.7 497.1 284L400.8 450.8C390.8 468.1 372.3 478.8 352.3 478.8V478.8zM386.9 69.23C379.8 56.85 366.6 49.23 352.3 49.23H159.7C145.4 49.23 132.2 56.85 125.1 69.23L28.78 236C26.96 239.2 25.61 242.5 24.71 245.9C23.85 249.2 23.42 252.6 23.42 256C23.42 262.9 25.21 269.8 28.78 276L72.38 351.5L137.7 286.2C150 273.9 169.1 273.7 182.5 285.9L243.7 344.9L344.7 237.2C357.3 223.7 378.7 223.7 391.3 237.2L462.1 312.6L483.2 276C484.1 274.5 484.9 272.9 485.6 271.2L488.2 250.8C487.6 245.7 485.9 240.6 483.2 236L386.9 69.23zM80.66 365.9L125.1 442.8C128.4 448.6 133.2 453.4 138.7 456.8L232.7 356.6L171.4 297.4C165.1 291.3 155.1 291.4 148.1 297.5L80.66 365.9zM386.9 442.8L453.7 327.1L379.7 248.1C373.4 241.4 362.6 241.4 356.3 248.1L155.3 462.5C156.8 462.7 158.2 462.8 159.7 462.8H352.3C366.6 462.8 379.8 455.2 386.9 442.8H386.9z"/>
</>],

]);

const HexagonImage: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HexagonImage.displayName = "HexagonImage";

export default HexagonImage;
