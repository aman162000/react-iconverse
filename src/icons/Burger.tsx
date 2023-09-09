
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1z"/><path className="fa-secondary" d="M475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"/>
</>],
['light',<>
	<path d="M49.45 250.1C44.81 248.2 40.83 244.4 37.81 239.9C34.79 235.4 32.79 230.3 31.95 224.1C31.12 219.6 31.48 214.2 32.99 208.1C44.73 158.7 73.16 113.8 113.6 81.63C154.1 49.5 204.3 32.01 256 32.01C307.7 32.01 357.9 49.5 398.4 81.63C438.8 113.8 467.3 158.7 479 208.1C480.5 214.2 480.9 219.6 480 224.1C479.2 230.3 477.2 235.4 474.2 239.9C471.2 244.4 467.2 248.2 462.6 250.1C457.9 253.7 452.7 255.5 447.3 256H64.67C59.29 255.5 54.09 253.7 49.45 250.1zM133.6 106.3C98.73 133.9 74.3 172.5 64.29 215.8C63.87 217.3 63.82 218.8 64.14 220.3C64.46 221.8 65.13 223.2 66.11 224.4L447.3 224C447.8 221.3 447.1 218.5 447.7 215.8C437.7 172.5 413.3 133.9 378.5 106.3C343.6 78.75 300.4 63.82 256 64C211.6 63.82 168.4 78.75 133.6 106.3zM340.7 155.3C337.7 152.3 336 148.2 336 144C336 140.8 336.9 137.7 338.7 135.1C340.5 132.5 342.1 130.4 345.9 129.2C348.8 128 352 127.7 355.1 128.3C358.2 128.9 361.1 130.4 363.3 132.7C365.6 134.9 367.1 137.8 367.7 140.9C368.3 143.1 367.1 147.2 366.8 150.1C365.6 153 363.5 155.5 360.9 157.3C358.3 159.1 355.2 160 352 160C347.8 160 343.7 158.3 340.7 155.3V155.3zM244.7 123.3C241.7 120.3 240 116.2 240 112C240 108.8 240.9 105.7 242.7 103.1C244.5 100.5 246.1 98.43 249.9 97.22C252.8 96.01 256 95.69 259.1 96.31C262.2 96.93 265.1 98.45 267.3 100.7C269.6 102.9 271.1 105.8 271.7 108.9C272.3 111.1 271.1 115.2 270.8 118.1C269.6 121 267.5 123.5 264.9 125.3C262.3 127.1 259.2 128 256 128C251.8 128 247.7 126.3 244.7 123.3V123.3zM148.7 155.3C145.7 152.3 144 148.2 144 144C144 140.8 144.9 137.7 146.7 135.1C148.5 132.5 150.1 130.4 153.9 129.2C156.8 128 160 127.7 163.1 128.3C166.2 128.9 169.1 130.4 171.3 132.7C173.6 134.9 175.1 137.8 175.7 140.9C176.3 143.1 175.1 147.2 174.8 150.1C173.6 153 171.5 155.5 168.9 157.3C166.3 159.1 163.2 160 160 160C155.8 160 151.7 158.3 148.7 155.3L148.7 155.3zM475.3 356.7C478.3 359.7 480 363.8 480 368V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V368C32 363.8 33.69 359.7 36.69 356.7C39.69 353.7 43.76 352 48 352H464C468.2 352 472.3 353.7 475.3 356.7zM448 384H64V416C64 424.5 67.37 432.6 73.37 438.6C79.37 444.6 87.51 448 96 448H416C424.5 448 432.6 444.6 438.6 438.6C444.6 432.6 448 424.5 448 416V384zM491.3 292.7C494.3 295.7 496 299.8 496 304C496 308.2 494.3 312.3 491.3 315.3C488.3 318.3 484.2 320 480 320H32C27.76 320 23.69 318.3 20.69 315.3C17.69 312.3 16 308.2 16 304C16 299.8 17.69 295.7 20.69 292.7C23.69 289.7 27.76 288 32 288H480C484.2 288 488.3 289.7 491.3 292.7z"/>
</>],
['regular',<>
	<path d="M50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM86.4 176H425.6C413 149.5 393 127.3 368 112C368 116.2 366.3 120.3 363.3 123.3C360.3 126.3 356.2 128 352 128C347.8 128 343.7 126.3 340.7 123.3C337.7 120.3 336 116.2 336 112C336 109.3 336.7 106.7 338.1 104.4C339.4 102 341.3 100.1 343.6 98.72C320.4 88.44 295.5 82.41 270.2 80.9C271.3 83.09 271.1 85.52 272 88C272 92.24 270.3 96.31 267.3 99.31C264.3 102.3 260.2 104 256 104C251.8 104 247.7 102.3 244.7 99.31C241.7 96.31 240 92.24 240 88C240 85.52 240.7 83.09 241.8 80.9C216.5 82.41 191.6 88.44 168.4 98.72C170.7 100.1 172.6 102 173.9 104.4C175.3 106.7 175.1 109.3 176 112C176 116.2 174.3 120.3 171.3 123.3C168.3 126.3 164.2 128 160 128C155.8 128 151.7 126.3 148.7 123.3C145.7 120.3 144 116.2 144 112C118.1 127.3 98.95 149.5 86.4 176zM486.6 265.4C492.6 271.4 496 279.5 496 288C496 296.5 492.6 304.6 486.6 310.6C480.6 316.6 472.5 320 464 320H48C39.51 320 31.37 316.6 25.37 310.6C19.37 304.6 16 296.5 16 288C16 279.5 19.37 271.4 25.37 265.4C31.37 259.4 39.51 256 48 256H464C472.5 256 480.6 259.4 486.6 265.4zM475.3 356.7C478.3 359.7 480 363.8 480 368V384C480 409.5 469.9 433.9 451.9 451.9C433.9 469.9 409.5 480 384 480H128C102.5 480 78.12 469.9 60.12 451.9C42.11 433.9 32 409.5 32 384V368C32 363.8 33.69 359.7 36.69 356.7C39.69 353.7 43.76 352 48 352H464C468.2 352 472.3 353.7 475.3 356.7zM411.7 423.2C419.8 417.5 425.9 409.4 429.2 400H82.75C86.06 409.4 92.19 417.5 100.3 423.2C108.4 428.9 118.1 432 128 432H384C393.9 432 403.6 428.9 411.7 423.2z"/>
</>],
['solid',<>
	<path d="M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"/>
</>],
['thin',<>
	<path d="M490.8 341.5C487.4 348.2 482.5 353.1 476.5 358.4C478.7 361.1 479.9 364.5 479.1 368V384C479.1 400.1 473.3 417.3 461.3 429.3C449.3 441.3 432.1 448 415.1 448H95.1C79.02 448 62.75 441.3 50.74 429.3C38.74 417.3 31.1 400.1 31.1 384V368C32.06 364.5 33.3 361.1 35.52 358.4C28.94 353.6 23.71 347.2 20.32 339.7C16.94 332.3 15.51 324.2 16.19 316C16.86 307.9 19.61 300.1 24.17 293.3C28.73 286.6 34.95 281.1 42.24 277.4C37.94 272.5 34.87 266.7 33.26 260.3C31.65 253.1 31.56 247.4 32.99 240.1C44.73 190.7 73.16 145.8 113.6 113.6C154.1 81.5 204.3 64.01 255.1 64.01C307.7 64.01 357.9 81.5 398.3 113.6C438.8 145.8 467.3 190.7 479 240.1C480.4 247.4 480.3 253.1 478.7 260.3C477.1 266.7 474.1 272.5 469.8 277.4C477.6 281.4 484.2 287.5 488.9 295C493.5 302.5 495.1 311.2 495.1 320C495.1 327.5 494.2 334.9 490.8 341.5V341.5zM48.53 255.7C49.33 259.4 50.94 262.1 53.25 265.1C54.57 267.8 56.28 269.3 58.26 270.3C60.24 271.4 62.43 271.9 64.67 272H447.3C449.6 271.9 451.8 271.4 453.7 270.3C455.7 269.3 457.4 267.8 458.7 265.1C461.1 262.1 462.7 259.4 463.5 255.7C464.3 251.1 464.2 248.1 463.4 244.4C452.4 197.6 425.1 155.9 388.3 126.1C350.7 96.22 304 79.97 255.1 79.97C207.1 79.97 161.3 96.22 123.7 126.1C86.03 155.9 59.58 197.6 48.64 244.4C47.77 248.1 47.73 251.1 48.53 255.7zM463.1 368H47.1V384C47.1 396.7 53.06 408.9 62.06 417.9C71.06 426.9 83.27 432 95.1 432H415.1C428.7 432 440.9 426.9 449.9 417.9C458.9 408.9 463.1 396.7 463.1 384V368zM470.6 342.6C476.6 336.6 479.1 328.5 479.1 320C479.1 311.5 476.6 303.4 470.6 297.4C464.6 291.4 456.5 288 447.1 288H63.1C55.51 288 47.37 291.4 41.37 297.4C35.37 303.4 31.1 311.5 31.1 320C31.1 328.5 35.37 336.6 41.37 342.6C47.37 348.6 55.51 352 63.1 352H447.1C456.5 352 464.6 348.6 470.6 342.6zM356.7 187.3C353.7 184.3 351.1 180.2 351.1 176C351.1 172.8 352.9 169.7 354.7 167.1C356.5 164.5 358.1 162.4 361.9 161.2C364.8 160 368 159.7 371.1 160.3C374.2 160.9 377.1 162.4 379.3 164.7C381.5 166.9 383.1 169.8 383.7 172.9C384.3 175.1 383.1 179.2 382.8 182.1C381.6 185 379.5 187.5 376.9 189.3C374.3 191.1 371.2 192 367.1 192C363.8 192 359.7 190.3 356.7 187.3V187.3zM244.7 155.3C241.7 152.3 239.1 148.2 239.1 144C239.1 140.8 240.9 137.7 242.7 135.1C244.5 132.5 246.1 130.4 249.9 129.2C252.8 128 256 127.7 259.1 128.3C262.2 128.9 265.1 130.4 267.3 132.7C269.5 134.9 271.1 137.8 271.7 140.9C272.3 143.1 271.1 147.2 270.8 150.1C269.6 153 267.5 155.5 264.9 157.3C262.3 159.1 259.2 160 255.1 160C251.8 160 247.7 158.3 244.7 155.3V155.3zM132.7 187.3C129.7 184.3 127.1 180.2 127.1 176C127.1 172.8 128.9 169.7 130.7 167.1C132.5 164.5 134.1 162.4 137.9 161.2C140.8 160 144 159.7 147.1 160.3C150.2 160.9 153.1 162.4 155.3 164.7C157.5 166.9 159.1 169.8 159.7 172.9C160.3 175.1 159.1 179.2 158.8 182.1C157.6 185 155.5 187.5 152.9 189.3C150.3 191.1 147.2 192 143.1 192C139.8 192 135.7 190.3 132.7 187.3L132.7 187.3z"/>
</>],

]);

const Burger: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Burger.displayName = "Burger";

export default Burger;
