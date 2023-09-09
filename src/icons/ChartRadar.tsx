
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M330.4 281.4C347.4 285.9 360 301.5 360 319.1C360 342.1 342.1 360 320 360C304.1 360 290.3 350.7 283.9 337.3L186.7 317.8C179.6 324.1 170.2 328 160 328C137.9 328 120 310.1 120 288C120 265.9 137.9 248 160 248L217.6 171.2C216.6 167.7 216 163.9 216 160C216 137.9 233.9 120 256 120C278.1 120 296 137.9 296 160C296 167.6 293.9 174.7 290.2 180.8L330.4 281.4zM249.6 208.6L202 271.9L281.3 287.8L249.6 208.6z"/><path className="fa-secondary" d="M107.1 63.75C118.6 44.09 139.6 32 162.4 32H349.6C372.4 32 393.4 44.09 404.9 63.75L498.2 223.8C509.9 243.7 509.9 268.3 498.2 288.2L404.9 448.2C393.4 467.9 372.4 480 349.6 480H162.4C139.6 480 118.6 467.9 107.1 448.2L13.77 288.2C2.141 268.3 2.141 243.7 13.77 223.8L107.1 63.75zM349.6 96H162.4L69.05 256L162.4 416H349.6L442.1 256L349.6 96z"/>
</>],
['light',<>
	<path d="M312 160C312 177.8 303.7 193.6 290.8 203.9L314.9 264.2C316.6 264.1 318.3 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C290.8 376 266.8 353.7 264.2 325.2L209.5 314.2C200.1 331.9 181.5 344 160 344C129.1 344 104 318.9 104 288C104 257.1 129.1 232 160 232C166.8 232 173.4 233.2 179.4 235.5L210.1 193.3C204.1 184 200 172.5 200 159.1C200 129.1 225.1 103.1 256 103.1C286.9 103.1 312 129.1 312 159.1L312 160zM285.2 276.1L261.1 215.8C259.4 215.9 257.7 216 256 216C249.2 216 242.6 214.8 236.6 212.5L205 254.7C210.9 262.7 214.8 272.3 215.8 282.8L270.5 293.8C274.1 286.9 279.2 280.9 285.2 276.1V276.1zM256 184C269.3 184 280 173.3 280 160C280 146.7 269.3 136 256 136C242.7 136 232 146.7 232 160C232 173.3 242.7 184 256 184zM320 296C306.7 296 296 306.7 296 320C296 333.3 306.7 344 320 344C333.3 344 344 333.3 344 320C344 306.7 333.3 296 320 296zM160 312C173.3 312 184 301.3 184 288C184 274.7 173.3 264 160 264C146.7 264 136 274.7 136 288C136 301.3 146.7 312 160 312zM357.5 32C374.7 32 390.5 41.15 399.1 56.01L500.6 232C509.2 246.9 509.2 265.1 500.6 279.1L399.1 455.1C390.5 470.8 374.7 480 357.5 480H154.5C137.3 480 121.5 470.8 112.9 455.1L11.37 279.1C2.803 265.1 2.803 246.9 11.37 232L112.9 56.01C121.5 41.15 137.3 32 154.5 32H357.5zM39.09 248C36.23 252.1 36.23 259 39.09 263.1L140.6 439.1C143.5 444.9 148.8 448 154.5 448H357.5C363.2 448 368.5 444.9 371.4 439.1L472.9 263.1C475.8 259 475.8 252.1 472.9 248L371.4 72C368.5 67.05 363.2 64 357.5 64H154.5C148.8 64 143.5 67.05 140.6 72L39.09 248z"/>
</>],
['regular',<>
	<path d="M330.4 281.4C347.4 285.9 360 301.5 360 320C360 342.1 342.1 360 320 360C304.1 360 290.3 350.7 283.9 337.3L186.7 317.8C179.6 324.1 170.2 328 160 328C137.9 328 120 310.1 120 288C120 265.9 137.9 248 160 248L217.6 171.2C216.6 167.7 216 163.9 216 160C216 137.9 233.9 120 256 120C278.1 120 296 137.9 296 160C296 167.6 293.9 174.7 290.2 180.8L330.4 281.4zM202 271.9L281.3 287.8L249.6 208.6L202 271.9zM109.1 59.9C120 42.63 138.5 32 158.4 32H353.6C373.5 32 391.1 42.63 402 59.9L499.4 227.9C509.5 245.3 509.5 266.7 499.4 284.1L402 452.1C391.1 469.4 373.5 480 353.6 480H158.4C138.5 480 120 469.4 109.1 452.1L12.55 284.1C2.474 266.7 2.474 245.3 12.55 227.9L109.1 59.9zM158.4 80C155.6 80 152.9 81.52 151.5 83.99L54.07 251.1C52.63 254.5 52.63 257.5 54.07 260L151.5 428C152.9 430.5 155.6 432 158.4 432H353.6C356.4 432 359.1 430.5 360.5 428L457.9 260C459.4 257.5 459.4 254.5 457.9 251.1L360.5 83.99C359.1 81.52 356.4 80 353.6 80H158.4z"/>
</>],
['solid',<>
	<path d="M330.4 281.4C347.4 285.9 360 301.5 360 320C360 342.1 342.1 360 320 360C304.1 360 290.3 350.7 283.9 337.3L186.7 317.8C179.6 324.1 170.2 328 160 328C137.9 328 120 310.1 120 288C120 265.9 137.9 248 160 248L217.6 171.2C216.6 167.7 216 163.9 216 160C216 137.9 233.9 120 256 120C278.1 120 296 137.9 296 160C296 167.6 293.9 174.7 290.2 180.8L330.4 281.4zM202 271.9L281.3 287.8L249.6 208.6L202 271.9zM107.1 63.75C118.6 44.09 139.6 32 162.4 32H349.6C372.4 32 393.4 44.09 404.9 63.75L498.2 223.8C509.9 243.7 509.9 268.3 498.2 288.2L404.9 448.2C393.4 467.9 372.4 480 349.6 480H162.4C139.6 480 118.6 467.9 107.1 448.2L13.77 288.2C2.141 268.3 2.141 243.7 13.77 223.8L107.1 63.75zM349.6 96H162.4L69.05 256L162.4 416H349.6L442.1 256L349.6 96z"/>
</>],
['thin',<>
	<path d="M256 112C282.5 112 304 133.5 304 160C304 177.3 294.8 192.5 281 200.1L309.8 273.1C313.1 272.4 316.5 272 320 272C346.5 272 368 293.5 368 320C368 346.5 346.5 368 320 368C293.5 368 272 346.5 272 320C272 319.5 272 319 272 318.6L204.9 305.1C197.1 323.2 180.5 336 160 336C133.5 336 112 314.5 112 288C112 261.5 133.5 240 160 240C167.9 240 175.4 241.9 182 245.3L221.2 193.1C213 184.5 208 172.8 208 160C208 133.5 229.5 112 256 112V112zM243.8 189.6C247.6 191.1 251.7 192 256 192C257.4 192 258.7 191.9 260.1 191.7C265.6 191 270.7 188.9 274.9 185.8C282.9 179.1 288 170.6 288 160C288 142.3 273.7 128 256 128C238.3 128 224 142.3 224 160C224 167.6 226.6 174.5 231 179.1C234.4 184.2 238.8 187.5 243.8 189.6H243.8zM208 288C208 288.5 207.1 288.1 207.1 289.4L275.1 302.9C278.1 292.9 286 284.5 294.1 279L266.2 206.9C262.9 207.6 259.5 208 256 208C248.1 208 240.6 206.1 233.1 202.7L194.8 254.9C202.1 263.5 208 275.2 208 288zM320 288C302.3 288 288 302.3 288 320C288 337.7 302.3 352 320 352C337.7 352 352 337.7 352 320C352 302.3 337.7 288 320 288zM160 320C177.7 320 192 305.7 192 288C192 270.3 177.7 256 160 256C142.3 256 128 270.3 128 288C128 305.7 142.3 320 160 320zM361.5 32C375.8 32 389 39.66 396.2 52.09L501.8 236.1C508.9 248.4 508.9 263.6 501.8 275.9L396.2 459.9C389 472.3 375.8 480 361.5 480H150.5C136.2 480 122.1 472.3 115.8 459.9L10.21 275.9C3.129 263.6 3.128 248.4 10.21 236.1L115.8 52.09C122.1 39.66 136.2 32 150.5 32H361.5zM24.08 244.1C19.84 251.5 19.84 260.5 24.08 267.9L129.7 451.9C133.1 459.4 141.9 464 150.5 464H361.5C370.1 464 378 459.4 382.3 451.9L487.9 267.9C492.2 260.5 492.2 251.5 487.9 244.1L382.3 60.05C378 52.6 370.1 48 361.5 48H150.5C141.9 48 133.1 52.6 129.7 60.05L24.08 244.1z"/>
</>],

]);

const ChartRadar: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ChartRadar.displayName = "ChartRadar";

export default ChartRadar;