import {AttributesArg, Fragment, JSXElementType} from "./DOM";
import {Context} from "./Host";

export type Props = {
    [k: string]: any,
    children?: any[]
}

export type EffectHandle = () => (any)

export type RenderContext = {
    createElement: (type: JSXElementType, rawProps : AttributesArg, ...children: any[]) => ComponentNode|HTMLElement|Comment|DocumentFragment|SVGElement|string|number|undefined|null,
    Fragment: typeof Fragment,
    useLayoutEffect: (arg: EffectHandle) => void
    ref: {
        [k: string]: HTMLElement
    },
    context: Context
}

export type Component = (props?: Props, injectHandles?: RenderContext) => HTMLElement|Text|DocumentFragment|null|undefined|string|number|Function|JSX.Element
export type ComponentNode = {
    type: Component,
    props : Props,
    children: any
}