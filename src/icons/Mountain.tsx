
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M503.2 393.8c11.11 17.4 11.75 39.41 1.668 57.45C494.9 468.1 476.1 480 455.7 480H56.31c-20.39 0-39.24-11.03-49.17-28.77c-10.09-18.03-9.447-40.04 1.666-57.45l128.1-200.6L208 288L256 224h138.8L503.2 393.8z"/><path className="fa-secondary" d="M208 288L136.9 193.2l95.06-148.9c10.42-16.33 37.73-16.33 48.15 0L394.8 224H256L208 288z"/>
</>],
['light',<>
	<path d="M503.2 393.8L280.1 44.25C274.9 36.08 265.4 32 256 32C246.6 32 237.1 36.08 231.9 44.25L8.807 393.8c-11.11 17.41-11.75 39.42-1.666 57.45C17.07 468.1 35.92 480 56.31 480h399.4c20.39 0 39.24-11.03 49.18-28.77C514.9 433.2 514.3 411.2 503.2 393.8zM256 66.01L346.6 208H256c-5.031 0-9.781 2.375-12.8 6.406L208 261.3L172.8 214.4C170.8 211.7 167.8 210.1 164.7 209.1L256 66.01zM476.9 435.6C472.7 443.2 464.5 448 455.7 448H56.31c-8.826 0-16.97-4.752-21.25-12.39C30.75 427.9 31.02 418.5 35.78 411L144.9 240H152l43.2 57.59C198.2 301.6 202.1 304 208 304s9.781-2.375 12.8-6.406L264 240h103.1l109.2 171C480.1 418.5 481.3 427.9 476.9 435.6z"/>
</>],
['regular',<>
	<path d="M503.2 393.8L280.1 44.25C274.9 36.08 265.4 32 256 32C246.6 32 237.1 36.08 231.9 44.25L8.807 393.8c-11.11 17.41-11.75 39.42-1.666 57.45C17.07 468.1 35.92 480 56.31 480h399.4c20.39 0 39.24-11.03 49.18-28.77C514.9 433.2 514.3 411.2 503.2 393.8zM256 95.74L327.7 208H256c-7.547 0-14.67 3.562-19.2 9.594L208 256L178.7 216.9L256 95.74zM462.1 427.8C461.5 430.3 458.7 432 455.7 432H56.31c-2.996 0-5.857-1.654-7.283-4.201c-1.461-2.609-1.373-5.672 .2344-8.189L151.1 260.1l37.72 50.29C193.3 316.4 200.5 320 208 320s14.67-3.562 19.2-9.594L268 256h90.3l104.4 163.6C464.3 422.1 464.4 425.2 462.1 427.8z"/>
</>],
['solid',<>
	<path d="M503.2 393.8L280.1 44.25c-10.42-16.33-37.73-16.33-48.15 0L8.807 393.8c-11.11 17.41-11.75 39.42-1.666 57.45C17.07 468.1 35.92 480 56.31 480h399.4c20.39 0 39.24-11.03 49.18-28.77C514.9 433.2 514.3 411.2 503.2 393.8zM256 111.8L327.8 224H256L208 288L177.2 235.3L256 111.8z"/>
</>],
['thin',<>
	<path d="M503.2 393.8L280.1 44.25C274.9 36.08 265.4 32 256 32C246.6 32 237.1 36.08 231.9 44.25L8.807 393.8c-11.11 17.41-11.75 39.42-1.666 57.45C17.07 468.1 35.92 480 56.31 480h399.4c20.39 0 39.24-11.03 49.18-28.77C514.9 433.2 514.3 411.2 503.2 393.8zM245.4 52.85C247.7 49.28 252.4 48 256 48c3.619 0 8.303 1.275 10.59 4.855L365.6 208H256c-2.516 0-4.891 1.188-6.406 3.203L209 265.3L184.2 220.1C182.8 217.6 180.1 216 177.2 216h-35.95L245.4 52.85zM490.9 443.4C483.8 456.1 470.3 464 455.7 464H56.31c-14.61 0-28.1-7.887-35.21-20.58c-7.203-12.88-6.746-28.6 1.189-41.03L131.1 232h41.42l28.5 51.86c1.312 2.375 3.734 3.922 6.453 4.125C207.6 288 207.8 288 208 288c2.5 0 4.891-1.172 6.406-3.203L260 224h115.8l113.9 178.4C497.6 414.8 498.1 430.5 490.9 443.4z"/>
</>],

]);

const Mountain: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Mountain.displayName = "Mountain";

export default Mountain;
