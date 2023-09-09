
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M96 123.2V80C96 71.16 103.2 64 112 64C120.8 64 128 71.16 128 80V176C128 183.1 123.4 189.3 116.6 191.3C109.9 193.4 102.6 190.7 98.69 184.9L64 132.8V176C64 184.8 56.84 192 48 192C39.16 192 32 184.8 32 176V80C32 72.95 36.62 66.73 43.36 64.69C50.11 62.64 57.4 65.26 61.31 71.13L96 123.2zM152 80C152 71.16 159.2 64 168 64H216C224.8 64 232 71.16 232 80C232 88.84 224.8 96 216 96H184V160H200V144C200 135.2 207.2 128 216 128C224.8 128 232 135.2 232 144V168C232 181.3 221.3 192 208 192H176C162.7 192 152 181.3 152 168V80zM256 112C256 85.49 277.5 64 304 64C330.5 64 352 85.49 352 112V144C352 170.5 330.5 192 304 192C277.5 192 256 170.5 256 144V112zM304 96C295.2 96 288 103.2 288 112V144C288 152.8 295.2 160 304 160C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96V96z"/><path className="fa-secondary" d="M320 112V144C320 152.8 312.8 160 304 160C295.2 160 288 152.8 288 144V112C288 103.2 295.2 96 304 96C312.8 96 320 103.2 320 112zM336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM168 64C159.2 64 152 71.16 152 80V168C152 181.3 162.7 192 176 192H208C221.3 192 232 181.3 232 168V144C232 135.2 224.8 128 216 128C207.2 128 200 135.2 200 144V160H184V96H216C224.8 96 232 88.84 232 80C232 71.16 224.8 64 216 64H168zM256 144C256 170.5 277.5 192 304 192C330.5 192 352 170.5 352 144V112C352 85.49 330.5 64 304 64C277.5 64 256 85.49 256 112V144zM61.31 71.12C57.4 65.26 50.11 62.64 43.36 64.69C36.62 66.73 32 72.95 32 80V176C32 184.8 39.16 192 48 192C56.84 192 64 184.8 64 176V132.8L98.69 184.9C102.6 190.7 109.9 193.4 116.6 191.3C123.4 189.3 128 183.1 128 176V80C128 71.16 120.8 64 112 64C103.2 64 96 71.16 96 80V123.2L61.31 71.12z"/>
</>],
['light',<>
	<path d="M320 32H64C52.16 32 41.81 38.44 36.28 48H2.016C9.121 20.4 34.18 0 64 0H320C349.8 0 374.9 20.4 381.1 48H347.7C342.2 38.44 331.8 32 320 32zM0 240H32V448C32 465.7 46.33 480 64 480H128V416C128 380.7 156.7 352 192 352C227.3 352 256 380.7 256 416V480H320C337.7 480 352 465.7 352 448V240H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V240zM160 416V480H224V416C224 398.3 209.7 384 192 384C174.3 384 160 398.3 160 416zM216 80C224.8 80 232 87.16 232 96C232 104.8 224.8 112 216 112H184V176H200V160C200 151.2 207.2 144 216 144C224.8 144 232 151.2 232 160V184C232 197.3 221.3 208 208 208H176C162.7 208 152 197.3 152 184V96C152 87.16 159.2 80 168 80H216zM256 128C256 101.5 277.5 80 304 80C330.5 80 352 101.5 352 128V160C352 186.5 330.5 208 304 208C277.5 208 256 186.5 256 160V128zM304 112C295.2 112 288 119.2 288 128V160C288 168.8 295.2 176 304 176C312.8 176 320 168.8 320 160V128C320 119.2 312.8 112 304 112zM96 139.2V96C96 87.16 103.2 80 112 80C120.8 80 128 87.16 128 96V192C128 199.1 123.4 205.3 116.6 207.3C109.9 209.4 102.6 206.7 98.69 200.9L64 148.8V192C64 200.8 56.84 208 48 208C39.16 208 32 200.8 32 192V96C32 88.95 36.62 82.73 43.36 80.69C50.11 78.64 57.4 81.26 61.31 87.12L96 139.2zM208 264C208 250.7 218.7 240 232 240H280C293.3 240 304 250.7 304 264V312C304 325.3 293.3 336 280 336H232C218.7 336 208 325.3 208 312V264zM240 272V304H272V272H240zM152 240C165.3 240 176 250.7 176 264V312C176 325.3 165.3 336 152 336H104C90.75 336 80 325.3 80 312V264C80 250.7 90.75 240 104 240H152zM144 304V272H112V304H144z"/>
</>],
['regular',<>
	<path d="M2.016 48C9.121 20.4 34.18 0 64 0H320C349.8 0 374.9 20.4 381.1 48H2.016zM336 240H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V240H48V448C48 456.8 55.16 464 64 464H144V400C144 373.5 165.5 352 192 352C218.5 352 240 373.5 240 400V464H320C328.8 464 336 456.8 336 448V240zM216 80C224.8 80 232 87.16 232 96C232 104.8 224.8 112 216 112H184V176H200V160C200 151.2 207.2 144 216 144C224.8 144 232 151.2 232 160V184C232 197.3 221.3 208 208 208H176C162.7 208 152 197.3 152 184V96C152 87.16 159.2 80 168 80H216zM256 128C256 101.5 277.5 80 304 80C330.5 80 352 101.5 352 128V160C352 186.5 330.5 208 304 208C277.5 208 256 186.5 256 160V128zM304 112C295.2 112 288 119.2 288 128V160C288 168.8 295.2 176 304 176C312.8 176 320 168.8 320 160V128C320 119.2 312.8 112 304 112zM96 139.2V96C96 87.16 103.2 80 112 80C120.8 80 128 87.16 128 96V192C128 199.1 123.4 205.3 116.6 207.3C109.9 209.4 102.6 206.7 98.69 200.9L64 148.8V192C64 200.8 56.84 208 48 208C39.16 208 32 200.8 32 192V96C32 88.95 36.62 82.73 43.36 80.69C50.11 78.64 57.4 81.26 61.31 87.12L96 139.2zM88 264C88 255.2 95.16 248 104 248H152C160.8 248 168 255.2 168 264V312C168 320.8 160.8 328 152 328H104C95.16 328 88 320.8 88 312V264zM280 248C288.8 248 296 255.2 296 264V312C296 320.8 288.8 328 280 328H232C223.2 328 216 320.8 216 312V264C216 255.2 223.2 248 232 248H280z"/>
</>],
['solid',<>
	<path d="M320 112V144C320 152.8 312.8 160 304 160C295.2 160 288 152.8 288 144V112C288 103.2 295.2 96 304 96C312.8 96 320 103.2 320 112zM336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM168 64C159.2 64 152 71.16 152 80V168C152 181.3 162.7 192 176 192H208C221.3 192 232 181.3 232 168V144C232 135.2 224.8 128 216 128C207.2 128 200 135.2 200 144V160H184V96H216C224.8 96 232 88.84 232 80C232 71.16 224.8 64 216 64H168zM256 144C256 170.5 277.5 192 304 192C330.5 192 352 170.5 352 144V112C352 85.49 330.5 64 304 64C277.5 64 256 85.49 256 112V144zM61.31 71.12C57.4 65.26 50.11 62.64 43.36 64.69C36.62 66.73 32 72.95 32 80V176C32 184.8 39.16 192 48 192C56.84 192 64 184.8 64 176V132.8L98.69 184.9C102.6 190.7 109.9 193.4 116.6 191.3C123.4 189.3 128 183.1 128 176V80C128 71.16 120.8 64 112 64C103.2 64 96 71.16 96 80V123.2L61.31 71.12z"/>
</>],
['thin',<>
	<path d="M136 232C149.3 232 160 242.7 160 256V288C160 301.3 149.3 312 136 312H104C90.75 312 80 301.3 80 288V256C80 242.7 90.75 232 104 232H136zM96 288C96 292.4 99.58 296 104 296H136C140.4 296 144 292.4 144 288V256C144 251.6 140.4 248 136 248H104C99.58 248 96 251.6 96 256V288zM224 256C224 242.7 234.7 232 248 232H280C293.3 232 304 242.7 304 256V288C304 301.3 293.3 312 280 312H248C234.7 312 224 301.3 224 288V256zM248 248C243.6 248 240 251.6 240 256V288C240 292.4 243.6 296 248 296H280C284.4 296 288 292.4 288 288V256C288 251.6 284.4 248 280 248H248zM216 56C220.4 56 224 59.58 224 64C224 68.42 220.4 72 216 72H176V152H208V128C208 123.6 211.6 120 216 120C220.4 120 224 123.6 224 128V152C224 160.8 216.8 168 208 168H176C167.2 168 160 160.8 160 152V72C160 63.16 167.2 56 176 56H216zM256 96C256 73.91 273.9 56 296 56C318.1 56 336 73.91 336 96V128C336 150.1 318.1 168 296 168C273.9 168 256 150.1 256 128V96zM296 72C282.7 72 272 82.75 272 96V128C272 141.3 282.7 152 296 152C309.3 152 320 141.3 320 128V96C320 82.75 309.3 72 296 72zM112 133.6V64C112 59.58 115.6 56 120 56C124.4 56 128 59.58 128 64V160C128 163.5 125.7 166.6 122.3 167.7C118.9 168.7 115.3 167.4 113.3 164.4L64 90.42V160C64 164.4 60.42 168 56 168C51.58 168 48 164.4 48 160V64C48 60.47 50.31 57.36 53.68 56.34C57.06 55.32 60.7 56.63 62.66 59.56L112 133.6zM48 512C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H48zM16 48V464C16 481.7 30.33 496 48 496H144V416C144 389.5 165.5 368 192 368C218.5 368 240 389.5 240 416V496H336C353.7 496 368 481.7 368 464V48C368 30.33 353.7 16 336 16H48C30.33 16 16 30.33 16 48zM224 496V416C224 398.3 209.7 384 192 384C174.3 384 160 398.3 160 416V496H224z"/>
</>],

]);

const BuildingNgo: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BuildingNgo.displayName = "BuildingNgo";

export default BuildingNgo;