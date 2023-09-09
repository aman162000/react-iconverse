
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M114.2 292.4L142.5 213.1C153.9 181.3 184 160 217.8 160H358.2C391.1 160 422.1 181.3 433.5 213.1L461.8 292.4C481.9 300.9 496 320.8 496 344V480C496 497.7 481.7 512 464 512H448C430.3 512 416 497.7 416 480V448H160V480C160 497.7 145.7 512 128 512H112C94.33 512 80 497.7 80 480V344C80 320.8 94.08 300.9 114.2 292.4H114.2zM183.7 288H392.3L373.2 234.6C370.1 228.3 364.9 224 358.2 224H217.8C211.1 224 205 228.3 202.8 234.6L183.7 288zM159.1 344C146.7 344 135.1 354.7 135.1 368C135.1 381.3 146.7 392 159.1 392C173.3 392 183.1 381.3 183.1 368C183.1 354.7 173.3 344 159.1 344zM416 392C429.3 392 440 381.3 440 368C440 354.7 429.3 344 416 344C402.7 344 392 354.7 392 368C392 381.3 402.7 392 416 392z"/><path className="fa-secondary" d="M35.7 132.6C28.11 123.9 35.57 112 47.11 112H80L104 80L80 48H47.11C35.57 48 28.11 36.12 35.7 27.43C50.36 10.62 71.94 0 96 0C128.8 0 156.1 19.75 169.3 48H406.7C419 19.75 447.2 0 480 0C504.1 0 525.6 10.62 540.3 27.43C547.9 36.12 540.4 48 528.9 48H496L472 80L496 112H528.9C540.4 112 547.9 123.9 540.3 132.6C525.6 149.4 504.1 160 480 160C447.2 160 419 140.3 406.7 112H169.3C156.1 140.3 128.8 160 96 160C71.94 160 50.36 149.4 35.7 132.6V132.6z"/>
</>],
['light',<>
	<path d="M32 96C32 47.4 71.4 8 120 8C150.9 8 178.1 23.94 193.8 48H382.2C397.9 23.94 425.1 8 456 8C504.6 8 544 47.4 544 96C544 144.6 504.6 184 456 184C425.1 184 397.9 168.1 382.2 144H193.8C178.1 168.1 150.9 184 120 184C71.4 184 32 144.6 32 96zM120 40C94.63 40 73.2 56.87 66.32 80H112C120.8 80 128 87.16 128 96C128 104.8 120.8 112 112 112H66.32C73.2 135.1 94.63 152 120 152C141.1 152 161 139.4 170.2 120.9L174.6 112H401.4L405.8 120.9C414.1 139.4 434 152 456 152C481.4 152 502.8 135.1 509.7 112H464C455.2 112 448 104.8 448 96C448 87.16 455.2 80 464 80H509.7C502.8 56.87 481.4 40 456 40C434 40 414.1 52.64 405.8 71.12L401.4 80H174.6L170.2 71.12C161 52.64 141.1 40 120 40V40zM152 376C152 362.7 162.7 352 176 352C189.3 352 200 362.7 200 376C200 389.3 189.3 400 176 400C162.7 400 152 389.3 152 376zM424 376C424 389.3 413.3 400 400 400C386.7 400 376 389.3 376 376C376 362.7 386.7 352 400 352C413.3 352 424 362.7 424 376zM220.2 176H355.8C384.4 176 409.5 194.9 417.3 222.4L438.1 298.1C463.4 311.8 480 337.1 480 368V496C480 504.8 472.8 512 464 512C455.2 512 448 504.8 448 496V464H128V496C128 504.8 120.8 512 112 512C103.2 512 96 504.8 96 496V368C96 337.1 112.6 311.8 137 298.1L158.7 222.4C166.5 194.9 191.6 176 220.2 176V176zM220.2 208C205.9 208 193.4 217.5 189.4 231.2L173.2 288C174.1 288 175.1 288 176 288H400C400.9 288 401.9 288 402.8 288L386.6 231.2C382.6 217.5 370.1 208 355.8 208H220.2zM448 368C448 341.5 426.5 320 400 320H176C149.5 320 128 341.5 128 368V432H448V368z"/>
</>],
['regular',<>
	<path d="M534.5 104C545.3 104 552.1 114.6 547.1 123.6C543.5 129.1 539.3 134.1 534.5 138.5C530.3 142.4 525.7 145.9 520.7 148.9C518.8 149.1 516.9 151 514.9 152C504.4 157.1 492.5 160 480 160C450.9 160 425.5 144.5 411.5 121.3C408.2 115.8 402.5 112 396.2 112H179.8C173.5 112 167.8 115.8 164.5 121.3C150.5 144.5 125.1 160 96 160C83.48 160 71.64 157.1 61.09 152C59.1 151 57.16 149.1 55.27 148.9C50.29 145.9 45.66 142.4 41.46 138.5C36.71 134.1 32.5 129.1 28.94 123.6C23.04 114.6 30.65 104 41.46 104H72L72.51 103.1C73.24 103.1 73.95 103.9 74.66 103.9C86.66 102.5 96 92.36 96 80C96 67.64 86.66 57.47 74.66 56.15C73.95 56.07 73.24 56.02 72.51 56.01L72 56H41.46C30.65 56 23.04 45.4 28.94 36.35C32.5 30.9 36.71 25.9 41.46 21.47C45.66 17.55 50.29 14.08 55.27 11.13C57.16 10.01 59.1 8.965 61.09 8C71.64 2.875 83.48 0 96 0C125.1 0 150.5 15.51 164.5 38.71C167.8 44.15 173.5 48 179.8 48H396.2C402.5 48 408.2 44.15 411.5 38.71C425.5 15.51 450.9 0 480 0C492.5 0 504.4 2.875 514.9 8C516.9 8.965 518.8 10.01 520.7 11.13C525.7 14.08 530.3 17.55 534.5 21.47C539.3 25.9 543.5 30.9 547.1 36.35C552.1 45.4 545.3 56 534.5 56H504L503.5 56.01C502.8 56.02 502 56.07 501.3 56.15C489.3 57.47 480 67.64 480 80C480 92.36 489.3 102.5 501.3 103.9C502 103.9 502.8 103.1 503.5 103.1L504 104H534.5zM168 360C168 346.7 178.7 336 192 336C205.3 336 216 346.7 216 360C216 373.3 205.3 384 192 384C178.7 384 168 373.3 168 360zM408 360C408 373.3 397.3 384 384 384C370.7 384 360 373.3 360 360C360 346.7 370.7 336 384 336C397.3 336 408 346.7 408 360zM150 207.8C160.3 179.1 187.4 160 217.8 160H358.2C388.6 160 415.7 179.1 425.1 207.8L454.6 287.9C454.8 288.4 454.9 288.9 455.1 289.3C479.8 306.7 496 335.5 496 368V488C496 501.3 485.3 512 472 512C458.7 512 448 501.3 448 488V448H128V488C128 501.3 117.3 512 104 512C90.75 512 80 501.3 80 488V368C80 335.5 96.18 306.7 120.9 289.3C121.1 288.9 121.2 288.4 121.4 287.9L150 207.8zM217.8 208C207.7 208 198.6 214.4 195.2 223.9L178.1 272H397.9L380.8 223.9C377.4 214.4 368.3 208 358.2 208H217.8zM400 320H176C149.5 320 128 341.5 128 368V400H448V368C448 341.5 426.5 320 400 320z"/>
</>],
['solid',<>
	<path d="M534.5 104C545.3 104 552.1 114.6 547.1 123.6C543.5 129.1 539.3 134.1 534.5 138.5C530.3 142.4 525.7 145.9 520.7 148.9C518.8 149.1 516.9 151 514.9 152C504.4 157.1 492.5 160 480 160C450.9 160 425.5 144.5 411.5 121.3C408.2 115.8 402.5 112 396.2 112H179.8C173.5 112 167.8 115.8 164.5 121.3C150.5 144.5 125.1 160 96 160C83.48 160 71.64 157.1 61.09 152C59.1 151 57.16 149.1 55.27 148.9C50.29 145.9 45.66 142.4 41.46 138.5C36.71 134.1 32.5 129.1 28.94 123.6C23.04 114.6 30.65 104 41.46 104H72L72.51 103.1C73.24 103.1 73.95 103.9 74.66 103.9C86.66 102.5 96 92.36 96 80C96 67.64 86.66 57.47 74.66 56.15C73.95 56.07 73.24 56.02 72.51 56.01L72 56H41.46C30.65 56 23.04 45.4 28.94 36.35C32.5 30.9 36.71 25.9 41.46 21.47C45.66 17.55 50.29 14.08 55.27 11.13C57.16 10.01 59.1 8.965 61.09 8C71.64 2.875 83.48 0 96 0C125.1 0 150.5 15.51 164.5 38.71C167.8 44.15 173.5 48 179.8 48H396.2C402.5 48 408.2 44.15 411.5 38.71C425.5 15.51 450.9 0 480 0C492.5 0 504.4 2.875 514.9 8C516.9 8.965 518.8 10.01 520.7 11.13C525.7 14.08 530.3 17.55 534.5 21.47C539.3 25.9 543.5 30.9 547.1 36.35C552.1 45.4 545.3 56 534.5 56H504L503.5 56.01C502.8 56.02 502 56.07 501.3 56.15C489.3 57.47 480 67.64 480 80C480 92.36 489.3 102.5 501.3 103.9C502 103.9 502.8 103.1 503.5 103.1L504 104H534.5zM217.8 160H358.2C391.1 160 422.1 181.3 433.5 213.1L461.8 292.4C481.9 300.9 496 320.8 496 344V480C496 497.7 481.7 512 464 512H448C430.3 512 416 497.7 416 480V448H160V480C160 497.7 145.7 512 128 512H112C94.33 512 80 497.7 80 480V344C80 320.8 94.08 300.9 114.2 292.4L142.5 213.1C153.9 181.3 184 160 217.8 160V160zM217.8 224C211.1 224 205 228.3 202.8 234.6L183.7 288H392.3L373.2 234.6C370.1 228.3 364.9 224 358.2 224H217.8zM160 392C173.3 392 184 381.3 184 368C184 354.7 173.3 344 160 344C146.7 344 136 354.7 136 368C136 381.3 146.7 392 160 392zM416 344C402.7 344 392 354.7 392 368C392 381.3 402.7 392 416 392C429.3 392 440 381.3 440 368C440 354.7 429.3 344 416 344z"/>
</>],
['thin',<>
	<path d="M179.8 111.1C173.5 111.1 167.8 115.8 164.5 121.3C150.5 144.5 125.1 159.1 96 159.1C64.18 159.1 36.69 141.4 23.81 114.5C19.44 105.4 27.06 95.1 37.17 95.1H75.16C78.31 95.1 81.4 95.06 84.03 93.31C93.53 86.98 93.53 73.02 84.03 66.69C81.4 64.93 78.31 64 75.16 64H37.17C27.06 64 19.44 54.61 23.81 45.49C36.69 18.58 64.18 0 96 0C125.1 0 150.5 15.51 164.5 38.71C167.8 44.15 173.5 48 179.8 48H396.2C402.5 48 408.2 44.15 411.5 38.71C425.5 15.51 450.9 0 480 0C511.8 0 539.3 18.58 552.2 45.49C556.6 54.61 548.9 64 538.8 64H500.8C497.7 64 494.6 64.94 491.1 66.69C482.5 73.02 482.5 86.98 491.1 93.31C494.6 95.06 497.7 95.1 500.8 95.1H538.8C548.9 95.1 556.6 105.4 552.2 114.5C539.3 141.4 511.8 159.1 480 159.1C450.9 159.1 425.5 144.5 411.5 121.3C408.2 115.8 402.5 111.1 396.2 111.1H179.8zM179.8 95.1H396.2C409.3 95.1 419.6 103.8 425.2 113C436.4 131.6 456.8 143.1 480 143.1C503.7 143.1 524.4 131.2 535.4 111.1H500.8C494.5 111.1 488.3 110.1 483.1 106.6C464.1 93.96 464.1 66.04 483.1 53.37C488.3 49.87 494.5 47.1 500.8 47.1H535.4C524.4 28.84 503.7 15.1 480 15.1C456.8 15.1 436.4 28.38 425.2 46.98C419.6 56.19 409.3 63.1 396.2 63.1H179.8C166.7 63.1 156.4 56.19 150.8 46.98C139.6 28.38 119.2 15.1 96 15.1C72.33 15.1 51.64 28.84 40.56 47.1H75.16C81.47 47.1 87.65 49.87 92.91 53.37C111.9 66.04 111.9 93.96 92.91 106.6C87.65 110.1 81.47 111.1 75.16 111.1H40.56C51.64 131.2 72.33 143.1 96 143.1C119.2 143.1 139.6 131.6 150.8 113C156.4 103.8 166.7 95.1 179.8 95.1H179.8zM208 368C208 385.7 193.7 400 176 400C158.3 400 144 385.7 144 368C144 350.3 158.3 336 176 336C193.7 336 208 350.3 208 368zM176 384C184.8 384 192 376.8 192 368C192 359.2 184.8 352 176 352C167.2 352 160 359.2 160 368C160 376.8 167.2 384 176 384zM368 368C368 350.3 382.3 336 400 336C417.7 336 432 350.3 432 368C432 385.7 417.7 400 400 400C382.3 400 368 385.7 368 368zM400 352C391.2 352 384 359.2 384 368C384 376.8 391.2 384 400 384C408.8 384 416 376.8 416 368C416 359.2 408.8 352 400 352zM166.4 216.6C173.2 192.6 195.2 175.1 220.2 175.1H355.8C380.8 175.1 402.8 192.6 409.6 216.6L431.9 294.6C460.2 306.1 480 335.2 480 368V504C480 508.4 476.4 512 472 512C467.6 512 464 508.4 464 504V448H112V504C112 508.4 108.4 512 104 512C99.58 512 96 508.4 96 504V368C96 335.2 115.8 306.1 144.1 294.6L166.4 216.6zM220.2 191.1C202.3 191.1 186.7 203.8 181.7 221L162.3 289.2C166.7 288.4 171.3 288 176 288H400C404.7 288 409.3 288.4 413.7 289.2L394.3 221C389.4 203.8 373.7 191.1 355.8 191.1H220.2zM464 368C464 332.7 435.3 303.1 400 303.1H176C140.7 303.1 112 332.7 112 368V432H464V368z"/>
</>],

]);

const CarWrench: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CarWrench.displayName = "CarWrench";

export default CarWrench;
