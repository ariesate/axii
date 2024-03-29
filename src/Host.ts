import {computed} from "data0";
import {Root} from "./render";

export interface Host {
    element: HTMLElement|Comment|Text|SVGElement
    placeholder:Comment
    context: Context
    computed?: ReturnType<typeof computed>
    render: () => void
    destroy : (parentHandleElement?: boolean, parentHandleComputed?: boolean) => void
    revoke?: () => void
}

export type Context = {
    [k:string]:any,
    root: Root,
    hostPath: Host[],
    elementPath: number[]
}