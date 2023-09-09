
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M378.3 104.5C390.6 93.17 409.4 93.17 421.7 104.5L629.7 296.5C636.4 302.7 639.1 311.2 640 320C640 337.3 625.5 352 608 352H576V464C576 490.5 554.5 512 528 512H272C245.5 512 224 490.5 224 464V352H192C174.5 352 159.1 337.3 160 320C160 311.2 163.6 302.7 170.3 296.5L378.3 104.5zM368 288C359.2 288 352 295.2 352 304V368C352 376.8 359.2 384 368 384H432C440.8 384 448 376.8 448 368V304C448 295.2 440.8 288 432 288H368z"/><path className="fa-secondary" d="M160.2 0C166.1 0 171.5 3.231 174.3 8.412L201.8 59.61L257.5 42.92C263.2 41.23 269.3 42.77 273.4 46.93C277.6 51.09 279.1 57.2 277.5 62.84L260.8 118.6L296.1 137.6L231.4 197.3C236.1 186.4 240.1 174.1 240.1 160.1C240.1 116.8 204.3 80.95 160.1 80.95C115.9 80.95 80.07 116.8 80.07 160.1C80.07 205.2 115.9 241 160.1 241C170.9 241 181.2 238.9 190.6 235L133.2 288L118.5 260.9L62.82 277.5C57.19 279.2 51.08 277.7 46.92 273.5C42.75 269.4 41.21 263.3 42.9 257.6L59.59 201.9L8.407 174.3C3.229 171.5 0 165.9 0 160.1C0 154.2 3.229 148.9 8.407 146.2L59.59 118.6L42.9 62.84C41.21 57.2 42.76 51.09 46.92 46.93C51.08 42.77 57.19 41.23 62.82 42.92L118.5 59.61L146.1 8.412C148.9 3.231 154.3 0 160.2 0zM112.1 160.1C112.1 133.6 133.6 112.1 160.1 112.1C186.6 112.1 208.1 133.6 208.1 160.1C208.1 186.6 186.6 208.1 160.1 208.1C133.6 208.1 112.1 186.6 112.1 160.1z"/>
</>],
['light',<>
	<path d="M192 64C192 72.84 184.8 80 176 80C167.2 80 160 72.84 160 64V16C160 7.164 167.2 0 176 0C184.8 0 192 7.164 192 16V64zM64 160C72.84 160 80 167.2 80 176C80 184.8 72.84 192 64 192H16C7.164 192 0 184.8 0 176C0 167.2 7.164 160 16 160H64zM276.7 52.69C282.9 46.44 293.1 46.44 299.3 52.69C305.6 58.93 305.6 69.07 299.3 75.31L267.3 107.3C261.1 113.6 250.9 113.6 244.7 107.3C238.4 101.1 238.4 90.94 244.7 84.69L276.7 52.69zM336 304C336 286.3 350.3 272 368 272H432C449.7 272 464 286.3 464 304V368C464 385.7 449.7 400 432 400H368C350.3 400 336 385.7 336 368V304zM432 304H368V368H432V304zM634.4 291.9C638.1 295 639.1 299.5 640 304C640 307.7 638.7 311.4 636.1 314.4C630.4 321.1 620.3 321.9 613.6 316.1L576 283.9V448C576 483.3 547.3 512 512 512H288C252.7 512 224 483.3 224 448V283.9L186.4 316.1C179.7 321.9 169.6 321.1 163.9 314.4C161.3 311.4 159.1 307.7 160 304C160 299.5 161.9 295 165.6 291.9L389.6 99.85C395.6 94.72 404.4 94.72 410.4 99.85L634.4 291.9zM544 256.5L400 133.1L256 256.5V448C256 465.7 270.3 480 288 480H512C529.7 480 544 465.7 544 448V256.5zM165.3 206.2C173.7 209.1 178 218.3 175.1 226.6C172.1 234.9 162.1 239.3 154.7 236.4C129.8 227.6 112 203.9 112 176C112 140.7 140.7 112 176 112C203.9 112 227.6 129.8 236.4 154.7C239.3 162.1 234.9 172.1 226.6 175.1C218.3 178 209.1 173.7 206.2 165.3C201.8 152.9 189.9 144 176 144C158.3 144 144 158.3 144 176C144 189.9 152.9 201.8 165.3 206.2zM75.31 299.3C69.07 305.6 58.93 305.6 52.69 299.3C46.44 293.1 46.44 282.9 52.69 276.7L84.69 244.7C90.93 238.4 101.1 238.4 107.3 244.7C113.6 250.9 113.6 261.1 107.3 267.3L75.31 299.3zM52.69 52.69C58.93 46.44 69.07 46.44 75.31 52.69L107.3 84.69C113.6 90.93 113.6 101.1 107.3 107.3C101.1 113.6 90.94 113.6 84.69 107.3L52.69 75.31C46.44 69.07 46.44 58.94 52.69 52.69z"/>
</>],
['regular',<>
	<path d="M201.8 59.52L257.4 42.83C263.1 41.14 269.2 42.69 273.4 46.85C277.5 51.01 279.1 57.12 277.4 62.75L260.7 118.4L292.3 135.5L237.7 180C239.2 173.9 240 167.5 240 160.8C240 116.7 204.2 80.84 160 80.84C115.8 80.84 80 116.7 80 160.8C80 205 115.8 240.8 160 240.8C161 240.8 162.1 240.8 163.1 240.8L124.6 272.1L118.4 260.7L62.75 277.4C57.12 279.1 51.01 277.5 46.85 273.4C42.69 269.2 41.14 263.1 42.83 257.4L59.52 201.8L8.344 174.2C3.165 171.4 0 165.9 0 159.1C0 154.1 3.165 148.8 8.344 146L59.52 118.4L42.83 62.75C41.14 57.12 42.69 51.01 46.85 46.85C51.01 42.69 57.12 41.14 62.75 42.83L118.4 59.52L146 8.345C148.8 3.165 154.1 0 160 0C165.9 0 171.4 3.165 174.2 8.345L201.8 59.52zM208 159.1C208 186.5 186.5 207.1 160 207.1C133.5 207.1 112 186.5 112 159.1C112 133.5 133.5 111.1 160 111.1C186.5 111.1 208 133.5 208 159.1zM352 311.1C352 298.7 362.7 287.1 376 287.1H424C437.3 287.1 448 298.7 448 311.1V360C448 373.3 437.3 384 424 384H376C362.7 384 352 373.3 352 360V311.1zM631.2 277.4C637.1 282.2 640.1 288.9 640 296C639.9 301.2 638.2 306.8 634.6 311.2C626.2 321.4 611.1 322.1 600.8 314.6L576 294.4V456C576 486.9 550.9 512 520 512H280C249.1 512 224 486.9 224 456V294.4L199.2 314.6C188.9 322.1 173.8 321.4 165.4 311.2C161.8 306.8 160.1 299.6 160 294.4C159.9 287.3 162.9 282.2 168.8 277.4L384.8 101.4C393.7 94.2 406.3 94.2 415.2 101.4L631.2 277.4zM528 255.3L400 150.1L272 255.3V456C272 460.4 275.6 464 280 464H520C524.4 464 528 460.4 528 456V255.3z"/>
</>],
['solid',<>
	<path d="M201.8 59.55L257.5 42.85C263.1 41.16 269.2 42.71 273.4 46.87C277.5 51.03 279.1 57.13 277.4 62.77L260.7 118.5L296 137.5L231.3 197.3C236.9 186.4 240 174 240 160.9C240 116.7 204.2 80.88 160 80.88C115.8 80.88 80.01 116.7 80.01 160.9C80.01 205.1 115.8 240.1 160 240.1C170.8 240.1 181.1 238.8 190.5 234.9L133.1 287.1L118.4 260.8L62.76 277.5C57.12 279.2 51.01 277.6 46.85 273.5C42.69 269.3 41.15 263.2 42.84 257.6L59.52 201.8L8.342 174.3C3.164 171.5 0 165.9 0 160C0 154.1 3.164 148.9 8.342 146.1L59.52 118.5L42.84 62.77C41.15 57.13 42.69 51.03 46.85 46.87C51.01 42.71 57.12 41.17 62.76 42.85L118.4 59.55L146 8.347C148.8 3.166 154.1 0 160 0C165.9 0 171.4 3.166 174.2 8.347L201.8 59.55zM208 160C208 186.5 186.5 208 160 208C133.5 208 112 186.5 112 160C112 133.5 133.5 112 160 112C186.5 112 208 133.5 208 160zM629.7 296.5C636.4 302.7 639.1 311.2 640 320C640 337.3 625.5 352 608 352H576V464C576 490.5 554.5 512 528 512H272C245.5 512 224 490.5 224 464V352H192C174.6 352 159.1 337.3 160 320C160 311.2 163.6 302.7 170.3 296.5L378.3 104.5C390.6 93.17 409.4 93.17 421.7 104.5L629.7 296.5zM352 368C352 376.8 359.2 384 368 384H432C440.8 384 448 376.8 448 368V304C448 295.2 440.8 288 432 288H368C359.2 288 352 295.2 352 304V368z"/>
</>],
['thin',<>
	<path d="M161.2 8.415C164.3 2.808 169.8 .0041 175.3 .0039C180.9 .0037 186.4 2.808 189.4 8.415L220.5 66.2L283.4 47.36C295.6 43.7 306.1 55.07 303.3 67.28L282.6 136.4C281.4 140.6 276.9 143 272.7 141.8C268.4 140.5 266 136.1 267.3 131.8L288 62.69L218.9 83.4C215.3 84.49 211.4 82.87 209.6 79.53L175.3 16L141.1 79.53C139.3 82.87 135.4 84.49 131.8 83.4L62.67 62.69L83.37 131.8C84.46 135.5 82.85 139.4 79.51 141.2L15.1 175.4L79.51 209.6C82.85 211.4 84.46 215.3 83.37 218.1L62.67 288.1L131.8 267.4C136 266.1 140.5 268.5 141.7 272.8C142.1 276.1 140.6 281.4 136.4 282.7L67.26 303.4C55.06 307.1 43.68 295.7 47.34 283.5L66.18 220.6L8.403 189.5C2.798 186.5-.0046 180.9-.0046 175.4C-.0046 169.9 2.798 164.3 8.403 161.3L66.18 130.2L47.34 67.28C43.68 55.07 55.06 43.7 67.26 47.36L130.1 66.2L161.2 8.415zM118.4 174.1C118.4 143.4 143.4 118.5 174.1 118.5C204.8 118.5 229.7 143.4 229.7 174.1C229.7 204.9 204.8 229.8 174.1 229.8C143.4 229.8 118.4 204.9 118.4 174.1zM174.1 213.8C195.1 213.8 213.7 196.1 213.7 174.1C213.7 152.2 195.1 134.5 174.1 134.5C152.2 134.5 134.4 152.2 134.4 174.1C134.4 196.1 152.2 213.8 174.1 213.8zM336 295.1C336 282.7 346.7 271.1 360 271.1H440C453.3 271.1 464 282.7 464 295.1V376C464 389.3 453.3 400 440 400H360C346.7 400 336 389.3 336 376V295.1zM360 287.1C355.6 287.1 352 291.6 352 295.1V376C352 380.4 355.6 384 360 384H440C444.4 384 448 380.4 448 376V295.1C448 291.6 444.4 287.1 440 287.1H360zM637.2 297.9C639.1 299.5 640 301.8 640 304C640 305.9 639.4 307.7 638.1 309.2C635.2 312.6 630.1 312.9 626.8 310.1L576 266.3V456C576 486.9 550.9 512 520 512H280C249.1 512 224 486.9 224 456V266.3L173.2 310.1C169.9 312.9 164.8 312.6 161.9 309.2C160.5 307.6 159.9 305.5 160 303.4C160.2 301.4 161.1 299.4 162.8 297.9L394.8 97.94C397.8 95.35 402.2 95.35 405.2 97.94L637.2 297.9zM560 252.5L400 114.6L240 252.5V456C240 478.1 257.9 496 280 496H520C542.1 496 560 478.1 560 456V252.5z"/>
</>],

]);

const HouseDay: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HouseDay.displayName = "HouseDay";

export default HouseDay;
