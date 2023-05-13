/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { MirrorfulApi } from "../../../..";
import * as core from "../../../../core";
export declare const MirrorfulStore: core.serialization.ObjectSchema<serializers.MirrorfulStore.Raw, MirrorfulApi.MirrorfulStore>;
export declare namespace MirrorfulStore {
    interface Raw {
        primitives?: unknown;
        themes?: unknown;
        files?: unknown;
    }
}