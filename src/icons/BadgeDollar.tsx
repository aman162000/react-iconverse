
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256.9 129.2C267.1 129.2 276.1 138.2 276.1 149.3V158.2C284.2 159.5 296.8 161.9 302 163.3C312.7 166.2 319.1 177.1 316.2 187.8C313.4 198.5 302.4 204.8 291.7 201.1C287.4 200.8 272.3 197.9 267.4 197.1C253.5 194.9 241.9 196.7 234.3 200.2C226.8 203.6 224.5 207.7 223.9 210.8C223.2 214.1 223.9 216.9 224.3 217.7C224.8 218.8 225.1 220.4 229.1 222.5C236.2 227.4 247.3 230.8 262.9 235.5L263.7 235.8C277.2 239.8 294.9 245.2 308 254.8C315.2 259.1 321.1 267 326.1 276.6C330.3 286.2 331.2 296.9 329.2 308C325.7 328.3 312.3 342.2 295.4 349.4C289.6 351.9 283.4 353.6 276.1 354.7V362.7C276.1 373.8 267.1 382.8 256.9 382.8C245.8 382.8 236.8 373.8 236.8 362.7V353.8C226.2 351.5 211.5 346.5 202.3 343.3C200.3 342.7 198.6 342.1 197.2 341.6C186.8 338.2 181.1 326.8 184.6 316.4C188.1 305.9 199.4 300.2 209.9 303.7C212.1 304.4 214.4 305.2 216.8 306C227.4 309.6 239.6 313.8 246.4 314.9C260.1 317.2 272.4 315.7 279.7 312.6C286.3 309.8 289 305.1 289.8 301.2C290.7 296.4 290 293.9 289.4 292.5C288.8 291.1 287.5 289.3 284.5 287.1C277.6 282.1 266.7 278.5 251.3 273.8L248.1 273.1C235.9 269.2 219.2 264.2 206.6 255.6C199.5 250.8 192.5 244.1 188.1 234.8C183.7 225.4 182.6 214.9 184.5 203.1C187.9 184.5 201.7 171 217.8 163.7C223.7 161.1 230.1 159.1 236.8 157.8V149.3C236.8 138.2 245.8 129.2 256.9 129.2L256.9 129.2z"/><path className="fa-secondary" d="M256 0C292.8 0 324.8 20.7 340.9 51.1C373.8 40.1 410.1 48.96 437 74.98C463 101 470.1 138.2 460.9 171.1C491.3 187.2 512 219.2 512 256C512 292.8 491.3 324.8 460.9 340.9C471 373.8 463 410.1 437 437C410.1 463 373.8 470.1 340.9 460.9C324.8 491.3 292.8 512 256 512C219.2 512 187.2 491.3 171.1 460.9C138.2 471 101 463 74.98 437C48.96 410.1 41 373.8 51.1 340.9C20.7 324.8 0 292.8 0 256C0 219.2 20.7 187.2 51.1 171.1C40.1 138.2 48.96 101 74.98 74.98C101 48.96 138.2 41 171.1 51.1C187.2 20.7 219.2 0 256 0V0zM276.1 149.3C276.1 138.2 267.1 129.2 256.9 129.2C245.8 129.2 236.8 138.2 236.8 149.3V157.8C230.1 159.1 223.7 161.1 217.8 163.7C201.7 171 187.9 184.5 184.5 203.1C182.6 214.9 183.7 225.4 188.1 234.8C192.5 244.1 199.5 250.8 206.6 255.6C219.2 264.1 235.9 269.2 248.1 273.1L251.3 273.8C266.7 278.5 277.6 282.1 284.5 287.1C287.5 289.3 288.8 291.1 289.4 292.5C290 293.9 290.7 296.4 289.8 301.2C289 305.9 286.3 309.8 279.7 312.6C272.4 315.7 260.1 317.2 246.4 314.9C239.6 313.8 227.4 309.6 216.8 306C214.4 305.2 212.1 304.4 209.9 303.7C199.4 300.2 188.1 305.9 184.6 316.3C181.1 326.8 186.8 338.2 197.2 341.6C198.6 342.1 200.3 342.7 202.3 343.3C211.5 346.5 226.2 351.5 236.8 353.8V362.7C236.8 373.8 245.8 382.8 256.9 382.8C267.1 382.8 276.1 373.8 276.1 362.7V354.7C283.4 353.6 289.6 351.9 295.4 349.4C312.3 342.2 325.7 328.3 329.2 308C331.2 296.9 330.3 286.2 326.1 276.6C321.1 267 315.2 259.1 308 254.8C294.9 245.2 277.2 239.8 263.7 235.8L262.9 235.5C247.3 230.8 236.2 227.4 229.1 222.5C225.1 220.4 224.8 218.8 224.3 217.7C223.9 216.9 223.2 214.1 223.9 210.8C224.5 207.7 226.8 203.6 234.3 200.2C241.9 196.7 253.5 194.9 267.4 197.1C272.3 197.9 287.4 200.8 291.7 201.1C302.4 204.8 313.4 198.5 316.2 187.8C319.1 177.1 312.7 166.2 302 163.3C296.8 161.9 284.2 159.4 276.1 158.2L276.1 149.3z"/>
</>],
['light',<>
	<path d="M272.9 161.5L272.1 161.6C278.4 162.4 294.9 165.6 301 167.2C309.5 169.5 314.6 178.2 312.4 186.8C310.1 195.3 301.3 200.4 292.8 198.1C288.2 196.9 272.9 193.9 268 193.2C253.5 190.9 241.1 192.7 232.7 196.5C224.3 200.3 220.8 205.4 220 210.1C219.2 214.9 219.9 217.7 220.7 219.4C221.6 221.3 223.3 223.4 226.8 225.8C234.6 231.1 246.4 234.7 261.7 239.4L262.2 239.5C275.1 243.6 293.1 248.8 305.7 257.1C312.5 262.9 318.6 269.4 322.4 278.2C326.3 287 327.1 296.8 325.3 307.3C322.1 326.1 309.7 338.9 293.8 345.7C287.4 348.5 280.3 350.3 272.9 351.2V362.7C272.9 371.5 265.7 378.7 256.9 378.7C248.1 378.7 240.9 371.5 240.9 362.7V350.5L240.8 350.4L240.7 350.4C230.5 348.8 214 343.1 203.7 339.6C201.7 338.9 199.9 338.3 198.5 337.8C190.1 335.1 185.6 325.1 188.4 317.6C191.2 309.2 200.2 304.7 208.6 307.5C210.7 308.2 212.1 308.1 215.4 309.8C225.9 313.4 238.6 317.7 245.8 318.8C260.8 321.2 273 319.8 281.2 316.3C288.9 313 292.7 308.2 293.8 301.9C294.7 296.4 294 293.1 293.1 290.9C292.1 288.7 290.3 286.4 286.9 283.9C279.3 278.4 267.7 274.6 252.5 269.1L250.3 269.3C237 265.3 220.9 260.5 208.9 252.3C202.1 247.7 195.8 241.6 191.8 233.1C187.7 224.5 186.7 214.9 188.5 204.7C191.5 186.9 204.2 174.3 219.5 167.4C226 164.4 233.2 162.4 240.9 161.2V149.3C240.9 140.5 248.1 133.3 256.9 133.3C265.7 133.3 272.9 140.5 272.9 149.3L272.9 161.5zM343.1 45.63C376.1 39.67 411.5 49.43 437 74.98C462.6 100.5 472.3 135.9 466.4 168.9C493.9 187.1 512 219.9 512 255.1C512 292.1 493.9 324 466.4 343.1C472.3 376.1 462.6 411.5 437 437C411.5 462.6 376.1 472.3 343.1 466.4C324 493.9 292.1 512 256 512C219.9 512 187.1 493.9 168.9 466.4C135.9 472.3 100.5 462.6 74.98 437C49.43 411.5 39.67 376.1 45.63 343.1C18.08 324 0 292.1 0 255.1C0 219.9 18.08 187.1 45.63 168.9C39.67 135.9 49.43 100.5 74.98 74.98C100.5 49.43 135.9 39.67 168.9 45.63C187.1 18.08 219.9 0 255.1 0C292.1 0 324 18.08 343.1 45.63L343.1 45.63zM184.4 83.08L171.7 79.2C146.3 71.4 117.6 77.57 97.61 97.61C77.57 117.6 71.4 146.3 79.2 171.7L83.08 184.4L71.4 190.6C47.93 203 32 227.7 32 255.1C32 284.3 47.93 308.1 71.4 321.4L83.08 327.6L79.2 340.3C71.4 365.7 77.57 394.3 97.61 414.4C117.6 434.4 146.3 440.6 171.7 432.8L184.4 428.9L190.6 440.6C203 464.1 227.7 480 256 480C284.3 480 308.1 464.1 321.4 440.6L327.6 428.9L340.3 432.8C365.7 440.6 394.3 434.4 414.4 414.4C434.4 394.3 440.6 365.7 432.8 340.3L428.9 327.6L440.6 321.4C464.1 308.1 480 284.3 480 255.1C480 227.7 464.1 203 440.6 190.6L428.9 184.4L432.8 171.7C440.6 146.3 434.4 117.6 414.4 97.6C394.4 77.56 365.7 71.4 340.3 79.2L327.6 83.08L321.4 71.4C308.1 47.93 284.3 31.1 256 31.1C227.7 31.1 203 47.93 190.6 71.4L184.4 83.08z"/>
</>],
['regular',<>
	<path d="M276.1 158.2C284.2 159.4 296.8 161.9 302 163.3C312.7 166.2 319.1 177.1 316.2 187.8C313.4 198.5 302.4 204.8 291.7 201.1C287.4 200.8 272.3 197.9 267.4 197.1C253.5 194.9 241.9 196.7 234.3 200.2C226.8 203.6 224.5 207.7 223.9 210.8C223.2 214.1 223.9 216.9 224.3 217.7C224.8 218.8 225.1 220.4 229.1 222.5C236.2 227.4 247.3 230.8 262.9 235.5L263.7 235.8C277.2 239.8 294.9 245.2 308 254.8C315.2 259.1 321.1 267 326.1 276.6C330.3 286.2 331.2 296.9 329.2 308C325.7 328.3 312.3 342.2 295.4 349.4C289.6 351.9 283.4 353.6 276.1 354.7V362.7C276.1 373.8 267.1 382.8 256.9 382.8C245.8 382.8 236.8 373.8 236.8 362.7V353.8C226.2 351.5 211.5 346.5 202.3 343.3C200.3 342.7 198.6 342.1 197.2 341.6C186.8 338.2 181.1 326.8 184.6 316.3C188.1 305.9 199.4 300.2 209.9 303.7C212.1 304.4 214.4 305.2 216.8 306C227.4 309.6 239.6 313.8 246.4 314.9C260.1 317.2 272.4 315.7 279.7 312.6C286.3 309.8 289 305.9 289.8 301.2C290.7 296.4 290 293.9 289.4 292.5C288.8 291.1 287.5 289.3 284.5 287.1C277.6 282.1 266.7 278.5 251.3 273.8L248.1 273.1C235.9 269.2 219.2 264.1 206.6 255.6C199.5 250.8 192.5 244.1 188.1 234.8C183.7 225.4 182.6 214.9 184.5 203.1C187.9 184.5 201.7 171 217.8 163.7C223.7 161.1 230.1 159.1 236.8 157.8V149.3C236.8 138.2 245.8 129.2 256.9 129.2C267.1 129.2 276.1 138.2 276.1 149.3L276.1 158.2zM344.1 43.41C377 39.1 411.6 49.59 437 74.98C462.4 100.4 472.9 134.1 468.6 167.9C494.1 188.2 512 220.1 512 256C512 291.9 494.1 323.8 468.6 344.1C472.9 377 462.4 411.6 437 437C411.6 462.4 377 472.9 344.1 468.6C323.8 494.1 291.9 512 256 512C220.1 512 188.2 494.1 167.9 468.6C134.1 472.9 100.4 462.4 74.98 437C49.6 411.6 39.1 377 43.41 344.1C17.04 323.8 0 291.9 0 256C0 220.1 17.04 188.2 43.42 167.9C39.1 134.1 49.6 100.4 74.98 74.98C100.4 49.6 134.1 39.1 167.9 43.41C188.2 17.04 220.1 0 256 0C291.9 0 323.8 17.04 344.1 43.41L344.1 43.41zM190.1 99.07L172 93.25C150.4 86.6 125.1 91.87 108.9 108.9C91.87 125.1 86.6 150.4 93.25 172L99.07 190.1L81.55 200.3C61.54 210.9 48 231.9 48 256C48 280.1 61.54 301.1 81.55 311.7L99.07 321L93.25 339.1C86.6 361.6 91.87 386 108.9 403.1C125.1 420.1 150.4 425.4 172 418.7L190.1 412.9L200.3 430.5C210.9 450.5 231.9 464 256 464C280.1 464 301.1 450.5 311.7 430.5L321 412.9L339.1 418.8C361.6 425.4 386 420.1 403.1 403.1C420.1 386 425.4 361.6 418.7 339.1L412.9 321L430.5 311.7C450.5 301.1 464 280.1 464 256C464 231.9 450.5 210.9 430.5 200.3L412.9 190.1L418.7 172C425.4 150.4 420.1 125.1 403.1 108.9C386 91.87 361.6 86.6 339.1 93.25L321 99.07L311.7 81.55C301.1 61.54 280.1 48 256 48C231.9 48 210.9 61.54 200.3 81.55L190.1 99.07z"/>
</>],
['solid',<>
	<path d="M256 0C292.8 0 324.8 20.7 340.9 51.1C373.8 40.1 410.1 48.96 437 74.98C463 101 470.1 138.2 460.9 171.1C491.3 187.2 512 219.2 512 256C512 292.8 491.3 324.8 460.9 340.9C471 373.8 463 410.1 437 437C410.1 463 373.8 470.1 340.9 460.9C324.8 491.3 292.8 512 256 512C219.2 512 187.2 491.3 171.1 460.9C138.2 471 101 463 74.98 437C48.96 410.1 41 373.8 51.1 340.9C20.7 324.8 0 292.8 0 256C0 219.2 20.7 187.2 51.1 171.1C40.1 138.2 48.96 101 74.98 74.98C101 48.96 138.2 41 171.1 51.1C187.2 20.7 219.2 0 256 0V0zM276.1 149.3C276.1 138.2 267.1 129.2 256.9 129.2C245.8 129.2 236.8 138.2 236.8 149.3V157.8C230.1 159.1 223.7 161.1 217.8 163.7C201.7 171 187.9 184.5 184.5 203.1C182.6 214.9 183.7 225.4 188.1 234.8C192.5 244.1 199.5 250.8 206.6 255.6C219.2 264.1 235.9 269.2 248.1 273.1L251.3 273.8C266.7 278.5 277.6 282.1 284.5 287.1C287.5 289.3 288.8 291.1 289.4 292.5C290 293.9 290.7 296.4 289.8 301.2C289 305.9 286.3 309.8 279.7 312.6C272.4 315.7 260.1 317.2 246.4 314.9C239.6 313.8 227.4 309.6 216.8 306C214.4 305.2 212.1 304.4 209.9 303.7C199.4 300.2 188.1 305.9 184.6 316.3C181.1 326.8 186.8 338.2 197.2 341.6C198.6 342.1 200.3 342.7 202.3 343.3C211.5 346.5 226.2 351.5 236.8 353.8V362.7C236.8 373.8 245.8 382.8 256.9 382.8C267.1 382.8 276.1 373.8 276.1 362.7V354.7C283.4 353.6 289.6 351.9 295.4 349.4C312.3 342.2 325.7 328.3 329.2 308C331.2 296.9 330.3 286.2 326.1 276.6C321.1 267 315.2 259.1 308 254.8C294.9 245.2 277.2 239.8 263.7 235.8L262.9 235.5C247.3 230.8 236.2 227.4 229.1 222.5C225.1 220.4 224.8 218.8 224.3 217.7C223.9 216.9 223.2 214.1 223.9 210.8C224.5 207.7 226.8 203.6 234.3 200.2C241.9 196.7 253.5 194.9 267.4 197.1C272.3 197.9 287.4 200.8 291.7 201.1C302.4 204.8 313.4 198.5 316.2 187.8C319.1 177.1 312.7 166.2 302 163.3C296.8 161.9 284.2 159.4 276.1 158.2L276.1 149.3z"/>
</>],
['thin',<>
	<path d="M264.9 168.6C267.1 168.8 269.4 169.1 271.7 169.5C277.1 170.3 293.3 173.4 298.9 174.9C303.2 176.1 305.8 180.5 304.6 184.7C303.5 188.1 299.1 191.5 294.8 190.4C289.9 189.1 274.3 186.1 269.3 185.3C253.5 182.8 239.5 184.6 229.4 189.2C219.3 193.8 213.5 200.8 212.1 208.7C211 214.9 211.8 219.4 213.4 222.9C215.1 226.4 218 229.5 222.3 232.4C231.3 238.5 244.2 242.4 259 246.9L259.4 247C273.6 251.3 289.5 256.1 300.1 264.5C306.9 268.8 312 274.2 315.1 281.4C318.2 288.5 319 296.7 317.4 305.1C314.7 321.6 304.5 332.4 290.7 338.4C283 341.6 274.3 343.4 264.9 343.9V362.7C264.9 367.1 261.3 370.7 256.9 370.7C252.5 370.7 248.9 367.1 248.9 362.7V343.4C246.6 343.2 244.3 342.9 242.1 342.5L242 342.5C232.5 340.1 217 335.7 206.6 332.1C204.5 331.4 202.6 330.8 201 330.3C196.8 328.9 194.6 324.3 195.1 320.1C197.4 315.9 201.9 313.7 206.1 315.1C207.1 315.7 210.1 316.4 212.4 317.2C222.1 320.8 236.6 325.4 244.6 326.7C260.5 329.2 274.4 327.9 284.4 323.7C294.1 319.5 300 312.7 301.7 303.3C302.8 296.5 302.1 291.6 300.4 287.7C298.7 283.9 295.8 280.5 291.6 277.4C282.7 270.1 269.7 266.8 254.8 262.3L252.1 261.8C239.4 257.7 224.3 253.1 213.3 245.7C207.4 241.7 202.2 236.5 198.1 229.7C195.7 222.8 194.8 214.9 196.4 206C198.9 191.5 209.2 180.8 222.8 174.7C230.5 171.2 239.3 169.1 248.9 168.4V149.3C248.9 144.9 252.5 141.3 256.9 141.3C261.3 141.3 264.9 144.9 264.9 149.3L264.9 168.6zM342.1 48.16C375.1 40.3 411.3 49.22 437 74.98C462.8 100.7 471.7 136.9 463.8 169.9C492.7 187.7 512 219.6 512 256C512 292.4 492.7 324.3 463.8 342.1C471.7 375.1 462.8 411.3 437 437C411.3 462.8 375.1 471.7 342.1 463.8C324.3 492.7 292.4 512 256 512C219.6 512 187.7 492.7 169.9 463.8C136.9 471.7 100.7 462.8 74.98 437C49.23 411.3 40.3 375.1 48.16 342.1C19.28 324.3 0 292.4 0 256C0 219.6 19.28 187.7 48.16 169.9C40.3 136.9 49.23 100.7 74.98 74.98C100.7 49.23 136.9 40.3 169.9 48.16C187.7 19.28 219.6 0 256 0C292.4 0 324.3 19.28 342.1 48.16H342.1zM177.8 67.09L171.4 65.15C142.3 56.2 109.3 63.26 86.29 86.29C63.26 109.3 56.2 142.3 65.15 171.4L67.09 177.8L61.25 180.8C34.32 195.1 16 223.4 16 255.1C16 288.6 34.32 316.9 61.25 331.2L67.09 334.2L65.15 340.6C56.2 369.7 63.26 402.7 86.29 425.7C109.3 448.7 142.3 455.8 171.4 446.9L177.8 444.9L180.8 450.8C195.1 477.7 223.4 496 256 496C288.6 496 316.9 477.7 331.2 450.8L334.2 444.9L340.6 446.9C369.7 455.8 402.7 448.7 425.7 425.7C448.7 402.7 455.8 369.7 446.9 340.6L444.9 334.2L450.8 331.2C477.7 316.9 496 288.6 496 255.1C496 223.4 477.7 195.1 450.8 180.8L444.9 177.8L446.9 171.4C455.8 142.3 448.7 109.3 425.7 86.29C402.7 63.26 369.7 56.2 340.6 65.15L334.2 67.09L331.2 61.25C316.9 34.32 288.6 15.1 256 15.1C223.4 15.1 195.1 34.32 180.8 61.25L177.8 67.09z"/>
</>],

]);

const BadgeDollar: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BadgeDollar.displayName = "BadgeDollar";

export default BadgeDollar;