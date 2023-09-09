
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M447.4 249.6C447.8 251.9 448.1 254.3 448 256.7V288H512V235.2C512 220.7 516.9 206.6 526 195.2L583 124C594.1 110.2 614.2 107.1 627.1 119C641.8 130.1 644 150.2 632.1 163.1L576 235.2V402.7L630.6 457.4C643.1 469.9 643.1 490.1 630.6 502.6C618.1 515.1 597.9 515.1 585.4 502.6L530.7 448C518.7 435.1 512 419.7 512 402.7V352H469.2C451.2 314.2 412.7 288 368 288H112C94.82 288 78.55 291.9 64 298.8V192C64 174.3 78.33 160 96 160H128V48C128 21.49 149.5 0 176 0H298.9C324.5 0 347.6 15.26 357.7 38.79L445.1 242.7C446.1 244.9 446.9 247.2 447.4 249.6H447.4zM298.9 64H192V160L256 224H367.5L298.9 64zM144 400C144 413.3 133.3 424 120 424C106.7 424 96 413.3 96 400C96 386.7 106.7 376 120 376C133.3 376 144 386.7 144 400zM336 400C336 386.7 346.7 376 360 376C373.3 376 384 386.7 384 400C384 413.3 373.3 424 360 424C346.7 424 336 413.3 336 400zM304 400C304 413.3 293.3 424 280 424C266.7 424 256 413.3 256 400C256 386.7 266.7 376 280 376C293.3 376 304 386.7 304 400zM176 400C176 386.7 186.7 376 200 376C213.3 376 224 386.7 224 400C224 413.3 213.3 424 200 424C186.7 424 176 413.3 176 400z"/><path className="fa-secondary" d="M368 288C429.9 288 480 338.1 480 400C480 461.9 429.9 512 368 512H112C50.14 512 0 461.9 0 400C0 338.1 50.14 288 112 288H368zM368 352H112C85.49 352 64 373.5 64 400C64 426.5 85.49 448 112 448H368C394.5 448 416 426.5 416 400C416 373.5 394.5 352 368 352z"/>
</>],
['light',<>
	<path d="M96 400C96 386.7 106.7 376 120 376C133.3 376 144 386.7 144 400C144 413.3 133.3 424 120 424C106.7 424 96 413.3 96 400zM224 400C224 413.3 213.3 424 200 424C186.7 424 176 413.3 176 400C176 386.7 186.7 376 200 376C213.3 376 224 386.7 224 400zM256 400C256 386.7 266.7 376 280 376C293.3 376 304 386.7 304 400C304 413.3 293.3 424 280 424C266.7 424 256 413.3 256 400zM384 400C384 413.3 373.3 424 360 424C346.7 424 336 413.3 336 400C336 386.7 346.7 376 360 376C373.3 376 384 386.7 384 400zM128 32C128 14.33 142.3 0 160 0H298.9C318.1 0 335.5 11.44 343 29.09L428.1 227.7C430.7 233.6 432 240.1 432 246.6V288H528V240C528 236.3 529.3 232.6 531.7 229.8L611.7 133.8C617.4 126.1 627.5 126.1 634.2 131.7C641 137.4 641.9 147.5 636.3 154.2L560 245.8V394.2L636.3 485.8C641.9 492.5 641 502.6 634.2 508.3C627.5 513.9 617.4 513 611.7 506.2L531.7 410.2C529.3 407.4 528 403.7 528 400V319.1H446.4C467.1 340.3 480 368.7 480 400C480 461.9 429.9 512 368 512H112C50.14 512 0 461.9 0 400C0 355.3 26.16 316.8 64 298.8V167.1C64 145.9 81.91 127.1 104 127.1H128V32zM208 256C202.7 256 197.7 253.3 194.7 248.9L135.4 160H103.1C99.58 160 95.1 163.6 95.1 168V289.1C101.2 288.4 106.6 288 111.1 288H368C379.1 288 389.9 289.6 400 292.6V256H208zM160 139.2L216.6 224H391.7L313.6 41.7C311.1 35.81 305.3 32 298.9 32H160L160 139.2zM368 320H112C67.82 320 32 355.8 32 400C32 444.2 67.82 480 112 480H368C412.2 480 448 444.2 448 400C448 355.8 412.2 320 368 320z"/>
</>],
['regular',<>
	<path d="M144 400C144 413.3 133.3 424 120 424C106.7 424 96 413.3 96 400C96 386.7 106.7 376 120 376C133.3 376 144 386.7 144 400zM176 400C176 386.7 186.7 376 200 376C213.3 376 224 386.7 224 400C224 413.3 213.3 424 200 424C186.7 424 176 413.3 176 400zM304 400C304 413.3 293.3 424 280 424C266.7 424 256 413.3 256 400C256 386.7 266.7 376 280 376C293.3 376 304 386.7 304 400zM336 400C336 386.7 346.7 376 360 376C373.3 376 384 386.7 384 400C384 413.3 373.3 424 360 424C346.7 424 336 413.3 336 400zM432 231.1V295.1H512V239.1C512 234 514.2 228.3 518.2 223.9L598.2 135.9C607.2 126 622.3 125.3 632.1 134.2C641.1 143.2 642.7 158.3 633.8 168.1L560 249.3V390.7L633.8 471.9C642.7 481.7 641.1 496.8 632.1 505.8C622.3 514.7 607.2 513.1 598.2 504.1L518.2 416.1C514.2 411.7 512 405.1 512 400V344H465C474.5 360.5 480 379.6 480 400C480 461.9 429.9 512 368 512H112C50.14 512 0 461.9 0 400C0 361.9 18.98 328.3 48 308.1V176C48 149.5 69.49 128 96 128H112V40C112 17.91 129.9 0 152 0H298.8C321.3 0 341.6 13.46 350.4 34.18L427.6 216.7C428.1 217.9 428.5 219.1 428.1 220.3C430.9 223.8 432 227.8 432 232V231.1zM298.8 47.1H160V133.6L219.5 207.1H371.8L306.2 52.88C304.9 49.92 302 47.1 298.8 47.1zM384 289.1V255.1H208C200.7 255.1 193.8 252.7 189.3 246.1L132.5 175.1H96V289.1C101.2 288.4 106.6 287.1 112 287.1H368C373.4 287.1 378.8 288.4 384 289.1zM48 400C48 435.3 76.65 464 112 464H368C403.3 464 432 435.3 432 400C432 364.7 403.3 336 368 336H112C76.65 336 48 364.7 48 400z"/>
</>],
['solid',<>
	<path d="M144 400C144 413.3 133.3 424 120 424C106.7 424 96 413.3 96 400C96 386.7 106.7 376 120 376C133.3 376 144 386.7 144 400zM336 400C336 386.7 346.7 376 360 376C373.3 376 384 386.7 384 400C384 413.3 373.3 424 360 424C346.7 424 336 413.3 336 400zM304 400C304 413.3 293.3 424 280 424C266.7 424 256 413.3 256 400C256 386.7 266.7 376 280 376C293.3 376 304 386.7 304 400zM176 400C176 386.7 186.7 376 200 376C213.3 376 224 386.7 224 400C224 413.3 213.3 424 200 424C186.7 424 176 413.3 176 400zM447.4 249.6C447.8 251.9 448.1 254.3 448 256.7V288H512V235.2C512 220.7 516.9 206.6 526 195.2L583 124C594.1 110.2 614.2 107.1 627.1 119C641.8 130.1 644 150.2 632.1 163.1L576 235.2V402.7L630.6 457.4C643.1 469.9 643.1 490.1 630.6 502.6C618.1 515.1 597.9 515.1 585.4 502.6L530.7 448C518.7 435.1 512 419.7 512 402.7V352H469.2C476.1 366.5 480 382.8 480 400C480 461.9 429.9 512 368 512H112C50.14 512 0 461.9 0 400C0 355.3 26.16 316.8 64 298.8V192C64 174.3 78.33 160 96 160H128V48C128 21.49 149.5 0 176 0H298.9C324.5 0 347.6 15.26 357.7 38.79L445.1 242.7C446.1 244.9 446.9 247.2 447.4 249.6H447.4zM298.9 64H192V160L256 224H367.5L298.9 64zM368 352H112C85.49 352 64 373.5 64 400C64 426.5 85.49 448 112 448H368C394.5 448 416 426.5 416 400C416 373.5 394.5 352 368 352z"/>
</>],
['thin',<>
	<path d="M151.1 16C147.6 16 143.1 19.58 143.1 24V104C143.1 108.4 140.4 112 135.1 112C131.6 112 127.1 108.4 127.1 104V24C127.1 10.75 138.7 0 151.1 0H300.6C315.5 0 329.2 8.285 336.1 21.5L423.1 188.3C425.1 192.2 423.6 197 419.7 199.1C415.8 201.1 410.1 199.6 408.9 195.7L321.9 28.9C317.7 20.97 309.5 16 300.6 16H151.1zM368 400C368 391.2 375.2 384 384 384C392.8 384 400 391.2 400 400C400 408.8 392.8 416 384 416C375.2 416 368 408.8 368 400zM111.1 400C111.1 408.8 104.8 416 95.1 416C87.16 416 79.1 408.8 79.1 400C79.1 391.2 87.16 384 95.1 384C104.8 384 111.1 391.2 111.1 400zM175.1 400C175.1 391.2 183.2 384 191.1 384C200.8 384 207.1 391.2 207.1 400C207.1 408.8 200.8 416 191.1 416C183.2 416 175.1 408.8 175.1 400zM303.1 400C303.1 408.8 296.8 416 287.1 416C279.2 416 271.1 408.8 271.1 400C271.1 391.2 279.2 384 287.1 384C296.8 384 303.1 391.2 303.1 400zM637.2 129.9C640.5 132.7 640.1 137.8 638.1 141.2L552 242.9V397.1L638.1 498.8C640.1 502.2 640.5 507.3 637.2 510.1C633.8 512.1 628.7 512.5 625.9 509.2L537.9 405.2C536.7 403.7 536 401.9 536 400V319.1H446.4C467.1 340.3 480 368.7 480 400C480 461.9 429.9 512 368 512H112C50.14 512 0 461.9 0 400C0 355.3 26.16 316.8 64 298.8V175.1C64 158.3 78.33 143.1 96 143.1H125.3C134.4 143.1 143 147.8 149.1 154.6L211.6 223.1H400C417.7 223.1 432 238.3 432 255.1V303.1H536V239.1C536 238.1 536.7 236.3 537.9 234.8L625.9 130.8C628.7 127.5 633.8 127 637.2 129.9V129.9zM79.1 292.6C90.14 289.6 100.9 288 111.1 288H368C385.2 288 401.5 291.9 416 298.8V256C416 247.2 408.8 240 400 240H207.1C205.7 240 203.6 239 202.1 237.4L137.2 165.3C134.2 161.9 129.8 160 125.3 160H95.1C87.16 160 79.1 167.2 79.1 176V292.6zM368 304H111.1C58.98 304 15.1 346.1 15.1 400C15.1 453 58.98 496 111.1 496H368C421 496 464 453 464 400C464 346.1 421 304 368 304z"/>
</>],

]);

const Snowplow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Snowplow.displayName = "Snowplow";

export default Snowplow;