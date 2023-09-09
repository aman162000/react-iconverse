
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 233.4L276.7 180.7C273.7 174.4 272 167.4 272 160C272 133.5 293.5 112 320 112C346.5 112 368 133.5 368 160C368 186.5 346.5 208 320 208C312.6 208 305.6 206.3 299.3 203.3L240 262.6V306.7C258.6 313.3 272 331.1 272 352C272 378.5 250.5 400 224 400C197.5 400 176 378.5 176 352C176 331.1 189.4 313.3 208 306.7V262.6L148.7 203.3C142.4 206.3 135.4 208 128 208C101.5 208 80 186.5 80 160C80 133.5 101.5 112 128 112C154.5 112 176 133.5 176 160C176 167.4 174.3 174.4 171.3 180.7L224 233.4z"/><path className="fa-secondary" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM208 262.6V273.6C171.5 281 144 313.3 144 352C144 396.2 179.8 432 224 432C268.2 432 304 396.2 304 352C304 313.3 276.5 281 240 273.6V262.6L275.9 226.7C288.5 235.1 303.7 240 320 240C364.2 240 400 204.2 400 160C400 115.8 364.2 80 320 80C275.8 80 240 115.8 240 160C240 176.3 244.9 191.5 253.3 204.1L224 233.4L194.7 204.1C203.1 191.5 208 176.3 208 160C208 115.8 172.2 80 128 80C83.82 80 48 115.8 48 160C48 204.2 83.82 240 128 240C144.3 240 159.5 235.1 172.1 226.7L208 262.6z"/>
</>],
['light',<>
	<path d="M292.7 255.2L337.9 209.9C356.7 191.2 356.7 160.8 337.9 142.1C319.2 123.3 288.8 123.3 270.1 142.1L224 188.1L177.9 142.1C159.2 123.3 128.8 123.3 110.1 142.1C91.31 160.8 91.31 191.2 110.1 209.9L155.3 255.2C151.6 255.7 147.8 256 144 256C99.82 256 64 220.2 64 176C64 131.8 99.82 96 144 96C188.2 96 224 131.8 224 176C224 131.8 259.8 96 304 96C348.2 96 384 131.8 384 176C384 220.2 348.2 256 304 256C300.2 256 296.4 255.7 292.7 255.2V255.2zM173.8 273.7L176 275.9V336C176 362.5 197.5 384 224 384C250.5 384 272 362.5 272 336V275.9L274.2 273.7C292.4 288.4 304 310.8 304 336C304 380.2 268.2 416 224 416C179.8 416 144 380.2 144 336C144 310.8 155.6 288.4 173.8 273.7zM224 233.4L292.7 164.7C298.9 158.4 309.1 158.4 315.3 164.7C321.6 170.9 321.6 181.1 315.3 187.3L240 262.6V336C240 344.8 232.8 352 224 352C215.2 352 208 344.8 208 336V262.6L132.7 187.3C126.4 181.1 126.4 170.9 132.7 164.7C138.9 158.4 149.1 158.4 155.3 164.7L224 233.4zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64z"/>
</>],
['regular',<>
	<path d="M283.3 253.3L332.3 204.3C347.9 188.7 347.9 163.3 332.3 147.7C316.7 132.1 291.3 132.1 275.7 147.7L224 199.4L172.3 147.7C156.7 132.1 131.3 132.1 115.7 147.7C100.1 163.3 100.1 188.7 115.7 204.3L164.7 253.3C158.1 255.1 151.2 256 144 256C99.82 256 64 220.2 64 176C64 131.8 99.82 96 144 96C188.2 96 224 131.8 224 176C224 131.8 259.8 96 304 96C348.2 96 384 131.8 384 176C384 220.2 348.2 256 304 256C296.8 256 289.9 255.1 283.3 253.3V253.3zM180.4 268.9L184 272.6V336C184 358.1 201.9 376 224 376C246.1 376 264 358.1 264 336V272.6L267.6 268.9C289.5 283.2 304 307.9 304 336C304 380.2 268.2 416 224 416C179.8 416 144 380.2 144 336C144 307.9 158.5 283.2 180.4 268.9zM224 233.4L292.7 164.7C298.9 158.4 309.1 158.4 315.3 164.7C321.6 170.9 321.6 181.1 315.3 187.3L240 262.6V336C240 344.8 232.8 352 224 352C215.2 352 208 344.8 208 336V262.6L132.7 187.3C126.4 181.1 126.4 170.9 132.7 164.7C138.9 158.4 149.1 158.4 155.3 164.7L224 233.4zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"/>
</>],
['solid',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM99.72 188.3C84.09 172.7 84.09 147.3 99.72 131.7C115.3 116.1 140.7 116.1 156.3 131.7L205.3 180.7C207.1 174.1 208 167.2 208 160C208 115.8 172.2 80 128 80C83.82 80 48 115.8 48 160C48 204.2 83.82 240 128 240C135.2 240 142.1 239.1 148.7 237.3L99.72 188.3zM184 282.7C160.1 296.5 144 322.4 144 352C144 396.2 179.8 432 224 432C268.2 432 304 396.2 304 352C304 322.4 287.9 296.5 264 282.7V352C264 374.1 246.1 392 224 392C201.9 392 184 374.1 184 352V282.7zM299.3 237.3C305.9 239.1 312.8 240 320 240C364.2 240 400 204.2 400 160C400 115.8 364.2 80 320 80C275.8 80 240 115.8 240 160C240 167.2 240.9 174.1 242.7 180.7L291.7 131.7C307.3 116.1 332.7 116.1 348.3 131.7C363.9 147.3 363.9 172.7 348.3 188.3L299.3 237.3zM139.3 148.7C133.1 142.4 122.9 142.4 116.7 148.7C110.4 154.9 110.4 165.1 116.7 171.3L207.1 262.6V352C207.1 360.8 215.2 368 223.1 368C232.8 368 240 360.8 240 352V262.6L331.3 171.3C337.6 165.1 337.6 154.9 331.3 148.7C325.1 142.4 314.9 142.4 308.7 148.7L223.1 233.4L139.3 148.7z"/>
</>],
['thin',<>
	<path d="M238.7 134.9C234.9 132.7 233.6 127.8 235.8 123.1C250.1 97.71 279.4 80 312 80C360.6 80 400 119.4 400 168C400 216.6 360.6 256 312 256C307.6 256 304 252.4 304 248C304 243.6 307.6 240 312 240C351.8 240 384 207.8 384 168C384 128.2 351.8 96 312 96C285.4 96 262.1 110.5 249.6 132C247.4 135.8 242.5 137.1 238.7 134.9H238.7zM172.5 282.3C175.6 285.4 175.7 290.4 172.6 293.6C159.8 306.6 151.1 324.4 151.1 344C151.1 383.8 184.2 416 223.1 416C263.8 416 296 383.8 296 344C296 324.4 288.2 306.6 275.4 293.6C272.3 290.4 272.4 285.4 275.5 282.3C278.7 279.2 283.8 279.2 286.8 282.4C302.4 298.3 312 320 312 344C312 392.6 272.6 432 223.1 432C175.4 432 135.1 392.6 135.1 344C135.1 320 145.6 298.3 161.2 282.4C164.2 279.2 169.3 279.2 172.5 282.3V282.3zM224 244.7L314.3 154.3C317.5 151.2 322.5 151.2 325.7 154.3C328.8 157.5 328.8 162.5 325.7 165.7L232 259.3V352C232 356.4 228.4 360 223.1 360C219.6 360 215.1 356.4 215.1 352V259.3L122.3 165.7C119.2 162.5 119.2 157.5 122.3 154.3C125.5 151.2 130.5 151.2 133.7 154.3L224 244.7zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM16 96V416C16 442.5 37.49 464 64 464H384C410.5 464 432 442.5 432 416V96C432 69.49 410.5 48 384 48H64C37.49 48 16 69.49 16 96zM64 168C64 207.8 96.24 240 136 240C140.4 240 144 243.6 144 248C144 252.4 140.4 256 136 256C87.4 256 48 216.6 48 168C48 119.4 87.4 80 136 80C168.6 80 197 97.71 212.2 123.1C214.4 127.8 213.1 132.7 209.3 134.9C205.5 137.1 200.6 135.8 198.4 132C185.9 110.5 162.6 96 136 96C96.24 96 64 128.2 64 168H64z"/>
</>],

]);

const FluxCapacitor: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FluxCapacitor.displayName = "FluxCapacitor";

export default FluxCapacitor;