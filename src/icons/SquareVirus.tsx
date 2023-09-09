
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M303.9 140.9C313.3 131.5 328.5 131.5 337.8 140.9C347.2 150.2 347.2 165.4 337.8 174.8C317.2 195.5 331.8 230.9 361.1 230.9C374.3 230.9 385.1 241.6 385.1 254.9C385.1 268.1 374.3 278.9 361.1 278.9C331.8 278.9 317.2 314.3 337.8 334.9C347.2 344.3 347.2 359.5 337.8 368.9C328.5 378.3 313.3 378.3 303.9 368.9C283.2 348.2 247.8 362.8 247.8 392.1C247.8 405.4 237.1 416.1 223.8 416.1C210.6 416.1 199.8 405.4 199.8 392.1C199.8 362.8 164.5 348.2 143.8 368.9C134.4 378.3 119.2 378.3 109.8 368.9C100.5 359.5 100.5 344.3 109.8 334.9C130.5 314.3 115.9 278.9 86.61 278.9C73.35 278.9 62.61 268.1 62.61 254.9C62.61 241.6 73.35 230.9 86.61 230.9C115.9 230.9 130.5 195.5 109.8 174.8C100.5 165.4 100.5 150.2 109.8 140.9C119.2 131.5 134.4 131.5 143.8 140.9C164.5 161.6 199.8 146.9 199.8 117.6C199.8 104.4 210.6 93.65 223.8 93.65C237.1 93.65 247.8 104.4 247.8 117.6C247.8 146.9 283.2 161.6 303.9 140.9H303.9zM191.1 191.1C174.3 191.1 159.1 206.3 159.1 223.1C159.1 241.7 174.3 255.1 191.1 255.1C209.7 255.1 223.1 241.7 223.1 223.1C223.1 206.3 209.7 191.1 191.1 191.1zM256 311.1C269.3 311.1 280 301.3 280 287.1C280 274.7 269.3 263.1 256 263.1C242.7 263.1 232 274.7 232 287.1C232 301.3 242.7 311.1 256 311.1z"/><path className="fa-secondary" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM199.8 117.7C199.8 146.9 164.5 161.6 143.8 140.9C134.4 131.5 119.2 131.5 109.8 140.9C100.5 150.2 100.5 165.4 109.8 174.8C130.5 195.5 115.9 230.9 86.61 230.9C73.35 230.9 62.61 241.6 62.61 254.9C62.61 268.1 73.35 278.9 86.61 278.9C115.9 278.9 130.5 314.3 109.8 334.9C100.5 344.3 100.5 359.5 109.8 368.9C119.2 378.3 134.4 378.3 143.8 368.9C164.5 348.2 199.8 362.9 199.8 392.1C199.8 405.4 210.6 416.1 223.8 416.1C237.1 416.1 247.8 405.4 247.8 392.1C247.8 362.9 283.2 348.2 303.9 368.9C313.3 378.3 328.5 378.3 337.8 368.9C347.2 359.5 347.2 344.3 337.8 334.9C317.2 314.3 331.8 278.9 361.1 278.9C374.3 278.9 385.1 268.1 385.1 254.9C385.1 241.6 374.3 230.9 361.1 230.9C331.8 230.9 317.2 195.5 337.8 174.8C347.2 165.4 347.2 150.2 337.8 140.9C328.5 131.5 313.3 131.5 303.9 140.9C283.2 161.6 247.8 146.9 247.8 117.7C247.8 104.4 237.1 93.65 223.8 93.65C210.6 93.65 199.8 104.4 199.8 117.7H199.8z"/>
</>],
['light',<>
	<path d="M216 224C216 237.3 205.3 248 192 248C178.7 248 168 237.3 168 224C168 210.7 178.7 200 192 200C205.3 200 216 210.7 216 224zM224 280C224 266.7 234.7 256 248 256C261.3 256 272 266.7 272 280C272 293.3 261.3 304 248 304C234.7 304 224 293.3 224 280zM333.1 215.3C338.6 224.4 348.5 230.9 361.1 230.9C374.3 230.9 385.1 241.6 385.1 254.9C385.1 268.1 374.3 278.9 361.1 278.9C331.8 278.9 317.2 314.3 337.8 334.9C347.2 344.3 347.2 359.5 337.8 368.9C328.5 378.3 313.3 378.3 303.9 368.9C283.2 348.2 247.8 362.8 247.8 392.1C247.8 405.4 237.1 416.1 223.8 416.1C210.6 416.1 199.8 405.4 199.8 392.1C199.8 362.8 164.5 348.2 143.8 368.9C134.4 378.3 119.2 378.3 109.8 368.9C100.5 359.5 100.5 344.3 109.8 334.9C130.5 314.3 115.9 278.9 86.61 278.9C73.35 278.9 62.61 268.1 62.61 254.9C62.61 241.6 73.35 230.9 86.61 230.9C115.9 230.9 130.5 195.5 109.8 174.8C100.5 165.4 100.5 150.2 109.8 140.9C119.2 131.5 134.4 131.5 143.8 140.9C164.5 161.6 199.8 146.9 199.8 117.6C199.8 104.4 210.6 93.65 223.8 93.65C237.1 93.65 247.8 104.4 247.8 117.6C247.8 146.9 283.2 161.6 303.9 140.9C313.3 131.5 328.5 131.5 337.8 140.9C347.2 150.2 347.2 165.4 337.8 174.8C326 186.6 325.7 203.2 333.1 215.3H333.1zM223.8 149.3C209.4 175.3 177.8 188.4 149.2 180.2C157.3 208.8 144.2 240.4 118.2 254.9C144.2 269.3 157.3 300.9 149.2 329.6C177.8 321.4 209.4 334.5 223.8 360.5C238.3 334.5 269.9 321.4 298.5 329.6C290.3 300.9 303.4 269.3 329.4 254.9C303.4 240.4 290.3 208.8 298.5 180.2C269.9 188.4 238.3 175.3 223.8 149.3zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64H64C46.33 64 32 78.33 32 96z"/>
</>],
['regular',<>
	<path d="M224 109.6C237.3 109.6 248 120.3 248 133.6C248 157.4 276.8 169.3 293.6 152.5C302.1 143.1 318.2 143.1 327.5 152.5C336.9 161.8 336.9 177 327.5 186.4C310.7 203.2 322.6 231.1 346.4 231.1C359.7 231.1 370.4 242.7 370.4 255.1C370.4 269.3 359.7 279.1 346.4 279.1C322.6 279.1 310.7 308.8 327.5 325.6C336.9 334.1 336.9 350.2 327.5 359.5C318.2 368.9 302.1 368.9 293.6 359.5C276.8 342.7 248 354.6 248 378.4C248 391.7 237.3 402.4 224 402.4C210.7 402.4 200 391.7 200 378.4C200 354.6 171.2 342.7 154.4 359.5C145 368.9 129.8 368.9 120.5 359.5C111.1 350.2 111.1 334.1 120.5 325.6C137.3 308.8 125.4 279.1 101.6 279.1C88.32 279.1 77.58 269.3 77.58 255.1C77.58 242.7 88.32 231.1 101.6 231.1C125.4 231.1 137.3 203.2 120.5 186.4C111.1 177 111.1 161.8 120.5 152.5C129.8 143.1 145 143.1 154.4 152.5C171.2 169.3 200 157.4 200 133.6C200 120.3 210.7 109.6 224 109.6V109.6zM192 256C209.7 256 224 241.7 224 224C224 206.3 209.7 192 192 192C174.3 192 160 206.3 160 224C160 241.7 174.3 256 192 256zM256 264C242.7 264 232 274.7 232 288C232 301.3 242.7 312 256 312C269.3 312 280 301.3 280 288C280 274.7 269.3 264 256 264zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/>
</>],
['solid',<>
	<path d="M160 224C160 206.3 174.3 192 192 192C209.7 192 224 206.3 224 224C224 241.7 209.7 256 192 256C174.3 256 160 241.7 160 224zM280 288C280 301.3 269.3 312 256 312C242.7 312 232 301.3 232 288C232 274.7 242.7 264 256 264C269.3 264 280 274.7 280 288zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM199.8 117.7C199.8 146.9 164.5 161.6 143.8 140.9C134.4 131.5 119.2 131.5 109.8 140.9C100.5 150.2 100.5 165.4 109.8 174.8C130.5 195.5 115.9 230.9 86.61 230.9C73.35 230.9 62.61 241.6 62.61 254.9C62.61 268.1 73.35 278.9 86.61 278.9C115.9 278.9 130.5 314.3 109.8 334.9C100.5 344.3 100.5 359.5 109.8 368.9C119.2 378.3 134.4 378.3 143.8 368.9C164.5 348.2 199.8 362.9 199.8 392.1C199.8 405.4 210.6 416.1 223.8 416.1C237.1 416.1 247.8 405.4 247.8 392.1C247.8 362.9 283.2 348.2 303.9 368.9C313.3 378.3 328.5 378.3 337.8 368.9C347.2 359.5 347.2 344.3 337.8 334.9C317.2 314.3 331.8 278.9 361.1 278.9C374.3 278.9 385.1 268.1 385.1 254.9C385.1 241.6 374.3 230.9 361.1 230.9C331.8 230.9 317.2 195.5 337.8 174.8C347.2 165.4 347.2 150.2 337.8 140.9C328.5 131.5 313.3 131.5 303.9 140.9C283.2 161.6 247.8 146.9 247.8 117.7C247.8 104.4 237.1 93.65 223.8 93.65C210.6 93.65 199.8 104.4 199.8 117.7H199.8z"/>
</>],
['thin',<>
	<path d="M160 224C160 206.3 174.3 192 192 192C209.7 192 224 206.3 224 224C224 241.7 209.7 256 192 256C174.3 256 160 241.7 160 224zM192 240C200.8 240 208 232.8 208 224C208 215.2 200.8 208 192 208C183.2 208 176 215.2 176 224C176 232.8 183.2 240 192 240zM280 288C280 301.3 269.3 312 256 312C242.7 312 232 301.3 232 288C232 274.7 242.7 264 256 264C269.3 264 280 274.7 280 288zM256 280C251.6 280 248 283.6 248 288C248 292.4 251.6 296 256 296C260.4 296 264 292.4 264 288C264 283.6 260.4 280 256 280zM345.5 227.1C350 229.5 355.3 230.9 361.1 230.9C374.3 230.9 385.1 241.6 385.1 254.9C385.1 268.1 374.3 278.9 361.1 278.9C331.8 278.9 317.2 314.3 337.8 334.9C347.2 344.3 347.2 359.5 337.8 368.9C328.5 378.3 313.3 378.3 303.9 368.9C283.2 348.2 247.8 362.8 247.8 392.1C247.8 405.4 237.1 416.1 223.8 416.1C210.6 416.1 199.8 405.4 199.8 392.1C199.8 362.8 164.5 348.2 143.8 368.9C134.4 378.3 119.2 378.3 109.8 368.9C100.5 359.5 100.5 344.3 109.8 334.9C130.5 314.3 115.9 278.9 86.61 278.9C73.35 278.9 62.61 268.1 62.61 254.9C62.61 241.6 73.35 230.9 86.61 230.9C115.9 230.9 130.5 195.5 109.8 174.8C100.5 165.4 100.5 150.2 109.8 140.9C119.2 131.5 134.4 131.5 143.8 140.9C164.5 161.6 199.8 146.9 199.8 117.6C199.8 104.4 210.6 93.65 223.8 93.65C237.1 93.65 247.8 104.4 247.8 117.6C247.8 146.9 283.2 161.6 303.9 140.9C313.3 131.5 328.5 131.5 337.8 140.9C347.2 150.2 347.2 165.4 337.8 174.8C321.3 191.4 327.4 217.4 345.5 227.1L345.5 227.1zM215.8 117.6C215.8 161.2 163.2 182.1 132.5 152.2C129.3 149.1 124.3 149.1 121.1 152.2C118 155.3 118 160.4 121.1 163.5C151.9 194.3 130.1 246.9 86.61 246.9C82.19 246.9 78.61 250.5 78.61 254.9C78.61 259.3 82.19 262.9 86.61 262.9C130.1 262.9 151.9 315.5 121.1 346.3C118 349.4 118 354.4 121.1 357.6C124.3 360.7 129.3 360.7 132.5 357.6C163.2 326.8 215.8 348.6 215.8 392.1C215.8 396.5 219.4 400.1 223.8 400.1C228.3 400.1 231.8 396.5 231.8 392.1C231.8 348.6 284.4 326.8 315.2 357.6C318.3 360.7 323.4 360.7 326.5 357.6C329.7 354.4 329.7 349.4 326.5 346.3C295.8 315.5 317.6 262.9 361.1 262.9C365.5 262.9 369.1 259.3 369.1 254.9C369.1 250.5 365.5 246.9 361.1 246.9C317.6 246.9 295.8 194.3 326.5 163.5C329.7 160.4 329.7 155.3 326.5 152.2C323.4 149.1 318.3 149.1 315.2 152.2C284.4 182.1 231.8 161.2 231.8 117.6C231.8 113.2 228.3 109.6 223.8 109.6C219.4 109.6 215.8 113.2 215.8 117.6H215.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM16 96V416C16 442.5 37.49 464 64 464H384C410.5 464 432 442.5 432 416V96C432 69.49 410.5 48 384 48H64C37.49 48 16 69.49 16 96z"/>
</>],

]);

const SquareVirus: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareVirus.displayName = "SquareVirus";

export default SquareVirus;
