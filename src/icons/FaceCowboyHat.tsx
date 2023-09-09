
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M133.6 109.8C148.6 64.93 179.2 0 216 0C225.1 0 233.9 4.003 242.1 10.71C250.1 17.16 261.9 17.16 269.9 10.71C278.1 4.003 286.9 0 296 0C332.8 0 363.4 64.93 378.4 109.8C411.1 99.32 441.1 84.62 466.9 66.75C469.4 64.98 472.3 64 475.3 64C484.3 64 490.1 72.25 488.2 80.75C461.2 163.2 367.5 224 256 224C144.5 224 50.77 163.2 23.8 80.75C21.02 72.25 27.72 64 36.66 64C39.7 64 42.64 64.99 45.1 66.75C70.04 84.62 100 99.32 133.6 109.8H133.6zM216 296C216 309.3 205.3 320 192 320C178.7 320 168 309.3 168 296C168 282.7 178.7 272 192 272C205.3 272 216 282.7 216 296zM296 295.1C296 282.7 306.7 271.1 320 271.1C333.3 271.1 344 282.7 344 295.1C344 309.3 333.3 319.1 320 319.1C306.7 319.1 296 309.3 296 295.1z"/><path className="fa-secondary" d="M48 303.1C48 254.6 65.2 209.3 93.93 173.6C136.6 204.9 193.5 223.1 256 223.1C318.5 223.1 375.4 204.9 418.1 173.6C446.8 209.3 464 254.6 464 303.1C464 418.9 370.9 512 256 512C141.1 512 48 418.9 48 303.1zM256.2 376.8C223.5 376.8 192.5 372.5 164.6 364.7C152.2 361.2 140.3 371.1 146 383.5C166.2 424.1 207.1 452 256.2 452C304.5 452 346.2 424.1 366.4 383.5C372.1 371.1 360.2 361.2 347.8 364.7C319.9 372.5 288.9 376.8 256.2 376.8zM192 271.1C178.7 271.1 168 282.7 168 295.1C168 309.3 178.7 319.1 192 319.1C205.3 319.1 216 309.3 216 295.1C216 282.7 205.3 271.1 192 271.1zM320 319.1C333.3 319.1 344 309.3 344 295.1C344 282.7 333.3 271.1 320 271.1C306.7 271.1 296 282.7 296 295.1C296 309.3 306.7 319.1 320 319.1z"/>
</>],
['light',<>
	<path d="M296 0C330.2 0 358.1 62.1 374.1 110.9C405.5 101.7 433.1 88.1 456.8 73.62L457.1 73.45C458.1 72.81 459 72.17 460 71.53C462.3 69.96 464.6 68.37 466.9 66.75C469.4 64.98 472.3 64 475.3 64C484.3 64 490.1 72.25 488.2 80.75C487 84.26 485.8 87.73 484.4 91.16C483.1 92.18 483.6 93.19 483.1 94.21L482.1 94.59C450.5 169.9 361.2 223.1 255.1 223.1C150.8 223.1 61.49 169.9 29.04 94.59L28.88 94.21C28.44 93.19 28.02 92.18 27.61 91.16C26.22 87.73 24.95 84.26 23.8 80.75C21.02 72.25 27.72 64 36.66 64C39.7 64 42.64 64.99 45.1 66.75C47.36 68.37 49.66 69.96 51.1 71.53C52.96 72.17 53.93 72.81 54.91 73.45L55.18 73.62C78.88 88.1 106.5 101.7 137 110.9C153 62.1 181.8 0 215.1 0C224.9 0 233.4 4.171 241.4 11.2C249.6 18.39 262.4 18.39 270.6 11.2C278.6 4.171 287.1 0 296 0zM168.1 118.9C195.8 124.8 225.3 128 256 128C286.6 128 316.2 124.8 343.9 118.9C338.2 101.7 330.9 83.15 322.5 66.98C315.6 53.79 308.8 43.82 302.7 37.57C299.2 34.05 297 32.7 295.1 32.21C295.2 32.61 293.8 33.49 291.7 35.25C271.5 53.04 240.5 53.04 220.3 35.25C218.2 33.49 216.8 32.61 216 32.21C214.1 32.7 212.8 34.05 209.3 37.57C203.2 43.82 196.4 53.79 189.5 66.98C181.1 83.15 173.8 101.7 168.1 118.9H168.1zM422.1 127.9C373.3 148.5 316.3 160 256 160C195.7 160 138.7 148.5 89.91 127.9C126.1 165.8 186.1 192 256 192C325.9 192 385 165.8 422.1 127.9zM102.8 217.3C88.3 242.9 80 272.5 80 303.1C80 401.2 158.8 480 256 480C353.2 480 432 401.2 432 303.1C432 272.5 423.7 242.9 409.2 217.3C418.6 211.1 427.6 206.2 436.2 200C453.9 230.6 464 266.1 464 303.1C464 418.9 370.9 512 256 512C141.1 512 48 418.9 48 303.1C48 266.1 58.12 230.6 75.81 200C84.37 206.2 93.4 211.1 102.8 217.3V217.3zM168 279.1C168 266.7 178.7 255.1 192 255.1C205.3 255.1 216 266.7 216 279.1C216 293.3 205.3 303.1 192 303.1C178.7 303.1 168 293.3 168 279.1zM344 279.1C344 293.3 333.3 303.1 320 303.1C306.7 303.1 296 293.3 296 279.1C296 266.7 306.7 255.1 320 255.1C333.3 255.1 344 266.7 344 279.1zM256 448.1C200.5 448.1 152.8 410.5 131.5 356.5C126.7 344.5 139.3 334 151.7 338C183.3 348.4 218.7 354.1 256 354.1C293.4 354.1 328.7 348.4 360.4 338C372.7 334 385.3 344.5 380.6 356.5C359.3 410.5 311.5 448.1 256 448.1L256 448.1zM181.1 378.8C200.6 402.4 227.6 416.1 256 416.1C284.4 416.1 311.5 402.4 330.1 378.8C307.1 383.6 281.9 386.1 256 386.1C230.1 386.1 204.1 383.6 181.1 378.8z"/>
</>],
['regular',<>
	<path d="M242.1 10.71C250.1 17.16 261.9 17.16 269.9 10.71C278.1 4.003 286.9 0 296 0C332.8 0 363.4 64.93 378.4 109.8C411.1 99.32 441.1 84.62 466.9 66.75C469.4 64.98 472.3 64 475.3 64C484.3 64 490.1 72.25 488.2 80.75C461.2 163.2 367.5 224 256 224C144.5 224 50.77 163.2 23.8 80.75C21.02 72.25 27.72 64 36.66 64C39.7 64 42.64 64.99 45.1 66.75C70.04 84.62 100 99.32 133.6 109.8C148.6 64.93 179.2 0 215.1 0C225.1 0 233.9 4.003 242.1 10.71H242.1zM117 224.7C103.6 248.1 96 275.1 96 303.1C96 392.4 167.6 464 256 464C344.4 464 416 392.4 416 303.1C416 275.1 408.4 248.1 394.1 224.7C409.6 217.5 423.4 209.3 436.2 200C453.9 230.6 464 266.1 464 303.1C464 418.9 370.9 512 256 512C141.1 512 48 418.9 48 303.1C48 266.1 58.12 230.6 75.81 200C88.58 209.3 102.4 217.5 117 224.7V224.7zM256.2 436C207.1 436 166.2 408.1 146 367.5C140.3 355.1 152.2 345.2 164.6 348.7C192.5 356.5 223.5 360.8 256.2 360.8C288.9 360.8 319.9 356.5 347.8 348.7C360.2 345.2 372.1 355.1 366.4 367.5C346.2 408.1 304.5 436 256.2 436zM168 280C168 266.7 178.7 256 192 256C205.3 256 216 266.7 216 280C216 293.3 205.3 304 192 304C178.7 304 168 293.3 168 280zM344 280C344 293.3 333.3 304 320 304C306.7 304 296 293.3 296 280C296 266.7 306.7 256 320 256C333.3 256 344 266.7 344 280z"/>
</>],
['solid',<>
	<path d="M242.1 10.71C250.1 17.16 261.9 17.16 269.9 10.71C278.1 4.003 286.9 0 296 0C332.8 0 363.4 64.93 378.4 109.8C411.1 99.32 441.1 84.62 466.9 66.75C469.4 64.98 472.3 64 475.3 64C484.3 64 490.1 72.25 488.2 80.75C461.2 163.2 367.5 224 256 224C144.5 224 50.77 163.2 23.8 80.75C21.02 72.25 27.72 64 36.66 64C39.7 64 42.64 64.99 45.1 66.75C70.04 84.62 100 99.32 133.6 109.8C148.6 64.93 179.2 0 215.1 0C225.1 0 233.9 4.003 242.1 10.71H242.1zM48 303.1C48 266.1 58.12 230.6 75.81 200C124.6 235.4 188.3 255.1 256 255.1C323.7 255.1 387.4 235.4 436.2 200C453.9 230.6 464 266.1 464 303.1C464 418.9 370.9 512 256 512C141.1 512 48 418.9 48 303.1H48zM256.2 376.8C223.5 376.8 192.5 372.5 164.6 364.7C152.2 361.2 140.3 371.1 146 383.5C166.2 424.1 207.1 452 256.2 452C304.5 452 346.2 424.1 366.4 383.5C372.1 371.1 360.2 361.2 347.8 364.7C319.9 372.5 288.9 376.8 256.2 376.8zM192 279.1C178.7 279.1 168 290.7 168 303.1C168 317.3 178.7 328 192 328C205.3 328 216 317.3 216 303.1C216 290.7 205.3 279.1 192 279.1zM320 328C333.3 328 344 317.3 344 303.1C344 290.7 333.3 279.1 320 279.1C306.7 279.1 296 290.7 296 303.1C296 317.3 306.7 328 320 328z"/>
</>],
['thin',<>
	<path d="M374.1 110.9C409.9 100.3 441.1 85.24 466.9 66.75C469.4 64.98 472.3 64 475.3 64C484.3 64 490.1 72.25 488.2 80.75C461.2 163.2 367.5 224 256 224C144.5 224 50.77 163.2 23.8 80.75C21.02 72.25 27.72 64 36.66 64C39.7 64 42.64 64.99 45.1 66.75C70.9 85.24 102.1 100.3 137 110.9C153 62.1 181.8 0 216 0C224.9 0 233.4 4.171 241.4 11.2C249.6 18.39 262.4 18.39 270.6 11.2C278.6 4.171 287.1 0 296 0C330.2 0 358.1 62.1 374.1 110.9H374.1zM336.7 59.59C329.4 45.72 321.8 34.21 314.1 26.38C306.3 18.4 300.3 16 296 16C292.4 16 287.5 17.68 281.2 23.22C266.1 35.72 245 35.72 230.8 23.22C224.5 17.68 219.6 16 216 16C211.7 16 205.7 18.4 197.9 26.38C190.2 34.21 182.6 45.72 175.3 59.59C166.2 77.08 158.5 97.03 152.5 115.2C184.6 123.5 219.5 128 256 128C292.5 128 327.4 123.5 359.5 115.2C353.5 97.03 345.8 77.08 336.7 59.59H336.7zM42.02 84.1C69.83 154.3 153.6 208 256 208C358.4 208 442.2 154.3 469.1 84.1C414.7 121.4 338.9 144 256 144C173.1 144 97.26 121.4 42.02 84.1V84.1zM89.08 209.1C73.12 237.1 64 269.5 64 303.1C64 410 149.1 496 256 496C362 496 448 410 448 303.1C448 269.5 438.9 237.1 422.9 209.1C427.5 206.2 431.9 203.2 436.2 200C453.9 230.6 464 266.1 464 303.1C464 418.9 370.9 512 256 512C141.1 512 48 418.9 48 303.1C48 266.1 58.12 230.6 75.81 200C80.12 203.2 84.54 206.2 89.08 209.1L89.08 209.1zM256.2 450C203.5 450 157.4 421.4 132.5 378.9C122.7 362.3 140.4 346.1 159 350.7C189.1 358.2 221.9 362.3 256.2 362.3C290.6 362.3 323.4 358.2 353.4 350.7C372.1 346.1 389.8 362.3 380 378.9C355.1 421.4 308.1 450 256.2 450zM155.2 366.2C151.2 365.2 147.9 366.6 146.4 368.1C145.8 368.8 145.7 369.2 145.7 369.2C145.7 369.2 145.7 369.3 145.7 369.5C145.8 369.7 145.9 370.1 146.3 370.8C168.5 408.7 209.4 434 256.2 434C303 434 344 408.7 366.2 370.8C366.6 370.1 366.7 369.7 366.8 369.5C366.8 369.3 366.8 369.2 366.8 369.2C366.8 369.2 366.7 368.8 366.1 368.1C364.6 366.6 361.3 365.2 357.3 366.2C326 374 291.9 378.3 256.2 378.3C220.6 378.3 186.5 374 155.2 366.2L155.2 366.2zM192 272C192 280.8 184.8 288 176 288C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256C184.8 256 192 263.2 192 272zM320 272C320 263.2 327.2 256 336 256C344.8 256 352 263.2 352 272C352 280.8 344.8 288 336 288C327.2 288 320 280.8 320 272z"/>
</>],

]);

const FaceCowboyHat: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceCowboyHat.displayName = "FaceCowboyHat";

export default FaceCowboyHat;